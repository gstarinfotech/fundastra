"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const badgeVariants = {
  hidden: {
    opacity: 0,
    y: -45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const paragraphVariants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.2,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const buttonsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 45,
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

export default function PartnersHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/partner.jpg "
          alt="Partners"
          fill
          priority
          className="object-cover"
        />

        {/* Green Overlay */}
        <div className="absolute inset-0 bg-[#052E26]/75" />
      </div>

      <Navbar />

      <motion.div
        className="relative z-10 mx-auto h-[631px] max-w-[950px] px-4 pb-2 pt-55 text-center"
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
          className="inline-flex items-center rounded-full bg-white px-4"
        >
          <span className="font-sans text-[17px] font-bold tracking-wide text-[#052E26]">
            TRUSTED INSTITUTIONS &amp; SYNDICATE ALLIANCES
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          variants={headingVariants}
          className="font-display text-[44px] font-semibold text-[#FBF9F6] sm:text-[64px]"
        >
          Meet Our partners
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={paragraphVariants}
          className="mx-auto font-sans text-[20px] font-[500] leading-[1.65] text-white"
        >
          Refer clients, we handle the rest. Earn commission on every
          successful disbursal on time, every time. Direct access to 45+
          premier institutional banking desks.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={buttonsContainerVariants}
          className="mt-9 flex flex-wrap items-center justify-center gap-5"
        >
          <motion.a
            variants={buttonVariants}
            href="#approved-project-finance"
            className="rounded-[5px] bg-white px-7 py-3.5 font-sans text-[17px] font-semibold text-[#0A271E] hover:opacity-90"
          >
            Approved Project Finance
          </motion.a>

          <motion.a
            variants={buttonVariants}
            href="#banking-partners"
            className="inline-flex items-center gap-2 rounded-[5px] border border-white/25 bg-white/5 px-7 py-3.5 font-sans text-[17px] font-semibold text-[#FBF9F6] hover:bg-white/10"
          >
            Banking Partners

            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 4l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}