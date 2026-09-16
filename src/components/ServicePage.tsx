"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import Navbar from "@/components/Navbar";
import ContactAdvisorySection from "./ContactAdvisorySection";
import Footer from "./Footer";
import FaqSection from "./FaqSection";
import ServiceDetailCard from "./ServiceDetailCard";
import CreditFacilitiesSection from "./CreditFacilitiesSection";
import PropertyPurchaseCard from "./PropertyPurchaseCard";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

type IconName =
    | "percent"
    | "clock"
    | "check"
    | "shield"
    | "sparkles"
    | "file"
    | "warehouse"
    | "truck"
    | "dollar"
    | "factory"
    | "link"
    | "percent-circle";

type HeroMetric = { label: string; value: string; suffix?: string; unit?: string };

type Feature = { icon: IconName; title: string; description: string };

type DetailMetric = { label: string; value: string; highlight?: boolean };

type DetailCard = {
    key: string;
    eyebrow: string;
    title: string;
    description: string;
    features: Feature[];
    metrics: DetailMetric[];
    image: string;
    imageEyebrow: string;
    imageTitle: string;
    ctaText: string;
    ctaHref: string;
    imagePosition?: "left" | "right";
    extraAfter?: "credit-facilities" | "property-purchase";
};

type Faq = { question: string; answer: string };

type CollateralType = "gold" | "green" | "blue" | "orange";

type BenchmarkRow = {
    icon: string;
    title: string;
    subtitle: string;
    ticketSize: string;
    collateral: string;
    collateralType: CollateralType;
    tenure: string;
    turnaround: string;
    turnaroundHighlight?: boolean;
    metric: string;
    action: string;
};

type MandateField = {
    id: string;
    label: string;
    required: boolean;
    type: string;
    placeholder: string;
};

type MandateSelect = { label: string; required: boolean; options: string[] };

type MandateSection = {
    eyebrow: string;
    title: string;
    description: string;
    benefits: { title: string; description: string }[];
    contact: { eyebrow: string; email: string; locations: string };
    fields: MandateField[];
    subService: MandateSelect;
    capitalRequirement: MandateSelect;
    overview: { label: string; required: boolean; placeholder: string };
    submitButton: string;
    disclaimer: string;
};

type ServiceData = {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    heroMetrics: HeroMetric[];
    subServices: { eyebrow: string; title: string; description: string };
    detailCards: DetailCard[];
    faqs: Faq[];
    facilityBenchmark: { eyebrow: string; title: string; description: string };
    facilityBenchmarkColumns: string[];
    facilityBenchmarkRows: BenchmarkRow[];
    mandate: MandateSection;
};

type ServiceKey = "sme" | "structured-debt" | "equity-fundraising";

const PARTNER_TYPES = [
    "Tier-1 PSU Banks",
    "Private Sector Banks",
    "Specialized NBFCs",
    "Private Credit Funds (AIFs)",
    "Single Family Offices",
    "Mezzanine Desks",
];

