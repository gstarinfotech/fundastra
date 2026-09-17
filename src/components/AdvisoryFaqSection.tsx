"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS = [
  {
    question:
      "What financial documentation is required for the preliminary consultation?",
    answer:
      "We typically require basic financial statements, bank statements, existing debt details, and relevant business documentation for the preliminary consultation.",
  },
  {
    question:
      "How does FUND ASTRA structure advisory mandates versus retail loan broking?",
    answer:
      "FUND ASTRA structures institutional advisory mandates around the business requirement, capital structure, lender fit, and transaction objectives rather than operating as a retail loan-broking platform.",
  },
  {
    question:
      "What is the typical turnaround time from intake to sanction letter?",
    answer:
      "Initial mandate assessment is typically completed within 24–48 hours, while sanction timelines depend on the transaction structure, documentation, and lender underwriting process.",
  },
  {
    question: "How is advisory remuneration and client engagement structured?",
    answer:
      "Advisory remuneration is structured based on the mandate scope, transaction complexity, and capital requirement, with the engagement terms agreed transparently before execution.",
  },
];

export default function AdvisoryFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white">
      {/* HEADING AREA */}
      <div className="px-4 py-12 pb-14 text-center sm:px-6 sm:py-[60px] sm:pb-[70px]">
        <h2 className="font-display text-[30px] font-[500] leading-[1.1] tracking-[-0.025em] text-[#000F09] sm:text-[44px]">
          Advisory Desk Question
        </h2>

        <p className="mx-auto mt-4 max-w-[605px] font-sans text-[14px] font-[400] leading-[1.45] text-[#424845] sm:mt-[18px] sm:text-[15px]">
          Essential details regarding onboarding criteria, documentation
          prerequisites, and our
          <br className="hidden sm:block" />
          fiduciary underwriting principles.
        </p>
      </div>

      {/* QUESTIONS AREA */}
      <div className="bg-[#FAF8F5] px-4 py-[32px] sm:px-6 lg:px-[85px] lg:py-[38px]">
        <div className="mx-auto max-w-[1213px]">
          <div className="flex flex-col gap-[14px]">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="overflow-hidden rounded-[6px] border border-[#E4E5E3] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.03)]"
                >
                  {/* QUESTION */}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="flex min-h-[64px] w-full items-center justify-between gap-3 px-4 text-left transition-colors duration-200 hover:bg-[#fafaf8] sm:min-h-[68px] sm:gap-5 sm:px-[19px]"
                  >
                    <div className="flex min-w-0 items-center gap-[10px]">
                      <span className="shrink-0 font-sans text-[11px] font-[600] leading-none text-[#765A23]">
                        {String(index + 1).padStart(2, "0")}.
                      </span>

                      <span className="font-sans text-[13px] font-[600] leading-[1.3] text-[#000F09] sm:text-[14px]">
                        {faq.question}
                      </span>
                    </div>

                    <ChevronDown
                      size={15}
                      strokeWidth={1.8}
                      className={`shrink-0 text-[#765A23] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {/* ANSWER */}
                  <div
                    className="grid overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-4 pb-4 pl-11 pt-1 font-sans text-[12px] leading-[1.6] text-[#424845] sm:px-[19px] sm:pb-[20px] sm:pl-[47px] sm:text-[13px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}