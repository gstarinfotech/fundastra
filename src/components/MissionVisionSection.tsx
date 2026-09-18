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
      <div className="mt-6 px-4 pb-6 sm:mt-0 sm:px-6 sm:pb-20 lg:px-[76px]">
        <div className="mx-auto max-w-[1080px]">
          <motion.div
            className="text-center"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="mb-2.5 inline-flex items-center gap-1.5 sm:mb-4 sm:gap-2">
              <span className="h-1 w-1 rounded-full bg-[#765A23] sm:h-1.5 sm:w-1.5" />

              <span className="font-sans text-[9px] font-[700] uppercase tracking-[0.08em] text-[#765A23] sm:text-[11px] sm:tracking-[0.1em]">
                Purpose &amp; Horizon
              </span>
            </div>

            <h2 className="font-display text-[27px] font-[500] leading-[1.15] text-[#000F09] sm:text-[44px] sm:leading-normal">
              Our Mission &amp; Vision
            </h2>

            <p className="mx-auto mt-1.5 max-w-[685.25px] px-3 font-sans text-[12px] font-[400] leading-[1.45] text-[#424845] sm:mt-2 sm:px-0 sm:text-[15px] sm:leading-[1.6]">
              Anchoring Indian enterprise potential with institutional integrity
              and future-proof capital channels.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CARDS AREA */}
      <div className="bg-[#FAF8F5] px-4 py-5 sm:px-6 sm:py-15 lg:px-[76px]">
        <div className="mx-auto max-w-[1216px]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 sm:gap-6">
            {CARDS.map(
              ({ icon: Icon, eyebrow, title, description, bullet }, index) => {
                const cardVariants =
                  index === 0 ? leftCardVariants : rightCardVariants;

                return (
                  <motion.div
                    key={title}
                    className="relative min-h-[360px] w-full overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:min-h-[507px] sm:p-8"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <div className="relative mt-0 flex h-[42px] w-[42px] items-center justify-center rounded-lg sm:mt-2 sm:h-[48px] sm:w-[48px]">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#0A271E]">
                        <Icon
                          size={22}
                          className="text-[#FFD794] sm:size-[25px]"
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>

                    <p className="relative mt-3 font-sans text-[9px] font-[700] uppercase tracking-[0.12em] text-[#765A23] sm:mt-5 sm:text-[11px] sm:tracking-[0.14em]">
                      {eyebrow}
                    </p>

                    <h3 className="relative mt-1.5 font-display text-[27px] font-[600] leading-[1.15] text-[#000F09] sm:mt-2 sm:text-[32px] sm:leading-normal">
                      {title}
                    </h3>

                    <p className="relative mt-3 w-full font-sans text-[13px] leading-[1.55] text-[#424845] sm:mt-4 sm:text-[18px] sm:leading-[1.7]">
                      {description}
                    </p>

                    <div className="relative mt-4 border-t border-black/5 pt-4 sm:mt-5 sm:pt-5">
                      <div className="flex items-start gap-2 sm:mt-2 sm:items-center">
                        <span className="mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#765A23] sm:mt-0" />

                        <span className="font-sans text-[13px] font-[600] leading-[1.35] text-[#000F09] sm:text-[17px] sm:leading-normal">
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
