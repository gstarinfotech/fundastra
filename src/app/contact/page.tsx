import AdvisoryFaqSection from "@/components/AdvisoryFaqSection";
import ContactAdvisorySection from "@/components/ContactAdvisorySection";
import ContactFormSection from "@/components/ContactFormSection";
import ContactHero from "@/components/ContactHero";
import Footer from "@/components/Footer";

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
