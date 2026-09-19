"use client";

import Link from "next/link";

const ADVISORY_LINKS = [
  { label: "SME Funding & Credit Lines", href: "/services/sme-funding" },
  { label: "Structured Debt & Mezzanine", href: "/services/structured-debt" },
  {
    label: "Institutional Equity Syndicate",
    href: "/services/equity-fundraising",
  },
];

const FIRM_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Partners & Lenders", href: "/partners" },
  { label: "Advisory Perspectives & Blogs", href: "/blogs" },
  { label: "Contact Advisory Desk", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Engagement", href: "/terms-of-engagement" },
  { label: "Disclaimer", href: "/disclaimer", },
];

export default function Footer() {
  return (
    <footer className="bg-[#062F27] px-4 pb-6 pt-9 text-white sm:px-6 sm:pb-[35px] sm:pt-[48px] lg:px-[93px]">
      <div className="mx-auto max-w-[1280px]">
        {/* TOP LINKS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-[30px]">
          {/* ADVISORY */}
          <div>
            <p className="font-sans text-[10px] font-[600] uppercase tracking-[0.07em] text-white">
              Advisory Solutions
            </p>

            <div className="mt-3 flex flex-col gap-3 sm:mt-[16px] sm:gap-[17px]">
              {ADVISORY_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[13px] font-[400] text-white/[0.78] transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* FIRM */}
          <div>
            <p className="font-sans text-[10px] font-[600] uppercase tracking-[0.07em] text-white">
              Firm &amp; Perspectives
            </p>

            <div className="mt-3 flex flex-col gap-3 sm:mt-[16px] sm:gap-[17px]">
              {FIRM_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[13px] font-[400] text-white/[0.78] transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <p className="font-sans text-[10px] font-[600] uppercase tracking-[0.07em] text-white">
              Engagement &amp; Legal
            </p>

            <div className="mt-3 flex flex-col gap-3 sm:mt-[16px] sm:gap-[17px]">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-sans text-[13px] font-[400] text-white/[0.78] transition-opacity hover:opacity-100"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="mt-6 border-t border-white/[0.10] sm:mt-[26px]" />

        {/* DISCLAIMER */}
        <p className="mt-6 max-w-[717px] font-sans text-[11px] leading-[1.55] tracking-[0.002em] text-[#F6F4F1] sm:mt-[40px] sm:text-[12px] sm:leading-[1.70]">
          Financial products, structured credit lines, and syndication outcomes
          remain subject to borrower eligibility, formal underwriting
          documentation, credit committee assessments, and applicable statutory
          regulations. Information presented is intended for institutional
          advisory context and does not constitute an explicit loan approval or
          investment underwriting guarantee.
        </p>

        {/* BOTTOM */}
        <div className="mt-6 flex w-full flex-col gap-3 sm:mt-0 sm:flex-row sm:items-center sm:justify-between sm:gap-[15px]">
          <p className="font-sans text-[11px] font-[400] leading-[1.4] text-[#F6F4F1] sm:text-[13px]">
            © 2025 FUND ASTRA. All rights reserved. Your Trusted Capital
            Advisory Partner.
          </p>

          <div className="flex flex-wrap items-center gap-x-[20px] gap-y-[8px]">
            <Link
              href="/privacy-policy"
              className="font-sans text-[13px] font-[400] text-[#F6F4F1] transition-opacity hover:opacity-100"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-engagement"
              className="font-sans text-[13px] font-[400] text-[#F6F4F1] transition-opacity hover:opacity-100"
            >
              Terms of Engagement
            </Link>

            <Link
              href="/disclaimer"
              className="font-sans text-[13px] font-[400] text-[#F6F4F1] transition-opacity hover:opacity-100"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
