"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactAdvisorySection() {
  return (
    <section className="bg-[#F6F4F1] px-4 py-[55px] sm:px-6 lg:px-[90px] lg:py-[58px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 lg:grid-cols-[1.08fr_0.92fr]">
        {/* LEFT */}
        <div className="flex flex-col justify-between px-[28px] py-[28px] sm:px-[36px] sm:py-[16px]">
          {/* LOGO */}
          <div>
            <Image
              src="/logo.png"
              alt="Fund Astra"
              width={230}
              height={81}
              className="h-[81px] w-[230px] object-contain object-left"
            />

            {/* HEADING */}
            <h2 className="mt-[18px] max-w-[460px] font-display text-[32px] font-[500] leading-[1.15] tracking-[-0.025em] text-[#0A271E] sm:text-[32px]">
              Capital, Structured Around Your Ambition.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-[13px] max-w-[523px] font-sans text-[18px] font-[400] leading-[1.6] text-[#77938B]">
              Bespoke institutional capital advisory across SME funding,
              structured debt, and equity syndication. Grounded in rigorous
              balance sheet intelligence.
            </p>
          </div>

          {/* BADGE */}
          <div className="mt-[25px] inline-flex w-fit items-center rounded-[8px] bg-[#052E26] px-[13px] py-[10px]">
            <span className="mr-[7px] h-[7px] w-[7px] rounded-full bg-[#F5F3F0]" />

            <span className="font-sans text-[13px] font-[500] text-[#F5F3F0]">
              Confidential Underwriting &amp; Structured Advisory
            </span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rounded-[13px] w-[572px] h-[401px] bg-[#052E26] px-[31px] py-[50px] sm:px-[42px]">
          {/* HEADER */}
          <div className="flex items-center justify-between border-b border-white/[0.10] pb-[15px]">
            <span className="font-sans text-[11px] font-[700] uppercase tracking-[0.13em] text-[#F6F4F1]">
              Capital Advisory Desk
            </span>

            <span className="rounded-[2px] bg-[#FBF9F6] px-[9px] py-[7px] font-sans text-[10px] font-[700] uppercase text-[#122620]">
              Direct Mandate Channel
            </span>
          </div>

          {/* DETAILS */}
          <div>
            <div className="flex items-center justify-between border-b border-white/[0.10] py-[15px]">
              <span className="font-sans text-[13px] font-[400] text-[#F6F4F1]">
                Direct Mandate Inquiries
              </span>

              <span className="font-sans text-[17px] font-[600] text-[#FBF9F6]">
                advisory@fundastra.com
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-white/[0.10] py-[15px]">
              <span className="font-sans text-[13px] font-[400] text-[#F6F4F1]">
                Financial Centres
              </span>

              <span className="font-sans text-[17px] font-[600] text-[#FBF9F6]">
                Mumbai • New Delhi • Bengaluru
              </span>
            </div>

            <div className="flex items-center justify-between py-[15px]">
              <span className="font-sans text-[13px] font-[400] text-[#F6F4F1]">
                Advisory Scale
              </span>

              <span className="font-sans text-[17px] font-[600] text-[#FBF9F6]">
                ₹5 Cr to ₹300 Cr+ Facilities
              </span>
            </div>
          </div>
          <Link
            href="/contact"
            className="mx-auto mt-[30px] flex h-[56px] w-[384px] items-center justify-center gap-[16px] rounded-[3px] bg-[#FBF9F6] font-sans text-[17px] font-[600] text-[#122620] transition-opacity duration-200 hover:opacity-90"
          >
            Discuss Your Funding Requirement
            <ArrowRight size={20} strokeWidth={1.9} />
          </Link>
        </div>
      </div>
    </section>
  );
}
