"use client";

import Link from "next/link";
import {
    CheckCircle2,
    House,
    Building2,
    ArrowRight,
} from "lucide-react";

const PROPERTY_PURCHASE_SECTION = {
    leftPanel: {
        title: "Promoter & Corporate Mortgages",

        points: [
            {
                title: "Self-Employed Underwriting",
                description:
                    "Tailored for founders and directors where standard ITR forms don't reflect genuine cash accruals.",
            },
            {
                title: "Corporate Entity Purchases",
                description:
                    "Acquire commercial floors, corporate headquarters, and guest houses through holding firms.",
            },
            {
                title: "High-Value Luxury Units",
                description:
                    "Single-ticket home loans from ₹5 Cr to ₹30 Cr+ with prime institutional rates.",
            },
            {
                title: "Clean Legal Search",
                description:
                    "Comprehensive vetting of developer title deeds, RERA approvals, and environmental clearances.",
            },
        ],

        advisoryAdvantage: {
            eyebrow: "ADVISORY ADVANTAGE",
            description:
                "Combining personal net worth with operating company dividends for elevated mortgage eligibility.",
        },
    },

    rightContent: {
        eyebrow: "HIGH-VALUE PROMOTER MORTGAGES",

        title: "Home Loan & Property Purchase Loans",

        description:
            "Bespoke high-value residential and commercial site acquisition loans tailored for enterprise promoters, self-employed business owners, and corporate asset holding entities who require nuanced assessment beyond standardized retail formulas.",

        features: [
            {
                id: "promoter-home-loans",
                icon: "house",
                title: "Bespoke Promoter Home Loans",
                description:
                    "Multi-crore residential financing evaluated on gross cash flows, corporate profit plow-backs, and combined family net worth.",
            },
            {
                id: "commercial-property",
                icon: "building",
                title: "Commercial Property Purchases",
                description:
                    "Acquire freehold office floors, warehousing real estate, retail showrooms, or hospital premises for operational use.",
            },
        ],

        metrics: [
            {
                label: "MANDATE SCALE",
                value: "₹2 Cr to ₹30 Cr+",
                highlight: false,
            },
            {
                label: "TENURE FLEXIBILITY",
                value: "Up to 25 Years",
                highlight: false,
            },
            {
                label: "ELIGIBLE BORROWERS",
                value: "Promoters / HolCos",
                highlight: false,
            },
            {
                label: "INTEREST PROFILE",
                value: "EBLR / MCLR",
                secondaryValue: "Benchmark",
                highlight: true,
            },
        ],

        cta: {
            text: "Discuss Your Funding Requirement for Property Acquisition",
            href: "/contact",
        },
    },
};

