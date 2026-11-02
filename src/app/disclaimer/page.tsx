import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import DisclaimerContent from "@/components/DisclaimerContent";

export async function generateMetadata(): Promise<Metadata> {
    return getManagedMetadata("/disclaimer", {
        title: "Disclaimer | Fund Astra",
        description: "Important information about Fund Astra's website content and advisory services.",
        metadataBase: new URL("https://fundastra.in"),
    });
}

export default function Page() {
    return <DisclaimerContent />;
}