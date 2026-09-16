"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "sme-funding",
    tab: "SME Funding",
    label: "CREDIT & WORKING CAPITAL",
    title: "SME Funding",
    description:
      "Flexible senior debt calibrated to operational cash cycles, CAPEX modernization, and working capital optimization. We connect enterprises with institutional lenders across 45+ banking partners to structure non-dilutive liquidity.",
    facilities: [
      "Working Capital & OD / CC Limits",
      "Loan Against Property (LAP)",
      "CGTMSE Credit Schemes",
      "Asset & Machinery Expansion",
    ],
    button: "Explore SME Funding",
    href: "/services#sme-funding",
    image: "/sme-funding.jpeg",
  },
  {
    id: "structured-debt",
    tab: "Structured Debt",
    label: "SPECIAL SITUATIONS & CREDIT",
    title: "Structured Debt",
    description:
      "Customized debt solutions designed around complex funding requirements, growth plans, and cash-flow profiles. We connect enterprises with institutional lenders to structure flexible, non-dilutive capital with tailored repayment solutions.",
    facilities: [
      "Structured Term Loans",
      "Acquisition & Growth Financing",
      "Promoter / Business Funding",
      "Debt Restructuring & Refinancing",
    ],
    button: "Explore Structured Debt",
    href: "/services#structured-debt",
    image: "/structured-debt.jpeg",
  },
  {
    id: "equity-fundraising",
    tab: "Equity Fundraising",
    label: "EQUITY FUNDRAISING",
    title: "Equity Fundraising",
    description:
      "Strategic equity solutions for businesses seeking growth capital, expansion funding, and long-term value creation. We connect enterprises with aligned investors and funds to raise capital while optimizing valuation, structure, and investor fit.",
    facilities: [
      "Private Equity & Growth Capital",
      "Venture Capital Fundraising",
      "Pre-IPO & Strategic Investments",
      "Promoter & Business Expansion Funding",
    ],
    button: "Explore Equity Fundraising",
    href: "/services#equity-fundraising",
    image: "/equity-fundraising.jpeg",
  },
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right",
  );

  const goTo = (index: number) => {
    if (isAnimating) return;

    let nextIndex = index;

    if (index < 0) {
      nextIndex = SERVICES.length - 1;
    }

    if (index >= SERVICES.length) {
      nextIndex = 0;
    }

    if (nextIndex === activeIndex) return;
    if (
      (activeIndex === SERVICES.length - 1 && nextIndex === 0) ||
      nextIndex > activeIndex
    ) {
      setSlideDirection("right");
    } else {
      setSlideDirection("left");
    }

    setPreviousIndex(activeIndex);
    setActiveIndex(nextIndex);
    setIsAnimating(true);

    window.setTimeout(() => {
      setPreviousIndex(nextIndex);
      setIsAnimating(false);
    }, 500);
  };

  const currentService = SERVICES[activeIndex];
  const oldService = SERVICES[previousIndex];

  return (
    <section className="bg-[#FBF9F6] px-4 py-[70px] sm:px-6 lg:px-[76px] lg:py-[85px]">
      {/* SLIDE ANIMATION */}
      <style jsx>{`
        @keyframes servicesCardInFromRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes servicesCardInFromLeft {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes servicesCardOutToLeft {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }

        @keyframes servicesCardOutToRight {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(100%);
          }
        }

        .services-card-in-right {
          animation: servicesCardInFromRight 500ms
            cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .services-card-in-left {
          animation: servicesCardInFromLeft 500ms cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .services-card-out-left {
          animation: servicesCardOutToLeft 500ms cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .services-card-out-right {
          animation: servicesCardOutToRight 500ms cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }
      `}</style>

      {/* TABS */}
      <div className="mx-auto mb-[80px] flex w-fit max-w-full items-center rounded-[15px] border-2 border-[#e4e7e5] bg-white p-[5px]">
        {SERVICES.map((service, index) => (
          <button
            key={service.id}
            type="button"
            onClick={() => goTo(index)}
            className={`
              min-w-[190px]
              rounded-[13px]
              px-[14px]
              py-[16px]
              font-sans
              text-[15px]
              font-[500]
              leading-none
              transition-all
              duration-300
              sm:min-w-[195px]
              lg:min-w-[170px]
              ${
                activeIndex === index
                  ? "bg-[#003d33] text-white"
                  : "bg-transparent text-[#073d34] hover:bg-[#073d34]/[0.05]"
              }
            `}
          >
            {service.tab}
          </button>
        ))}
      </div>

      {/* CARD */}
      <div className="relative mx-auto mt-[80px] w-full max-w-[1140px] overflow-hidden rounded-[30px] border border-[#e1e4e2] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.06)]">
        {/* CARD VIEWPORT */}
        <div className="relative min-h-[650px] overflow-hidden">
          {/* OLD CARD */}
          {isAnimating && (
            <div
              className={`absolute inset-0 grid min-h-[650px] w-full grid-cols-1 lg:grid-cols-[1fr_1fr] ${
                slideDirection === "right"
                  ? "services-card-out-left"
                  : "services-card-out-right"
              }`}
            >
              {/* LEFT CONTENT */}
              <div className="flex flex-col justify-start px-[54px] pb-[70px] pt-[110px] sm:px-[60px] lg:px-[55px]">
                {/* LABEL */}
                <div className="mb-[20px] w-fit rounded-full border border-[#d9cdbb] bg-[#faf9f6] px-[14px] py-[1px]">
                  <span className="font-sans font-[700] text-[11px] tracking-[0.09em] text-[#765A23]">
                    {oldService.label}
                  </span>
                </div>

                {/* TITLE */}
                <h3 className="font-display text-[44px] font-[500] leading-[1.05] tracking-[-0.025em] text-[#000F09] sm:text-[54px]">
                  {oldService.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-[24px] max-w-[500px] font-sans text-[15px] font-[400] leading-[1.55] text-[#424845]">
                  {oldService.description}
                </p>

                {/* KEY FACILITIES */}
                <div className="mt-[38px]">
                  <h4 className="mb-[16px] font-sans text-[13px] font-bold tracking-[0.04em] text-[#765A23]">
                    KEY FACILITIES
                  </h4>

                  <div className="grid grid-cols-1 font-[400] gap-x-[35px] gap-y-[13px] sm:grid-cols-2">
                    {oldService.facilities.map((facility) => (
                      <div
                        key={facility}
                        className="flex min-w-0 items-start gap-[10px] whitespace-nowrap font-sans text-[16px] leading-[1.35] text-[#1B1C1A]"
                      >
                        <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#765A23]" />

                        <span className="text-[13px] font-[400]">
                          {facility}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BUTTON */}
                <Link
                  href={oldService.href}
                  className="mt-[48px] inline-flex h-[60px] w-fit min-w-[315px] items-center justify-center gap-[12px] rounded-[12px] bg-[#052E26] px-[30px] font-sans text-[20px] font-semibold leading-none text-white shadow-[0_5px_10px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#06483d]"
                >
                  {oldService.button}
                  <span className="text-[17px] font-[600] leading-none">→</span>
                </Link>
              </div>

              {/* IMAGE */}
              <div className="flex items-start justify-center pb-[20px] pt-[64px]">
                <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-[20px]">
                  <Image
                    src={oldService.image}
                    alt={oldService.title}
                    fill
                    priority={previousIndex === 0}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 520px"
                  />
                </div>
              </div>
            </div>
          )}

          {/* NEW CARD */}
          <div
            key={`${currentService.id}-${activeIndex}`}
            className={`relative grid min-h-[650px] w-full grid-cols-1 lg:grid-cols-[1fr_1fr] ${
              isAnimating
                ? slideDirection === "right"
                  ? "services-card-in-right"
                  : "services-card-in-left"
                : ""
            }`}
          >
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-start px-[54px] pb-[70px] pt-[110px] sm:px-[60px] lg:px-[55px]">
              {/* LABEL */}
              <div className="mb-[20px] w-fit rounded-full border border-[#d9cdbb] bg-[#faf9f6] px-[14px] py-[1px]">
                <span className="font-sans font-[700] text-[11px] tracking-[0.09em] text-[#765A23]">
                  {currentService.label}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="font-display text-[44px] font-[500] leading-[1.05] tracking-[-0.025em] text-[#000F09] sm:text-[54px]">
                {currentService.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-[24px] max-w-[500px] font-sans text-[15px] font-[400] leading-[1.55] text-[#424845]">
                {currentService.description}
              </p>

              {/* KEY FACILITIES */}
              <div className="mt-[38px]">
                <h4 className="mb-[16px] font-sans text-[13px] font-bold tracking-[0.04em] text-[#765A23]">
                  KEY FACILITIES
                </h4>

                <div className="grid grid-cols-1 font-[400] gap-x-[35px] gap-y-[13px] sm:grid-cols-2">
                  {currentService.facilities.map((facility) => (
                    <div
                      key={facility}
                      className="flex min-w-0 items-start gap-[10px] whitespace-nowrap font-sans text-[16px] leading-[1.35] text-[#1B1C1A]"
                    >
                      <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#765A23]" />

                      <span className="text-[13px] font-[400]">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* BUTTON */}
              <Link
                href={currentService.href}
                className="mt-[48px] inline-flex h-[60px] w-fit min-w-[315px] items-center justify-center gap-[12px] rounded-[12px] bg-[#052E26] px-[30px] font-sans text-[20px] font-semibold leading-none text-white shadow-[0_5px_10px_rgba(0,0,0,0.12)] transition-all duration-200 hover:bg-[#06483d]"
              >
                {currentService.button}
                <span className="text-[17px] font-[600] leading-none">→</span>
              </Link>
            </div>

            {/* IMAGE */}
            <div className="flex items-start justify-center pb-[20px] pt-[64px]">
              <div className="relative aspect-square w-full max-w-[500px] overflow-hidden rounded-[20px]">
                <Image
                  src={currentService.image}
                  alt={currentService.title}
                  fill
                  priority={activeIndex === 0}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SLIDER CONTROLS */}
      <div className="mt-[54px] flex items-center justify-center gap-[28px]">
        {/* PREVIOUS */}
        <button
          type="button"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Previous service"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#e0e4e2] bg-white text-[#000F09] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:-translate-x-1 hover:shadow-[0_5px_14px_rgba(0,0,0,0.08)]"
        >
          <ArrowLeft size={22} strokeWidth={1.8} />
        </button>

        {/* DOTS */}
        <div className="flex items-center gap-[10px]">
          {SERVICES.map((service, index) => (
            <button
              key={service.id}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${service.tab}`}
              className={`
                h-[12px]
                w-[12px]
                rounded-full
                transition-all
                duration-300
                ${
                  activeIndex === index
                    ? "scale-100 bg-[#003d33]"
                    : "bg-[#d9ddda]"
                }
              `}
            />
          ))}
        </div>

        {/* NEXT */}
        <button
          type="button"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Next service"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#e0e4e2] bg-white text-[#000F09] shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-200 hover:translate-x-1 hover:shadow-[0_5px_14px_rgba(0,0,0,0.08)]"
        >
          <ArrowRight size={22} strokeWidth={1.8} />
        </button>
      </div>
    </section>
  );
}
