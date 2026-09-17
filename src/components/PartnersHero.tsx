"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

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
          src="/partner.jpg"
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
        className="relative z-10 mx-auto min-h-[620px] max-w-[950px] px-4 pb-12 pt-40 text-center sm:min-h-[631px] sm:pb-2 sm:pt-55"
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
          className="inline-flex max-w-full items-center rounded-full bg-white px-3 py-1 sm:px-4"
        >
          <span className="font-sans text-[10px] font-bold leading-[1.2] tracking-[0.04em] text-[#052E26] sm:text-[17px] sm:tracking-wide">
            TRUSTED INSTITUTIONS &amp; SYNDICATE ALLIANCES
          </span>
        </motion.div>

        {/* HEADING */}
        <motion.h1
          variants={headingVariants}
          className="mx-auto mt-4 max-w-[760px] font-display text-[38px] font-semibold leading-[1.05] text-[#FBF9F6] sm:mt-0 sm:text-[64px] lg:mt-4"
        >
          Meet Our partners
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          variants={paragraphVariants}
          className="mx-auto mt-5 max-w-[720px] font-sans text-[14px] font-[500] leading-[1.5] text-white sm:mt-0 sm:text-[20px] sm:leading-[1.65] lg:mt-4"
        >
          Refer clients, we handle the rest. Earn commission on every
          successful disbursal on time, every time. Direct access to 45+
          premier institutional banking desks.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          variants={buttonsContainerVariants}
          className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5 lg:mt-12"
        >
          <MotionLink
            variants={buttonVariants}
            href="/contact"
            className="rounded-[5px] bg-white px-5 py-3 font-sans text-[14px] font-semibold text-[#0A271E] hover:opacity-90 sm:px-7 sm:py-3.5 sm:text-[17px]"
          >
            Discuss Your Capital Needs
          </MotionLink>

          <motion.a
            variants={buttonVariants}
            href="#banking-partners"
            className="inline-flex items-center justify-center gap-2 rounded-[5px] border border-white/25 bg-white/5 px-5 py-3 font-sans text-[14px] font-semibold text-[#FBF9F6] hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-[17px]"
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