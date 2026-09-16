import PartnersHero from "@/components/PartnersHero";
import BanksGridSection from "@/components/BanksGridSection";
import ContactAdvisorySection from "@/components/ContactAdvisorySection";
import Footer from "@/components/Footer";

export default function PartnersPage() {
  return (
    <main className="flex-1">
      <PartnersHero />
      <BanksGridSection />
      <ContactAdvisorySection />
      <Footer />
    </main>
  );
}
