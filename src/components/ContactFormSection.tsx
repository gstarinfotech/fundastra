"use client";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
  Lock,
} from "lucide-react";

const INFO_CARDS = [
  {
    icon: Phone,
    label: "Direct Advisory Desk",
    line1: "+91 98990 37555",
    line2: "Mon – Sat, 9:30 AM – 6:30 PM IST",
    withDot: true,
  },
  {
    icon: Mail,
    label: "Mandate & Official Inquiries",
    line1: "mandates@fundastra.com",
    line2: "Confidential encrypted inbox • info@fundastra.com",
  },
  {
    icon: MapPin,
    label: "Corporate Headquarters",
    line1:
      "Sovereign Tower, Level 14, Barakhamba Road, Connaught Place, New Delhi – 110001",
    line2: "Regional desks: Mumbai (BKC) & Bengaluru (UB City)",
  },
  {
    icon: Clock,
    label: "Client Response Velocity",
    line1: "Guaranteed 24-Hour Preliminary Feedback",
    line2: "Fast-track institutional review on qualifying corporate briefs",
  },
];

export default function ContactFormSection() {
  return (
    <section className="bg-white px-4 pb-12 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-[76px]">
      <div className="mx-auto max-w-[1280px] rounded-[28px] bg-[#FBF9F6] p-6 shadow-sm sm:p-10 lg:p-12">
        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[minmax(0,469px)_minmax(0,683px)] lg:justify-between lg:gap-10">
          {/* LEFT: Contact info */}
          <div className="w-full min-w-0">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-[18px] bg-[#765A23]" />
              <span className="font-sans text-[11px] font-[600] uppercase tracking-[0.12em] text-[#765A23]">
                Contact Info
              </span>
            </div>

            <h2 className="font-display text-[28px] font-semibold text-brand-green sm:text-[32px]">
              Let&apos;s Start a Conversation
            </h2>

            <p className="mt-3 max-w-[440px] font-sans text-[14px] leading-[1.65] text-brand-green/65">
              Every enterprise capital journey begins with a private
              consultation. Our senior underwriters evaluate your balance sheet
              dynamics and match you with the optimal credit corridors.
            </p>

            <div className="mt-7 space-y-3">
              {INFO_CARDS.map(
                ({ icon: Icon, label, line1, line2, withDot }) => (
                  <div
                    key={label}
                    className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#F4EFE4]">
                      <Icon
                        size={17}
                        className="text-brand-green"
                        strokeWidth={1.8}
                      />
                    </div>

                    <div className="min-w-0">
                      <p className="font-sans text-[10px] font-[600] uppercase tracking-[0.1em] text-brand-green/45">
                        {label}
                      </p>

                      <p className="mt-1 font-sans text-[15px] font-semibold text-brand-green">
                        {line1}
                      </p>

                      <p className="mt-1 flex items-center gap-1.5 font-sans text-[12px] text-brand-green/55">
                        {withDot && (
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        )}
                        {line2}
                      </p>
                    </div>
                  </div>
                ),
              )}
            </div>

            <div className="mt-4 flex flex-col items-start gap-4 rounded-xl bg-brand-green px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5">
              <div className="flex min-w-0 items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MessageCircle
                    size={16}
                    className="text-[#34D399]"
                    strokeWidth={1.8}
                  />
                </div>

                <div>
                  <p className="font-sans text-[12px] font-bold leading-[1.25] text-brand-cream sm:text-[13px]">
                    Need Rapid Mandate Triage?
                  </p>

                  <p className="font-sans text-[10px] leading-[1.35] text-brand-cream/65 sm:text-[11px]">
                    Connect instantly with our Desk via WhatsApp
                  </p>
                </div>
              </div>

              <a
                href="https://wa.me/919899037555"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full bg-[#C5A059] px-5 py-2.5 text-center font-sans text-[11px] font-bold uppercase tracking-wide text-brand-green hover:opacity-90 sm:w-auto sm:shrink-0 sm:whitespace-nowrap sm:text-[12px]"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="w-full min-w-0 rounded-2xl border border-black/5 bg-white p-5 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <span className="font-sans text-[10px] font-[600] uppercase tracking-[0.12em] text-[#765A23] sm:text-[11px]">
                Mandate Appraisal
              </span>

              <span className="flex items-center gap-1.5 font-sans text-[10px] font-medium text-brand-green/60 sm:text-[11px]">
                <ShieldCheck size={13} />
                100% Confidential
              </span>
            </div>

            <h3 className="mt-2 font-display text-[24px] font-semibold text-[#052E26]">
              Send a Confidential Inquiry
            </h3>

            <p className="mt-1 font-sans text-[13px] text-brand-green/55">
              Submit your enterprise requirements for preliminary debt or equity
              structuring.
            </p>

            <div className="my-5 border-t border-black/5" />

            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-sans text-[12px] font-semibold text-brand-green">
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Vikramaditya Singhania"
                    className="w-full rounded-lg border border-black/10 bg-[#FBF9F6] px-3.5 py-2.5 font-sans text-[13px] outline-none focus:border-brand-green"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block font-sans text-[12px] font-semibold text-brand-green">
                    Phone <span className="text-red-500">*</span>
                  </label>

                  <div className="flex overflow-hidden rounded-lg border border-black/10 bg-[#FBF9F6] focus-within:border-brand-green">
                    <span className="flex items-center border-r border-black/10 px-3 font-sans text-[13px] text-brand-green/60">
                      +91
                    </span>

                    <input
                      type="tel"
                      placeholder="98765 43210"
                      className="w-full bg-transparent px-3 py-2.5 font-sans text-[13px] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-sans text-[12px] font-semibold text-brand-green">
                  Email Address <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  placeholder="e.g. v.singhania@asterlaprecision.com"
                  className="w-full rounded-lg border border-black/10 bg-[#FBF9F6] px-3.5 py-2.5 font-sans text-[13px] outline-none focus:border-brand-green"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block font-sans text-[12px] font-semibold text-brand-green">
                    Capital Requirement Type{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    defaultValue=""
                    className="w-full rounded-lg border border-black/10 bg-[#FBF9F6] px-3.5 py-2.5 font-sans text-[13px] text-brand-green/70 outline-none focus:border-brand-green"
                  >
                    <option value="" disabled>
                      Select facility type...
                    </option>
                    <option>SME Working Capital</option>
                    <option>Structured Debt</option>
                    <option>Equity Fundraising</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block font-sans text-[12px] font-semibold text-brand-green">
                    Desired Facility Quantum{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    defaultValue=""
                    className="w-full rounded-lg border border-black/10 bg-[#FBF9F6] px-3.5 py-2.5 font-sans text-[13px] text-brand-green/70 outline-none focus:border-brand-green"
                  >
                    <option value="" disabled>
                      Select expected quantum...
                    </option>
                    <option>₹5 Cr – ₹25 Cr</option>
                    <option>₹25 Cr – ₹100 Cr</option>
                    <option>₹100 Cr+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1.5 block font-sans text-[12px] font-semibold text-brand-green">
                  Message / Business Context
                </label>

                <textarea
                  rows={4}
                  placeholder="Briefly describe your company, current turnover, collateral profile, or target funding timeline..."
                  className="w-full resize-none rounded-lg border border-black/10 bg-[#FBF9F6] px-3.5 py-2.5 font-sans text-[13px] outline-none focus:border-brand-green"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg tracking-[1px] bg-brand-green py-3.5 font-sans text-[14px] font-semibold text-[#FBF9F6] hover:opacity-90"
              >
                Send Confidential Inquiry
                <ArrowRight size={16} />
              </button>

              <p className="mt-2 flex items-center justify-center gap-1.5 text-center font-sans text-[11px] leading-[1.35] text-[#424845] sm:text-[12px]">
                <Lock size={11} />
                Protected by mutual Non-Disclosure Agreement (NDA). Zero spam or
                retail broking.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
