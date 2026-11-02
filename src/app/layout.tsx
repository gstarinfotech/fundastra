import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import TopBanner from "@/components/TopBanner";
import TrackingScripts from "@/components/TrackingScripts";
import { getTrackingSettings } from "@/lib/admin-api";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FUND ASTRA | Capital Decisions. Built for Your Next Move.",
  description:
    "From business funding and structured debt to equity fundraising and strategic capital advisory, FUND ASTRA helps businesses make smarter financial decisions.",
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const tracking = await getTrackingSettings();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-brand-cream text-brand-green">
        <TrackingScripts
          enabled={tracking.enabled}
          headCode={tracking.headCode}
          bodyStartCode={tracking.bodyStartCode}
          bodyEndCode={tracking.bodyEndCode}
        />

        <TopBanner />
        {children}
      </body>
    </html>
  );
}
