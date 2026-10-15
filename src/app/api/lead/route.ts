import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ErrWithCause = Error & {
    cause?: { code?: string; message?: string };
};

function describeError(error: unknown) {
    const err = error as ErrWithCause;
    return {
        message: err?.message,
        causeCode: err?.cause?.code,
        causeMessage: err?.cause?.message,
    };
}

const escapeHtml = (value: unknown) =>
    String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/\r?\n/g, "<br>");

const pretty = (key: string) =>
    key
        .replace(/_/g, " ")
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (c) => c.toUpperCase())
        .trim();

export async function POST(req: Request) {
    let input: Record<string, unknown>;

    try {
        input = await req.json();
    } catch {
        return NextResponse.json(
            { ok: false, error: "Invalid JSON body" },
            { status: 400 }
        );
    }

    const source = String(input.source ?? "").trim();

    if (!source) {
        return NextResponse.json(
            { ok: false, error: "Source is required" },
            { status: 422 }
        );
    }

    // ------------------------------------------------------------
    // 1. Save the lead through the PHP endpoint (best effort).
    //    If PHP is down, we still try to send the email so the lead is not lost.
    // ------------------------------------------------------------
    let saved = false;
    let phpMailSent = false;
    let leadId: unknown = undefined;

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");

    if (!baseUrl) {
        console.error("[lead] NEXT_PUBLIC_API_BASE_URL is missing (set it in .env and rebuild)");
    } else {
        try {
            const response = await fetch(`${baseUrl}/submit-lead.php`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(input),
                cache: "no-store",
                signal: AbortSignal.timeout(15000),
            });

            const text = await response.text();
            let data: { ok?: boolean; id?: unknown; mailSent?: boolean } | null = null;

            try {
                data = JSON.parse(text);
            } catch {
                data = null;
            }

            if (response.ok && data?.ok === true) {
                saved = true;
                leadId = data.id;
                phpMailSent = data.mailSent === true;
            } else {
                console.error("[lead] PHP save failed", {
                    url: `${baseUrl}/submit-lead.php`,
                    status: response.status,
                    body: text.slice(0, 300),
                });
            }
        } catch (error) {
            console.error("[lead] PHP request failed", {
                url: `${baseUrl}/submit-lead.php`,
                ...describeError(error),
            });
        }
    }

    // ------------------------------------------------------------
    // 2. Send the notification email.
    // ------------------------------------------------------------
    // If the PHP server already sent the email, skip Nodemailer.
    let emailSent = phpMailSent;

    if (!emailSent) try {
        const smtpUser = process.env.SMTP_USER;
        const smtpPass = process.env.SMTP_PASS;
        const smtpHost = process.env.SMTP_HOST;
        const recipient = process.env.LEAD_TO;
        const port = Number(process.env.SMTP_PORT || 465);

        if (!smtpUser || !smtpPass || !smtpHost || !recipient) {
            throw new Error("SMTP environment variables are missing");
        }

        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port,
            secure: port === 465,
            auth: { user: smtpUser, pass: smtpPass },
            tls: { servername: smtpHost },
            connectionTimeout: 15000,
            greetingTimeout: 15000,
            socketTimeout: 20000,
        });

        const name = String(input.fullName ?? input.name ?? "")
            .replace(/[\r\n]/g, " ")
            .trim();
        const email = String(input.email ?? "").trim();
        const safeSource = source.replace(/[\r\n]/g, "");
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        const rows = Object.entries(input)
            .filter(([key]) => key !== "submittedAt")
            .map(([key, value]) => {
                const displayValue = Array.isArray(value)
                    ? value.join(", ")
                    : typeof value === "object" && value !== null
                        ? JSON.stringify(value)
                        : value;

                return `
          <tr>
            <td style="padding:10px;border:1px solid #ddd;background:#fbf9f6;font-weight:bold;">
              ${escapeHtml(pretty(key))}
            </td>
            <td style="padding:10px;border:1px solid #ddd;">
              ${escapeHtml(displayValue)}
            </td>
          </tr>`;
            })
            .join("");

        await transporter.sendMail({
            from: {
                name: "Fundastra Website",
                address: smtpUser,
            },
            to: recipient,
            replyTo: validEmail ? email : undefined,
            subject: `New Enquiry: ${safeSource} - ${name || "Website Visitor"}`,
            html: `
        <div style="font-family:Arial,sans-serif;color:#052e26;">
          <h2>New enquiry from Fundastra website</h2>
          <p>A new form submission has been received.</p>
          <table style="border-collapse:collapse;width:100%;font-size:14px;">
            ${rows}
          </table>
        </div>`,
        });

        emailSent = true;
    } catch (error) {
        console.error("[lead] Email failed", {
            smtpHost: process.env.SMTP_HOST,
            smtpPort: process.env.SMTP_PORT,
            ...describeError(error),
        });
    }

    // ------------------------------------------------------------
    // 3. Respond
    // ------------------------------------------------------------
    if (!saved && !emailSent) {
        return NextResponse.json(
            {
                ok: false,
                error:
                    "We could not submit your enquiry right now. Please try again or email us at hello@fundastra.in.",
            },
            { status: 502 }
        );
    }

    return NextResponse.json({
        ok: true,
        saved,
        emailSent,
        id: leadId,
        message: emailSent
            ? "Lead received and email sent"
            : "Lead saved, but email could not be sent",
    });
}