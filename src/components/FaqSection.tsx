"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

type FAQ = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: FAQ[];
};

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 55,
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

const faqContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const faqVariants = {
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

export default function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white">
      <div className="border-b border-black/5 bg-white px-4 py-7 text-center sm:px-6 sm:py-16">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="font-display text-[28px] font-semibold leading-[1.15] text-[#000F09] sm:text-[44px]">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-2 max-w-[560px] px-2 font-sans text-[12px] leading-[1.5] text-[#424845] sm:mt-3 sm:px-0 sm:text-[18px] sm:leading-[1.6]">
            Direct answers regarding our advisory scope, ticket parameters,
            regulatory frameworks, and appraisal velocities.
          </p>
        </motion.div>
      </div>

      <div className="bg-[#FAF8F5] px-4 py-5 sm:px-6 sm:py-14 lg:px-[76px]">
        <motion.div
          className="mx-auto max-w-[1213px] space-y-2.5 sm:space-y-4"
          variants={faqContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                variants={faqVariants}
                className="overflow-hidden rounded-[8px] border border-black/5 bg-white shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-black/[0.02] sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="flex min-w-0 items-start gap-2.5 sm:gap-3">
                    <span className="shrink-0 font-sans text-[11px] font-[700] text-[#765A23] sm:text-[14px]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <span className="font-sans text-[13px] font-[600] leading-[1.35] text-[#000F09] sm:text-[17px] sm:leading-normal">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-[#765A23] transition-transform duration-300 sm:size-[18px] ${isOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <div
                  className="grid overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-3 pt-0.5 pl-[42px] font-sans text-[11px] leading-[1.5] text-brand-green/65 sm:px-6 sm:pb-4 sm:pt-1 sm:pl-[60px] sm:text-[14px] sm:leading-[1.65]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}