import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import AdvisoryFaqSection from "@/components/AdvisoryFaqSection";
import ContactAdvisorySection from "@/components/ContactAdvisorySection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  return getManagedMetadata("/contact", {
    title: "Contact Fund Astra | Funding Advisory",
    description: "Contact Fund Astra to discuss business funding, structured debt and capital advisory requirements.",
    metadataBase: new URL("https://fundastra.in"),
  });
}

export default function ContactPage() {
  return (
    <main className="contact-page-motion flex-1">
      <ContactHero />
      <ContactFormSection />
      <AdvisoryFaqSection/>
      <Footer />
    </main>
  );
}
