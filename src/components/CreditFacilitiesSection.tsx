"use client";

import Link from "next/link";
import {
    ShieldCheck,
    TrendingUp,
    Landmark,
    WalletCards,
    SlidersHorizontal,
    RefreshCw,
} from "lucide-react";

const CREDIT_FACILITIES = [
    {
        id: "cgtmse",

        theme: "dark",

        eyebrow: "SOVEREIGN CREDIT GUARANTEE",

        title: "CGTMSE Backed Limits",

        description:
            "Empowering qualifying MSMEs, manufacturers, and technology services to access institutional borrowing up to ₹5 Crores without pledging third-party collateral or promoter personal asset guarantees.",

        features: [
            {
                icon: ShieldCheck,
                title: "100% Collateral-Free Framework",
                description:
                    "Underwritten under the Credit Guarantee Fund Trust for Micro and Small Enterprises with sovereign risk absorption.",
            },
            {
                icon: TrendingUp,
                title: "Scalable up to Regulatory Cap (₹5 Cr)",
                description:
                    "Combination of Term Loans for machinery & Cash Credit limits for operational inventory needs.",
            },
            {
                icon: Landmark,
                title: "Concessional PSU & Scheduled Bank Pricing",
                description:
                    "Enjoy competitive base lending rates compared to unorganized non-bank NBFC market debt.",
            },
        ],

        metrics: [
            {
                label: "MAX SOVEREIGN CAP",
                value: "Up to ₹5.00 Cr",
                highlight: false,
            },
            {
                label: "COLLATERAL REQUISITE",
                value: "Nil (Zero Collateral)",
                highlight: true,
            },
        ],

        cta: "Discuss Your Funding Requirement for CGTMSE",

        href: "/contact",
    },

    {
        id: "cc-od",

        theme: "light",

        eyebrow: "REVOLVING OPERATING LINES",

        title: "Cash Credit & Overdraft Facilities",

        description:
            "Dynamic revolving limits structured against enterprise book debts, paid-up stock, and liquid receivables. Maximize operating flexibility with interest charged strictly on utilized balances day-by-day.",

        features: [
            {
                icon: WalletCards,
                title: "Interest On Utilization Only",
                description:
                    "No interest on non-utilized limits. Deposit surplus daily collections to instantly lower interest burn.",
            },
            {
                icon: SlidersHorizontal,
                title: "Drop-Line OD & Clean Limits",
                description:
                    "Structured amortizing overdrafts or revolving limits matched to seasonal sales cycles.",
            },
            {
                icon: RefreshCw,
                title: "Annual Renewal & Escalation",
                description:
                    "Effortless annual limit step-ups pegged directly to year-on-year enterprise revenue expansion.",
            },
        ],

        metrics: [
            {
                label: "TYPICAL LIMIT SCALE",
                value: "₹1 Cr to ₹30 Cr",
                highlight: false,
            },
            {
                label: "DRAWING POWER (DP)",
                value: "Monthly Stock Audits",
                highlight: true,
            },
        ],

        cta: "Discuss Your Funding Requirement for CC / OD",

        href: "/contact",
    },
];

