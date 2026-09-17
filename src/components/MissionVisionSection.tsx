"use client";

import { Flag, Eye } from "lucide-react";
import { motion } from "framer-motion";

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

const headingVariants = {
  hidden: {
    opacity: 0,
    x: 90,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const leftCardVariants = {
  hidden: {
    opacity: 0,
    x: -90,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const rightCardVariants = {
  hidden: {
    opacity: 0,
    x: 90,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay: 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function MissionVisionSection() {
  return (
    <section className="bg-white">
      {/* HEADING AREA */}
      <div className="px-4 pb-6 sm:px-6 sm:pb-20 lg:px-[76px]">
        <div className="mx-auto max-w-[1080px]">
          <motion.div
            className="text-center"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* CARDS AREA */}
      <div className="bg-[#FAF8F5] px-4 py-8 sm:px-6 sm:py-15 lg:px-[76px]">
        <div className="mx-auto max-w-[1216px]">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {CARDS.map(
              ({ icon: Icon, eyebrow, title, description, bullet }, index) => {
                const cardVariants =
                  index === 0 ? leftCardVariants : rightCardVariants;

                return (
                  <motion.div
                    key={title}
                    className="relative min-h-[420px] w-full overflow-hidden rounded-2xl border border-black/5 bg-white p-6 shadow-sm sm:min-h-[507px] sm:p-8"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
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

                    <p className="relative mt-4 w-full font-sans text-[15px] leading-[1.65] text-[#424845] sm:text-[18px] sm:leading-[1.7]">
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
                  </motion.div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
