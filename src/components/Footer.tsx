"use client";

import Link from "next/link";

const ADVISORY_LINKS = [
  { label: "SME Funding & Credit Lines", href: "/services#sme-funding" },
  { label: "Structured Debt & Mezzanine", href: "/services#structured-debt" },
  {
    label: "Institutional Equity Syndicate",
    href: "/services#equity-fundraising",
  },
];

const FIRM_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Our Partners & Lenders", href: "/partners" },
  { label: "Advisory Perspectives & Blogs", href: "/blogs" },
  { label: "Contact Advisory Desk", href: "/contact" },
];

const LEGAL_LINKS = [
  {
    label: "Mandate Execution Protocol",
    href: "/mandate-execution-protocol",
  },
  {
    label: "Confidentiality Charter",
    href: "/confidentiality-charter",
  },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Engagement", href: "/terms-of-engagement" },
];

export default function Footer() {
  return (
    <footer className="bg-[#062F27] px-4 pb-[35px] pt-[58px] text-white sm:px-6 lg:px-[93px]">
      <div className="mx-auto max-w-[1280px]">
        {/* TOP LINKS */}
        <div className="grid grid-cols-1 gap-[38px] sm:grid-cols-3">
          {/* ADVISORY */}
          <div>
            <p className="font-sans text-[10px] font-[600] uppercase tracking-[0.07em] text-white">
              Advisory Solutions
            </p>

            <div className="mt-[16px] flex flex-col gap-[17px]">
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

            <div className="mt-[16px] flex flex-col gap-[17px]">
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

            <div className="mt-[16px] flex flex-col gap-[17px]">
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
        <div className="mt-[26px] border-t border-white/[0.10]" />

        {/* DISCLAIMER */}
        <p className="mt-[40px] h-[115px] max-w-[717px] font-sans text-[12px] leading-[1.70] tracking-[0.002em] text-[#F6F4F1]">
          Financial products, structured credit lines, and syndication outcomes
          remain subject to borrower eligibility, formal underwriting
          documentation, credit committee assessments, and applicable statutory
          regulations. Information presented is intended for institutional
          advisory context and does not constitute an explicit loan approval or
          investment underwriting guarantee.
        </p>

        {/* BOTTOM */}
        <div className="w-[1216px] flex flex-col gap-[15px] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[13px] font-[400] text-[#F6F4F1]">
            © 2025 FUND ASTRA. All rights reserved. Your Trusted Capital
            Advisory Partner.
          </p>

          <div className="flex items-center gap-[20px]">
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
