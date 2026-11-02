import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import PrivacyPolicyContent from "@/components/PrivacyPolicyContent";

export async function generateMetadata(): Promise<Metadata> {
    return getManagedMetadata("/privacy-policy", {
        title: "Privacy Policy | Fund Astra",
        description: "Read how Fund Astra collects, uses and protects information submitted through its website.",
        metadataBase: new URL("https://fundastra.in"),
    });
}

export default function Page() {
    return <PrivacyPolicyContent />;
}