const SME_DATA: ServiceData = {
    eyebrow: "COMPANY PROFILE",
    title: "SME Funding Built Around Your Business.",
    description:
        "Capital solutions for working capital, expansion, asset acquisition and property requirements. Tailored structured mandates designed for growing mid-market enterprises.",
    image: "/smefunding.jpg",

    heroMetrics: [
        { label: "Phase I & II Deployed", value: "₹2,400", suffix: "+", unit: "Cr" },
        { label: "Syndicate Depth", value: "120", suffix: "+" },
        { label: "Track Record", value: "95", suffix: "+" },
        { label: "Execution Velocity", value: "48", suffix: "", unit: "Hrs" },
    ],

    subServices: {
        eyebrow: "7 dedicated sme capital facilities",
        title: "Capital Solutions for Every Stage of Growth.",
        description:
            "Structured funding designed to support expansion, strengthen liquidity, and unlock your next opportunity.",
    },

    detailCards: [
        {
            key: "lap",
            eyebrow: "COLLATERALIZED MORTGAGE DEBT",
            title: "Loan Against Property (LAP)",
            description:
                "Monetize built-up commercial, industrial, or prime residential real estate to unlock significant long-term liquidity. Structured specifically for business expansion, CAPEX debt substitution, and low-cost balance sheet replenishment without disrupting ownership.",
            features: [
                {
                    icon: "percent",
                    title: "High LTV Underwriting",
                    description:
                        "LTV ratios up to 65% – 75% on commercial buildings, industrial plots, and prime residential assets.",
                },
                {
                    icon: "clock",
                    title: "Extended Amortizations",
                    description:
                        "Tenors up to 15–20 years structured to preserve operational monthly cash flow and lower DSCR pressure.",
                },
                {
                    icon: "check",
                    title: "Balance Transfer & Top-Up",
                    description:
                        "Seamless refinancing of expensive legacy debt with institutional rate reductions and substantial liquidity top-up.",
                },
                {
                    icon: "shield",
                    title: "Multi-Property Collateral Pools",
                    description:
                        "Ability to pool mixed promoter real estate assets across multiple jurisdictions into a unified credit tranche.",
                },
            ],
            metrics: [
                { label: "Ticket Scale", value: "₹3 Cr to ₹50 Cr+" },
                { label: "Repayment Tenor", value: "5 to 20 Years" },
                { label: "Collateral Profile", value: "Commercial / Industrial / Resi" },
                { label: "Turnaround Cycle", value: "15 – 25 Business Days", highlight: true },
            ],
            image: "/service1-1.webp",
            imageEyebrow: "INSTITUTIONAL GRADE APPRAISAL",
            imageTitle: "Monetize Office Towers, Industrial Plots & Commercial Units",
            ctaText: "Discuss Your Funding Requirement for LAP",
            ctaHref: "/contact",
        },
        {
            key: "unsecured",
            eyebrow: "COLLATERAL-FREE WORKING CAPITAL",
            title: "Unsecured Business Loans",
            description:
                "High-speed balance sheet liquidity engineered without mortgaging physical assets. Underwritten primarily on consistent banking transactions, GST returns, operating cash flows (EBITDA), and demonstrated promoter vintage.",
            features: [
                {
                    icon: "sparkles",
                    title: "Rapid Velocity Disbursals",
                    description:
                        "Sanction and capital release executed within 5 to 7 business days from dossier submission.",
                },
                {
                    icon: "file",
                    title: "Algorithmic GST Assessment",
                    description:
                        "Optimized limits structured using 12-month GSTR-1, GSTR-3B filings and transactional banking audits.",
                },
                {
                    icon: "shield",
                    title: "Zero Property Collateral",
                    description:
                        "No residential or commercial property pledges required; no legal title searches or encumbrance certificates.",
                },
                {
                    icon: "clock",
                    title: "Tenors Up to 5 Years",
                    description:
                        "Flexible EMI repayment structures extending up to 36–60 months to avoid working capital choking.",
                },
            ],
            metrics: [
                { label: "Ticket Size", value: "₹50 L to ₹10 Cr" },
                { label: "Underwriting Basis", value: "GST & Cash Flows" },
                { label: "Security Level", value: "100% Unsecured", highlight: true },
                { label: "TAT", value: "5 – 7 Days" },
            ],
            image: "/unsecured-business.jpg",
            imageEyebrow: "RAPID CASH-FLOW UNDERWRITING",
            imageTitle: "Turnover & GST Banking Multipliers Without Mortgages",
            ctaText: "Discuss Your Funding Requirement for Unsecured Capital",
            ctaHref: "/contact",
            imagePosition: "left",
        },
        {
            key: "working-capital",
            eyebrow: "OPERATIONAL LIQUIDITY & SUPPLY CHAIN",
            title: "Working Capital Finance",
            description:
                "Comprehensive working capital architectures designed to bridge the operational gap between invoice dispatch, raw material procurement, and client settlements. Prevent cash bottlenecks in fast-expanding supply chains.",
            features: [
                {
                    icon: "warehouse",
                    title: "Inventory & Stock Financing",
                    description:
                        "Procure raw materials at bulk cash discounts; limits scaled directly to warehouse stock audit certificates.",
                },
                {
                    icon: "file",
                    title: "Receivables & Factoring",
                    description:
                        "Monetize accepted enterprise client invoices with up to 85% immediate advance liquidity.",
                },
                {
                    icon: "truck",
                    title: "Supply Chain & Vendor Finance",
                    description:
                        "Tri-party supplier lines allowing timely vendor payouts while keeping enterprise balance sheet fluid.",
                },
                {
                    icon: "dollar",
                    title: "LC & Bank Guarantees (Non-Fund)",
                    description:
                        "Letters of Credit (Inland & Foreign) and Performance Bank Guarantees arranged via consortium desks.",
                },
            ],
            metrics: [
                { label: "Facility Ticket", value: "₹2 Cr to ₹35 Cr" },
                { label: "Underlying Asset", value: "Stocks & Receivables" },
                { label: "Pricing Type", value: "Benchmark Linked" },
                { label: "Appraisal Model", value: "Turnover Method (Nayak)", highlight: true },
            ],
            image: "/service1-2.png",
            imageEyebrow: "REAL-TIME ASSET MONETIZATION",
            imageTitle: "Unlocking Stuck Receivables & Bulk Procurement Liquidity",
            ctaText: "Discuss Your Funding Requirement for Working Capital",
            ctaHref: "/contact",
            extraAfter: "credit-facilities",
        },
        {
            key: "asset-purchase",
            eyebrow: "CAPITAL EXPENDITURE & MACHINERY",
            title: "Funding for Asset Purchase",
            description:
                "Empower your manufacturing floors, technology facilities, and operational hubs with dedicated equipment financing. Preserve precious working liquidity while procuring production machinery, specialized medical devices, or corporate tech infrastructure.",
            features: [
                {
                    icon: "factory",
                    title: "Industrial & Plant CAPEX",
                    description:
                        "Financing for CNC machines, packaging lines, printing machinery, solar plants, and heavy engineering setups.",
                },
                {
                    icon: "link",
                    title: "Direct Vendor Letter of Credit",
                    description:
                        "Direct LC and escrow disbursements to domestic OEM or international machinery exporters.",
                },
                {
                    icon: "percent-circle",
                    title: "Asset As Primary Collateral",
                    description:
                        "The equipment itself serves as principal hypothecated security, minimizing additional immovable collateral asks.",
                },
                {
                    icon: "sparkles",
                    title: "Accelerated Depreciation Tax Gains",
                    description:
                        "Structured term loans that allow corporate balance sheets to capture 100% tax depreciation benefits.",
                },
            ],
            metrics: [
                { label: "Machinery Ticket", value: "₹1 Cr to ₹25 Cr" },
                { label: "Financing Margin", value: "Up to 80% – 90%" },
                { label: "Loan Tenor", value: "3 to 7 Years" },
                { label: "Primary Security", value: "Asset Hypothecation", highlight: true },
            ],
            image: "/service1-3.png",
            imageEyebrow: "CAPEX ACCELERATION",
            imageTitle: "Capital Equipment & High-Tech Operational Plant Loans",
            ctaText: "Discuss Your Funding Requirement for Asset Purchase",
            ctaHref: "/contact",
            extraAfter: "property-purchase",
        },
    ],

    faqs: [
        {
            question: "What SME funding solutions does Fund Astra provide?",
            answer:
                "We structure working capital, overdraft and cash credit limits, loan against property, CGTMSE-backed credit, and asset and machinery expansion facilities.",
        },
        {
            question: "What businesses are eligible for SME funding?",
            answer:
                "SME funding is structured based on the business profile, financial position, operating cash flows, banking history, and the specific funding requirement.",
        },
        {
            question: "What documentation is required for SME funding?",
            answer:
                "The initial assessment typically requires financial statements, bank statements, existing borrowing details, KYC documentation, and relevant business and property documents.",
        },
        {
            question: "How quickly can an SME funding mandate be assessed?",
            answer:
                "Our team conducts an initial assessment of the funding requirement and credit profile before progressing the mandate through the appropriate lending partners.",
        },
        {
            question: "What audits and dossier documents are mandated for processing?",
            answer:
                "Processing typically requires audited financial statements, bank statements, existing loan and repayment details, KYC documents, GST and tax records, business registration documents, and relevant property or security documents, depending on the funding structure.",
        },
        {
            question: "What appraisal models do banks use for Working Capital limits?",
            answer:
                "Banks typically assess working capital requirements using financial performance, projected turnover, operating cycles, drawing power, stock and receivables, banking conduct, and applicable lender appraisal norms to determine suitable working capital limits.",
        },
    ],

    facilityBenchmark: {
        eyebrow: "FACILITY SPECIFICATION BENCHMARKS",
        title: "SME Funding Structure at a Glance",
        description:
            "Compare borrowing vehicles across collateral stipulations, disbursal turnaround times, and typical institutional pricing corridors.",
    },

    facilityBenchmarkColumns: [
        "SME FUNDING PRACTICE",
        "TICKET SIZE CORRIDOR",
        "COLLATERAL REQUIREMENT",
        "TENURE SPECTRUM",
        "TURNAROUND SPEED",
        "PRIMARY ASSESSMENT METRIC",
        "ACTION",
    ],

    facilityBenchmarkRows: [
        {
            icon: "▦",
            title: "Loan Against Property (LAP)",
            subtitle: "Commercial / Industrial real estate mortgage",
            ticketSize: "₹3 Cr – ₹50 Cr+",
            collateral: "Secured (Up to 75% LTV)",
            collateralType: "gold",
            tenure: "Up to 15–20 Years",
            turnaround: "15–25 Business Days",
            metric: "Property Valuation & DSCR",
            action: "Inquire",
        },
        {
            icon: "◉",
            title: "Unsecured Business Loans",
            subtitle: "Cash-flow & turnover underwriting",
            ticketSize: "₹50 L – ₹10 Cr",
            collateral: "Nil (Zero Mortgages)",
            collateralType: "green",
            tenure: "1 to 5 Years",
            turnaround: "5–7 Business Days",
            turnaroundHighlight: true,
            metric: "12M GST Returns & Bank Trajectory",
            action: "Inquire",
        },
        {
            icon: "⇄",
            title: "Working Capital Finance",
            subtitle: "Inventory, stock & invoice factoring",
            ticketSize: "₹2 Cr – ₹35 Cr",
            collateral: "Book Debts & Paid Stock",
            collateralType: "blue",
            tenure: "Revolving / 12M Renewals",
            turnaround: "10–18 Business Days",
            metric: "Working Capital Gap (WCG)",
            action: "Inquire",
        },
        {
            icon: "♢",
            title: "CGTMSE Limits",
            subtitle: "Government-backed MSME guarantee",
            ticketSize: "Up to ₹5.00 Cr",
            collateral: "Zero Third-Party Collateral",
            collateralType: "green",
            tenure: "5 to 7 Years",
            turnaround: "15–20 Business Days",
            metric: "Udyam MSME Registration & Viability",
            action: "Inquire",
        },
        {
            icon: "▣",
            title: "Cash Credit / OD Facilities",
            subtitle: "Revolving limits with interest on utilization",
            ticketSize: "₹1 Cr – ₹30 Cr",
            collateral: "Stock / Receivables / Mixed",
            collateralType: "gold",
            tenure: "Revolving Operational",
            turnaround: "10–15 Business Days",
            metric: "Drawing Power (DP) Formulas",
            action: "Inquire",
        },
        {
            icon: "⚒",
            title: "Funding for Asset Purchase",
            subtitle: "Equipment, plant, machinery CAPEX",
            ticketSize: "₹1 Cr – ₹25 Cr",
            collateral: "Hypothecation of Equipment",
            collateralType: "blue",
            tenure: "3 to 7 Years",
            turnaround: "12–18 Business Days",
            metric: "Machinery Quotation & ROI Projections",
            action: "Inquire",
        },
        {
            icon: "⌂",
            title: "Home Loan & Property Loans",
            subtitle: "Promoter residences & corporate offices",
            ticketSize: "₹2 Cr – ₹30 Cr+",
            collateral: "Primary Property Mortgage",
            collateralType: "orange",
            tenure: "Up to 25 Years",
            turnaround: "14–20 Business Days",
            metric: "Combined Promoter Cash Accruals",
            action: "Inquire",
        },
    ],

    mandate: {
        eyebrow: "TRANSPARENT INSTITUTIONAL APPRAISAL",
        title: "Structure Your SME Capital Mandate",
        description:
            "Submit your enterprise parameters to Fund Astra's senior credit desk. We evaluate balance sheet gearing, map against 45+ scheduled commercial banks and premier NBFCs, and deliver syndicated sanction architectures.",
        benefits: [
            { title: "100% Non-Disclosure Guaranteed", description: "Protected under bilateral confidentiality." },
            { title: "No Upfront Processing Retainer", description: "Success-aligned institutional advisory." },
            { title: "Direct Syndicate Desk Access", description: "Avoid multiple bureau scoring hits." },
        ],
        contact: {
            eyebrow: "DIRECT SYNDICATE LEADS",
            email: "sme.mandates@fundastra.com",
            locations: "Mumbai BKC • Connaught Place, New Delhi • Indiranagar, Bengaluru",
        },
        fields: [
            { id: "companyName", label: "Company / Entity Name", required: true, type: "text", placeholder: "e.g. Apex Precision Forge Ltd" },
            { id: "promoterName", label: "Promoter / Director Name", required: true, type: "text", placeholder: "e.g. Rajesh Singhania" },
            { id: "email", label: "Corporate Email Address", required: true, type: "email", placeholder: "rajesh@apexforge.in" },
            { id: "phone", label: "Contact Phone Number", required: true, type: "tel", placeholder: "+91 98200 XXXXX" },
        ],
        subService: {
            label: "Selected Sub-Service",
            required: true,
            options: [
                "1. Loan Against Property (LAP)",
                "2. Unsecured Business Loans",
                "3. Working Capital Finance",
                "4. Funding for Asset Purchase",
                "5. CGTMSE Backed Limits",
                "6. Cash Credit & Overdraft Facilities",
                "7. Home Loan & Property Purchase Loans",
            ],
        },
        capitalRequirement: {
            label: "Capital Requirement Scale",
            required: true,
            options: ["₹2 Cr – ₹5 Cr", "₹5 Cr – ₹10 Cr", "₹10 Cr – ₹25 Cr", "₹25 Cr – ₹50 Cr", "₹50 Cr+"],
        },
        overview: {
            label: "Collateral Profile & Business Overview",
            required: false,
            placeholder:
                "Share annual revenue run-rate, current existing bank limits, nature of collateral (if applicable), and planned fund deployment.",
        },
        submitButton: "Submit Mandate for Appraisal",
        disclaimer: "Zero commitment • Strict institutional confidentiality guaranteed.",
    },
};

