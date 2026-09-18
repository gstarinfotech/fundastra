"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactAdvisorySection() {
  return (
    <section className="bg-[#F6F4F1] px-4 py-7 sm:px-6 sm:py-[55px] lg:px-[90px] lg:py-[58px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">
        {/* LEFT */}
        <div className="flex flex-col justify-between px-[28px] pt-[8px] pb-[28px] sm:px-[36px] sm:py-[16px]">
          {/* LOGO */}
          <div>
            <Image
              src="/logo.png"
              alt="Fund Astra"
              width={230}
              height={81}
              className="h-auto w-full max-w-[230px] object-contain object-left sm:h-[81px] sm:w-[230px]"
            />

            {/* HEADING */}
            <h2 className="mt-[18px] max-w-[460px] font-display text-[28px] font-[500] leading-[1.15] tracking-[-0.025em] text-[#0A271E] sm:text-[32px]">
              Capital, Structured Around Your Ambition.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-[13px] max-w-[523px] font-sans text-[15px] font-[400] leading-[1.5] text-[#77938B] sm:text-[18px] sm:leading-[1.6]">
              Bespoke institutional capital advisory across SME funding,
              structured debt, and equity syndication. Grounded in rigorous
              balance sheet intelligence.
            </p>
          </div>

          {/* BADGE */}
          <div className="mt-[25px] inline-flex max-w-full items-center rounded-[8px] bg-[#052E26] px-[13px] py-[10px]">
            <span className="mr-[7px] h-[7px] w-[7px] rounded-full bg-[#F5F3F0]" />

            <span className="font-sans text-[11px] font-[500] leading-[1.3] text-[#F5F3F0] sm:text-[13px]">
              Confidential Underwriting &amp; Structured Advisory
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full rounded-[13px] bg-[#052E26] px-[24px] py-[32px] sm:px-[42px] sm:py-[40px] lg:h-[401px] lg:w-[572px] lg:px-[31px] lg:py-[50px]">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-white/[0.10] pb-[15px]">
            <span className="font-sans text-[9px] font-[700] uppercase tracking-[0.1em] text-[#F6F4F1] sm:text-[11px] sm:tracking-[0.13em]">
              Capital Advisory Desk
            </span>

            <span className="rounded-[2px] bg-[#FBF9F6] px-2 py-1.5 font-sans text-[8px] font-[700] uppercase leading-[1.2] text-[#122620] sm:px-[9px] sm:py-[7px] sm:text-[10px]">
              Direct Mandate Channel
            </span>
          </div>

          {/* DETAILS */}
          <div>
            <div className="flex flex-col items-start gap-1 border-b border-white/[0.10] py-[15px] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
              <span className="font-sans text-[13px] font-[400] text-[#F6F4F1]">
                Direct Mandate Inquiries
              </span>

              <span className="font-sans text-[14px] font-[600] leading-[1.25] text-[#FBF9F6] sm:text-[17px] sm:leading-normal">
                advisory@fundastra.com
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 border-b border-white/[0.10] py-[15px] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
              <span className="font-sans text-[13px] font-[400] text-[#F6F4F1]">
                Financial Centres
              </span>

              <span className="font-sans text-[14px] font-[600] leading-[1.25] text-[#FBF9F6] sm:text-[17px] sm:leading-normal">
                Mumbai • New Delhi • Bengaluru
              </span>
            </div>

            <div className="flex flex-col items-start gap-1 py-[15px] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
              <span className="font-sans text-[13px] font-[400] text-[#F6F4F1]">
                Advisory Scale
              </span>

              <span className="font-sans text-[14px] font-[600] leading-[1.25] text-[#FBF9F6] sm:text-[17px] sm:leading-normal">
                ₹5 Cr to ₹300 Cr+ Facilities
              </span>
            </div>
          </div>

          <Link
            href="/contact"
            className="mx-auto mt-6 flex h-[52px] w-full max-w-[384px] items-center justify-center gap-[10px] rounded-[3px] bg-[#FBF9F6] px-3 text-center font-sans text-[13px] font-[600] leading-[1.2] text-[#122620] transition-opacity duration-200 hover:opacity-90 sm:mt-[30px] sm:h-[56px] sm:gap-[16px] sm:px-4 sm:text-[17px] sm:leading-normal"
          >
            Discuss Your Funding Requirement
            <ArrowRight size={20} strokeWidth={1.9} />
          </Link>
        </div>
      </div>
    </section>
  );
}