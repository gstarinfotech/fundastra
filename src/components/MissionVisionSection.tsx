import { Flag, Eye } from "lucide-react";

const CARDS = [
  {
    icon: Flag,
    eyebrow: "Institutional Purpose",
    title: "Our Mission",
    description:
      "To demystify institutional debt and equity corridors, eliminating friction and structural vulnerabilities for Indian founders. We structure bespoke capital frameworks that accelerate enterprise scale without punitive covenants, restrictive collateral overburdens, or premature equity dilution.",
    bullet: "Founder Sovereignty & Balance Sheet Resilience",
  },
  {
    icon: Eye,
    eyebrow: "Strategic Trajectory",
    title: "Our Vision",
    description:
      "To become India's most trusted sovereign capital advisory desk—an authoritative nexus uniting high-growth mid-market enterprises with global credit syndicates, domestic private credit funds, and institutional liquidity pools, elevating Indian corporate balance sheets to world-class standards.",
    bullet: "India's Leading Corporate Syndicate Partner",
  },
];

export default function MissionVisionSection() {
  return (
    <section className="bg-white">
      {/* HEADING AREA */}
      <div className="px-4 pb-20 sm:px-6 lg:px-[76px]">
        <div className="mx-auto max-w-[1080px]">
          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#765A23]" />

              <span className="font-sans text-[11px] font-[700] uppercase tracking-[0.1em] text-[#765A23]">
                Purpose &amp; Horizon
              </span>
            </div>

            <h2 className="font-display text-[34px] font-[500] text-[#000F09] sm:text-[44px]">
              Our Mission &amp; Vision
            </h2>

            <p className="mx-auto mt-2 max-w-[685.25px] font-sans text-[15px] font-[400] leading-[1.6] text-[#424845]">
              Anchoring Indian enterprise potential with institutional integrity
              and future-proof capital channels.
            </p>
          </div>
        </div>
      </div>

      {/* CARDS AREA */}
      <div className="bg-[#FAF8F5] px-4 py-15 sm:px-6 lg:px-[76px]">
        <div className="mx-auto max-w-[1216px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CARDS.map(
              ({ icon: Icon, eyebrow, title, description, bullet }) => (
                <div
                  key={title}
                  className="relative h-[507px] w-[592px] overflow-hidden rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
                >
                  <div className="relative mt-2 flex h-[48px] w-[48px] items-center justify-center rounded-lg bg-[#0A271E]">
                    <Icon
                      size={25}
                      className="text-[#FFD794]"
                      strokeWidth={1.8}
                    />
                  </div>

                  <p className="relative mt-5 font-sans text-[11px] font-[700] uppercase tracking-[0.14em] text-[#765A23]">
                    {eyebrow}
                  </p>

                  <h3 className="relative mt-2 font-display text-[32px] font-[600] text-[#000F09]">
                    {title}
                  </h3>

                  <p className="relative mt-4 w-[494px] font-sans text-[18px] leading-[1.7] text-[#424845]">
                    {description}
                  </p>

                  <div className="relative mt-5 border-t border-black/5 pt-5">
                    <div className="mt-2 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#765A23]" />

                      <span className="font-sans text-[17px] font-[600] text-[#000F09]">
                        {bullet}
                      </span>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
