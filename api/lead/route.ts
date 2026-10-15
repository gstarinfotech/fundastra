
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

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

    // 1. Save the lead through the existing PHP endpoint.
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/+$/, "");

    if (!baseUrl) {
        return NextResponse.json(
            { ok: false, error: "PHP API URL is not configured" },
            { status: 500 }
        );
    }

    let savedLead: Record<string, unknown>;

    try {
        const response = await fetch(`${baseUrl}/submit-lead.php`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(input),
            cache: "no-store",
        });

        savedLead = await response.json();

        if (!response.ok || savedLead.ok !== true) {
            console.error("PHP lead save failed:", savedLead);

            return NextResponse.json(
                { ok: false, error: "Could not save lead" },
                { status: 502 }
            );
        }
    } catch (error) {
        console.error("PHP API request failed:", error);

        return NextResponse.json(
            { ok: false, error: "Could not connect to PHP API" },
            { status: 502 }
        );
    }

    // 2. Send the email only after PHP confirms the save.
    try {
        const port = Number(process.env.SMTP_PORT || 465);

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port,
            secure: port === 465,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const name = String(input.fullName ?? input.name ?? "").trim();
        const email = String(input.email ?? "").trim();
        const safeSource = source.replace(/[\r\n]/g, "");

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

        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        await transporter.sendMail({
            from: {
                name: "Fundastra Website",
                address: process.env.SMTP_USER!,
            },
            to: process.env.LEAD_TO,
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

        return NextResponse.json({
            ok: true,
            message: "Lead saved and email sent successfully",
            id: savedLead.id,
        });
    } catch (error) {
        console.error("Lead email failed:", error);
        return NextResponse.json({
            ok: true,
            saved: true,
            emailSent: false,
            message: "Lead saved, but email could not be sent",
            id: savedLead.id,
        });
    }
}
