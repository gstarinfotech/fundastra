"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const METRICS = [
  {
    label: "Phase I & II Deployed",
    value: "₹2,400",
    suffix: "+",
    unit: "Cr",
    title: "Capital Structured",
    description:
      "Institutional syndication executed across senior secured term lines and working debt.",
  },
  {
    label: "Syndicate Depth",
    value: "120",
    suffix: "+",
    title: "Active Institutional Lenders",
    description:
      "Direct network spanning private credit funds, NBFCs, and global venture debt desks.",
  },
  {
    label: "Track Record",
    value: "95",
    suffix: "+",
    title: "High-Growth Enterprises",
    description:
      "Venture-backed enterprises empowered across Series A through Pre-IPO milestones.",
  },
  {
    label: "Execution Velocity",
    value: "48",
    suffix: "",
    unit: "Hrs",
    title: "Mandate Triage & Appraisal",
    description:
      "Rapid institutional underwriting assessment with proprietary credit viability scoring.",
  },
];

const badgeIn = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const textIn = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* Metric cards row: each card rises up with a stagger, after the hero text */
const cardsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.55,
    },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 55 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function AboutHero() {
  return (
    <section className="relative bg-white">
      <div className="relative h-[560px] overflow-hidden sm:h-[673px]">
        <Image
          src="/about.png"
          alt="FUND ASTRA — institutional advisory skyline"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-green/55" />

        <Navbar />

        <div className="relative z-10 mx-auto max-w-[900px] px-4 pt-48 text-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={badgeIn}
            className="mb-7 inline-flex items-center rounded-full bg-white px-4"
          >
            <span className="font-sans text-[17px] font-[800] tracking-wide text-[#052E26]">
              COMPANY PROFILE
            </span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            variants={textIn}
            transition={{ delay: 0.15 }}
            className="font-display w-[921px] text-[39px] font-[600] leading-[1.2] tracking-[0.01em] text-[#FBF9F6] sm:text-[60px]"
          >
            Architecting Sovereign Capital
            <br />
            for India&apos;s{" "}
            <span className="italic font-medium">Ambitious Enterprises</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={textIn}
            transition={{ delay: 0.28 }}
            className="mx-auto mt-8 max-w-[897px] font-sans text-[19px] font-[500] leading-[1.60] text-white"
          >
            This is the corporate profile and institutional dossier of FUND
            ASTRA. We detail our fiduciary framework, syndicated capital
            channels, and balance sheet advisory expertise engineered to bridge
            high-growth Indian corporations with elite public, private credit,
            and equity pools.
          </motion.p>
        </div>
      </div>

      <motion.div
        className="relative z-10 mx-auto -mt-[110px] h-[280px] max-w-[1184px] px-4"
        initial="hidden"
        animate="show"
        variants={cardsContainer}
      >
        <div className="grid divide-y divide-white overflow-hidden rounded-[20px] border border-white bg-[#F5F2EC] shadow-[0_18px_24px_-12px_rgba(0,0,0,0.22)] sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:divide-white lg:grid-cols-4">
          {METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={cardIn}
              className="h-[268.13px] w-[295.5px] px-[27px] py-[32px]"
            >
              <p className="font-sans text-[11px] font-[700] uppercase tracking-[0.11em] text-[#8C9791]">
                {m.label}
              </p>

              <div className="mt-[14px] flex items-baseline font-display text-[50px] font-[700] leading-none text-brand-green">
                {m.value}

                {m.suffix && (
                  <span className="relative -top-[6px] ml-[2px] text-[35px] font-[500] text-[#e8b43a]">
                    {m.suffix}
                  </span>
                )}

                {m.unit && (
                  <span className="ml-[6px] font-display text-[27px] font-[500] text-[#5F6863]">
                    {m.unit}
                  </span>
                )}
              </div>

              <div className="my-[20px] border-t border-[#E2DED6]" />

              <p className="font-sans pt-2 text-[12px] font-[600] uppercase text-[#0A271E]">
                {m.title}
              </p>

              <p className="mt-[6px] font-sans text-[13px] font-[400] leading-[1.5] text-[#5F6863]">
                {m.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}