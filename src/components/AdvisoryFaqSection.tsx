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

const PARTNER_TYPES = [
  "Tier-1 PSU Banks",
  "Private Sector Banks",
  "Specialized NBFCs",
  "Private Credit Funds (AIFs)",
  "Single Family Offices",
  "Mezzanine Desks",
];

export default function AdvisoryFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white">
      {/* HEADING AREA */}
      <div className="px-4 py-[60px] pb-[70px] text-center sm:px-6">
        <h2 className="font-display text-[34px] font-[500] leading-[1.1] tracking-[-0.025em] text-[#000F09] sm:text-[44px]">
          Advisory Desk Question
        </h2>

        <p className="mx-auto mt-[18px] max-w-[605px] font-sans text-[15px] font-[400] leading-[1.45] text-[#424845]">
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
                    className="flex min-h-[68px] w-full items-center justify-between gap-5 px-[19px] text-left transition-colors duration-200 hover:bg-[#fafaf8]"
                  >
                    <div className="flex min-w-0 items-center gap-[10px]">
                      <span className="shrink-0 font-sans text-[11px] font-[600] leading-none text-[#765A23]">
                        {String(index + 1).padStart(2, "0")}.
                      </span>

                      <span className="font-sans text-[14px] font-[600] leading-[1.3] text-[#000F09]">
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
                      <p className="px-[19px] pb-[20px] pl-[47px] pt-1 font-sans text-[13px] leading-[1.6] text-[#424845]">
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

      <div className="bg-white px-4 py-[53px] sm:px-6 lg:px-[85px]">
        <div className="mx-auto max-w-[1213px]">
          <div className="h-[156px] rounded-[8px] bg-[#F6F4F1] pt-[45px]">
            <p className="text-center font-sans text-[11px] font-[700] uppercase tracking-[0.12em] text-[#424845]">
              Institutional Partner Consortium &amp; Credit Fund Networks
            </p>

            <div className="mt-[20px] flex flex-wrap items-center justify-center gap-[22px]">
              {PARTNER_TYPES.map((item) => (
                <span
                  key={item}
                  className="h-[42px] w-[173px] whitespace-nowrap rounded-[4px] border border-[#E2E5E2] bg-white py-2 text-center font-sans text-[12px] font-[600] text-[#424845]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}