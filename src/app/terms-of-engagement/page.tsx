import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import TermsOfEngagementContent from "@/components/TermsOfEngagementContent";

export async function generateMetadata(): Promise<Metadata> {
    return getManagedMetadata("/terms-of-engagement", {
        title: "Terms of Engagement | Fund Astra",
        description: "Terms governing Fund Astra's capital advisory and related services.",
        metadataBase: new URL("https://fundastra.in"),
    });
}

export default function Page() {
    return <TermsOfEngagementContent />;
}