const STRUCTURED_DEBT_DATA: ServiceData = {
    eyebrow: "COMPANY PROFILE",
    title: "Structured Debt for Complex Capital Needs.", // TODO
    description:
        "Bespoke structured debt instruments — mezzanine, convertible, and asset-backed — engineered for situations plain-vanilla bank debt can't serve.", // TODO
    image: "/smefunding.jpg", // TODO: replace image

    heroMetrics: [
        { label: "Structures Closed", value: "40", suffix: "+" },
        { label: "Lender & Fund Network", value: "60", suffix: "+" },
        { label: "Avg. Deal Size", value: "₹80", suffix: "+", unit: "Cr" },
        { label: "Execution Velocity", value: "10", suffix: "", unit: "Wks" },
    ],

    subServices: {
        eyebrow: "dedicated structured debt facilities",
        title: "Bespoke Debt for Special Situations.", // TODO
        description:
            "From mezzanine tranches to asset-backed notes — structures that match your cash-flow and risk profile.", // TODO
    },

    detailCards: [
        {
            key: "mezzanine",
            eyebrow: "SUBORDINATED CAPITAL",
            title: "Mezzanine Debt", // TODO
            description:
                "Placeholder description — replace with your actual mezzanine debt product copy.",
            features: [
                { icon: "percent", title: "Flexible Coupon Structures", description: "Placeholder feature copy." },
                { icon: "clock", title: "Bullet & Amortizing Options", description: "Placeholder feature copy." },
                { icon: "shield", title: "Subordinated to Senior Debt", description: "Placeholder feature copy." },
                { icon: "sparkles", title: "Equity Kicker Optionality", description: "Placeholder feature copy." },
            ],
            metrics: [
                { label: "Ticket Scale", value: "₹10 Cr to ₹100 Cr" },
                { label: "Tenor", value: "3 to 7 Years" },
                { label: "Security", value: "Subordinated / Unsecured" },
                { label: "Turnaround", value: "6 – 10 Weeks", highlight: true },
            ],
            image: "/service1-1.webp", // TODO
            imageEyebrow: "SPECIAL SITUATIONS DESK",
            imageTitle: "Placeholder Image Title", // TODO
            ctaText: "Discuss Your Mezzanine Requirement",
            ctaHref: "/contact",
        },
        {
            key: "convertible-notes",
            eyebrow: "HYBRID INSTRUMENTS",
            title: "Convertible Structured Notes", // TODO
            description: "Placeholder description — replace with your actual convertible notes copy.",
            features: [
                { icon: "file", title: "Custom Conversion Triggers", description: "Placeholder feature copy." },
                { icon: "shield", title: "Downside Protection Clauses", description: "Placeholder feature copy." },
                { icon: "clock", title: "Staggered Tranche Releases", description: "Placeholder feature copy." },
                { icon: "sparkles", title: "Investor-Aligned Pricing", description: "Placeholder feature copy." },
            ],
            metrics: [
                { label: "Ticket Scale", value: "₹15 Cr to ₹150 Cr" },
                { label: "Tenor", value: "2 to 5 Years" },
                { label: "Instrument", value: "CCDs / CCPS" },
                { label: "Turnaround", value: "8 – 12 Weeks", highlight: true },
            ],
            image: "/service1-2.png", // TODO
            imageEyebrow: "HYBRID CAPITAL DESK",
            imageTitle: "Placeholder Image Title", // TODO
            ctaText: "Discuss Your Convertible Notes Requirement",
            ctaHref: "/contact",
            imagePosition: "left",
        },
    ],

    faqs: [
        {
            question: "What is structured debt?", // TODO
            answer: "Placeholder answer — replace with your actual FAQ content.",
        },
        {
            question: "Who is structured debt suited for?", // TODO
            answer: "Placeholder answer — replace with your actual FAQ content.",
        },
    ],

    facilityBenchmark: {
        eyebrow: "FACILITY SPECIFICATION BENCHMARKS",
        title: "Structured Debt at a Glance", // TODO
        description: "Placeholder benchmark description — replace with real content.",
    },

    facilityBenchmarkColumns: [
        "STRUCTURED DEBT PRACTICE",
        "TICKET SIZE CORRIDOR",
        "COLLATERAL REQUIREMENT",
        "TENURE SPECTRUM",
        "TURNAROUND SPEED",
        "PRIMARY ASSESSMENT METRIC",
        "ACTION",
    ],

    facilityBenchmarkRows: [
        {
            icon: "◈",
            title: "Mezzanine Debt",
            subtitle: "Subordinated growth capital",
            ticketSize: "₹10 Cr – ₹100 Cr",
            collateral: "Subordinated / Unsecured",
            collateralType: "orange",
            tenure: "3 to 7 Years",
            turnaround: "6–10 Weeks",
            metric: "Cash Flow Coverage",
            action: "Inquire",
        },
        {
            icon: "◇",
            title: "Convertible Structured Notes",
            subtitle: "Hybrid debt-equity instruments",
            ticketSize: "₹15 Cr – ₹150 Cr",
            collateral: "Convertible / Structured",
            collateralType: "blue",
            tenure: "2 to 5 Years",
            turnaround: "8–12 Weeks",
            metric: "Valuation & Conversion Terms",
            action: "Inquire",
        },
    ],

    mandate: {
        eyebrow: "TRANSPARENT INSTITUTIONAL APPRAISAL",
        title: "Structure Your Debt Mandate", // TODO
        description: "Placeholder mandate description — replace with real content.",
        benefits: [
            { title: "100% Non-Disclosure Guaranteed", description: "Protected under bilateral confidentiality." },
            { title: "No Upfront Processing Retainer", description: "Success-aligned institutional advisory." },
            { title: "Direct Syndicate Desk Access", description: "Avoid multiple bureau scoring hits." },
        ],
        contact: {
            eyebrow: "DIRECT SYNDICATE LEADS",
            email: "structured.debt@fundastra.com", // TODO
            locations: "Mumbai BKC • Connaught Place, New Delhi • Indiranagar, Bengaluru",
        },
        fields: [
            { id: "companyName", label: "Company / Entity Name", required: true, type: "text", placeholder: "e.g. Apex Precision Forge Ltd" },
            { id: "promoterName", label: "Promoter / Director Name", required: true, type: "text", placeholder: "e.g. Rajesh Singhania" },
            { id: "email", label: "Corporate Email Address", required: true, type: "email", placeholder: "rajesh@apexforge.in" },
            { id: "phone", label: "Contact Phone Number", required: true, type: "tel", placeholder: "+91 98200 XXXXX" },
        ],
        subService: {
            label: "Selected Sub-Service",
            required: true,
            options: [
                "1. Mezzanine Debt",
                "2. Convertible Structured Notes",
                "3. Venture Debt", // TODO — add real options
            ],
        },
        capitalRequirement: {
            label: "Capital Requirement Scale",
            required: true,
            options: ["₹10 Cr – ₹25 Cr", "₹25 Cr – ₹50 Cr", "₹50 Cr – ₹100 Cr", "₹100 Cr+"],
        },
        overview: {
            label: "Situation & Business Overview",
            required: false,
            placeholder: "Placeholder textarea prompt — replace with real content.",
        },
        submitButton: "Submit Mandate for Appraisal",
        disclaimer: "Zero commitment • Strict institutional confidentiality guaranteed.",
    },
};

