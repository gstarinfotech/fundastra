import Image from "next/image";
import { ShieldCheck, SlidersHorizontal, Share2 } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "Regulatory Rigor (SEBI & RBI Compliant)",
    description:
      "Strict adherence to Indian banking guidelines, capital adequacy regulations, and confidentiality protocols for corporate governance.",
  },
  {
    icon: SlidersHorizontal,
    title: "Custom Debt Structuring",
    description:
      "Bespoke covenant structuring, interest moratorium calibration, and collateral optimization tailored to operational cash cycles.",
  },
  {
    icon: Share2,
    title: "Direct Syndicate Access",
    description:
      "Direct relationship underwriting with senior credit committees, private debt funds, and institutional family offices across India.",
  },
];

export default function InstitutionalDossierSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-[76px]">
      <div className="mx-auto grid max-w-[1280px] rounded-[2px] bg-[#FBF9F6] px-[36px] py-[44px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="mb-5 inline-flex items-center rounded-[5px] bg-brand-green px-4 py-1">
            <span className="font-sans text-[17px] font-[700] uppercase tracking-wide text-brand-cream">
              Institutional Dossier
            </span>
          </div>

          <h2 className="font-display text-[30px] w-[584px] font-semibold leading-[1.2] text-brand-green sm:text-[40px]">
            Precision Advisory Built for Non-Dilutive &amp; Growth Scale
          </h2>

          <p className="mt-6 font-sans text-[15px] font-[400] leading-[1.5] text-[#424845]">
            Founded to eliminate fragmentation and opacity in Indian enterprise
            funding,{" "}
            <span className="font-semibold text-brand-green">FUND ASTRA</span>{" "}
            operates as a boutique capital advisory and mandate syndication
            powerhouse. We represent corporate promoters, CFO offices, and
            mid-market boards in structuring resilient balance-sheet solutions.
          </p>

          <p className="mt-4 font-sans text-[15px] leading-[1.5] text-[#424845]">
            Our core advisory desk orchestrates three fundamental liquidity
            avenues: comprehensive SME working capital corridors, bespoke
            structured debt instruments (promoter financing, mezzanine credit,
            and Capex syndication), and high-conviction growth equity
            syndication.
          </p>

          <div className="mt-8 space-y-4">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex gap-4 rounded-xl bg-white p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-green">
                  <Icon
                    size={18}
                    className="text-brand-cream"
                    strokeWidth={1.8}
                  />
                </div>
                <div>
                  <p className="font-sans text-[17px] font-bold text-[#000F09]">
                    {title}
                  </p>
                  <p className="mt-1 font-sans text-[13px] font-[400] leading-[1.55] text-[#424845]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <span className="pointer-events-none absolute -right-3 -top-3 h-10 w-10 border-r-2 border-t-2 border-[#B08316]" />
          <span className="pointer-events-none absolute -bottom-3 -left-3 h-10 w-10 border-b-2 border-l-2 border-[#B08316]" />

          <div className="relative aspect-[4/3] w-full h-[542px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/contact-us.png"
              alt="FUND ASTRA institutional advisory council"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl bg-brand-green/95 px-5 py-3.5 backdrop-blur">
            <div>
              <p className="font-sans text-[10px] font-[700] uppercase tracking-wider text-[#DAD8D5]">
                Executive Governance
              </p>
              <p className="mt-0.5 font-sans text-[17px] font-[600] text-white">
                Institutional Advisory Council &amp; Mandate Committee
              </p>
            </div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="shrink-0 text-brand-cream/70"
            >
              <rect
                x="2"
                y="4"
                width="14"
                height="11"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path d="M2 7.5h14" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
