"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const cardContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#052E26] px-4 py-[70px] lg:mt-[20px] sm:px-6 lg:px-[72px] lg:pt-[130px]">
      {/* TOP CONTENT */}
      <motion.div
        className="mx-auto flex max-w-[1200px] flex-col items-center text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={cardContainer}
      >
        {/* HEADING */}
        <motion.h2
          variants={fadeUp}
          className="font-display text-[32px] font-[500] leading-[1.05] tracking-[-0.025em] text-white sm:text-[44px]"
        >
          Ready to Accelerate Your Business Growth?
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          variants={fadeUp}
          className="mt-[8px] font-sans text-[10px] font-[400] leading-[29.25px] text-white sm:text-[18px]"
        >
          Let&apos;s explore what disciplined capital thinking can unlock.
        </motion.p>
      </motion.div>

      {/* CONTACT CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-[48px] grid max-w-[1140px] overflow-hidden rounded-[30px] border border-white/20 bg-[#FBF9F6] lg:grid-cols-[1fr_1fr]"
      >
        {/* LEFT FORM */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardContainer}
          className="px-[34px] py-[38px] sm:px-[40px] sm:py-[42px] lg:px-[40px] lg:py-[40px]"
        >
          {/* BADGE */}
          <motion.div
            variants={fadeUp}
            className="mb-[16px] inline-flex items-center rounded-full bg-[#003D33] px-[14px] py-[6px]"
          >
            <span className="font-sans text-[11px] font-[600] uppercase leading-none tracking-[0.15em] text-white">
              CONTACT US
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h3
            variants={fadeUp}
            className="font-display text-[52px] font-[500] leading-[1.05] tracking-[-0.015em] text-[#052E26] sm:text-[36px]"
          >
            Get in Touch
          </motion.h3>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="mt-[12px] max-w-[390px] font-sans text-[16px] font-[300] leading-[1.65] text-[#414645]"
          >
            Have a question or feedback?
            <br />
            Fill out the form below, and we&apos;ll respond promptly!
          </motion.p>

          {/* FORM */}
          <motion.form variants={fadeUp} className="mt-[28px]">
            {/* ROW 1 */}
            <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              {/* NAME */}
              <div>
                <label className="mb-[5px] block font-sans text-[14px] font-[500] text-[#14201C]">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="e.g. John Smith"
                  className="h-[48px] w-full rounded-[10px] border border-[#DDE0DD] bg-white px-[10px] font-sans text-[15px] text-[#14201C] outline-none placeholder:text-[#9BA39E] focus:border-[#003D33]"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-[5px] block font-sans text-[14px] font-[500] text-[#14201C]">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="e.g. john@email.com"
                  className="h-[48px] w-full rounded-[10px] border border-[#DDE0DD] bg-white px-[10px] font-sans text-[15px] text-[#14201C] outline-none placeholder:text-[#9BA39E] focus:border-[#003D33]"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="mt-[13px] grid grid-cols-1 gap-[14px] sm:grid-cols-2">
              {/* PHONE */}
              <div>
                <label className="mb-[5px] block font-sans text-[14px] font-[500] text-[#14201C]">
                  Phone number
                </label>

                <input
                  type="tel"
                  placeholder="e.g. +1 222 444 66"
                  className="h-[48px] w-full rounded-[10px] border border-[#DDE0DD] bg-white px-[10px] font-sans text-[15px] text-[#14201C] outline-none placeholder:text-[#9BA39E] focus:border-[#003D33]"
                />
              </div>

              {/* COMPANY */}
              <div>
                <label className="mb-[5px] block font-sans text-[14px] font-[500] text-[#14201C]">
                  Company name
                </label>

                <input
                  type="text"
                  placeholder="e.g. Execor"
                  className="h-[48px] w-full rounded-[10px] border border-[#DDE0DD] bg-white px-[10px] font-sans text-[15px] text-[#14201C] outline-none placeholder:text-[#9BA39E] focus:border-[#003D33]"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="mt-[13px]">
              <label className="mb-[5px] block font-sans text-[14px] font-[500] text-[#14201C]">
                Your message
              </label>

              <textarea
                rows={4}
                placeholder="Type here..."
                className="w-full resize-none rounded-[7px] border border-[#DDE0DD] bg-white px-[10px] py-[9px] font-sans text-[15px] text-[#14201C] outline-none placeholder:text-[#9BA39E] focus:border-[#003D33]"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-[16px] inline-flex h-[44px] min-w-[80px] items-center justify-center rounded-full bg-[#0A271E] px-[30px] font-sans text-[14px] font-[500] text-white shadow-[0_4px_10px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-90"
            >
              Submit
            </button>
          </motion.form>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[430px] overflow-hidden lg:min-h-full"
        >
          <Image
            src="/contact-us.png"
            alt="Business advisory meeting"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 570px"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}