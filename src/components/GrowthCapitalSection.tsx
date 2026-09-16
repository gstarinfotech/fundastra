"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

// Stops along the curve
const STAGES = [
  {
    x: 190,
    y: 228,
    label: "Seed & Working Capital",
    dotBorder: "#B08316",
    gold: false,
  },
  {
    x: 480,
    y: 175,
    label: "Multi-Lender Syndication",
    dotBorder: "#B08316",
    gold: false,
  },
  {
    x: 745,
    y: 118,
    label: "Structured Debt & Mezzanine",
    dotBorder: "#8B8F89",
    gold: false,
  },
  {
    x: 1010,
    y: 88,
    label: "Pre-IPO & Institutional Equity",
    dotBorder: "#B08316",
    gold: true,
  },
] as const;

export default function GrowthCapitalSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const linePathRef = useRef<SVGPathElement>(null);
  const darkPathRef = useRef<SVGPathElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const paths = [linePathRef.current, darkPathRef.current];

    paths.forEach((path) => {
      if (!path) return;

      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const paths = [linePathRef.current, darkPathRef.current];

    paths.forEach((path) => {
      if (!path) return;

      path.getBoundingClientRect();

      path.style.transition = "stroke-dashoffset 1.6s ease-out";
      path.style.strokeDashoffset = "0";
    });
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative z-0 bg-[#FBF9F6] px-4 py-[50px] sm:px-6 lg:px-[76px] lg:py-[50px]"
    >
      <style jsx>{`
        @keyframes growthStageReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .growth-stage-hidden {
          opacity: 0;
        }

        .growth-stage-visible {
          animation: growthStageReveal 420ms ease-out forwards;
        }

        .stage-1 {
          animation-delay: 120ms;
        }

        .stage-2 {
          animation-delay: 380ms;
        }

        .stage-3 {
          animation-delay: 640ms;
        }

        .stage-4 {
          animation-delay: 850ms;
        }
      `}</style>

      <div className="mx-auto max-w-[1184px]">
        {/* CTA */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex h-[42px] items-center justify-center gap-[10px] bg-[#072E26] px-[18px] font-sans text-[16px] font-[600] uppercase tracking-[0.01em] text-white shadow-[0_2px_5px_rgba(0,0,0,0.08)] transition-opacity hover:opacity-90"
          >
            Explore Growth Capital
            <ArrowRight size={18} strokeWidth={1.8} />
          </Link>
        </div>

        {/* ARC HEADER */}
        <div className="mt-[70px] border-b border-[#E6E2DB] pb-[12px]">
          <div className="flex flex-col gap-[15px] lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-[7px]">
              <span className="h-[2px] w-[8px] bg-[#B88618]" />
              <span className="font-sans text-[10px] font-[700] uppercase tracking-[0.01em] text-[#10221D]">
                Sovereign Capital Deployment ARC
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-[20px] font-sans text-[11px] font-[500] text-[#6B716E]">
              <span>Stage 01: Inception</span>
              <span className="text-[#5F6863]">→</span>
              <span>Stage 02: Expansion</span>
              <span className="text-[#5F6863]">→</span>
              <span>Stage 03: Syndication</span>
              <span className="text-[#5F6863]">→</span>
              <span className="font-[600] text-[#0A271E]">
                Stage 04: Institutional Liquidity
              </span>
            </div>
          </div>
        </div>

        {/* CHART */}
        <div className="relative z-0 mt-[75px] h-[215px] w-full">
          {/* GRID LINES */}
          <div className="absolute left-0 right-0 top-[32px] border-t border-dashed border-[#E8E4DD]" />
          <div className="absolute left-0 right-0 top-[93px] border-t border-dashed border-[#E8E4DD]" />
          <div className="absolute left-0 right-0 top-[154px] border-t border-dashed border-[#E8E4DD]" />

          {/* FILLED AREA + SINGLE CONTINUOUS CURVE */}
          <svg
            viewBox="0 0 1080 215"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="growthArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D9DDD7" stopOpacity="0.72" />
                <stop offset="100%" stopColor="#EDE8D9" stopOpacity="0.48" />
              </linearGradient>

              {/* BROWN → DARK GREEN SINGLE LINE */}
              <linearGradient id="growthCurve" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#B08316" />
                <stop offset="58%" stopColor="#B08316" />
                <stop offset="68%" stopColor="#273D24" />
                <stop offset="100%" stopColor="#273D24" />
              </linearGradient>
            </defs>

            {/* AREA */}
            <path
              d="
                M 20 154
                C 150 143, 270 117, 365 101
                C 480 82, 570 67, 625 55
                C 760 29, 850 15, 1005 6
                C 1020 5, 1035 4, 1050 4
                L 1050 154
                L 20 154
                Z
              "
              fill="url(#growthArea)"
            />

            {/* ONE CONTINUOUS CURVE */}
            <path
              ref={linePathRef}
              d="
                M 20 154
                C 150 143, 270 117, 365 101
                C 480 82, 570 67, 625 55
                C 760 29, 850 15, 1005 6
                C 1020 5, 1035 4, 1050 4
              "
              fill="none"
              stroke="url(#growthCurve)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>

          {/* STAGE 1 COORDINATE */}
          <div
            className="absolute left-[7%] top-[154px] z-10"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-[2px] border-[#B08316] bg-[#FBF9F6]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#003D33]" />
            </div>
          </div>

          {/* STAGE 1 VERTICAL GUIDE */}
          <div className="absolute bottom-0 left-[7%] top-[154px] border-l border-dashed border-[#D8D3C8]" />

          {/* STAGE 1 NAME */}
          <div className="absolute left-[7%] top-[98px] z-20 -translate-x-1/2">
            <div
              className={
                isVisible
                  ? "growth-stage-visible stage-1"
                  : "growth-stage-hidden"
              }
            >
              <div className="whitespace-nowrap rounded-[2px] bg-[#003D33] px-[12px] py-[7px] shadow-[0_5px_12px_rgba(0,0,0,0.10)]">
                <span className="font-sans text-[10px] font-[500] text-white">
                  Seed &amp; Working Capital
                </span>
              </div>
            </div>
          </div>

          {/* STAGE 2 COORDINATE */}
          <div
            className="absolute left-[30%] top-[101px] z-10"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-[2px] border-[#B08316] bg-[#FBF9F6]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#003D33]" />
            </div>
          </div>

          {/* STAGE 2 VERTICAL GUIDE */}
          <div className="absolute bottom-0 left-[30%] top-[101px] border-l border-dashed border-[#D8D3C8]" />

          {/* STAGE 2 NAME */}
          <div className="absolute left-[30%] top-[43px] z-20 -translate-x-1/2">
            <div
              className={
                isVisible
                  ? "growth-stage-visible stage-2"
                  : "growth-stage-hidden"
              }
            >
              <div className="whitespace-nowrap rounded-[2px] bg-[#003D33] px-[13px] py-[7px] shadow-[0_5px_12px_rgba(0,0,0,0.10)]">
                <span className="font-sans text-[10px] font-[500] text-white">
                  Multi-Lender Syndication
                </span>
              </div>
            </div>
          </div>

          {/* STAGE 3 COORDINATE */}
          <div
            className="absolute left-[55%] top-[55px] z-10"
            style={{ transform: "translate(-50%, -50%)" }}
          >
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-[2px] border-[#8B8F89] bg-[#FBF9F6]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#003D33]" />
            </div>
          </div>

          {/* STAGE 3 VERTICAL GUIDE */}
          <div className="absolute bottom-0 left-[55%] top-[55px] border-l border-dashed border-[#D8D3C8]" />

          {/* STAGE 3 NAME */}
          <div className="absolute left-[55%] top-[-2px] z-20 -translate-x-1/2">
            <div
              className={
                isVisible
                  ? "growth-stage-visible stage-3"
                  : "growth-stage-hidden"
              }
            >
              <div className="whitespace-nowrap rounded-[2px] bg-[#003D33] px-[13px] py-[7px] shadow-[0_5px_12px_rgba(0,0,0,0.10)]">
                <span className="font-sans text-[10px] font-[500] text-white">
                  Structured Debt &amp; Mezzanine
                </span>
              </div>
            </div>
          </div>

          {/* STAGE 4 COORDINATE */}
          <div
            className="absolute right-[7%] top-[6px] z-10"
            style={{ transform: "translate(50%, -50%)" }}
          >
            <div className="flex h-[18px] w-[18px] items-center justify-center rounded-full border-[2px] border-[#B08316] bg-[#FBF9F6]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#003D33]" />
            </div>
          </div>

          {/* STAGE 4 VERTICAL GUIDE */}
          <div className="absolute bottom-0 right-[7%] top-[6px] border-l border-dashed border-[#D8D3C8]" />

          {/* STAGE 4 NAME */}
          <div className="absolute right-[7%] top-[-44px] z-20 translate-x-1/2">
            <div
              className={
                isVisible
                  ? "growth-stage-visible stage-4"
                  : "growth-stage-hidden"
              }
            >
              <div className="flex items-center whitespace-nowrap rounded-[2px] bg-[#003D33] px-[13px] py-[7px] shadow-[0_5px_12px_rgba(0,0,0,0.10)]">
                <span className="mr-[6px] text-[9px] text-[#B08316]">▮</span>

                <span className="font-sans text-[10px] font-[500] text-white">
                  Pre-IPO &amp; Institutional Equity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* METRICS CARD */}
        <div className="mt-[20px] grid overflow-hidden rounded-[3px] border border-[#E2DED6] bg-[#FBF9F6] shadow-[0_8px_20px_rgba(0,0,0,0.04)] sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-b border-[#E2DED6] px-[27px] py-[37px] lg:border-b-0 lg:border-r">
            <p className="font-sans text-[11px] font-[700] uppercase tracking-[0.18em] text-[#8C9791]">
              Phase I &amp; II Deployed
            </p>

            <div className="mt-[17px] font-display text-[44px] font-[700] leading-none text-[#0A271E]">
              ₹2,400
              <span className="text-[44px] text-[#B08316]">+</span>
              <span className="ml-[4px] font-display text-[24px] text-[#5F6863]">
                Cr
              </span>
            </div>

            <div className="my-[17px] border-t border-[#E2DED6]" />

            <p className="font-sans text-[12px] font-[600] uppercase text-[#0A271E]">
              Capital Structured
            </p>

            <p className="mt-[7px] font-sans text-[13px] font-[400] leading-[1.55] text-[#5F6863]">
              Institutional syndication executed
              <br />
              across senior secured term lines and
              <br />
              working capital.
            </p>
          </div>

          <div className="border-b border-[#E2DED6] px-[27px] py-[37px] sm:border-r lg:border-b-0">
            <p className="font-sans text-[11px] font-[700] uppercase tracking-[0.18em] text-[#8C9791]">
              Syndicate Depth
            </p>

            <div className="mt-[17px] font-display text-[44px] font-[700] leading-none text-[#0A271E]">
              120<span className="text-[44px] text-[#B08316]">+</span>
            </div>

            <div className="my-[17px] border-t border-[#E2DED6]" />

            <p className="font-sans text-[12px] font-[600] uppercase text-[#0A271E]">
              Active Institutional Lenders
            </p>

            <p className="mt-[7px] font-sans text-[13px] font-[400] leading-[1.55] text-[#5F6863]">
              Direct network spanning private
              <br />
              credit funds, NBFCs, and global
              <br />
              venture debt desks.
            </p>
          </div>

          <div className="border-b border-[#E2DED6] px-[27px] py-[37px] lg:border-b-0 lg:border-r">
            <p className="font-sans text-[11px] font-[700] uppercase tracking-[0.18em] text-[#8C9791]">
              Track Record
            </p>

            <div className="mt-[17px] font-display text-[44px] font-[700] leading-none text-[#0A271E]">
              95<span className="text-[44px] text-[#B08316]">+</span>
            </div>

            <div className="my-[17px] border-t border-[#E2DED6]" />

            <p className="font-sans text-[12px] font-[600] uppercase text-[#0A271E]">
              High-Growth Enterprises
            </p>

            <p className="mt-[7px] font-sans text-[13px] font-[400] leading-[1.55] text-[#5F6863]">
              Venture-backed enterprises
              <br />
              empowered across Series A through
              <br />
              Pre-IPO milestones.
            </p>
          </div>

          <div className="px-[27px] py-[37px]">
            <p className="font-sans text-[11px] font-[700] uppercase tracking-[0.18em] text-[#8C9791]">
              Execution Velocity
            </p>

            <div className="mt-[17px] font-display text-[44px] font-[700] leading-none text-[#0A271E]">
              48
              <span className="ml-[4px] font-display text-[24px] text-[#5F6863]">
                Hrs
              </span>
            </div>

            <div className="my-[17px] border-t border-[#E2DED6]" />

            <p className="font-sans text-[12px] font-[600] uppercase text-[#0A271E]">
              Mandate Triage &amp; Appraisal
            </p>

            <p className="mt-[7px] font-sans text-[13px] font-[400] leading-[1.55] text-[#5F6863]">
              Rapid institutional underwriting
              <br />
              assessment with proprietary credit
              <br />
              viability scoring.
            </p>
          </div>
        </div>

        {/* FOOTER NOTES */}
        <div className="mt-[24px] flex flex-col gap-[10px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-[7px]">
            <span className="text-[13px] text-[#003D33]">♢</span>

            <span className="font-sans text-[12px] font-[400] text-[#5F6863]">
              Institutional Governance &amp; SEBI / RBI Compliant Capital
              Structuring
            </span>
          </div>

          <span className="font-sans text-[11px] font-[400] uppercase tracking-[0.02em] text-[#8C9791]">
            FUND ASTRA ADVISORY &amp; CAPITAL PARTNERS • SOVEREIGN DESK
          </span>
        </div>
      </div>
    </section>
  );
}