const EQUITY_FUNDRAISING_DATA: ServiceData = {
    eyebrow: "COMPANY PROFILE",
    title: "Equity Fundraising for Ambitious Growth.", // TODO
    description:
        "End-to-end equity capital raising — from seed rounds to pre-IPO placements — backed by a curated investor network.", // TODO
    image: "/smefunding.jpg", // TODO: replace image

    heroMetrics: [
        { label: "Capital Raised", value: "₹1,800", suffix: "+", unit: "Cr" },
        { label: "Investor Network", value: "150", suffix: "+" },
        { label: "Rounds Closed", value: "60", suffix: "+" },
        { label: "Avg. Close Time", value: "12", suffix: "", unit: "Wks" },
    ],

    subServices: {
        eyebrow: "dedicated equity fundraising tracks",
        title: "Capital Partners for Every Growth Stage.", // TODO
        description: "Placeholder description — replace with real content.",
    },

    detailCards: [
        {
            key: "series-round",
            eyebrow: "GROWTH CAPITAL",
            title: "Series A / B / C Fundraising", // TODO
            description: "Placeholder description — replace with real content.",
            features: [
                { icon: "sparkles", title: "Investor Targeting & Outreach", description: "Placeholder feature copy." },
                { icon: "file", title: "Data Room & Deck Preparation", description: "Placeholder feature copy." },
                { icon: "check", title: "Term Sheet Negotiation Support", description: "Placeholder feature copy." },
                { icon: "shield", title: "Confidential Process Management", description: "Placeholder feature copy." },
            ],
            metrics: [
                { label: "Round Size", value: "₹10 Cr to ₹200 Cr" },
                { label: "Stage", value: "Series A to C" },
                { label: "Investor Type", value: "VC / Growth Funds" },
                { label: "Avg. Timeline", value: "10 – 14 Weeks", highlight: true },
            ],
            image: "/service1-3.png", // TODO
            imageEyebrow: "GROWTH CAPITAL DESK",
            imageTitle: "Placeholder Image Title", // TODO
            ctaText: "Discuss Your Fundraising Requirement",
            ctaHref: "/contact",
        },
        {
            key: "pre-ipo",
            eyebrow: "LATE-STAGE PLACEMENT",
            title: "Pre-IPO & Family Office Syndication", // TODO
            description: "Placeholder description — replace with real content.",
            features: [
                { icon: "dollar", title: "Family Office Access", description: "Placeholder feature copy." },
                { icon: "file", title: "IPO-Readiness Advisory", description: "Placeholder feature copy." },
                { icon: "clock", title: "Structured Lock-In Terms", description: "Placeholder feature copy." },
                { icon: "sparkles", title: "Anchor Investor Sourcing", description: "Placeholder feature copy." },
            ],
            metrics: [
                { label: "Round Size", value: "₹25 Cr to ₹300 Cr" },
                { label: "Stage", value: "Pre-IPO" },
                { label: "Investor Type", value: "Family Offices / AIFs" },
                { label: "Avg. Timeline", value: "8 – 12 Weeks", highlight: true },
            ],
            image: "/service1-2.png", // TODO
            imageEyebrow: "LATE-STAGE CAPITAL DESK",
            imageTitle: "Placeholder Image Title", // TODO
            ctaText: "Discuss Your Pre-IPO Requirement",
            ctaHref: "/contact",
            imagePosition: "left",
        },
    ],

    faqs: [
        { question: "What stages of equity fundraising do you support?", answer: "Placeholder answer — replace with real content." }, // TODO
        { question: "How do you select investors for a mandate?", answer: "Placeholder answer — replace with real content." }, // TODO
    ],

    facilityBenchmark: {
        eyebrow: "FACILITY SPECIFICATION BENCHMARKS",
        title: "Equity Fundraising at a Glance", // TODO
        description: "Placeholder benchmark description — replace with real content.",
    },

    facilityBenchmarkColumns: [
        "EQUITY FUNDRAISING PRACTICE",
        "ROUND SIZE CORRIDOR",
        "INVESTOR TYPE",
        "TYPICAL STAGE",
        "TURNAROUND SPEED",
        "PRIMARY ASSESSMENT METRIC",
        "ACTION",
    ],

    facilityBenchmarkRows: [
        {
            icon: "◐",
            title: "Series A / B / C Fundraising",
            subtitle: "Institutional growth capital",
            ticketSize: "₹10 Cr – ₹200 Cr",
            collateral: "VC / Growth Funds",
            collateralType: "green",
            tenure: "N/A",
            turnaround: "10–14 Weeks",
            metric: "Growth Metrics & Unit Economics",
            action: "Inquire",
        },
        {
            icon: "◑",
            title: "Pre-IPO & Family Office Syndication",
            subtitle: "Late-stage private placement",
            ticketSize: "₹25 Cr – ₹300 Cr",
            collateral: "Family Offices / AIFs",
            collateralType: "orange",
            tenure: "N/A",
            turnaround: "8–12 Weeks",
            metric: "IPO Readiness & Valuation",
            action: "Inquire",
        },
    ],

    mandate: {
        eyebrow: "TRANSPARENT INSTITUTIONAL APPRAISAL",
        title: "Structure Your Fundraising Mandate", // TODO
        description: "Placeholder mandate description — replace with real content.",
        benefits: [
            { title: "100% Non-Disclosure Guaranteed", description: "Protected under bilateral confidentiality." },
            { title: "No Upfront Processing Retainer", description: "Success-aligned institutional advisory." },
            { title: "Direct Investor Desk Access", description: "Avoid noisy, unfocused investor outreach." },
        ],
        contact: {
            eyebrow: "DIRECT INVESTOR LEADS",
            email: "equity.fundraising@fundastra.com", // TODO
            locations: "Mumbai BKC • Connaught Place, New Delhi • Indiranagar, Bengaluru",
        },
        fields: [
            { id: "companyName", label: "Company / Entity Name", required: true, type: "text", placeholder: "e.g. Apex Precision Forge Ltd" },
            { id: "promoterName", label: "Promoter / Director Name", required: true, type: "text", placeholder: "e.g. Rajesh Singhania" },
            { id: "email", label: "Corporate Email Address", required: true, type: "email", placeholder: "rajesh@apexforge.in" },
            { id: "phone", label: "Contact Phone Number", required: true, type: "tel", placeholder: "+91 98200 XXXXX" },
        ],
        subService: {
            label: "Selected Sub-Service",
            required: true,
            options: [
                "1. Seed / Angel Round",
                "2. Series A / B / C Fundraising",
                "3. Pre-IPO & Family Office Syndication", // TODO — add real options
            ],
        },
        capitalRequirement: {
            label: "Capital Requirement Scale",
            required: true,
            options: ["₹5 Cr – ₹10 Cr", "₹10 Cr – ₹25 Cr", "₹25 Cr – ₹100 Cr", "₹100 Cr+"],
        },
        overview: {
            label: "Business Overview & Use of Funds",
            required: false,
            placeholder: "Placeholder textarea prompt — replace with real content.",
        },
        submitButton: "Submit Mandate for Appraisal",
        disclaimer: "Zero commitment • Strict institutional confidentiality guaranteed.",
    },
};

