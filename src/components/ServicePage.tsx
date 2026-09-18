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
    title: "Structured Debt for Complex Capital Needs.",
    description:
        "Customized debt solutions engineered beyond conventional bank lending — high-ticket funding, debt consolidation, and multi-lender syndication structured around your balance sheet, not a standard template.",
    image: "/smefunding.jpg",

    heroMetrics: [
        { label: "Structures Closed", value: "60", suffix: "+" },
        { label: "Lender & Fund Network", value: "70", suffix: "+" },
        { label: "Avg. Deal Size", value: "₹65", suffix: "+", unit: "Cr" },
        { label: "Execution Velocity", value: "6", suffix: "", unit: "Wks" },
    ],

    subServices: {
        eyebrow: "6 dedicated structured debt facilities",
        title: "Debt Architecture Built Around Your Balance Sheet.",
        description:
            "From bespoke covenant design to large-ticket syndication, consolidation, and bridge liquidity — structures engineered to match your cash-flow reality, not a standard template.",
    },

    detailCards: [
        {
            key: "customized-debt",
            eyebrow: "BESPOKE CREDIT ARCHITECTURE",
            title: "Customized Debt Solutions",
            description:
                "Purpose-built debt structures — tailored covenants, moratoriums, and repayment cadences — designed around your specific cash-flow cycle, collateral mix, and growth trajectory rather than a one-size-fits-all bank product.",
            features: [
                {
                    icon: "percent",
                    title: "Tailored Covenant Design",
                    description:
                        "Interest resets, moratoriums, and repayment cadences structured to match your actual operating cycle, not a generic template.",
                },
                {
                    icon: "file",
                    title: "Blended Collateral Structuring",
                    description:
                        "Combine property, receivables, inventory, and promoter guarantees into a single optimized credit facility.",
                },
                {
                    icon: "shield",
                    title: "Risk-Calibrated Pricing",
                    description:
                        "Pricing benchmarked to your credit profile and structure complexity, not a flat institutional rate card.",
                },
                {
                    icon: "clock",
                    title: "Phased Drawdown Schedules",
                    description:
                        "Capital released in tranches aligned to project milestones or working capital cycles, reducing idle interest cost.",
                },
            ],
            metrics: [
                { label: "Ticket Scale", value: "₹5 Cr to ₹75 Cr" },
                { label: "Structuring Timeline", value: "4 to 8 Weeks" },
                { label: "Collateral Mix", value: "Property / Receivables / Mixed" },
                { label: "Turnaround Cycle", value: "20 – 30 Business Days", highlight: true },
            ],
            image: "/service1-1.webp",
            imageEyebrow: "BESPOKE STRUCTURING DESK",
            imageTitle: "Debt Architecture Engineered Around Your Cash Flow",
            ctaText: "Discuss Your Customized Debt Requirement",
            ctaHref: "/contact",
        },
        {
            key: "high-ticket",
            eyebrow: "LARGE-TICKET INSTITUTIONAL FUNDING",
            title: "High-Ticket Business Funding",
            description:
                "Large-ticket capital mobilization for enterprises executing major expansion, acquisition, or capital-intensive projects — structured through institutional lenders capable of underwriting significant exposure.",
            features: [
                {
                    icon: "dollar",
                    title: "Single-Desk Large Exposure",
                    description:
                        "Access lenders with the balance sheet capacity to underwrite single-ticket exposures upward of ₹50 Cr.",
                },
                {
                    icon: "shield",
                    title: "Consortium-Grade Underwriting",
                    description:
                        "Institutional-grade credit appraisal matching the rigor of consortium lending, even for bilateral facilities.",
                },
                {
                    icon: "file",
                    title: "Project & Expansion Financing",
                    description:
                        "Structured term debt aligned to capex timelines, greenfield or brownfield expansion, and acquisition financing.",
                },
                {
                    icon: "clock",
                    title: "Extended Repayment Horizons",
                    description:
                        "Tenors structured up to 10–12 years to match long-gestation, capital-intensive projects.",
                },
            ],
            metrics: [
                { label: "Ticket Scale", value: "₹25 Cr to ₹250 Cr+" },
                { label: "Repayment Tenor", value: "Up to 12 Years" },
                { label: "Security Profile", value: "Project Assets / Corp. Guarantee" },
                { label: "Turnaround Cycle", value: "6 – 10 Weeks", highlight: true },
            ],
            image: "/unsecured-business.jpg",
            imageEyebrow: "LARGE EXPOSURE DESK",
            imageTitle: "Capital Mobilization for Expansion & Acquisition-Scale Mandates",
            ctaText: "Discuss Your High-Ticket Funding Requirement",
            ctaHref: "/contact",
            imagePosition: "left",
        },
        {
            key: "debt-consolidation",
            eyebrow: "BALANCE SHEET OPTIMIZATION",
            title: "Debt Consolidation",
            description:
                "Simplify a fragmented borrowing history — multiple term loans, working capital lines, and unsecured facilities — into a single, lower-cost, better-structured credit facility that eases repayment pressure and improves covenant headroom.",
            features: [
                {
                    icon: "check",
                    title: "Multi-Facility Refinancing",
                    description:
                        "Consolidate term loans, OD/CC lines, and unsecured debt raised across different lenders into one facility.",
                },
                {
                    icon: "percent",
                    title: "Blended Rate Reduction",
                    description:
                        "Replace higher-cost legacy borrowings with a single facility priced closer to institutional benchmarks.",
                },
                {
                    icon: "clock",
                    title: "Simplified Repayment Calendar",
                    description:
                        "One consolidated EMI schedule in place of multiple overlapping repayment obligations across lenders.",
                },
                {
                    icon: "shield",
                    title: "Improved Covenant Headroom",
                    description:
                        "Restructured leverage ratios and DSCR profile that free up capacity for future working capital or growth debt.",
                },
            ],
            metrics: [
                { label: "Ticket Scale", value: "₹5 Cr to ₹60 Cr" },
                { label: "Facilities Consolidated", value: "2 to 8+ Existing Lines" },
                { label: "Rate Improvement", value: "Up to 250–350 bps" },
                { label: "Turnaround Cycle", value: "15 – 25 Business Days", highlight: true },
            ],
            image: "/service1-2.png",
            imageEyebrow: "BALANCE SHEET CLEAN-UP",
            imageTitle: "One Facility, One Rate, One Repayment Calendar",
            ctaText: "Discuss Your Debt Consolidation Requirement",
            ctaHref: "/contact",
        },
        {
            key: "syndicated-debt",
            eyebrow: "MULTI-LENDER MANDATE EXECUTION",
            title: "Multiple-Lender / Syndicated Debt",
            description:
                "For funding requirements that exceed a single institution's exposure appetite, we structure and lead multi-lender syndicates — coordinating documentation, security sharing, and pari-passu arrangements across the consortium.",
            features: [
                {
                    icon: "link",
                    title: "Lead Arranger Coordination",
                    description:
                        "We structure the facility and coordinate the consortium, so you deal with a single point of contact, not five banks.",
                },
                {
                    icon: "file",
                    title: "Pari-Passu Security Structuring",
                    description:
                        "Shared or first/second-charge security arrangements documented and negotiated across all participating lenders.",
                },
                {
                    icon: "shield",
                    title: "Standardized Documentation",
                    description:
                        "Common loan agreement and inter-creditor terms that avoid conflicting covenants across lenders.",
                },
                {
                    icon: "percent-circle",
                    title: "Competitive Syndicate Pricing",
                    description:
                        "Multiple lenders competing within the syndicate structure typically improves overall blended pricing.",
                },
            ],
            metrics: [
                { label: "Ticket Scale", value: "₹50 Cr to ₹300 Cr+" },
                { label: "Syndicate Size", value: "3 to 8+ Lenders" },
                { label: "Security Type", value: "Pari-Passu / Structured Charge" },
                { label: "Turnaround Cycle", value: "8 – 14 Weeks", highlight: true },
            ],
            image: "/service1-3.png",
            imageEyebrow: "CONSORTIUM LEAD DESK",
            imageTitle: "One Facility, Multiple Lenders, Single Point of Coordination",
            ctaText: "Discuss Your Syndicated Debt Requirement",
            ctaHref: "/contact",
            imagePosition: "left",
        },
        {
            key: "bridge-financing",
            eyebrow: "SHORT-TERM INTERIM LIQUIDITY",
            title: "Bridge Financing",
            description:
                "Fast, short-tenor debt to bridge the gap ahead of an anticipated liquidity event — an incoming equity round, asset sale, or refinancing — so time-sensitive opportunities aren't lost waiting on a longer-cycle facility.",
            features: [
                {
                    icon: "clock",
                    title: "Rapid Interim Disbursal",
                    description:
                        "Capital released quickly against a clearly defined, near-term repayment or takeout event.",
                },
                {
                    icon: "link",
                    title: "Takeout-Linked Structuring",
                    description:
                        "Facility structured to be repaid from a specific expected inflow — equity close, asset sale, or refinance.",
                },
                {
                    icon: "shield",
                    title: "Flexible Interim Security",
                    description:
                        "Security accepted against receivables, promoter shares, or interim charge on assets pending permanent financing.",
                },
                {
                    icon: "percent",
                    title: "Short-Tenor Pricing",
                    description:
                        "Pricing structured for tenors of 6–18 months, reflecting the interim nature of the facility.",
                },
            ],
            metrics: [
                { label: "Ticket Scale", value: "₹5 Cr to ₹50 Cr" },
                { label: "Tenor", value: "6 to 18 Months" },
                { label: "Repayment Source", value: "Defined Takeout Event" },
                { label: "Turnaround Cycle", value: "3 – 5 Weeks", highlight: true },
            ],
            image: "/bridge-financing.jpg",
            imageEyebrow: "INTERIM LIQUIDITY DESK",
            imageTitle: "Bridging the Gap Ahead of Your Next Capital Event",
            ctaText: "Discuss Your Bridge Financing Requirement",
            ctaHref: "/contact",
        },
        {
            key: "acquisition-financing",
            eyebrow: "M&A & BUYOUT DEBT",
            title: "Acquisition Financing",
            description:
                "Structured debt to fund the acquisition of a target business, promoter buyout, or controlling stake — combining senior debt with the acquired entity's own cash flows and assets to fund the transaction.",
            features: [
                {
                    icon: "file",
                    title: "Target Cash-Flow Underwriting",
                    description:
                        "Facility sized against the combined post-acquisition cash flow of acquirer and target, not acquirer alone.",
                },
                {
                    icon: "shield",
                    title: "Target Asset Security",
                    description:
                        "Security structured over the acquired entity's assets alongside acquirer collateral where required.",
                },
                {
                    icon: "clock",
                    title: "Deal-Timeline Aligned Drawdown",
                    description:
                        "Funds released in coordination with signing and closing milestones of the underlying transaction.",
                },
                {
                    icon: "percent-circle",
                    title: "Layered Debt Structuring",
                    description:
                        "Senior and subordinated tranches combined where required to optimize overall cost of acquisition capital.",
                },
            ],
            metrics: [
                { label: "Ticket Scale", value: "₹20 Cr to ₹200 Cr" },
                { label: "Tenor", value: "4 to 8 Years" },
                { label: "Security Profile", value: "Target + Acquirer Assets" },
                { label: "Turnaround Cycle", value: "8 – 12 Weeks", highlight: true },
            ],
            image: "/acc-financing.png",
            imageEyebrow: "M&A FINANCING DESK",
            imageTitle: "Funding Buyouts and Controlling-Stake Acquisitions",
            ctaText: "Discuss Your Acquisition Financing Requirement",
            ctaHref: "/contact",
            imagePosition: "left",
        },
    ],

    faqs: [
        {
            question: "What kinds of structured debt does Fund Astra arrange?",
            answer:
                "We structure customized debt solutions, high-ticket institutional funding, debt consolidation, multi-lender syndicated debt, bridge financing, and acquisition financing for mid-market and large enterprises.",
        },
        {
            question: "When does structured debt make more sense than standard bank lending?",
            answer:
                "Structured debt is suited to situations standard bank products don't fit well — large tickets, blended collateral, multiple existing facilities, time-sensitive bridge needs, or repayment cycles that don't match a conventional term loan.",
        },
        {
            question: "How large a facility can be arranged through syndication?",
            answer:
                "Through multi-lender syndication we structure facilities upward of ₹50 Cr, scaled to ₹300 Cr and beyond depending on the underlying asset base and cash flow strength.",
        },
        {
            question: "What documentation is required to assess a structured debt mandate?",
            answer:
                "Initial assessment typically requires audited financials, existing loan and repayment schedules, banking statements, and details of the collateral or security being offered.",
        },
        {
            question: "Can existing loans from multiple lenders be consolidated into one facility?",
            answer:
                "Yes. Debt consolidation is one of our core structured debt practices, combining fragmented borrowings into a single facility with a simplified repayment schedule.",
        },
        {
            question: "How quickly can bridge financing be arranged?",
            answer:
                "Bridge facilities are structured for speed — typical turnaround is 3 to 5 weeks, given the facility is repaid from a clearly defined takeout event.",
        },
    ],

    facilityBenchmark: {
        eyebrow: "FACILITY SPECIFICATION BENCHMARKS",
        title: "Structured Debt at a Glance",
        description:
            "Compare structured borrowing vehicles across ticket size, security requirements, tenure, and typical execution timelines.",
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
            title: "Customized Debt Solutions",
            subtitle: "Bespoke covenant & collateral structuring",
            ticketSize: "₹5 Cr – ₹75 Cr",
            collateral: "Blended / Mixed Security",
            collateralType: "blue",
            tenure: "3 to 8 Years",
            turnaround: "20–30 Business Days",
            metric: "Cash Flow & Collateral Mix",
            action: "Inquire",
        },
        {
            icon: "◆",
            title: "High-Ticket Business Funding",
            subtitle: "Large-exposure institutional lending",
            ticketSize: "₹25 Cr – ₹250 Cr+",
            collateral: "Project Assets / Corp. Guarantee",
            collateralType: "gold",
            tenure: "Up to 12 Years",
            turnaround: "6–10 Weeks",
            metric: "Project Viability & DSCR",
            action: "Inquire",
        },
        {
            icon: "⟲",
            title: "Debt Consolidation",
            subtitle: "Multi-facility refinancing",
            ticketSize: "₹5 Cr – ₹60 Cr",
            collateral: "Existing Facility Security",
            collateralType: "green",
            tenure: "3 to 7 Years",
            turnaround: "15–25 Business Days",
            metric: "Blended Rate & DSCR Improvement",
            action: "Inquire",
        },
        {
            icon: "⛓",
            title: "Multiple-Lender / Syndicated Debt",
            subtitle: "Consortium-led large mandates",
            ticketSize: "₹50 Cr – ₹300 Cr+",
            collateral: "Pari-Passu / Structured Charge",
            collateralType: "orange",
            tenure: "5 to 10 Years",
            turnaround: "8–14 Weeks",
            metric: "Consortium Coverage Ratio",
            action: "Inquire",
        },
        {
            icon: "⏱",
            title: "Bridge Financing",
            subtitle: "Short-term interim liquidity",
            ticketSize: "₹5 Cr – ₹50 Cr",
            collateral: "Receivables / Shares / Interim Charge",
            collateralType: "gold",
            tenure: "6 to 18 Months",
            turnaround: "3–5 Weeks",
            turnaroundHighlight: true,
            metric: "Defined Takeout Event",
            action: "Inquire",
        },
        {
            icon: "⚭",
            title: "Acquisition Financing",
            subtitle: "M&A & buyout debt",
            ticketSize: "₹20 Cr – ₹200 Cr",
            collateral: "Target + Acquirer Assets",
            collateralType: "blue",
            tenure: "4 to 8 Years",
            turnaround: "8–12 Weeks",
            metric: "Combined Post-Deal Cash Flow",
            action: "Inquire",
        },
    ],

    mandate: {
        eyebrow: "TRANSPARENT INSTITUTIONAL APPRAISAL",
        title: "Structure Your Debt Mandate",
        description:
            "Submit your enterprise's debt parameters to Fund Astra's senior credit desk. We evaluate existing leverage, structure the optimal facility — bespoke, large-ticket, consolidated, syndicated, bridge, or acquisition-linked — and coordinate execution across our institutional lender network.",
        benefits: [
            { title: "100% Non-Disclosure Guaranteed", description: "Protected under bilateral confidentiality." },
            { title: "No Upfront Processing Retainer", description: "Success-aligned institutional advisory." },
            { title: "Direct Syndicate Desk Access", description: "Avoid multiple bureau scoring hits." },
        ],
        contact: {
            eyebrow: "DIRECT SYNDICATE LEADS",
            email: "debt.mandates@fundastra.com",
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
                "1. Customized Debt Solutions",
                "2. High-Ticket Business Funding",
                "3. Debt Consolidation",
                "4. Multiple-Lender / Syndicated Debt",
                "5. Bridge Financing",
                "6. Acquisition Financing",
            ],
        },
        capitalRequirement: {
            label: "Capital Requirement Scale",
            required: true,
            options: ["₹5 Cr – ₹25 Cr", "₹25 Cr – ₹75 Cr", "₹75 Cr – ₹150 Cr", "₹150 Cr+"],
        },
        overview: {
            label: "Existing Debt Profile & Business Overview",
            required: false,
            placeholder:
                "Share existing loan facilities, current lenders, annual turnover, and the specific outcome you're structuring for (new capital, consolidation, bridge, or acquisition financing).",
        },
        submitButton: "Submit Mandate for Appraisal",
        disclaimer: "Zero commitment • Strict institutional confidentiality guaranteed.",
    },
};