export default function PropertyPurchaseCard() {
    return (
        <section className="bg-[#FBF9F6] pb-14 px-4 py-[30px] sm:px-6 lg:px-[30px]">
            <div className="relative mx-auto min-h-[600px] max-w-[1200px] overflow-hidden rounded-[10px] border border-[#E3E0DA] bg-white px-5 py-6 sm:px-9 sm:py-7 lg:h-[600px] lg:px-[42px] lg:py-[44px]">

                <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[424.5px_1fr] lg:gap-[46px]">

                    {/* LEFT CONTENT */}
                    <div className="relative h-auto w-full shrink-0 lg:h-[450px] lg:w-[424.5px]">

                        <div className="relative h-auto min-h-[404px] w-full rounded-[7px] border border-[#E3E0DA] bg-white px-4 py-5 sm:px-[22px] sm:py-[24px] lg:w-[424.5px]">

                            {/* TITLE */}
                            <h3 className="font-display text-[20px] font-[600] leading-[1.2] text-[#061812]">
                                {PROPERTY_PURCHASE_SECTION.leftPanel.title}
                            </h3>

                            {/* DIVIDER */}
                            <div className="mt-[14px] h-[2px] w-full bg-[#F0EEEA]" />

                            {/* POINTS */}
                            <div className="mt-[14px] space-y-[10px]">
                                {PROPERTY_PURCHASE_SECTION.leftPanel.points.map(
                                    (point) => (
                                        <div
                                            key={point.title}
                                            className="flex items-start gap-[8px]"
                                        >
                                            <CheckCircle2
                                                size={14}
                                                strokeWidth={1.8}
                                                className="mt-[1px] shrink-0 text-[#B18A4A]"
                                            />

                                            <p className="min-w-0 font-sans text-[12px] leading-[1.35] text-[#424845]">
                                                <span className="font-[700] text-[#061812]">
                                                    {point.title}:
                                                </span>{" "}
                                                {point.description}
                                            </p>
                                        </div>
                                    )
                                )}
                            </div>

                            {/* ADVISORY ADVANTAGE */}
                            <div className="mt-[18px] rounded-[5px] border border-[#E8D8B7] bg-[#FBF8F1] px-[14px] py-[10px]">

                                <p className="font-sans text-[9px] font-[700] uppercase tracking-[0.09em] text-[#B18A4A]">
                                    {
                                        PROPERTY_PURCHASE_SECTION.leftPanel
                                            .advisoryAdvantage.eyebrow
                                    }
                                </p>

                                <p className="mt-[4px] font-sans text-[12px] leading-[1.4] text-[#061812]">
                                    {
                                        PROPERTY_PURCHASE_SECTION.leftPanel
                                            .advisoryAdvantage.description
                                    }
                                </p>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div>

                        {/* EYEBROW */}
                        <div className="mb-[20px] inline-flex items-center rounded-[5px] bg-[#0A271E] px-[9px] py-[5px]">
                            <span className="font-sans text-[12px] font-[700] uppercase tracking-[0.08em] text-[#FBF9F6]">
                                {PROPERTY_PURCHASE_SECTION.rightContent.eyebrow}
                            </span>
                        </div>

                        {/* TITLE */}
                        <h2 className="mt-[10px] max-w-[650px] font-display text-[36px] font-[600] leading-[1.08] tracking-[-0.02em] text-[#061812]">
                            {PROPERTY_PURCHASE_SECTION.rightContent.title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-[14px] max-w-[619.5px] font-sans text-[16px] font-[400] leading-[1.58] text-[#424845]">
                            {PROPERTY_PURCHASE_SECTION.rightContent.description}
                        </p>

                        {/* FEATURES */}
                        <div className="mt-[26px] grid max-w-[619.5px] grid-cols-1 gap-[11px] sm:grid-cols-2">

                            {PROPERTY_PURCHASE_SECTION.rightContent.features.map(
                                (feature) => {
                                    const Icon =
                                        feature.icon === "house"
                                            ? House
                                            : Building2;

                                    return (
                                        <div
                                            key={feature.id}
                                            className="min-h-[106px] w-full rounded-[8px] border border-[#E4E0D9] bg-[#FBFAF7] px-[12px] py-[18px]"
                                        >
                                            <div className="flex items-center gap-[7px]">
                                                <Icon
                                                    size={16}
                                                    strokeWidth={1.8}
                                                    className="shrink-0 text-[#D4AF37]"
                                                />

                                                <h3 className="font-sans text-[14px] font-[600] leading-[1.2] text-[#061812]">
                                                    {feature.title}
                                                </h3>
                                            </div>

                                            <p className="mt-[4px] font-sans text-[12px] font-[400] leading-[1.35] text-[#424845]">
                                                {feature.description}
                                            </p>
                                        </div>
                                    );
                                }
                            )}

                        </div>

                        {/* METRICS */}
                        <div className="mt-[20px] grid min-h-[74px] max-w-[619.5px] grid-cols-2 overflow-hidden rounded-[7px] border border-[#E4E0D9] bg-[#FBFAF7] sm:grid-cols-4">

                            {PROPERTY_PURCHASE_SECTION.rightContent.metrics.map(
                                (metric) => (
                                    <div
                                        key={metric.label}
                                        className="px-[14px] py-[12px]"
                                    >
                                        <p className="font-sans text-[10px] font-[500] uppercase tracking-[0.07em] text-[#6E756F]">
                                            {metric.label}
                                        </p>

                                        <p
                                            className={`mt-[4px] font-sans text-[14px] font-[700] leading-[1.25] ${metric.highlight
                                                    ? "text-[#B18A4A]"
                                                    : "text-[#061812]"
                                                }`}
                                        >
                                            {metric.value}

                                            {metric.secondaryValue && (
                                                <>
                                                    <br />
                                                    {metric.secondaryValue}
                                                </>
                                            )}
                                        </p>
                                    </div>
                                )
                            )}

                        </div>

                        {/* CTA */}
                        <Link
                            href={
                                PROPERTY_PURCHASE_SECTION.rightContent.cta
                                    .href
                            }
                            className="mt-[32px] inline-flex items-center gap-1 whitespace-nowrap font-sans text-[10px] font-[500] text-[#A88954] transition-opacity duration-200 hover:opacity-70 sm:gap-[6px] sm:text-[14px]"
                        >
                            {
                                PROPERTY_PURCHASE_SECTION.rightContent.cta
                                    .text
                            }

                            <ArrowRight
                                size={14}
                                strokeWidth={1.5}
                                color="#A88954"
                            />
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    );
}