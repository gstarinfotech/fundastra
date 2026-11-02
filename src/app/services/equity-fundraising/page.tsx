import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata(): Promise<Metadata> {
  return getManagedMetadata("/services/equity-fundraising", {
    title: "Equity Fundraising | Fund Astra",
    description: "Equity fundraising and institutional investor advisory for growing businesses.",
    metadataBase: new URL("https://fundastra.in"),
  });
}

export default function SMEFundingPage() {
    return <ServicePage />;
}