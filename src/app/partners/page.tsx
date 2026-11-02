import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import PartnersHero from "@/components/PartnersHero";
import BanksGridSection from "@/components/BanksGridSection";
import ContactAdvisorySection from "@/components/ContactAdvisorySection";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  return getManagedMetadata("/partners", {
    title: "Our Partners | Fund Astra",
    description: "Explore Fund Astra's institutional lending and capital partner network.",
    metadataBase: new URL("https://fundastra.in"),
  });
}

export default function PartnersPage() {
  return (
    <main className="partners-page-motion flex-1">
      <PartnersHero />
      <BanksGridSection />
      <ContactAdvisorySection />
      <Footer />
    </main>
  );
}
