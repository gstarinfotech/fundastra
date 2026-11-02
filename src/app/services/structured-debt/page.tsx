import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import ServicePage from "@/components/ServicePage";

export async function generateMetadata(): Promise<Metadata> {
  return getManagedMetadata("/services/structured-debt", {
    title: "Structured Debt | Fund Astra",
    description: "Structured debt advisory and institutional financing solutions for growing businesses.",
    metadataBase: new URL("https://fundastra.in"),
  });
}

export default function SMEFundingPage() {
    return <ServicePage />;
}