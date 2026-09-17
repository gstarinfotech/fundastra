"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ServicesSection from "./ServicesSection";
import EMICalculator from "./EMICalculator";
import ContactSection from "./ContactSection";
import GrowthCapitalSection from "./GrowthCapitalSection";
import TestimonialsSection from "./TestimonialsSection";
import ContactAdvisorySection from "./ContactAdvisorySection";
import Footer from "./Footer";
import { motion } from "framer-motion";

function Reveal({
  children,
  delay = 0,
  y = 40,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const heroContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function HomeHero() {
  return (
    <>
      {/* HERO */}
      <section className="relative z-10 min-h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Home-main.jpg"
            alt="FUND ASTRA advisory consultation"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Figma dark green overlay */}
          <div className="absolute inset-0 bg-[#003b32]/65" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Navbar */}
        <Navbar />

        {/* Main hero */}
        <div className="mx-auto grid w-full max-w-[1830px] grid-cols-1 gap-10 px-4 pb-8 pt-[125px] sm:px-6 sm:pt-[135px] lg:grid-cols-[minmax(0,1fr)_425px] lg:gap-10 lg:px-[82px] lg:pt-[195px]">
          {/* LEFT */}
          <motion.div
            className="min-w-0"
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div
              variants={heroItem}
              className="mb-[25px] inline-flex w-fit items-center rounded-full bg-white px-[18px] py-[5px]"
            >
              <span className="font-sans text-[17px] font-bold leading-none tracking-[0.025em] text-[#052c25]">
                SMART FINANCIAL STRATEGIES
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroItem}
              className="max-w-[1000px] font-display text-[58px] font-medium leading-[0.98] tracking-[-0.028em] text-white sm:text-[66px] lg:text-[76px]"
            >
              Capital Decisions.
              <br />
              Built for Your Next Move.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="mt-[38px] max-w-[1000px] font-sans text-[20px] font-normal leading-[1.58] tracking-[-0.005em] text-white"
            >
              From business funding and structured debt to equity fundraising
              and strategic capital advisory, we help businesses make smarter
              financial decisions. We assess your requirements, structure the
              right solution, and connect you with the right capital partners
              for sustainable growth.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={heroItem}
              className="mt-[70px] flex flex-wrap items-center gap-[50px]"
            >
              <a
                href="/contact"
                className="inline-flex h-[60px] w-[338px] max-w-full items-center justify-center rounded-[17px] bg-white px-8 font-sans text-[16px] font-semibold leading-none text-[#073d34] shadow-sm transition-opacity hover:opacity-90"
              >
                Discuss Your Funding Requirement
              </a>

              <a
                href="/services/sme-funding"
                className="inline-flex items-center gap-[8px] py-4 font-sans text-[18px] font-semibold leading-none text-white transition-opacity hover:opacity-80"
              >
                Explore Our Services
                <span className="text-[20px] font-normal leading-none">→</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-[370px] max-w-full justify-self-end rounded-[10px] bg-[#fbfaf7] px-[26px] pb-[25px] pt-[25px] shadow-[0_18px_45px_rgba(0,0,0,0.16)]"
          >
            {/* Top */}
            <div className="flex items-center justify-between">
              <span className="rounded-[5px] bg-[#052E26] px-[9px] py-[5px] font-sans font-[700] text-[11px] leading-none tracking-[0.057em] text-[#ffffff]">
                INSTITUTIONAL TRIAGE
              </span>

              <span className="flex items-center gap-[4px] font-sans text-[11px] font-medium text-[#dd1616dd]">
                <span className="h-[6px] w-[6px] rounded-full bg-[#dd1616dd]" />
                Desk Live
              </span>
            </div>

            {/* Title */}
            <h3 className="mt-[12px] font-display text-[28px] font-semibold leading-[1.05] tracking-[-0.018em] text-[#073d34]">
              Plan Your Capital
            </h3>

            <p className="mt-[8px] max-w-[350px] font-sans text-[14px] leading-[1.3] text-[#496f68]">
              Connect directly with our senior underwriting desk.
            </p>

            {/* Form */}
            <form className="mt-[25px] space-y-[16px]">
              {/* Full name */}
              <div>
                <label className="mb-[8px] block font-sans text-[11px] font-bold leading-none tracking-[0.035em] text-[#073d34]">
                  FULL NAME
                </label>

                <input
                  type="text"
                  placeholder="e.g. Rahul Mehta"
                  className="h-[42px] w-full rounded-[5px] border border-[#d7dcda] bg-white px-[15px] font-sans text-[13px] text-[#073d34] outline-none placeholder:text-[#9aa8a4] focus:border-[#073d34]"
                />
              </div>

              {/* Email / phone */}
              <div>
                <label className="mb-[8px] block font-sans text-[11px] font-bold leading-none tracking-[0.035em] text-[#073d34]">
                  CORPORATE EMAIL / PHONE
                </label>

                <input
                  type="text"
                  placeholder="corporate@company.com / +91"
                  className="h-[42px] w-full rounded-[5px] border border-[#d7dcda] bg-white px-[15px] font-sans text-[13px] text-[#073d34] outline-none placeholder:text-[#9aa8a4] focus:border-[#073d34]"
                />
              </div>

              {/* Selects */}
              <div className="grid grid-cols-2 gap-[10px]">
                <div>
                  <label className="mb-[8px] block font-sans text-[11px] font-bold leading-none tracking-[0.035em] text-[#073d34]">
                    CAPITAL ROUTE
                  </label>

                  <select
                    defaultValue="SME Funding"
                    className="h-[42px] w-full rounded-[5px] border border-[#d7dcda] bg-white px-[13px] font-sans text-[13px] text-[#a8b0ae] outline-none focus:border-[#073d34]"
                  >
                    <option>SME Funding</option>
                    <option>Structured Debt</option>
                    <option>Equity Fundraising</option>
                  </select>
                </div>

                <div>
                  <label className="mb-[8px] block font-sans text-[11px] font-bold leading-none tracking-[0.035em] text-[#073d34]">
                    TARGET TICKET
                  </label>

                  <select
                    defaultValue="₹5 Cr – ₹25 Cr"
                    className="h-[42px] w-full rounded-[5px] border border-[#d7dcda] bg-white px-[13px] font-sans text-[13px] text-[#a8b0ae] outline-none focus:border-[#073d34]"
                  >
                    <option>₹5 Cr – ₹25 Cr</option>
                    <option>₹25 Cr – ₹100 Cr</option>
                    <option>₹100 Cr+</option>
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-[1px] flex h-[48px] w-full items-center justify-center gap-[9px] rounded-[5px] bg-[#052E26] font-sans text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
              >
                Submit Request
              </button>

              {/* NDA */}
              <p className="flex items-center justify-center gap-[7px] pt-[1px] font-sans text-[11px] leading-[1.3] text-[#55716b]">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5V3.5a3 3 0 116 0V5m-7 0h8a1 1 0 011 1v4.5a1 1 0 01-1 1H1a1 1 0 01-1-1V6a1 1 0 011-1z"
                    stroke="currentColor"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
                Strictly confidential under NDA · Direct desk triage
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* OUR SERVICES INTRO */}
      <section className="bg-white px-6 py-[80px] sm:px-8 lg:py-[60px]">
        <div className="mx-auto max-w-[1500px] text-center">
          {/* Badge */}
          <Reveal>
            <div className="mb-[25px] inline-flex items-center rounded-[10px] bg-[#052E26] px-[18px] py-[10px]">
              <span className="font-sans text-[20px] font-semibold leading-none tracking-[0.02em] text-white">
                OUR SERVICES
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.1}>
            <h2 className="mx-auto whitespace-nowrap font-display text-[42px] font-[500] leading-[1.08] tracking-[-0.025em] text-[#052E26] sm:text-[48px] lg:text-[43px]">
              The Right Capital. The Right Structure. The Right Growth.
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.2}>
            <p className="mx-auto mt-[12px] max-w-[1030px] font-sans text-[18px] font-[400] leading-[1.42] tracking-[-0.005em] text-[#424845] sm:text-[18px]">
              Every business has a different capital requirement. We bring
              together institutional debt,
              <br className="hidden lg:block" />
              structured credit, and equity solutions to create financing
              strategies designed around your
              <br className="hidden lg:block" />
              business objectives, financial position, and long-term ambitions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <Reveal>
        <ServicesSection />
      </Reveal>

      {/* Debt card */}
      <section className="bg-white px-6 py-[50px] sm:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center text-center">
          {/* BADGE */}
          <Reveal>
            <div className="inline-flex items-center rounded-[11px] bg-[#052E26] px-[14px] py-[8px]">
              <span className="font-sans text-[20px] font-[700] leading-[1.1] tracking-[0.025em] text-[#FBF9F6]">
                SOVEREIGN CAPITAL CALCULATOR
              </span>
            </div>
          </Reveal>

          {/* HEADING */}
          <Reveal delay={0.1}>
            <h2 className="mt-[14px] font-display text-[43px] font-[500] leading-[1.05] tracking-[-0.025em] text-[#052E26] sm:text-[58px]">
              Debt Service &amp; EMI Matrix
            </h2>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <EMICalculator />
      </Reveal>

      <ContactSection />

      {/* Commitment */}
      <section className="border-t-[2px] border-[#003D33] bg-white px-6 py-[68px] sm:px-8 lg:py-[54px]">
        <div className="mx-auto max-w-[1450px] text-center">
          {/* BADGE */}
          <Reveal>
            <div className="mb-[18px] inline-flex items-center rounded-[11px] bg-[#052E26] px-[18px] py-[9px]">
              <span className="font-sans text-[20px] font-[700] leading-none tracking-[0.02em] text-white">
                OUR COMMITMENT
              </span>
            </div>
          </Reveal>

          {/* HEADING */}
          <Reveal delay={0.1}>
            <h2 className="font-display text-[43px] font-[500] leading-[1.08] tracking-[-0.025em] text-[#052E26] sm:text-[50px] lg:text-[52px]">
              Your business goals are our top priority
            </h2>
          </Reveal>

          {/* DESCRIPTION */}
          <Reveal delay={0.2}>
            <p className="mx-auto mt-[10px] max-w-[1200px] font-sans text-[18px] font-[400] leading-[1.55] tracking-[-0.005em] text-[#424845]">
              We embody unwavering expertise, garnered through years of industry
              mastery. Our team’s extensive knowledge and
              <br className="hidden lg:block" />
              refined skills ensure effective solutions, fostering trust and
              delivering excellence.
            </p>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <GrowthCapitalSection />
      </Reveal>

      <TestimonialsSection />

      <Reveal>
        <ContactAdvisorySection />
      </Reveal>

      <Footer />
    </>
  );
}