export default function CreditFacilitiesSection() {
    return (
        <section className="bg-[#FBF9F6] px-4 py-4 sm:px-6 sm:py-[16px] sm:pt-10 lg:px-[17px]">
            <div className="mx-auto grid max-w-[1200px] gap-[28px] lg:grid-cols-2">

                {CREDIT_FACILITIES.map((facility) => {
                    const isDark = facility.theme === "dark";

                    return (
                        <div
                            key={facility.id}
                            className={`
                                flex min-h-0 flex-col rounded-[12px]
                                border border-[#D9D7D0] px-5 py-6 sm:px-[36px] sm:py-[36px] lg:min-h-[628px]
                                shadow-[0_8px_18px_rgba(0,0,0,0.06)]
                                ${isDark
                                    ? "lg:min-h-[644px] bg-[#0A271E] shadow-[0_10px_22px_rgba(0,0,0,0.16)]"
                                    : "bg-white"
                                }
                            `}
                        >

                            {/* EYEBROW */}
                            <div
                                className={`
                                    mb-[24px] inline-flex w-fit items-center
                                    rounded-[5px] px-[7px] py-[5px]
                                    ${isDark
                                        ? "bg-[#F5F3EE]"
                                        : "bg-[#052E26]"
                                    }
                                `}
                            >
                                <span
                                    className={`
                                        font-sans text-[11px] font-[700]
                                        uppercase tracking-[0.08em]
                                        ${isDark
                                            ? "text-[#17372F]"
                                            : "text-white"
                                        }
                                    `}
                                >
                                    {facility.eyebrow}
                                </span>
                            </div>

                            {/* TITLE */}
                            <h2
                                className={`
                                    font-display text-[32px] font-[600]
                                    leading-[1.1] tracking-[-0.02em]
                                    ${isDark
                                        ? "text-[#FBF9F6]"
                                        : "text-[#061812]"
                                    }
                                `}
                            >
                                {facility.title}
                            </h2>

                            {/* DESCRIPTION */}
                            <p
                                className={`
                                    mt-[17px] max-w-[502px]
                                    font-sans text-[14px] font-[400]
                                    leading-[1.65]
                                    ${isDark
                                        ? "text-[#A9C4B7]"
                                        : "text-[#424845]"
                                    }
                                `}
                            >
                                {facility.description}
                            </p>

                            {/* FEATURES */}
                            <div className="mt-[24px] space-y-[10px]">
                                {facility.features.map((feature) => {
                                    const Icon = feature.icon;

                                    return (
                                        <div
                                            key={feature.title}
                                            className={`
                                                min-h-[72px] rounded-[8px]
                                                px-[13px] py-[12px]
                                                ${isDark
                                                    ? "border border-white/[0.10] bg-white/[0.055]"
                                                    : "border border-[#E2DED7] bg-[#F7F5F2]"
                                                }
                                            `}
                                        >
                                            <div className="flex items-start gap-[10px]">

                                                <Icon
                                                    size={17}
                                                    strokeWidth={1.8}
                                                    className={`
                                                        mt-[1px] shrink-0
                                                        ${isDark
                                                            ? "text-[#D4AF37]"
                                                            : "text-[#A88954]"
                                                        }
                                                    `}
                                                />

                                                <div>
                                                    <h3
                                                        className={`
                                                            font-sans text-[12px]
                                                            font-[600] leading-[1.25]
                                                            ${isDark
                                                                ? "text-white"
                                                                : "text-[#061812]"
                                                            }
                                                        `}
                                                    >
                                                        {feature.title}
                                                    </h3>

                                                    <p
                                                        className={`
                                                            mt-[2px] font-sans
                                                            text-[11px] font-[400]
                                                            leading-[1.35]
                                                            ${isDark
                                                                ? "text-[#A9C4B7]"
                                                                : "text-[#424845]"
                                                            }
                                                        `}
                                                    >
                                                        {feature.description}
                                                    </p>
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* METRICS */}
                            <div
                                className={`
                                    mt-[18px] grid min-h-[64px]
                                    grid-cols-2 overflow-hidden rounded-[7px]
                                    px-[14px] py-[11px]
                                    ${isDark
                                        ? "bg-[#001C16]"
                                        : "border border-[#E2DED7] bg-[#FBFAF7]"
                                    }
                                `}
                            >
                                {facility.metrics.map((metric) => (
                                    <div key={metric.label}>

                                        <p
                                            className={`
                                                font-sans text-[9px]
                                                font-[500] uppercase
                                                tracking-[0.08em]
                                                ${isDark
                                                    ? "text-[#849A92]"
                                                    : "text-[#6E756F]"
                                                }
                                            `}
                                        >
                                            {metric.label}
                                        </p>

                                        <p
                                            className={`
                                                mt-[3px] font-sans
                                                text-[13px] font-[600]
                                                ${metric.highlight
                                                    ? "text-[#E8B43A]"
                                                    : isDark
                                                        ? "text-white"
                                                        : "text-[#061812]"
                                                }
                                            `}
                                        >
                                            {metric.value}
                                        </p>

                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <Link
                                href={facility.href}
                                className={`
                                    mt-[29px] flex h-[40px]
                                    items-center justify-center rounded-[8px]
                                    px-4 font-sans text-[13px] font-[600]
                                    text-white transition-opacity
                                    duration-200 hover:opacity-90
                                    ${isDark
                                        ? "bg-[#C09A58]"
                                        : "bg-[#052E26]"
                                    }
                                `}
                            >
                                {facility.cta}
                            </Link>

                        </div>
                    );
                })}
            </div>
        </section>
    );
}