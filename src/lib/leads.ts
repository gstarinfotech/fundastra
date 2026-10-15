export type LeadSubmission = Record<string, string>;

export async function submitLead(
    source: string,
    data: LeadSubmission
) {
    const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            source,
            submittedAt: new Date().toISOString(),
            ...data,
        }),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok || !result?.ok) {
        throw new Error(
            result?.error ?? "Something went wrong. Please try again."
        );
    }

    if (result.emailSent === false) {
        throw new Error(
            "Your enquiry was saved, but the email could not be sent. Please contact us directly."
        );
    }

    return result;
}