const EQUITY_FUNDRAISING_DATA: ServiceData = {
    eyebrow: "COMPANY PROFILE",
    title: "Equity Capital for Ambitious Growth.",
    description:
        "End-to-end equity fundraising — from seed and venture capital to private equity, strategic investors, pre-IPO placements, and growth capital — backed by a curated network of institutional and family office investors.",
    image: "/smefunding.jpg",

    heroMetrics: [
        { label: "Capital Raised", value: "₹1,800", suffix: "+", unit: "Cr" },
        { label: "Investor Network", value: "150", suffix: "+" },
        { label: "Rounds Closed", value: "60", suffix: "+" },
        { label: "Avg. Close Time", value: "10", suffix: "", unit: "Wks" },
    ],

    subServices: {
        eyebrow: "6 dedicated equity fundraising tracks",
        title: "Capital Partners for Every Stage of Growth.",
        description:
            "From seed and early-stage venture capital to late-stage pre-IPO placement — we match your enterprise with investors aligned to your sector, scale, and growth timeline.",
    },

    detailCards: [
        {
            key: "seed-angel",
            eyebrow: "EARLY-STAGE CAPITAL",
            title: "Seed / Angel Funding",
            description:
                "First institutional or angel capital for early-stage ventures with a validated idea or early traction — structured to get founders to their next meaningful milestone without excessive early dilution.",
            features: [
                {
                    icon: "sparkles",
                    title: "Angel & Micro-VC Access",
                    description:
                        "Introductions to angel networks and micro-VC funds actively writing early-stage checks.",
                },
                {
                    icon: "shield",
                    title: "Founder-Friendly Dilution",
                    description:
                        "Round sizing and valuation guidance structured to protect founder equity at the earliest stage.",
                },
                {
                    icon: "file",
                    title: "Lightweight Diligence Process",
                    description:
                        "Streamlined documentation suited to early-stage companies without lengthy audit histories.",
                },
                {
                    icon: "clock",
                    title: "Fast-Track Closings",
                    description:
                        "Process designed to close seed rounds quickly so founders can get back to building.",
                },
            ],
            metrics: [
                { label: "Round Size", value: "₹50 L to ₹8 Cr" },
                { label: "Stage", value: "Idea / Early Traction" },
                { label: "Investor Type", value: "Angels / Micro-VCs" },
                { label: "Avg. Timeline", value: "6 – 10 Weeks", highlight: true },
            ],
            image: "/service1-1.webp",
            imageEyebrow: "EARLY-STAGE DESK",
            imageTitle: "First Institutional Capital for Validated Early Ventures",
            ctaText: "Discuss Your Seed Funding Requirement",
            ctaHref: "/contact",
        },
        {
            key: "venture-capital",
            eyebrow: "EARLY & GROWTH STAGE CAPITAL",
            title: "Venture Capital",
            description:
                "Seed through Series C fundraising support for high-growth ventures, connecting founders with venture capital funds aligned to their sector, stage, and growth trajectory.",
            features: [
                {
                    icon: "sparkles",
                    title: "Stage-Matched VC Targeting",
                    description:
                        "Investor shortlists built around your exact stage, sector focus, and check-size fit — not generic mass outreach.",
                },
                {
                    icon: "file",
                    title: "Pitch Deck & Data Room Prep",
                    description:
                        "Investor-ready materials structured to institutional fundraising standards.",
                },
                {
                    icon: "check",
                    title: "Term Sheet Negotiation Support",
                    description:
                        "Guidance through valuation, liquidation preference, and board composition negotiations.",
                },
                {
                    icon: "clock",
                    title: "Structured Fundraise Timelines",
                    description:
                        "Process management to keep multi-investor conversations moving toward a defined close date.",
                },
            ],
            metrics: [
                { label: "Round Size", value: "₹5 Cr to ₹150 Cr" },
                { label: "Stage", value: "Seed to Series C" },
                { label: "Investor Type", value: "VC Funds" },
                { label: "Avg. Timeline", value: "10 – 14 Weeks", highlight: true },
            ],
            image: "/unsecured-business.jpg",
            imageEyebrow: "VENTURE CAPITAL DESK",
            imageTitle: "Founder-Aligned Fundraising From Seed to Series C",
            ctaText: "Discuss Your Venture Capital Requirement",
            ctaHref: "/contact",
            imagePosition: "left",
        },
        {
            key: "private-equity",
            eyebrow: "CONTROL & GROWTH CAPITAL",
            title: "Private Equity",
            description:
                "Growth and control-stage equity capital from institutional private equity funds, structured for enterprises with proven unit economics seeking scale capital, buyouts, or ownership consolidation.",
            features: [
                {
                    icon: "sparkles",
                    title: "Curated PE Fund Access",
                    description:
                        "Direct introductions to sector-focused private equity funds actively deploying growth and buyout capital.",
                },
                {
                    icon: "file",
                    title: "Valuation & Deal Structuring",
                    description:
                        "Independent valuation benchmarking and term sheet structuring aligned to your negotiating position.",
                },
                {
                    icon: "check",
                    title: "Due Diligence Coordination",
                    description:
                        "End-to-end coordination of financial, legal, and commercial due diligence through to closing.",
                },
                {
                    icon: "shield",
                    title: "Confidential Process Management",
                    description:
                        "Investor outreach run under strict NDA to protect competitive and employee sensitivities.",
                },
            ],
            metrics: [
                { label: "Round Size", value: "₹25 Cr to ₹300 Cr" },
                { label: "Stage", value: "Growth / Buyout" },
                { label: "Investor Type", value: "PE Funds" },
                { label: "Avg. Timeline", value: "12 – 16 Weeks", highlight: true },
            ],
            image: "/service1-2.png",
            imageEyebrow: "GROWTH & BUYOUT DESK",
            imageTitle: "Institutional Private Equity for Proven, Scalable Businesses",
            ctaText: "Discuss Your Private Equity Requirement",
            ctaHref: "/contact",
        },
        {
            key: "strategic-investors",
            eyebrow: "SECTOR-ALIGNED CAPITAL",
            title: "Strategic Investors",
            description:
                "Capital and partnership from corporate and strategic investors seeking market access, technology alignment, or supply-chain integration — bringing more than just balance sheet to the table.",
            features: [
                {
                    icon: "link",
                    title: "Corporate Investor Mapping",
                    description:
                        "Identification of strategic investors with genuine commercial or sector alignment to your business.",
                },
                {
                    icon: "shield",
                    title: "Non-Compete Term Protection",
                    description:
                        "Structuring terms that protect your independence and prevent unwanted strategic lock-in.",
                },
                {
                    icon: "file",
                    title: "Partnership-Linked Structuring",
                    description:
                        "Capital raises structured alongside commercial partnerships, distribution tie-ups, or technology licensing.",
                },
                {
                    icon: "check",
                    title: "Board & Governance Alignment",
                    description:
                        "Governance terms negotiated to balance strategic investor influence with founder control.",
                },
            ],
            metrics: [
                { label: "Round Size", value: "₹10 Cr to ₹200 Cr" },
                { label: "Stage", value: "Growth / Expansion" },
                { label: "Investor Type", value: "Corporate / Strategic" },
                { label: "Avg. Timeline", value: "10 – 16 Weeks", highlight: true },
            ],
            image: "/service1-3.png",
            imageEyebrow: "STRATEGIC PARTNERSHIP DESK",
            imageTitle: "Capital Paired With Market Access & Commercial Alignment",
            ctaText: "Discuss Your Strategic Investor Requirement",
            ctaHref: "/contact",
            imagePosition: "left",
        },
        {
            key: "pre-ipo",
            eyebrow: "LATE-STAGE PLACEMENT",
            title: "Pre-IPO Funding",
            description:
                "Late-stage capital placement for enterprises on a defined path to public listing, sourced from family offices, AIFs, and pre-IPO specialist investors seeking pre-listing entry.",
            features: [
                {
                    icon: "dollar",
                    title: "Family Office & AIF Access",
                    description:
                        "Direct access to family offices and alternative investment funds active in pre-IPO placements.",
                },
                {
                    icon: "file",
                    title: "IPO-Readiness Advisory",
                    description:
                        "Guidance on governance, disclosure, and financial reporting standards expected ahead of a public listing.",
                },
                {
                    icon: "clock",
                    title: "Structured Lock-In Terms",
                    description:
                        "Lock-in and exit terms structured to align investor expectations with your listing timeline.",
                },
                {
                    icon: "sparkles",
                    title: "Anchor Investor Sourcing",
                    description:
                        "Support identifying anchor-quality investors ahead of a formal IPO process.",
                },
            ],
            metrics: [
                { label: "Round Size", value: "₹25 Cr to ₹300 Cr" },
                { label: "Stage", value: "Pre-IPO" },
                { label: "Investor Type", value: "Family Offices / AIFs" },
                { label: "Avg. Timeline", value: "8 – 12 Weeks", highlight: true },
            ],
            image: "/pre-ipo.png",
            imageEyebrow: "LATE-STAGE CAPITAL DESK",
            imageTitle: "Pre-Listing Capital From Family Offices & AIFs",
            ctaText: "Discuss Your Pre-IPO Requirement",
            ctaHref: "/contact",
        },
        {
            key: "growth-capital",
            eyebrow: "EXPANSION-STAGE EQUITY",
            title: "Growth Capital",
            description:
                "Minority-stake growth equity for profitable, expanding businesses that want to fund scale — new markets, capacity, or acquisitions — without taking on additional leverage.",
            features: [
                {
                    icon: "percent",
                    title: "Minority Stake Structuring",
                    description:
                        "Capital raised without ceding operational control, structured around minority-stake participation.",
                },
                {
                    icon: "sparkles",
                    title: "Expansion-Linked Deployment",
                    description:
                        "Funding structured against specific growth milestones — capacity addition, new geographies, or bolt-on acquisitions.",
                },
                {
                    icon: "shield",
                    title: "Founder-Friendly Terms",
                    description:
                        "Governance and exit terms negotiated to protect founder control and long-term flexibility.",
                },
                {
                    icon: "clock",
                    title: "Faster Close Than Traditional PE",
                    description:
                        "Streamlined process suited to growth-stage businesses that need capital on a shorter timeline.",
                },
            ],
            metrics: [
                { label: "Round Size", value: "₹10 Cr to ₹100 Cr" },
                { label: "Stage", value: "Expansion / Scale-Up" },
                { label: "Investor Type", value: "Growth Equity Funds" },
                { label: "Avg. Timeline", value: "8 – 12 Weeks", highlight: true },
            ],
            image: "/growth.webp",
            imageEyebrow: "EXPANSION CAPITAL DESK",
            imageTitle: "Minority-Stake Growth Capital Without Ceding Control",
            ctaText: "Discuss Your Growth Capital Requirement",
            ctaHref: "/contact",
            imagePosition: "left",
        },
    ],

    faqs: [
        {
            question: "What types of equity fundraising does Fund Astra support?",
            answer:
                "We support seed/angel rounds, venture capital, private equity, strategic investor placements, pre-IPO funding, and growth capital raises across early to late-stage enterprises.",
        },
        {
            question: "How do you select investors for a mandate?",
            answer:
                "Investor shortlists are built around your sector, stage, check-size requirement, and any strategic or governance preferences you've specified, rather than a mass outreach approach.",
        },
        {
            question: "What stage of business is suited to venture capital versus private equity?",
            answer:
                "Venture capital typically suits seed-to-Series-C businesses still scaling; private equity is generally suited to businesses with proven unit economics seeking growth or buyout capital.",
        },
        {
            question: "What documentation is required to begin an equity fundraising mandate?",
            answer:
                "We typically require audited financials, a business overview or pitch deck, cap table details, and clarity on the intended use of funds and target round size.",
        },
        {
            question: "How long does a typical equity fundraising process take?",
            answer:
                "Timelines vary by track — seed rounds can close in 6–10 weeks, venture capital rounds typically in 10–14 weeks, while private equity and pre-IPO placements can take 8–16 weeks depending on due diligence scope.",
        },
        {
            question: "Is the fundraising process kept confidential?",
            answer:
                "Yes. All investor outreach and data room access is conducted under strict non-disclosure agreements to protect your commercial and competitive position.",
        },
    ],

    facilityBenchmark: {
        eyebrow: "FACILITY SPECIFICATION BENCHMARKS",
        title: "Equity Fundraising at a Glance",
        description:
            "Compare capital-raising tracks across round size, investor type, growth stage, and typical execution timelines.",
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
            icon: "◔",
            title: "Seed / Angel Funding",
            subtitle: "First institutional or angel capital",
            ticketSize: "₹50 L – ₹8 Cr",
            collateral: "Angels / Micro-VCs",
            collateralType: "green",
            tenure: "Idea / Early Traction",
            turnaround: "6–10 Weeks",
            turnaroundHighlight: true,
            metric: "Founding Team & Early Traction",
            action: "Inquire",
        },
        {
            icon: "◑",
            title: "Venture Capital",
            subtitle: "Early to growth-stage capital",
            ticketSize: "₹5 Cr – ₹150 Cr",
            collateral: "Venture Capital Funds",
            collateralType: "green",
            tenure: "Seed to Series C",
            turnaround: "10–14 Weeks",
            metric: "Growth Metrics & Traction",
            action: "Inquire",
        },
        {
            icon: "◐",
            title: "Private Equity",
            subtitle: "Growth & buyout capital",
            ticketSize: "₹25 Cr – ₹300 Cr",
            collateral: "Private Equity Funds",
            collateralType: "blue",
            tenure: "Growth / Buyout",
            turnaround: "12–16 Weeks",
            metric: "Unit Economics & Valuation",
            action: "Inquire",
        },
        {
            icon: "◒",
            title: "Strategic Investors",
            subtitle: "Sector-aligned corporate capital",
            ticketSize: "₹10 Cr – ₹200 Cr",
            collateral: "Corporate / Strategic Investors",
            collateralType: "orange",
            tenure: "Growth / Expansion",
            turnaround: "10–16 Weeks",
            metric: "Strategic & Commercial Fit",
            action: "Inquire",
        },
        {
            icon: "◓",
            title: "Pre-IPO Funding",
            subtitle: "Late-stage private placement",
            ticketSize: "₹25 Cr – ₹300 Cr",
            collateral: "Family Offices / AIFs",
            collateralType: "gold",
            tenure: "Pre-IPO",
            turnaround: "8–12 Weeks",
            metric: "IPO Readiness & Valuation",
            action: "Inquire",
        },
        {
            icon: "◕",
            title: "Growth Capital",
            subtitle: "Minority-stake expansion equity",
            ticketSize: "₹10 Cr – ₹100 Cr",
            collateral: "Growth Equity Funds",
            collateralType: "green",
            tenure: "Expansion / Scale-Up",
            turnaround: "8–12 Weeks",
            metric: "Milestone-Linked Deployment",
            action: "Inquire",
        },
    ],

    mandate: {
        eyebrow: "TRANSPARENT INSTITUTIONAL APPRAISAL",
        title: "Structure Your Fundraising Mandate",
        description:
            "Submit your enterprise profile to Fund Astra's investor relations desk. We assess your growth stage, map against 150+ institutional investors, family offices, and strategic partners, and run a structured, confidential capital-raising process through to close.",
        benefits: [
            { title: "100% Non-Disclosure Guaranteed", description: "Protected under bilateral confidentiality." },
            { title: "No Upfront Processing Retainer", description: "Success-aligned institutional advisory." },
            { title: "Direct Investor Desk Access", description: "Avoid noisy, unfocused investor outreach." },
        ],
        contact: {
            eyebrow: "DIRECT INVESTOR LEADS",
            email: "equity.fundraising@fundastra.com",
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
                "1. Seed / Angel Funding",
                "2. Venture Capital",
                "3. Private Equity",
                "4. Strategic Investors",
                "5. Pre-IPO Funding",
                "6. Growth Capital",
            ],
        },
        capitalRequirement: {
            label: "Capital Requirement Scale",
            required: true,
            options: ["₹5 Cr – ₹25 Cr", "₹25 Cr – ₹75 Cr", "₹75 Cr – ₹150 Cr", "₹150 Cr+"],
        },
        overview: {
            label: "Business Overview & Use of Funds",
            required: false,
            placeholder:
                "Share your current annual revenue/ARR, growth trajectory, cap table structure, and the intended use of the capital being raised.",
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
        <main className="service-page-motion bg-[#FBF9F6]">

            {/* HERO */}
            <section className="relative min-h-[700px] overflow-hidden sm:min-h-[802px]">
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
                    className="relative z-10 mx-auto flex min-h-[700px] w-full max-w-[1200px] flex-col items-center justify-center px-4 pb-28 pt-28 text-center sm:min-h-screen sm:px-5 sm:pb-[170px] sm:pt-[190px]"
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
                        className="mb-4 inline-flex items-center rounded-full bg-white px-[19px] sm:mb-[26px]"
                    >
                        <span className="font-sans text-[17px] font-[800] tracking-[0.06em] text-[#052E26]">
                            {data.eyebrow}
                        </span>
                    </motion.div>

                    {/* TITLE */}
                    <motion.h1
                        variants={smallBoxVariants}
                        className="max-w-[636px] font-display text-[36px] font-[600] leading-[1.05] tracking-[-0.025em] text-[#FBF9F6] sm:text-[58px] lg:text-[64px]"
                    >
                        {data.title}
                    </motion.h1>

                    {/* DESCRIPTION */}
                    <motion.p
                        variants={smallBoxVariants}
                        className="mt-3 max-w-[897px] font-sans text-[14px] font-[500] leading-[1.5] text-white sm:mt-[28px] sm:text-[20px]"
                    >
                        {data.description}
                    </motion.p>

                    {/* BUTTONS */}
                    <motion.div
                        variants={staggerContainer}
                        className="mt-5 flex w-full flex-col items-stretch justify-center gap-2 sm:mt-[38px] sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-[12px]"
                    >
                        <motion.div variants={smallBoxVariants}>
                            <Link
                                href="/contact"
                                className="inline-flex h-[50px] items-center justify-center rounded-[7px] bg-white px-5 font-sans text-[14px] font-[600] text-[#0A271E] transition-opacity duration-200 hover:opacity-90 sm:px-[25px] sm:text-[17px]"
                            >
                                Discuss Your Funding Requirement
                            </Link>
                        </motion.div>

                        <motion.div variants={smallBoxVariants}>
                            <Link
                                href="#sub-services"
                                className="inline-flex h-[50px] items-center justify-center gap-[7px] rounded-[7px] border border-white/20 bg-[#173329] px-5 font-sans text-[14px] font-[600] text-[#FBF9F6] backdrop-blur-sm transition-colors duration-200 hover:bg-[#3d625a] sm:px-[24px] sm:text-[17px]"
                            >
                                Explore Sub Services
                                <span className="text-[15px]">↓</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* STATS */}
                <div className="relative z-10 mx-auto -mt-20 h-auto max-w-[1184px] px-4 sm:-mt-[130px] sm:h-[170px]">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        className="relative -top-8 grid divide-y divide-white overflow-hidden rounded-[20px] border border-white bg-[#F5F2EC] shadow-[0_18px_24px_-12px_rgba(0,0,0,0.22)] sm:top-0 sm:grid-cols-2 sm:divide-y-0 sm:divide-x sm:divide-white lg:grid-cols-4"
                    >
                        {data.heroMetrics.map((m) => (
                            <motion.div
                                key={m.label}
                                variants={smallBoxVariants}
                                className="min-h-[105px] w-full px-4 py-4 sm:h-[154px] sm:min-h-0 sm:px-[27px] sm:py-[32px]"
                            >
                                <p className="font-sans text-[11px] font-[700] uppercase tracking-[0.11em] text-[#8C9791]">
                                    {m.label}
                                </p>

                                <div className="mt-2 flex items-baseline font-display text-[36px] font-[700] leading-none text-brand-green sm:mt-[14px] sm:text-[50px]">
                                    {m.value}

                                    {m.suffix && (
                                        <span className="relative -top-1 ml-0.5 text-[25px] font-[500] text-[#e8b43a] sm:-top-[6px] sm:ml-[2px] sm:text-[35px]">
                                            {m.suffix}
                                        </span>
                                    )}

                                    {m.unit && (
                                        <span className="ml-1 font-display text-[21px] font-[500] text-[#5F6863] sm:ml-[6px] sm:text-[27px]">
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
                    className="mb-0 bg-white px-4 pb-5 pt-10 text-center sm:mb-4 sm:px-6 sm:pb-[30px] sm:pt-[60px]"
                >
                    <div className="mx-auto max-w-[1000px]">
                        <p className="mx-auto w-fit max-w-full whitespace-nowrap rounded-[8px] bg-[#052E26] px-4 py-1.5 font-sans text-[10px] font-[700] uppercase leading-[1.15] tracking-[0.08em] text-[#FBF9F6] sm:py-1 sm:text-[18px] sm:tracking-[1px]">
                            {data.subServices.eyebrow}
                        </p>

                        <h2 className="mt-3 font-display text-[34px] font-[500] leading-[1.05] text-[#052E26] sm:mt-[10px] sm:text-[43px] sm:leading-[1.04]">
                            {data.subServices.title}
                        </h2>

                        <p className="mx-auto mt-3 max-w-[380px] font-sans text-[14px] leading-[1.5] text-[#424845] sm:mt-[14px] sm:max-w-[989px] sm:text-[18px] sm:leading-[1.6]">
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
                <section className="bg-white px-4 py-7 sm:px-6 sm:py-[45px]">
                    <div className="mx-auto max-w-[1000px] text-center">
                        <div className="inline-flex max-w-full items-center justify-center rounded-[7px] bg-[#052E26] px-3 py-2 text-center sm:px-[14px] sm:py-[5px]">
                            <span className="font-sans text-[10px] font-[700] uppercase leading-[1.15] tracking-[0.04em] text-white sm:text-[16px] sm:leading-none">
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
            <section className="overflow-x-hidden bg-[#FBF9F6] px-4 py-6 sm:px-6 sm:py-[58px] lg:px-[110px]">
                <div className="mx-auto w-full max-w-[1200px]">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.12,
                        }}
                        variants={staggerContainer}
                        className="w-full overflow-x-auto overflow-y-hidden rounded-[10px] border border-[#E2DED7] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                    >
                        {/* HEADER */}
                        <div className="grid min-w-[900px] grid-cols-[1.65fr_1fr_1.05fr_1fr_1fr_1.55fr_.48fr] bg-[#052E26]">
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
                                className={`grid min-w-[900px] grid-cols-[1.65fr_1fr_1.05fr_1fr_1fr_1.55fr_.48fr] ${index !== data.facilityBenchmarkRows.length - 1
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
                                                className="h-[46px] w-full rounded-[8px] border border-[#DEDAD3] bg-[#F1EFEB] px-[12px] font-sans text-[12px] text-[#061812] outline-none placeholder:text-[#A8AAA6] focus:border-[#A88954]"
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
                                            className="h-[46px] w-full appearance-none rounded-[8px] border border-[#DEDAD3] bg-[#F1EFEB] px-[12px] font-sans text-[12px] text-[#061812] outline-none focus:border-[#A88954]"
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
                                            className="h-[46px] w-full appearance-none rounded-[8px] border border-[#DEDAD3] bg-[#F1EFEB] px-[12px] font-sans text-[12px] text-[#061812] outline-none focus:border-[#A88954]"
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
                        <div className="min-h-[230px] rounded-[8px] bg-[#F6F4F1] px-3 py-6 sm:h-[156px] sm:min-h-0 sm:px-0 sm:pt-[45px]">
                            <p className="mx-auto max-w-[300px] text-center font-sans text-[10px] font-[700] uppercase leading-[1.35] tracking-[0.1em] text-[#424845] sm:max-w-none sm:text-[11px] sm:tracking-[0.12em]">
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
                                className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-[22px]"
                            >
                                {PARTNER_TYPES.map((item) => (
                                    <motion.span
                                        key={item}
                                        variants={smallBoxVariants}
                                        className="flex min-h-[38px] min-w-0 items-center justify-center rounded-[4px] border border-[#E2E5E2] bg-white px-2 py-2 text-center font-sans text-[10px] font-[600] leading-[1.2] text-[#424845] sm:h-[42px] sm:w-[173px] sm:whitespace-nowrap sm:text-[12px]"
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
            <ContactAdvisorySection />
            {/* FOOTER */}
            <Footer />

        </main>
    );
}