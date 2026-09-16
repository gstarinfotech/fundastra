"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Percent,
    Clock3,
    BadgeCheck,
    ShieldCheck,
    Warehouse,
    FileText,
    Truck,
    CircleDollarSign,
    Factory,
    Link2,
    PercentCircle,
    Sparkles,
    ArrowRight,
} from "lucide-react";

type Feature = {
    icon:
    | "percent"
    | "clock"
    | "check"
    | "shield"
    | "warehouse"
    | "file"
    | "truck"
    | "dollar"
    | "factory"
    | "link"
    | "percent-circle"
    | "sparkles";
    title: string;
    description: string;
};

type Metric = {
    label: string;
    value: string;
    highlight?: boolean;
};

type ServiceDetailCardProps = {
    eyebrow: string;
    title: string;
    description: string;
    features: Feature[];
    metrics: Metric[];
    image: string;
    imageEyebrow: string;
    imageTitle: string;
    ctaText: string;
    ctaHref?: string;
    imagePosition?: "left" | "right";
};

const ICONS = {
    percent: Percent,
    clock: Clock3,
    check: BadgeCheck,
    shield: ShieldCheck,
    warehouse: Warehouse,
    file: FileText,
    truck: Truck,
    dollar: CircleDollarSign,
    factory: Factory,
    link: Link2,
    "percent-circle": PercentCircle,
    sparkles: Sparkles,
};

export default function ServiceDetailCard({
    eyebrow,
    title,
    description,
    features,
    metrics,
    image,
    imageEyebrow,
    imageTitle,
    ctaText,
    ctaHref = "/contact",
    imagePosition = "right",
}: ServiceDetailCardProps) {
    return (
        <section className="bg-[#FBF9F6] pt-14 px-4 py-[16px] sm:px-6 lg:px-[30px]">
            <div className="relative mx-auto max-w-[1200px] h-[710px] overflow-hidden rounded-[10px] border bg-white border-[#E3E0DA] px-7 py-7 sm:px-9 lg:px-[42px] lg:py-[44px]">
                <div
                    className={`relative z-10 grid items-center gap-10 lg:gap-[46px] ${imagePosition === "left"
                            ? "lg:grid-cols-[424.5px_1fr]"
                            : "lg:grid-cols-[1fr_424.5px]"
                        }`}
                >
                    {/* IMAGE */}
                    <div
                        className={`relative h-[400px] w-[424.5px] shrink-0 ${imagePosition === "left"
                                ? "lg:order-1"
                                : "lg:order-2"
                            }`}
                    >
                        <div className="relative h-[400px] w-[424.5px] overflow-hidden rounded-[7px] border border-[#DCD9D3] bg-[#EDEAE5] shadow-[0_8px_15px_rgba(0,0,0,0.18)]">
                            <Image
                                src={image}
                                alt={imageTitle}
                                fill
                                sizes="425px"
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                            <div className="absolute bottom-[15px] left-[15px] right-[15px]">
                                <p className="font-sans text-[12px] font-[600] uppercase tracking-[0.13em] text-[#D4AF37]">
                                    {imageEyebrow}
                                </p>

                                <h3 className="mt-[5px] max-w-[384.5px] font-display text-[16px] font-[600] leading-[1.25] text-white">
                                    {imageTitle}
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div
                        className={`${imagePosition === "left"
                                ? "lg:order-2"
                                : "lg:order-1"
                            }`}
                    >
                        {/* EYEBROW */}
                        <div className="mb-[20px] inline-flex items-center rounded-[5px] bg-[#0A271E] px-[9px] py-[5px]">
                            <span className="font-sans text-[11px] font-[700] uppercase tracking-[0.08em] text-[#FBF9F6]">
                                {eyebrow}
                            </span>
                        </div>

                        {/* TITLE */}
                        <h2 className="max-w-[650px] mt-[10px] font-display text-[36px] font-[600] leading-[1.08] tracking-[-0.02em] text-[#061812]">
                            {title}
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-[14px] max-w-[619.5px] font-sans text-[16px] font-[400] leading-[1.58] text-[#424845]">
                            {description}
                        </p>

                        {/* FEATURES */}
                        <div className="mt-[26px] grid max-w-[619.5px] grid-cols-1 gap-[11px] sm:grid-cols-2">
                            {features.map((feature) => {
                                const Icon = ICONS[feature.icon];

                                return (
                                    <div
                                        key={feature.title}
                                        className="min-h-[106px] w-[301.75px] rounded-[8px] border border-[#E4E0D9] bg-[#FBFAF7] px-[12px] py-[18px]"
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
                            })}
                        </div>

                        {/* METRICS */}
                        <div className="mt-[20px] grid min-h-[74px] max-w-[619.5px] grid-cols-2 overflow-hidden rounded-[7px] bg-[#052E26] sm:grid-cols-4">
                            {metrics.map((metric) => (
                                <div
                                    key={metric.label}
                                    className="px-[14px] py-[12px]"
                                >
                                    <p className="font-sans text-[10px] font-[500] uppercase tracking-[0.07em] text-[#A9C4B7]">
                                        {metric.label}
                                    </p>

                                    <p
                                        className={`mt-[4px] font-sans text-[14px] font-[700] leading-[1.25] ${metric.highlight
                                                ? "text-[#E8B43A]"
                                                : "text-white"
                                            }`}
                                    >
                                        {metric.value}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            href={ctaHref}
                            className="mt-[32px] inline-flex items-center gap-[6px] font-sans text-[14px] font-[500] text-[#A88954] transition-opacity duration-200 hover:opacity-70"
                        >
                            {ctaText}
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