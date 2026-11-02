import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const escapeHtml = (value: unknown) =>
    String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
        .replace(/\r?\n/g, "<br>");

const pretty = (key: string) =>
    key.replace(/_/g, " ").replace(/([A-Z])/g, " $1").replace(/^./, c => c.toUpperCase()).trim();

export async function POST(req: Request) {
    let input: Record<string, unknown>;
    try {
        input = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
    }

    const source = String(input.source ?? "").trim();
    if (!source) {
        return NextResponse.json({ ok: false, error: "Source is required" }, { status: 422 });
    }

    const apiOrigin = process.env.ADMIN_API_URL?.replace(/\/+$/, "");
    if (!apiOrigin) {
        console.error("[lead] ADMIN_API_URL is not configured");
        return NextResponse.json({ ok: false, error: "Lead service is not configured." }, { status: 503 });
    }

    let savedLead: { id?: string } | null = null;
    try {
        const response = await fetch(`${apiOrigin}/leads`, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({
                ...input,
                formType: source,
                name: String(input.fullName ?? input.name ?? ""),
                email: String(input.email ?? input.contact ?? ""),
                phone: String(input.phone ?? ""),
                message: String(input.message ?? ""),
            }),
            cache: "no-store",
            signal: AbortSignal.timeout(15000),
        });

        const data = await response.json().catch(() => null);
        if (!response.ok) {
            console.error("[lead] Admin API save failed", response.status, data);
            return NextResponse.json(
                { ok: false, error: data?.message || "We could not save your enquiry. Please try again." },
                { status: response.status >= 500 ? 502 : response.status }
            );
        }
        savedLead = data;
    } catch (error) {
        console.error("[lead] Admin API request failed", error);
        return NextResponse.json({ ok: false, error: "We could not submit your enquiry right now. Please try again." }, { status: 502 });
    }

    // Email is a notification only. A mail failure must not discard a lead already saved in Neon.
    let emailSent = false;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST;
    const recipient = process.env.LEAD_TO;
    const port = Number(process.env.SMTP_PORT || 465);

    if (smtpUser && smtpPass && smtpHost && recipient) {
        try {
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

            const rows = Object.entries(input)
                .filter(([key]) => key !== "submittedAt")
                .map(([key, value]) => {
                    const displayValue = Array.isArray(value) ? value.join(", ") :
                        typeof value === "object" && value !== null ? JSON.stringify(value) : value;
                    return `<tr><td style="padding:10px;border:1px solid #ddd;background:#fbf9f6;font-weight:bold;">${escapeHtml(pretty(key))}</td><td style="padding:10px;border:1px solid #ddd;">${escapeHtml(displayValue)}</td></tr>`;
                }).join("");

            const email = String(input.email ?? input.contact ?? "").trim();
            const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            await transporter.sendMail({
                from: { name: "Fundastra Website", address: smtpUser },
                to: recipient,
                replyTo: validEmail ? email : undefined,
                subject: `New Enquiry: ${source.replace(/[\r\n]/g, "")}`,
                html: `<div style="font-family:Arial,sans-serif;color:#052e26;"><h2>New enquiry from Fundastra website</h2><table style="border-collapse:collapse;width:100%;font-size:14px;">${rows}</table></div>`,
            });
            emailSent = true;
        } catch (error) {
            console.error("[lead] Notification email failed after lead was saved", error);
        }
    }

    return NextResponse.json({
        ok: true,
        saved: true,
        emailSent,
        id: savedLead?.id,
        message: emailSent ? "Lead saved and notification email sent." : "Lead saved successfully.",
    });
}
