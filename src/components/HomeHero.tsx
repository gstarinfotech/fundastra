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
import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/leads";

type TriageStatus = "idle" | "loading" | "success" | "error";

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
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
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
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function HomeHero() {
  const [triageStatus, setTriageStatus] = useState<TriageStatus>("idle");
  const [triageError, setTriageError] = useState("");

  const handleTriageSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTriageStatus("loading");
    setTriageError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await submitLead("home_triage", {
        fullName: String(formData.get("fullName") ?? ""),
        email: String(formData.get("contact") ?? ""),
        capitalRoute: String(formData.get("capitalRoute") ?? ""),
        targetTicket: String(formData.get("targetTicket") ?? ""),
      });
      setTriageStatus("success");
      form.reset();
    } catch (error) {
      setTriageStatus("error");
      setTriageError(error instanceof Error ? error.message : "Something went wrong.");
    }
  };
  return (
    <>
      <section
        className="
    relative
    z-10
    min-h-[760px]
    overflow-hidden

    sm:min-h-screen
  "
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/Home-main.jpg"
            alt="FUND ASTRA advisory consultation"
            fill
            priority
            sizes="100vw"
            className="
        object-cover
        object-[58%_center]

        sm:object-[45%_center]

        lg:object-center
      "
          />

          {/* Dark green overlay */}
          <div className="absolute inset-0 bg-[#003b32]/65" />

          {/* Extra subtle dark overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <Navbar />

        <div
          className="
      mx-auto
      grid
      w-full
      max-w-[1830px]
      grid-cols-1

      gap-5
      px-4
      pb-8
      pt-[120px]

      sm:gap-10
      sm:px-6
      sm:pt-[135px]

      xl:grid-cols-[minmax(0,1fr)_425px]
      lg:gap-10
      lg:px-10
      lg:pt-[135px]
      xl:px-[82px]
      xl:pt-[195px]
    "
        >
          <motion.div
            className="
        min-w-0
        w-full
      "
            variants={heroContainer}
            initial="hidden"
            animate="show"
          >
            {/* Eyebrow */}
            <motion.div
              variants={heroItem}
              className="
          mb-4
          inline-flex
          w-fit
          max-w-full
          items-center
          rounded-full
          bg-white
          px-3
          py-[5px]

          sm:mb-[25px]
          sm:px-[18px]
        "
            >
              <span
                className="
            font-sans
            text-[9px]
            font-bold
            leading-none
            tracking-[0.025em]
            text-[#052c25]

            sm:text-[17px]
          "
              >
                SMART FINANCIAL STRATEGIES
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={heroItem}
              className="
          w-full
          max-w-[1000px]
          font-display
          text-[39px]
          font-medium
          leading-[0.98]
          tracking-[-0.028em]
          text-white

          xs:text-[42px]
          sm:text-[66px]
          lg:text-[76px]
        "
            >
              Capital Decisions.
              <br />
              Built for Your Next Move.
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="
          mt-5
          w-full
          max-w-[1000px]
          font-sans
          text-[12.5px]
          font-normal
          leading-[1.48]
          tracking-[-0.005em]
          text-white

          sm:mt-[38px]
          sm:text-[20px]
          sm:leading-[1.58]
        "
            >
              From business funding and structured debt to equity fundraising
              and strategic capital advisory, we help businesses make smarter
              financial decisions. We assess your requirements, structure the
              right solution, and connect you with the right capital partners
              for sustainable growth.
            </motion.p>

            {/* =================================================
          CTA
          Mobile = SIDE BY SIDE
      ================================================= */}
            <motion.div
              variants={heroItem}
              className="
          mt-5
          flex
          w-full
          items-center
          gap-2

          sm:mt-[70px]
          sm:gap-[50px]
        "
            >
              {/* Discuss button */}
              <a
                href="/contact"
                className="
            inline-flex
            h-[48px]
            min-w-0
            flex-[1.35]
            items-center
            justify-center
            rounded-[10px]
            bg-white
            px-2
            text-center
            font-sans
            text-[10px]
            font-semibold
            leading-[1.15]
            text-[#073d34]
            shadow-sm
            transition-opacity
            hover:opacity-90

            sm:h-[60px]
            sm:w-[338px]
            sm:flex-none
            sm:rounded-[17px]
            sm:px-8
            sm:text-[16px]
            sm:leading-none
          "
              >
                Discuss Your Funding Requirement
              </a>

              {/* Explore */}
              <a
                href="/services/sme-funding"
                className="
            inline-flex
            min-w-0
            flex-1
            items-center
            justify-center
            gap-1
            py-3
            text-center
            font-sans
            text-[10.5px]
            font-semibold
            leading-[1.15]
            text-white
            transition-opacity
            hover:opacity-80

            sm:flex-none
            sm:justify-start
            sm:gap-[8px]
            sm:py-4
            sm:text-[18px]
            sm:leading-none
          "
              >
                <span>Explore Our Services</span>

                <span
                  className="
              shrink-0
              text-[13px]
              font-normal
              leading-none

              sm:text-[20px]
            "
                >
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* ===================================================
        RIGHT CARD
    =================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 34,
              scale: 0.97,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
        w-full
        max-w-[370px]
        justify-self-center
        rounded-[10px]
        bg-[#fbfaf7]
        px-4
        pb-5
        pt-5
        shadow-[0_18px_45px_rgba(0,0,0,0.16)]

        sm:px-[26px]
        sm:pb-[25px]
        sm:pt-[25px]

        xl:justify-self-end
      "
          >
            {/* Top */}
            <div className="flex items-center justify-between gap-2">
              <span
                className="
            rounded-[5px]
            bg-[#052E26]
            px-2
            py-1
            font-sans
            text-[8px]
            font-[700]
            leading-none
            tracking-[0.057em]
            text-white

            sm:px-[9px]
            sm:py-[5px]
            sm:text-[11px]
          "
              >
                INSTITUTIONAL TRIAGE
              </span>

              <span
                className="
            flex
            shrink-0
            items-center
            gap-[4px]
            font-sans
            text-[8px]
            font-medium
            text-[#dd1616dd]

            sm:text-[11px]
          "
              >
                <span className="h-[5px] w-[5px] rounded-full bg-[#dd1616dd] sm:h-[6px] sm:w-[6px]" />
                Desk Live
              </span>
            </div>

            {/* Title */}
            <h3
              className="
          mt-1.5
          font-display
          text-[23px]
          font-semibold
          leading-[1.05]
          tracking-[-0.018em]
          text-[#073d34]

          sm:mt-[12px]
          sm:text-[28px]
        "
            >
              Plan Your Capital
            </h3>

            <p
              className="
          mt-0.5
          max-w-[350px]
          font-sans
          text-[11px]
          leading-[1.3]
          text-[#496f68]

          sm:mt-[8px]
          sm:text-[14px]
        "
            >
              Connect directly with our senior underwriting desk.
            </p>

            {/* Form */}
            {triageStatus === "success" ? (
              <div
                className="
            mt-4
            rounded-[5px]
            bg-emerald-50
            px-4
            py-8
            text-center

            sm:mt-[25px]
          "
              >
                <p className="font-sans text-[12px] font-semibold text-emerald-700 sm:text-[14px]">
                  Request received.
                </p>

                <p className="mt-1 font-sans text-[10px] text-emerald-700/70 sm:text-[12px]">
                  Our desk will reach out shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleTriageSubmit}
                className="
            mt-4
            space-y-2.5

            sm:mt-[25px]
            sm:space-y-[16px]
          "
              >
                {/* Full name */}
                <div>
                  <label
                    className="
                mb-1.5
                block
                font-sans
                text-[8px]
                font-bold
                leading-none
                tracking-[0.035em]
                text-[#073d34]

                sm:mb-[8px]
                sm:text-[11px]
              "
                  >
                    FULL NAME
                  </label>

                  <input
                    name="fullName"
                    type="text"
                    required
                    placeholder="e.g. Rahul Mehta"
                    className="
                h-[37px]
                w-full
                rounded-[5px]
                border
                border-[#d7dcda]
                bg-white
                px-3
                font-sans
                text-[10px]
                text-[#073d34]
                outline-none
                placeholder:text-[#9aa8a4]
                focus:border-[#073d34]

                sm:h-[42px]
                sm:px-[15px]
                sm:text-[13px]
              "
                  />
                </div>

                {/* Email / phone */}
                <div>
                  <label
                    className="
                mb-1.5
                block
                font-sans
                text-[8px]
                font-bold
                leading-none
                tracking-[0.035em]
                text-[#073d34]

                sm:mb-[8px]
                sm:text-[11px]
              "
                  >
                    CORPORATE EMAIL / PHONE
                  </label>

                  <input
                    name="contact"
                    type="text"
                    required
                    placeholder="corporate@company.com / +91"
                    className="
                h-[37px]
                w-full
                rounded-[5px]
                border
                border-[#d7dcda]
                bg-white
                px-3
                font-sans
                text-[10px]
                text-[#073d34]
                outline-none
                placeholder:text-[#9aa8a4]
                focus:border-[#073d34]

                sm:h-[42px]
                sm:px-[15px]
                sm:text-[13px]
              "
                  />
                </div>

                {/* Selects */}
                <div
                  className="
              grid
              grid-cols-2
              gap-1.5

              sm:gap-[10px]
            "
                >
                  <div>
                    <label
                      className="
                  mb-1.5
                  block
                  font-sans
                  text-[8px]
                  font-bold
                  leading-none
                  tracking-[0.035em]
                  text-[#073d34]

                  sm:mb-[8px]
                  sm:text-[11px]
                "
                    >
                      CAPITAL ROUTE
                    </label>

                    <select
                      name="capitalRoute"
                      defaultValue="SME Funding"
                      className="
                  h-[37px]
                  w-full
                  rounded-[5px]
                  border
                  border-[#d7dcda]
                  bg-white
                  px-2
                  font-sans
                  text-[9px]
                  text-[#061812]
                  outline-none
                  focus:border-[#073d34]

                  sm:h-[42px]
                  sm:px-[13px]
                  sm:text-[13px]
                "
                    >
                      <option>SME Funding</option>
                      <option>Structured Debt</option>
                      <option>Equity Fundraising</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="
                  mb-1.5
                  block
                  font-sans
                  text-[8px]
                  font-bold
                  leading-none
                  tracking-[0.035em]
                  text-[#073d34]

                  sm:mb-[8px]
                  sm:text-[11px]
                "
                    >
                      TARGET TICKET
                    </label>

                    <select
                      name="targetTicket"
                      defaultValue="₹5 Cr – ₹25 Cr"
                      className="
                  h-[37px]
                  w-full
                  rounded-[5px]
                  border
                  border-[#d7dcda]
                  bg-white
                  px-2
                  font-sans
                  text-[9px]
                  text-[#061812]
                  outline-none
                  focus:border-[#073d34]

                  sm:h-[42px]
                  sm:px-[13px]
                  sm:text-[13px]
                "
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
                  disabled={triageStatus === "loading"}
                  className="
              mt-1
              flex
              h-[43px]
              w-full
              items-center
              justify-center
              gap-2
              rounded-[5px]
              bg-[#052E26]
              font-sans
              text-[11px]
              font-semibold
              text-white
              transition-opacity
              hover:opacity-90
              disabled:opacity-60

              sm:h-[48px]
              sm:text-[15px]
            "
                >
                  {triageStatus === "loading"
                    ? "Submitting..."
                    : "Submit Request"}
                </button>

                {triageStatus === "error" && (
                  <p className="text-center font-sans text-[10px] text-red-600 sm:text-[12px]">
                    {triageError}
                  </p>
                )}

                {/* NDA */}
                <p
                  className="
              flex
              items-center
              justify-center
              gap-[5px]
              pt-0.5
              text-center
              font-sans
              text-[8px]
              leading-[1.3]
              text-[#55716b]

              sm:gap-[7px]
              sm:pt-[1px]
              sm:text-[11px]
            "
                >
                  <svg
                    width="9"
                    height="11"
                    viewBox="0 0 10 12"
                    fill="none"
                    aria-hidden="true"
                    className="shrink-0"
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
            )}
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          OUR SERVICES INTRO
      ========================================================= */}
      <section
        className="
    bg-white
    px-4
    py-7

    sm:px-8
    sm:py-[80px]

    lg:py-[60px]
  "
      >
        <div className="mx-auto max-w-[1500px] text-center">
          {/* Badge */}
          <Reveal>
            <div
              className="
          mb-5
          inline-flex
          items-center
          rounded-[8px]
          bg-[#052E26]
          px-3
          py-2

          sm:mb-[25px]
          sm:rounded-[10px]
          sm:px-[18px]
          sm:py-[10px]
        "
            >
              <span
                className="
            font-sans
            text-[13px]
            font-semibold
            leading-none
            tracking-[0.02em]
            text-white

            sm:text-[20px]
          "
              >
                OUR SERVICES
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.1}>
            <h2
              className="
          mx-auto
          w-full
          font-display
          text-[30px]
          font-[500]
          leading-[1.08]
          tracking-[-0.025em]
          text-[#052E26]

          sm:text-[48px]

          lg:text-[43px]
        "
            >
              The Right Capital. The Right Structure. The Right Growth.
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.2}>
            <p
              className="
          mx-auto
          mt-3
          max-w-[1030px]
          font-sans
          text-[14px]
          font-[400]
          leading-[1.5]
          tracking-[-0.005em]
          text-[#424845]

          sm:text-[18px]
        "
            >
              Every business has a different capital requirement. We bring
              together institutional debt, structured credit, and equity
              solutions to create financing strategies designed around your
              business objectives, financial position, and long-term
              ambitions.
            </p>
          </Reveal>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <Reveal>
        <ServicesSection />
      </Reveal>

      {/* =========================================================
          DEBT CARD
      ========================================================= */}
      <section
        className="
          bg-white
          px-4
          py-6

          sm:px-8
          sm:py-[50px]
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1400px]
            flex-col
            items-center
            text-center
          "
        >
          {/* Badge */}
          <Reveal>
            <div
              className="
                inline-flex
                items-center
                rounded-[9px]
                bg-[#052E26]
                px-3
                py-2

                sm:rounded-[11px]
                sm:px-[14px]
                sm:py-[8px]
              "
            >
              <span
                className="
                  font-sans
                  text-[12px]
                  font-[700]
                  leading-[1.1]
                  tracking-[0.025em]
                  text-[#FBF9F6]

                  sm:text-[20px]
                "
              >
                SOVEREIGN CAPITAL CALCULATOR
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.1}>
            <h2
              className="
                mt-3
                font-display
                text-[32px]
                font-[500]
                leading-[1.05]
                tracking-[-0.025em]
                text-[#052E26]

                sm:mt-[14px]
                sm:text-[58px]
              "
            >
              Debt Service &amp; EMI Matrix
            </h2>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <EMICalculator />
      </Reveal>

      <ContactSection />

      {/* =========================================================
          COMMITMENT
      ========================================================= */}
      <section
        className="
    border-t-[2px]
    border-[#003D33]
    bg-white
    px-4
    py-10

    sm:px-8
    sm:py-[68px]

    lg:py-[54px]
  "
      >
        <div className="mx-auto max-w-[1450px] text-center">
          {/* Badge */}
          <Reveal>
            <div
              className="
          mb-4
          inline-flex
          items-center
          rounded-[9px]
          bg-[#052E26]
          px-4
          py-2

          sm:mb-[18px]
          sm:rounded-[11px]
          sm:px-[18px]
          sm:py-[9px]
        "
            >
              <span
                className="
            font-sans
            text-[13px]
            font-[700]
            leading-none
            tracking-[0.02em]
            text-white

            sm:text-[20px]
          "
              >
                OUR COMMITMENT
              </span>
            </div>
          </Reveal>

          {/* Heading */}
          <Reveal delay={0.1}>
            <h2
              className="
          font-display
          text-[31px]
          font-[500]
          leading-[1.08]
          tracking-[-0.025em]
          text-[#052E26]

          sm:text-[50px]

          lg:text-[52px]
        "
            >
              Your business goals are our top priority
            </h2>
          </Reveal>

          {/* Description */}
          <Reveal delay={0.2}>
            <p
              className="
          mx-auto
          mt-3
          max-w-[1200px]
          font-sans
          text-[14px]
          font-[400]
          leading-[1.55]
          tracking-[-0.005em]
          text-[#424845]

          sm:mt-[10px]
          sm:text-[18px]
        "
            >
              We embody unwavering expertise, garnered through years of
              industry mastery. Our team’s extensive knowledge and refined
              skills ensure effective solutions, fostering trust and
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