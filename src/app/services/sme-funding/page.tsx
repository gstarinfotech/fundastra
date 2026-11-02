import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata(): Promise<Metadata> {
  return getManagedMetadata("/services/sme-funding", {
    title: "SME Funding | Fund Astra",
    description: "SME business funding and working capital solutions structured around business requirements.",
    metadataBase: new URL("https://fundastra.in"),
  });
}

export default function SMEFundingPage() {
    return <ServicePage />;
}