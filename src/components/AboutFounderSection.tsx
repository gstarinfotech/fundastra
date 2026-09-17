"use client";

import Image from "next/image";
import { CheckCircle2, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { icon: CheckCircle2, value: "20+ Years", label: "Combined Track Record" },
  { icon: Landmark, value: "₹2,400+ Cr", label: "Closed Transactions" },
];

const headingVariants = {
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

const imageVariants = {
  hidden: { opacity: 0, x: -90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: 90 },
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

const statsContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.35,
    },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function AboutFounderSection() {
  return (
    <section className="bg-[#052E26] px-4 py-20 sm:px-6 lg:px-[76px]">
      <div className="mx-auto max-w-[1216px]">
        {/* HEADING */}
        <motion.div
          className="text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-[2px] w-[18px] bg-[#B08316]" />
            <span className="font-sans text-[11px] font-[600] uppercase tracking-[0.12em] text-[#B08316]">
              Executive Stewardship
            </span>
          </div>

          <h2 className="font-display text-[36px] font-[600] tracking-[-0.02em] text-white sm:text-[44px]">
            About the Founder
          </h2>

          <p className="mx-auto mt-4 max-w-[720px] font-sans text-[14px] leading-[1.7] text-white/65 sm:text-[15px]">
            Fund Astra is led by experienced capital professionals with a
            strong track record across structured finance, corporate funding,
            and institutional capital mandates.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-[20px] bg-white shadow-2xl lg:grid-cols-2">
          {/* LEFT IMAGE */}
          <motion.div
            className="relative min-h-[340px] lg:min-h-0"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/about-founder.png"
              alt="FUND ASTRA founding partners closing a mandate"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="flex min-w-0 flex-col justify-center px-6 py-8 sm:px-12 sm:py-10"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-[18px] bg-[#B08316]" />
              <span className="font-sans text-[11px] font-[600] uppercase tracking-[0.12em] text-[#B08316]">
                Founding Partners & Managing Directors
              </span>
            </div>

            <h3 className="font-display text-[30px] font-[600] leading-[1.15] text-[#052E26]">
              Amit Sindhi
            </h3>

            <p className="mt-2 font-sans text-[12px] font-[600] uppercase tracking-[0.08em] text-[#765A23]">
              Founders, Fund Astra
            </p>

            <p className="mt-5 font-sans text-[14px] leading-[1.75] text-[#424845]">
              With more than 20 years of combined experience across corporate
              finance, structured debt, and institutional capital, the
              leadership team brings a disciplined approach to complex funding
              mandates. Fund Astra works closely with promoters, management
              teams, and capital partners to structure practical solutions
              aligned with business objectives.
            </p>

            <p className="mt-4 font-sans text-[14px] leading-[1.75] text-[#424845]">
              Prior to establishing Fund Astra, the team built experience
              across banking, private credit, and corporate finance, developing
              strong relationships across lenders, investors, and strategic
              capital providers.
            </p>

            <blockquote className="mt-5 border-l-[2px] border-[#B08316] pl-4 font-display text-[16px] italic leading-[1.55] text-[#052E26]">
              “Capital is not merely balance sheet fuel. It is a strategic
              decision that shapes the next stage of a business.”
              <span className="mt-2 block font-sans text-[11px] not-italic font-[600] uppercase tracking-[0.08em] text-[#765A23]">
                — Vikram Singh & Rahul Mehra
              </span>
            </blockquote>

            {/* STATS */}
            <motion.div
              className="mt-6 flex flex-wrap gap-x-6 gap-y-4 border-t border-black/5 pt-5 sm:gap-8"
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {STATS.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-3"
                  variants={statVariants}
                >
                  <Icon
                    size={18}
                    strokeWidth={1.7}
                    className="mt-[2px] shrink-0 text-[#B08316]"
                  />

                  <div>
                    <p className="font-display text-[18px] font-[600] leading-none text-[#052E26]">
                      {value}
                    </p>
                    <p className="mt-1 font-sans text-[10px] font-[600] uppercase tracking-[0.06em] text-[#6B716E]">
                      {label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
