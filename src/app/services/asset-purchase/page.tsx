import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata(): Promise<Metadata> {
    return getManagedMetadata("/services/asset-purchase", {
        title: "Asset Purchase Funding | Fund Astra",
        description: "Capital advisory and financing solutions for business asset purchases and acquisitions.",
        metadataBase: new URL("https://fundastra.in"),
    });
}

export default function AssetPurchasePage() {
    return <ServicePage />;
}