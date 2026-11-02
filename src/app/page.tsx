import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import HomeHero from "@/components/HomeHero";

export async function generateMetadata(): Promise<Metadata> {
  return getManagedMetadata("/", {
    title: "Fund Astra | Capital Decisions",
    description: "Capital advisory, business funding, structured debt and equity fundraising solutions with Fund Astra.",
    metadataBase: new URL("https://fundastra.in"),
  });
}

export default function Home() {
  return (
    <main className="home-page-motion flex-1">
      <HomeHero />
    </main>
  );
}
