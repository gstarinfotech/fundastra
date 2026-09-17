export type LeadSubmission = Record<string, string>;

export async function submitLead(source: string, data: LeadSubmission) {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

    if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_API_BASE_URL is not set in .env.local");
    }

    const response = await fetch(`${baseUrl}/submit-lead.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            source,
            submittedAt: new Date().toISOString(),
            ...data,
        }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.ok) {
        throw new Error(result?.error ?? "Something went wrong. Please try again.");
    }

    return result;
}