const SERVICE_DATA: Record<ServiceKey, ServiceData> = {
    sme: SME_DATA,
    "structured-debt": STRUCTURED_DEBT_DATA,
    "equity-fundraising": EQUITY_FUNDRAISING_DATA,
};

function resolveServiceKey(pathname: string): ServiceKey {
    if (pathname.includes("structured-debt")) return "structured-debt";
    if (pathname.includes("equity")) return "equity-fundraising";
    return "sme";
}

const revealVariants = {
    hidden: {
        opacity: 0,
        y: 70,
        scale: 0.97,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.10,
        },
    },
};

const smallBoxVariants = {
    hidden: {
        opacity: 0,
        y: 45,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    },
};

function Reveal({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            variants={revealVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
                once: true,
                amount: 0.12,
            }}
        >
            {children}
        </motion.div>
    );
}

export default function ServicePage() {
    const pathname = usePathname() || "";
    const serviceKey = resolveServiceKey(pathname);
    const data = SERVICE_DATA[serviceKey];

    return (
        <main className="bg-[#FBF9F6]">

            {/* HERO */}
            <section className="relative min-h-[802px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-[#003B32]/75" />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                <Navbar />

                <motion.div
                    className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1200px] flex-col items-center justify-center px-5 pb-[170px] pt-[190px] text-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        amount: 0.25,
                    }}
                    variants={staggerContainer}
                >
                    {/* EYEBROW */}
                    <motion.div
                        variants={smallBoxVariants}
                        className="mb-[26px] inline-flex items-center rounded-full bg-white px-[19px]"
                    >
                        <span className="font-sans text-[17px] font-[800] tracking-[0.06em] text-[#052E26]">
                            {data.eyebrow}
                        </span>
                    </motion.div>

                    {/* TITLE */}
                    <motion.h1
                        variants={smallBoxVariants}
                        className="max-w-[636px] font-display text-[48px] font-[600] leading-[1.05] tracking-[-0.025em] text-[#FBF9F6] sm:text-[58px] lg:text-[64px]"
                    >
                        {data.title}
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        variants={smallBoxVariants}
                        className="mt-[28px] max-w-[897px] font-sans text-[16px] font-[500] leading-[1.5] text-white sm:text-[20px]"
                    >
                        {data.description}
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        variants={staggerContainer}
                        className="mt-[38px] flex flex-wrap items-center justify-center gap-[12px]"
                    >
                        <motion.div variants={smallBoxVariants}>
                            <Link
                                href="/contact"
                                className="inline-flex h-[50px] items-center justify-center rounded-[7px] bg-white px-[25px] font-sans text-[17px] font-[600] text-[#0A271E] transition-opacity duration-200 hover:opacity-90"
                            >
                                Discuss Your Funding Requirement
                            </Link>
                        </motion.div>

                        <motion.div variants={smallBoxVariants}>
                            <Link
                                href="#sub-services"
                                className="inline-flex h-[50px] items-center justify-center gap-[7px] rounded-[7px] border border-white/20 bg-[#173329] px-[24px] font-sans text-[17px] font-[600] text-[#FBF9F6] backdrop-blur-sm transition-colors duration-200 hover:bg-[#3d625a]"
                            >
                                Explore Sub Services
                                <span className="text-[15px]">↓</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* STATS */}
                <div className="relative z-10 mx-auto -mt-[130px] h-[170px] max-w-[1184px] px-4">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        className="grid divide-y divide-white overflow-hidden rounded-[20px] border border-white bg-[#F5F2EC] shadow-[0_18px_24px_-12px_rgba(0,0,0,0.22)] sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:divide-white lg:grid-cols-4"
                    >
                        {data.heroMetrics.map((m) => (
                            <motion.div
                                key={m.label}
                                variants={smallBoxVariants}
                                className="h-[154px] w-[295.5px] px-[27px] py-[32px]"
                            >
                                <p className="font-sans text-[11px] font-[700] uppercase tracking-[0.11em] text-[#8C9791]">
                                    {m.label}
                                </p>

                                <div className="mt-[14px] flex items-baseline font-display text-[50px] font-[700] leading-none text-brand-green">
                                    {m.value}

                                    {m.suffix && (
                                        <span className="relative -top-[6px] ml-[2px] text-[35px] font-[500] text-[#e8b43a]">
                                            {m.suffix}
                                        </span>
                                    )}

                                    {m.unit && (
                                        <span className="ml-[6px] font-display text-[27px] font-[500] text-[#5F6863]">
                                            {m.unit}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* SUB-SERVICES HEADING */}
            <Reveal>
                <section
                    id="sub-services"
                    className="mb-4 bg-white px-6 pb-[30px] pt-[60px] text-center"
                >
                    <div className="mx-auto max-w-[1000px]">
                        <p className="mx-auto w-[420px] rounded-[8px] bg-[#052E26] py-1 font-sans text-[18px] font-[700] uppercase tracking-[1px] text-[#FBF9F6]">
                            {data.subServices.eyebrow}
                        </p>

                        <h2 className="mt-[10px] font-display text-[43px] font-[500] leading-[1.04] text-[#052E26]">
                            {data.subServices.title}
                        </h2>

                        <p className="mx-auto mt-[14px] max-w-[989px] font-sans text-[18px] leading-[1.6] text-[#424845]">
                            {data.subServices.description}
                        </p>
                    </div>
                </section>
            </Reveal>

            {/* DETAIL CARDS */}
            {data.detailCards.map((card) => (
                <Fragment key={card.key}>

                    <Reveal>
                        <ServiceDetailCard
                            eyebrow={card.eyebrow}
                            title={card.title}
                            description={card.description}
                            features={card.features}
                            metrics={card.metrics}
                            image={card.image}
                            imageEyebrow={card.imageEyebrow}
                            imageTitle={card.imageTitle}
                            ctaText={card.ctaText}
                            ctaHref={card.ctaHref}
                            imagePosition={card.imagePosition}
                        />
                    </Reveal>

                    {card.extraAfter === "credit-facilities" && (
                        <Reveal>
                            <CreditFacilitiesSection />
                        </Reveal>
                    )}

                    {card.extraAfter === "property-purchase" && (
                        <Reveal>
                            <PropertyPurchaseCard />
                        </Reveal>
                    )}

                </Fragment>
            ))}

            {/* FACILITY BENCHMARK HEADING */}
            <Reveal>
                <section className="bg-white px-6 py-[45px]">
                    <div className="mx-auto max-w-[1000px] text-center">
                        <div className="inline-flex items-center rounded-[7px] bg-[#052E26] px-[14px] py-[5px]">
                            <span className="font-sans text-[16px] font-[700] uppercase leading-none tracking-[0.04em] text-white">
                                {data.facilityBenchmark.eyebrow}
                            </span>
                        </div>

                        <h2 className="mt-[10px] font-display text-[34px] font-[500] leading-[1.08] tracking-[-0.02em] text-[#052E26] sm:text-[38px]">
                            {data.facilityBenchmark.title}
                        </h2>

                        <p className="mx-auto mt-[7px] max-w-[700px] font-sans text-[15px] font-[400] leading-[1.55] text-[#424845]">
                            {data.facilityBenchmark.description}
                        </p>
                    </div>
                </section>
            </Reveal>

            {/* FACILITY SPECIFICATION TABLE */}
            <section className="bg-[#FBF9F6] px-4 py-[58px] sm:px-6 lg:px-[110px]">
                <div className="mx-auto w-full max-w-[1200px]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.12,
                        }}
                        variants={staggerContainer}
                        className="w-full overflow-hidden rounded-[10px] border border-[#E2DED7] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                    >
                        {/* HEADER */}
                        <div className="grid grid-cols-[1.65fr_1fr_1.05fr_1fr_1fr_1.55fr_.48fr] bg-[#052E26]">
                            {data.facilityBenchmarkColumns.map((column) => (
                                <div
                                    key={column}
                                    className="flex min-h-[53px] items-center px-[16px]"
                                >
                                    <span className="font-sans text-[11px] font-[600] uppercase leading-[1.25] tracking-[0.07em] text-white">
                                        {column}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* ROWS */}
                        {data.facilityBenchmarkRows.map((row, index) => (
                            <motion.div
                                key={row.title}
                                variants={smallBoxVariants}
                                className={`grid grid-cols-[1.65fr_1fr_1.05fr_1fr_1fr_1.55fr_.48fr] text-2xl ${index !== data.facilityBenchmarkRows.length - 1
                                    ? "border-b border-[#E5E1DB]"
                                    : ""
                                    }`}
                            >
                                <div className="flex min-h-[78px] items-center gap-[10px] px-[16px]">
                                    <span className="shrink-0 font-sans text-[14px] font-[600] text-[#A88954]">
                                        {row.icon}
                                    </span>

                                    <div className="min-w-0">
                                        <p className="font-sans text-[14px] font-[700] leading-[1.25] text-[#061812]">
                                            {row.title}
                                        </p>

                                        <p className="mt-[2px] font-sans text-[11px] font-[400] leading-[1.25] text-[#424845]">
                                            {row.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center px-[16px]">
                                    <span className="font-sans text-[12px] font-[600] leading-[1.3] text-[#061812]">
                                        {row.ticketSize}
                                    </span>
                                </div>

                                <div className="flex items-center px-[20px]">
                                    <span
                                        className={`inline-flex max-w-full rounded-[2px] border px-[8px] py-[4px] font-sans text-[9px] font-[500] leading-[1.26] ${row.collateralType === "green"
                                            ? "border-[#9BDCC5] bg-[#EEFAF5] text-[#14785A]"
                                            : row.collateralType === "blue"
                                                ? "border-[#BDD3F6] bg-[#F1F6FE] text-[#315E9D]"
                                                : row.collateralType === "orange"
                                                    ? "border-[#E7B984] bg-[#FFF7EC] text-[#9A5A16]"
                                                    : "border-[#EBCF78] bg-[#FFF9E8] text-[#9A711C]"
                                            }`}
                                    >
                                        {row.collateral}
                                    </span>
                                </div>

                                <div className="flex items-center px-[16px]">
                                    <span className="font-sans text-[12px] font-[400] leading-[1.35] text-[#424845]">
                                        {row.tenure}
                                    </span>
                                </div>

                                <div className="flex items-center px-[16px]">
                                    <span
                                        className={`font-sans text-[12px] leading-[1.35] ${row.turnaroundHighlight
                                            ? "font-[700] text-[#087C5A]"
                                            : "font-[500] text-[#1B1C1A]"
                                            }`}
                                    >
                                        {row.turnaround}
                                    </span>
                                </div>

                                <div className="flex items-center px-[16px]">
                                    <span className="font-sans text-[12px] font-[400] leading-[1.35] text-[#424845]">
                                        {row.metric}
                                    </span>
                                </div>

                                <div className="flex items-center justify-center px-[10px]">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-[3px] whitespace-nowrap font-sans text-[12px] font-[500] text-[#A88954] transition-opacity duration-200 hover:opacity-60"
                                    >
                                        {row.action}
                                        <ArrowRight size={10} strokeWidth={1.8} />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* MANDATE FORM */}
            <section className="bg-[#052E26] px-4 py-[80px] sm:px-6 lg:px-[12px]">
                <Reveal>
                    <div className="mx-auto w-full max-w-[1200px] overflow-hidden rounded-[20px] bg-white px-[48px] py-[48px] lg:px-[58px] lg:py-[45px]">
                        <div className="grid items-start lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-[50px]">

                            {/* LEFT CONTENT */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                variants={staggerContainer}
                                className="min-w-0"
                            >
                                <motion.div
                                    variants={smallBoxVariants}
                                    className="mb-[16px] inline-flex items-center gap-[7px]"
                                >
                                    <span className="font-sans text-[16px] text-[#A88954]">
                                        ♧
                                    </span>

                                    <span className="font-sans text-[11px] font-[700] uppercase tracking-[0.13em] text-[#A88954]">
                                        {data.mandate.eyebrow}
                                    </span>
                                </motion.div>

                                <motion.h2
                                    variants={smallBoxVariants}
                                    className="max-w-[419.83px] font-display text-[36px] font-[600] leading-[1.03] tracking-[-0.025em] text-[#061812]"
                                >
                                    {data.mandate.title}
                                </motion.h2>

                                <motion.p
                                    variants={smallBoxVariants}
                                    className="mt-[14px] max-w-[419.83px] font-sans text-[13px] font-[400] leading-[1.55] text-[#424845]"
                                >
                                    {data.mandate.description}
                                </motion.p>

                                <motion.div
                                    variants={smallBoxVariants}
                                    className="mt-[12px] h-px w-full max-w-[390px] bg-[#E3E0DA]"
                                />

                                <motion.div
                                    variants={staggerContainer}
                                    className="mt-[28px] w-full max-w-[389px] space-y-[16px]"
                                >
                                    {data.mandate.benefits.map((benefit) => (
                                        <motion.div
                                            key={benefit.title}
                                            variants={smallBoxVariants}
                                            className="flex items-start gap-[10px]"
                                        >
                                            <span className="shrink-0 text-[20px] leading-[1] text-[#A88954]">
                                                ◉
                                            </span>

                                            <div className="min-w-0">
                                                <p className="font-sans text-[12px] font-[700] leading-[1.35] text-[#1B1C1A]">
                                                    {benefit.title}:{" "}
                                                    <span className="font-[700]">
                                                        {benefit.description}
                                                    </span>
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.div
                                    variants={smallBoxVariants}
                                    className="mt-[26px] h-px w-full max-w-[390px] bg-[#E3E0DA]"
                                />

                                <motion.div
                                    variants={smallBoxVariants}
                                    className="mt-[25px]"
                                >
                                    <p className="font-sans text-[10px] font-[700] uppercase tracking-[0.14em] text-[#A88954]">
                                        {data.mandate.contact.eyebrow}
                                    </p>

                                    <p className="mt-[6px] font-sans text-[13px] font-[600] text-[#061812]">
                                        {data.mandate.contact.email}
                                    </p>

                                    <p className="mt-[3px] font-sans text-[11px] font-[400] text-[#424845]">
                                        {data.mandate.contact.locations}
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* RIGHT FORM */}
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                variants={staggerContainer}
                                className="min-w-0"
                            >
                                <motion.div
                                    variants={staggerContainer}
                                    className="grid w-full grid-cols-1 gap-x-[14px] gap-y-[14px] sm:grid-cols-2"
                                >
                                    {data.mandate.fields.map((field) => (
                                        <motion.div
                                            key={field.id}
                                            variants={smallBoxVariants}
                                            className="min-w-0"
                                        >
                                            <label
                                                htmlFor={field.id}
                                                className="mb-[8px] block font-sans text-[12px] font-[600] text-[#061812]"
                                            >
                                                {field.label}
                                                {field.required && " *"}
                                            </label>

                                            <input
                                                id={field.id}
                                                name={field.id}
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                className="h-[46px] w-[297.08px] rounded-[8px] border border-[#DEDAD3] bg-[#F1EFEB] px-[12px] font-sans text-[12px] text-[#061812] outline-none placeholder:text-[#A8AAA6] focus:border-[#A88954]"
                                            />
                                        </motion.div>
                                    ))}

                                    <motion.div
                                        variants={smallBoxVariants}
                                        className="min-w-0"
                                    >
                                        <label
                                            htmlFor="selectedSubService"
                                            className="mb-[8px] block font-sans text-[12px] font-[600] text-[#061812]"
                                        >
                                            {data.mandate.subService.label}
                                            {data.mandate.subService.required && " *"}
                                        </label>

                                        <select
                                            id="selectedSubService"
                                            name="selectedSubService"
                                            defaultValue={data.mandate.subService.options[0]}
                                            className="h-[46px] w-[297.08px] appearance-none rounded-[8px] border border-[#DEDAD3] bg-[#F1EFEB] px-[12px] font-sans text-[12px] text-[#061812] outline-none focus:border-[#A88954]"
                                        >
                                            {data.mandate.subService.options.map(
                                                (option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                    </motion.div>

                                    <motion.div
                                        variants={smallBoxVariants}
                                        className="min-w-0"
                                    >
                                        <label
                                            htmlFor="capitalRequirement"
                                            className="mb-[8px] block font-sans text-[12px] font-[600] text-[#061812]"
                                        >
                                            {data.mandate.capitalRequirement.label}
                                            {data.mandate.capitalRequirement.required &&
                                                " *"}
                                        </label>

                                        <select
                                            id="capitalRequirement"
                                            name="capitalRequirement"
                                            defaultValue={
                                                data.mandate.capitalRequirement.options[0]
                                            }
                                            className="h-[46px] w-[297.08px] appearance-none rounded-[8px] border border-[#DEDAD3] bg-[#F1EFEB] px-[12px] font-sans text-[12px] text-[#061812] outline-none focus:border-[#A88954]"
                                        >
                                            {data.mandate.capitalRequirement.options.map(
                                                (option) => (
                                                    <option key={option} value={option}>
                                                        {option}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    variants={smallBoxVariants}
                                    className="mt-[14px] w-full"
                                >
                                    <label
                                        htmlFor="businessOverview"
                                        className="mb-[8px] block font-sans text-[12px] font-[600] text-[#061812]"
                                    >
                                        {data.mandate.overview.label}
                                        {data.mandate.overview.required && " *"}
                                        {!data.mandate.overview.required &&
                                            " (Optional)"}
                                    </label>

                                    <textarea
                                        id="businessOverview"
                                        name="businessOverview"
                                        placeholder={data.mandate.overview.placeholder}
                                        className="h-[94px] w-full resize-none rounded-[8px] border border-[#DEDAD3] bg-[#E6E2DC] px-[12px] py-[10px] font-sans text-[14px] leading-[1.4] text-[#27483d] outline-none placeholder:text-[#A8AAA6] focus:border-[#A88954]"
                                    />
                                </motion.div>

                                <motion.button
                                    variants={smallBoxVariants}
                                    type="button"
                                    className="mt-[25px] flex h-[45px] w-full items-center justify-center rounded-[8px] border border-[#A88954] bg-[#052E26] font-sans text-[14px] font-[600] text-white shadow-[0_6px_12px_rgba(0,0,0,0.12)] transition-opacity duration-200 hover:opacity-90"
                                >
                                    {data.mandate.submitButton}

                                    <span className="ml-[7px] text-[#D4AF37]">
                                        ♧
                                    </span>
                                </motion.button>

                                <motion.p
                                    variants={smallBoxVariants}
                                    className="mt-[12px] text-center font-sans text-[11px] font-[400] text-[#424845]"
                                >
                                    {data.mandate.disclaimer}
                                </motion.p>
                            </motion.div>

                        </div>
                    </div>
                </Reveal>
            </section>

            {/* FAQ */}
            <Reveal>
                <FaqSection faqs={data.faqs} />
            </Reveal>

            {/* PARTNER CONSORTIUM */}
            <div className="bg-white px-4 py-[53px] sm:px-6 lg:px-[85px]">
                <Reveal>
                    <div className="mx-auto max-w-[1213px]">
                        <div className="h-[156px] rounded-[8px] bg-[#F6F4F1] pt-[45px]">
                            <p className="text-center font-sans text-[11px] font-[700] uppercase tracking-[0.12em] text-[#424845]">
                                Institutional Partner Consortium &amp; Credit Fund Networks
                            </p>

                            <motion.div
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{
                                    once: true,
                                    amount: 0.3,
                                }}
                                className="mt-[20px] flex flex-wrap items-center justify-center gap-[22px]"
                            >
                                {PARTNER_TYPES.map((item) => (
                                    <motion.span
                                        key={item}
                                        variants={smallBoxVariants}
                                        className="h-[42px] w-[173px] whitespace-nowrap rounded-[4px] border border-[#E2E5E2] bg-white py-2 text-center font-sans text-[12px] font-[600] text-[#424845]"
                                    >
                                        {item}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* CONTACT */}
            <Reveal>
                <ContactAdvisorySection />
            </Reveal>

            {/* FOOTER */}
            <Footer />

        </main>
    );
}