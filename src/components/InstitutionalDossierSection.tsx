"use client";

import Image from "next/image";
import { ShieldCheck, SlidersHorizontal, Share2 } from "lucide-react";
import { motion } from "framer-motion";

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

const leftContentVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, x: -55 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      delay: 0.18,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const featuresContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.25,
    },
  },
};

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 90, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cornerVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.35,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const captionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function InstitutionalDossierSection() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-[76px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 rounded-[2px] bg-[#FBF9F6] px-5 py-7 sm:px-[36px] sm:py-[44px] lg:grid-cols-2 lg:gap-10">
        <motion.div
          variants={leftContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="mb-5 inline-flex items-center rounded-[5px] bg-brand-green px-4 py-1"
            variants={leftContentVariants}
          >
            <span className="font-sans text-[17px] font-[700] uppercase tracking-wide text-brand-cream">
              Institutional Dossier
            </span>
          </motion.div>

          <motion.h2
            className="w-full max-w-[584px] font-display text-[30px] font-semibold leading-[1.2] text-brand-green sm:text-[40px]"
            variants={headingVariants}
          >
            Precision Advisory Built for Non-Dilutive &amp; Growth Scale
          </motion.h2>

          <motion.p
            className="mt-6 font-sans text-[15px] font-[400] leading-[1.5] text-[#424845]"
            variants={paragraphVariants}
          >
            Founded to eliminate fragmentation and opacity in Indian enterprise
            funding,{" "}
            <span className="font-semibold text-brand-green">FUND ASTRA</span>{" "}
            operates as a boutique capital advisory and mandate syndication
            powerhouse. We represent corporate promoters, CFO offices, and
            mid-market boards in structuring resilient balance-sheet solutions.
          </motion.p>

          <motion.p
            className="mt-4 font-sans text-[15px] leading-[1.5] text-[#424845]"
            variants={paragraphVariants}
          >
            Our core advisory desk orchestrates three fundamental liquidity
            avenues: comprehensive SME working capital corridors, bespoke
            structured debt instruments (promoter financing, mezzanine credit,
            and Capex syndication), and high-conviction growth equity
            syndication.
          </motion.p>

          <motion.div
            className="mt-8 space-y-4"
            variants={featuresContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <motion.div
                key={title}
                className="flex gap-4 rounded-xl bg-white p-4 shadow-sm"
                variants={featureVariants}
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
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.span
            className="pointer-events-none absolute -right-3 -top-3 h-10 w-10 border-r-2 border-t-2 border-[#B08316]"
            variants={cornerVariants}
          />
          <motion.span
            className="pointer-events-none absolute -bottom-3 -left-3 h-10 w-10 border-b-2 border-l-2 border-[#B08316]"
            variants={cornerVariants}
          />

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl lg:h-[542px] lg:aspect-auto">
            <Image
              src="/contact-us.png"
              alt="FUND ASTRA institutional advisory council"
              fill
              className="object-cover"
            />
          </div>

          <motion.div
            className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-xl bg-brand-green/95 px-4 py-3 backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:px-5 sm:py-3.5"
            variants={captionVariants}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
