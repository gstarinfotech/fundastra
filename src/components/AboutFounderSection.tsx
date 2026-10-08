"use client";

import Image from "next/image";
import { CheckCircle2, Landmark } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { icon: CheckCircle2, value: "14+ Years", label: "Industry Experience" },
  { icon: Landmark, value: "Corporate Finance", label: "Core Expertise" },
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
    <section className="bg-[#052E26] px-4 py-9 sm:px-6 sm:py-20 lg:px-[76px]">
      <div className="mx-auto max-w-[1216px]">

        {/* HEADING */}
        <motion.div
          className="text-center"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="mb-2 flex items-center justify-center gap-1.5 sm:mb-3 sm:gap-2">
            <span className="h-[2px] w-[15px] bg-[#B08316] sm:w-[18px]" />
            <span className="font-sans text-[9px] font-[600] uppercase tracking-[0.1em] text-[#B08316] sm:text-[11px] sm:tracking-[0.12em]">
              Executive Stewardship
            </span>
          </div>

          <h2 className="font-display text-[31px] font-[600] leading-[1.1] tracking-[-0.02em] text-white sm:text-[44px] sm:leading-normal">
            About the Founder
          </h2>

          <p className="mx-auto mt-2.5 max-w-[720px] px-2 font-sans text-[12px] leading-[1.5] text-white/65 sm:mt-4 sm:px-0 sm:text-[15px] sm:leading-[1.7]">
            Fund Astra is led by experienced capital professionals with a
            strong track record across structured finance, corporate funding,
            and institutional capital mandates.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <div className="mt-7 grid grid-cols-1 overflow-hidden rounded-[20px] bg-white shadow-2xl sm:mt-12 lg:grid-cols-[43%_57%]">
          {/* LEFT IMAGE */}
          <motion.div
            className="relative min-h-[500px] overflow-hidden lg:min-h-[635px]"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Image
              src="/about-founder.jpeg"
              alt="CA Amit Sindhi - Founder, Fund Astra"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 43vw"
              className="object-cover object-[center_20%]"
            />
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="flex min-w-0 flex-col justify-center px-5 py-7 sm:px-12 sm:py-10"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mb-2.5 flex items-center gap-1.5 sm:mb-3 sm:gap-2">
              <span className="h-[2px] w-[15px] bg-[#B08316] sm:w-[18px]" />
              <span className="font-sans text-[9px] font-[600] uppercase tracking-[0.1em] text-[#B08316] sm:text-[11px] sm:tracking-[0.12em]">
                Founder & Managing Director
              </span>
            </div>

            <h3 className="font-display text-[27px] font-[600] leading-[1.15] text-[#052E26] sm:text-[30px] sm:leading-[1.15]">
              CA Amit Sindhi
            </h3>

            <p className="mt-1.5 font-sans text-[10px] font-[600] uppercase tracking-[0.07em] text-[#765A23] sm:mt-2 sm:text-[12px] sm:tracking-[0.08em]">
              Founder, Fund Astra
            </p>

            <p className="mt-4 font-sans text-[12px] leading-[1.6] text-[#424845] sm:mt-5 sm:text-[14px] sm:leading-[1.75]">
              With more than 14 years of experience across corporate finance,
              structured debt, valuations, and M&A, the founder brings a
              disciplined approach to complex funding mandates. Fund Astra
              works closely with promoters, management teams, and capital
              partners to structure practical solutions aligned with business
              objectives.
            </p>

            <p className="mt-3 font-sans text-[12px] leading-[1.6] text-[#424845] sm:mt-4 sm:text-[14px] sm:leading-[1.75]">
              Prior to establishing Fund Astra, CA Amit Sindhi handled
              leadership and decision-maker roles at Tata Capital, EY, and
              other leading organizations, building deep experience across
              corporate finance, capital structuring, and strategic
              transactions.
            </p>

            {/* STATS */}
            <motion.div
              className="mt-5 flex flex-wrap gap-x-5 gap-y-3 border-t border-black/5 pt-4 sm:mt-6 sm:gap-8 sm:pt-5"
              variants={statsContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {STATS.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-2.5 sm:gap-3"
                  variants={statVariants}
                >
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    className="mt-[2px] shrink-0 text-[#B08316] sm:size-[18px]"
                  />

                  <div>
                    <p className="font-display text-[16px] font-[600] leading-none text-[#052E26] sm:text-[18px]">
                      {value}
                    </p>

                    <p className="mt-1 font-sans text-[9px] font-[600] uppercase tracking-[0.05em] text-[#6B716E] sm:text-[10px] sm:tracking-[0.06em]">
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