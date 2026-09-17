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
      <div className="border-b border-black/5 bg-white px-4 py-10 text-center sm:px-6 sm:py-16">
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <h2 className="font-display text-[34px] font-semibold text-[#000F09] sm:text-[44px]">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-3 max-w-[560px] font-sans text-[18px] leading-[1.6] text-[#424845]">
            Direct answers regarding our advisory scope, ticket parameters,
            regulatory frameworks, and appraisal velocities.
          </p>
        </motion.div>
      </div>

      <div className="bg-[#FAF8F5] px-4 py-7 sm:px-6 sm:py-14 lg:px-[76px]">
        <motion.div
          className="mx-auto max-w-[1213px] space-y-4"
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
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left hover:bg-black/[0.02]"
                >
                  <span className="flex items-start gap-3">
                    <span className="font-sans text-[14px] font-[700] text-[#765A23]">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <span className="font-sans text-[17px] font-[600] text-[#000F09]">
                      {faq.question}
                    </span>
                  </span>

                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#765A23] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
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
                    <p className="px-6 pb-4 pt-1 pl-[60px] font-sans text-[14px] leading-[1.65] text-brand-green/65">
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