import AboutFounderSection from "@/components/AboutFounderSection";
import AboutHero from "@/components/AboutHero";
import ContactAdvisorySection from "@/components/ContactAdvisorySection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import InstitutionalDossierSection from "@/components/InstitutionalDossierSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import TestimonialsSection from "@/components/TestimonialsSection";

const ABOUT_FAQS = [
  {
    question:
      "What ticket sizes and capital mandates does Fund Astra structure?",
    answer:
      "We typically structure mandates ranging from ₹5 Cr working capital lines to ₹100 Cr+ institutional syndications, spanning SME funding, structured debt, and growth equity.",
  },
  {
    question: "What is the typical disbursal velocity and appraisal timeline?",
    answer:
      "Our underwriting desk completes initial mandate triage and credit viability appraisal within 48 hours, with full disbursal typically achieved within 3-6 weeks depending on syndicate complexity.",
  },
  {
    question: "Are advisory mandates compliant with SEBI and RBI frameworks?",
    answer:
      "Yes. Every mandate we structure adheres strictly to SEBI and RBI regulatory guidelines, including capital adequacy norms and corporate governance protocols.",
  },
  {
    question: "Which industries and enterprise stages do you cater to?",
    answer:
      "We work across industrial manufacturing, logistics, tech-enabled enterprise services, and healthcare — supporting founders from Series A through Pre-IPO growth stages.",
  },
  {
    question:
      "What ticket sizes and capital mandates does Fund Astra structure?",
    answer:
      "We typically structure mandates ranging from ₹5 Cr working capital lines to ₹100 Cr+ institutional syndications, spanning SME funding, structured debt, and growth equity.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1">
      <AboutHero />
      <InstitutionalDossierSection />
      <MissionVisionSection />
      <AboutFounderSection />
      <FaqSection faqs={ABOUT_FAQS} />
      <TestimonialsSection />
      <ContactAdvisorySection />
      <Footer />
    </main>
  );
}
