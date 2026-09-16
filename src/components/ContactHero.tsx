"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const STATS = [
  { value: "₹2,400+ Cr", label: "Capital Structured" },
  { value: "45+ Desks", label: "Institutional Lenders" },
  { value: "100% Strict", label: "Fiduciary NDA" },
  { value: "24h SLA", label: "Mandate Triage" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const badgeVariants = {
  hidden: {
    opacity: 0,
    x: -80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const statsVariants = {
  hidden: {
    opacity: 0,
    y: 60,
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

export default function ContactHero() {
  return (
    <section className="relative">
      <div className="relative min-h-[709px] overflow-hidden">
        <Image
          src="/about.png"
          alt="FUND ASTRA — city skyline advisory suite"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/90 via-brand-green/60 to-brand-green/20" />

        <Navbar />

        <motion.div
          className="relative z-10 max-w-[720px] px-4 pb-20 pt-55 lg:ml-[93px] lg:px-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.25,
          }}
        >
          {/* BADGE */}
          <motion.div
            variants={badgeVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-[5px] bg-white/95 px-5 py-2 backdrop-blur"
          >
            <span className="font-sans text-[15px] font-bold tracking-[1px] text-[#052E26]">
              GET IN TOUCH
            </span>

            <span className="h-2 w-2 rounded-full bg-[#052E26]" />

            <span className="font-sans text-[15px] font-bold tracking-[1px] text-[#052E26]">
              CONFIDENTIAL ADVISORY
            </span>
          </motion.div>

          {/* HEADING */}
          <motion.h1
            variants={textVariants}
            className="font-display text-[38px] font-[400] leading-[1.2] text-[#FBF9F6] sm:text-[58px]"
          >
            We&apos;re Here to{" "}
            <span className="italic font-medium">Guide Your Capital</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            variants={textVariants}
            className="mt-6 max-w-[590px] font-sans text-[19px] font-[300] leading-[1.65] text-[#CAEADBE5]"
          >
            Whether structuring bespoke working capital facilities,
            collateral-backed credit, or enterprise equity syndication — connect
            directly with our senior mandate committee.
          </motion.p>

          {/* STATS */}
          <motion.div
            variants={containerVariants}
            className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={statsVariants}
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 backdrop-blur"
              >
                <p className="font-display text-[20px] font-[700] text-white">
                  {stat.value}
                </p>

                <p className="mt-0.5 font-sans text-[11px] font-light text-white">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}