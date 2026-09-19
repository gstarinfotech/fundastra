"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const sections = [
    {
        number: "01",
        title: "General Information Only",
        sidebarTitle: "General Information",
        shortDescription:
            "The informational nature of content on this website.",
        content: (
            <>
                <p>
                    The content published on this website, including articles, service
                    descriptions, facility benchmarks, calculators, and other materials,
                    is provided for general informational purposes only.
                </p>

                <p>
                    Nothing on this website constitutes financial, investment, legal,
                    tax, or accounting advice, and should not be relied upon as such
                    without seeking appropriate independent professional advice specific
                    to your circumstances.
                </p>

                <p>
                    Any figures, ticket sizes, tenures, turnaround timelines, or rate
                    ranges shown on this website are indicative and illustrative in
                    nature, and may not reflect current market terms or the terms
                    available to any specific applicant.
                </p>
            </>
        ),
    },

    {
        number: "02",
        title: "No Financial or Investment Advice",
        sidebarTitle: "Not Financial Advice",
        shortDescription:
            "Website content is not a substitute for personalised financial or investment advice.",
        content: (
            <>
                <p>
                    Fundastra is a capital and financial advisory firm. However, content
                    on this website is not tailored to any individual's or entity's
                    specific financial situation and should not be treated as a
                    recommendation to pursue any particular financing, investment, or
                    fundraising strategy.
                </p>

                <p>
                    Before making any financial, borrowing, or investment decision, you
                    should independently evaluate your circumstances and, where
                    appropriate, consult a qualified financial, legal, or tax adviser.
                </p>
            </>
        ),
    },

    {
        number: "03",
        title: "No Guarantee of Accuracy",
        sidebarTitle: "Accuracy of Content",
        shortDescription:
            "How we approach the accuracy and currency of information published here.",
        content: (
            <>
                <p>
                    While we aim to keep information on this website accurate and
                    up to date, we make no representation or warranty, express or
                    implied, regarding the accuracy, completeness, reliability, or
                    currency of any content published here.
                </p>

                <p>
                    Regulatory frameworks, lending norms, institutional appetite, and
                    market conditions referenced on this website may change without
                    notice, and historical figures or track records shown do not
                    guarantee similar outcomes in the future.
                </p>
            </>
        ),
    },

    {
        number: "04",
        title: "No Guarantee of Funding or Outcomes",
        sidebarTitle: "No Guaranteed Outcomes",
        shortDescription:
            "Advisory engagement and website content do not guarantee any transaction outcome.",
        content: (
            <>
                <p>
                    References on this website to ticket sizes, turnaround timelines,
                    lender networks, or past transactions are illustrative of our
                    advisory practice and do not constitute a commitment, offer, or
                    guarantee of funding, investment, or any other transaction outcome.
                </p>

                <p>
                    Any actual financing, investment, or fundraising outcome depends on
                    factors outside our control, including the assessment, policies, and
                    approval processes of the relevant bank, NBFC, fund, or investor.
                </p>
            </>
        ),
    },

    {
        number: "05",
        title: "Third-Party Institutions & Partners",
        sidebarTitle: "Third-Party Institutions",
        shortDescription:
            "Our role in relation to banks, NBFCs, funds, and other third-party institutions referenced on this website.",
        content: (
            <>
                <p>
                    References on this website to banks, NBFCs, private credit funds,
                    family offices, or other institutions are made to illustrate the
                    categories of counterparties we typically work with, and do not
                    imply any formal partnership, endorsement, or guaranteed relationship
                    unless separately confirmed.
                </p>

                <p>
                    Fundastra is not responsible for the products, services, decisions,
                    or conduct of any third-party institution, and any engagement with
                    such institutions remains subject to their own independent terms and
                    approval processes.
                </p>
            </>
        ),
    },

    {
        number: "06",
        title: "Tools & Calculators",
        sidebarTitle: "Tools & Calculators",
        shortDescription:
            "The limitations of any calculators or interactive tools available on this website.",
        content: (
            <>
                <p>
                    Any EMI calculators, capital planning tools, or similar interactive
                    features on this website are provided for general estimation
                    purposes only, based on the inputs and assumptions you provide.
                </p>

                <p>
                    Results generated by such tools are indicative and may not reflect
                    the actual rates, terms, fees, or eligibility criteria applicable to
                    any specific facility. Please treat these tools as a starting point
                    for discussion, not a final quotation.
                </p>
            </>
        ),
    },

    {
        number: "07",
        title: "External Links",
        sidebarTitle: "External Links",
        shortDescription:
            "How links to external websites should be understood.",
        content: (
            <p>
                This website may contain links to third-party websites for reference or
                convenience. We do not control and are not responsible for the content,
                accuracy, or privacy practices of any external website. Inclusion of a
                link does not imply endorsement of that website or its content.
            </p>
        ),
    },

    {
        number: "08",
        title: "Limitation of Liability",
        sidebarTitle: "Limitation of Liability",
        shortDescription:
            "The extent to which Fundastra may be liable for reliance on website content.",
        content: (
            <>
                <p>
                    To the fullest extent permitted by applicable law, Fundastra, its
                    directors, employees, and representatives shall not be liable for
                    any direct, indirect, incidental, or consequential loss or damage
                    arising from the use of, or reliance on, information published on
                    this website.
                </p>

                <p>
                    This includes, without limitation, any loss arising from decisions
                    made based on illustrative figures, tool outputs, or general content
                    published here without independent verification or professional
                    advice.
                </p>
            </>
        ),
    },

    {
        number: "09",
        title: "Changes to This Disclaimer",
        sidebarTitle: "Disclaimer Updates",
        shortDescription:
            "How this Disclaimer may be updated over time.",
        content: (
            <p>
                We may update this Disclaimer from time to time to reflect changes in
                our services, website content, or applicable legal and regulatory
                requirements. Any updated version will be published on this page with a
                revised date, and we encourage you to review it periodically.
            </p>
        ),
    },
];

export default function DisclaimerPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((_, index) => {
            const element = document.getElementById(`disclaimer-section-${index}`);

            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveIndex(index);
                    }
                },
                {
                    rootMargin: "-38% 0px -45% 0px",
                    threshold: 0,
                }
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    const activeSection = sections[activeIndex];

    return (
        <main className="min-h-screen bg-[#FBF9F6] text-[#000F09]">
            <section className="border-b border-[#DCDAD5] bg-[#052E26] px-4 pb-9 pt-[40px] sm:px-6 sm:pb-[40px] sm:pt-[100px] lg:px-[76px]">
                <div className="mx-auto max-w-[1216px]">
                    {/* BACK BUTTON — its own full line, never overlaps the tag */}
                    <Link
                        href="/"
                        className="mb-4 flex w-fit items-center gap-2 font-sans text-[13px] font-[500] text-[#FBF9F6] transition-opacity duration-200 hover:opacity-70 sm:mb-8 sm:text-[14px]"
                    >
                        <ArrowLeft className="h-4 w-4 shrink-0" strokeWidth={1.6} />
                        <span>Back</span>
                    </Link>

                    {/* TAG */}
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F3D596]/30 bg-[#F3D596]/10 px-4 py-2 sm:mb-5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F3D596]" />

                        <span className="font-sans text-[10px] font-[600] uppercase tracking-[0.14em] text-[#F3D596] sm:text-[11px]">
                            Legal & Disclosure
                        </span>
                    </div>

                    <h1 className="max-w-[850px] font-display text-[35px] font-[500] leading-[1.02] tracking-[-0.035em] text-[#FBF9F6] sm:text-[60px] lg:text-[71px]">
                        Disclaimer
                    </h1>

                    <p className="mt-4 max-w-[720px] font-sans text-[14px] font-[400] leading-[1.65] text-[#D7DFDB] sm:mt-5 sm:text-[17px] sm:leading-[1.7]">
                        This Disclaimer explains the limitations that apply to the
                        content, tools, and information published on the Fundastra
                        website.
                    </p>

                    <div className="mt-5 flex items-center gap-3 font-sans text-[11px] text-[#B8C4BF] sm:mt-6 sm:text-[12px]">
                        <span>Last Updated</span>

                        <span className="h-1 w-1 rounded-full bg-[#F3D596]" />

                        <span>September 19, 2026</span>
                    </div>
                </div>
            </section>
            <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-[76px]">
                <div className="mx-auto max-w-[1216px]">
                    <div className="rounded-[16px] border border-[#E5E2DC] bg-white px-5 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:px-8 sm:py-7 lg:px-10">
                        <div className="flex gap-4">
                            <div className="mt-1 hidden h-10 w-1 shrink-0 rounded-full bg-[#765A23] sm:block" />

                            <div>
                                <h2 className="font-display text-[25px] font-[500] tracking-[-0.02em] text-[#052E26] sm:text-[30px]">
                                    About this disclaimer
                                </h2>

                                <p className="mt-2.5 font-sans text-[14px] leading-[1.7] text-[#424845] sm:text-[15px]">
                                    This Disclaimer applies to all content published on the
                                    Fundastra website, including service pages, facility
                                    benchmarks, calculators, and any other informational
                                    material.
                                </p>

                                <p className="mt-2.5 font-sans text-[14px] leading-[1.7] text-[#424845] sm:text-[15px]">
                                    By using this website, you acknowledge and accept the
                                    limitations described below. Specific advisory engagements
                                    remain separately governed by our{" "}
                                    <Link
                                        href="/terms-of-engagement"
                                        className="font-[600] text-[#765A23] underline underline-offset-4"
                                    >
                                        Terms of Engagement
                                    </Link>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="px-4 pb-10 sm:px-6 sm:pb-16 lg:px-[76px]">
                <div className="mx-auto max-w-[1216px]">
                    <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
                        <aside className="hidden lg:block">
                            <div className="sticky top-[120px]">
                                <p className="font-sans text-[10px] font-[700] uppercase tracking-[0.14em] text-[#765A23]">
                                    Disclaimer
                                </p>

                                <div className="mt-3 h-px w-12 bg-[#765A23]" />

                                <div className="mt-5">
                                    <div className="flex items-start gap-3">
                                        <span className="pt-0.5 font-sans text-[10px] font-[700] tracking-[0.08em] text-[#765A23]">
                                            {activeSection.number}
                                        </span>

                                        <div>
                                            <h3 className="font-display text-[24px] font-[500] leading-[1.1] tracking-[-0.02em] text-[#052E26]">
                                                {activeSection.sidebarTitle}
                                            </h3>

                                            <p className="mt-3 max-w-[175px] font-sans text-[12px] leading-[1.65] text-[#6B726E]">
                                                {activeSection.shortDescription}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <div className="min-w-0 space-y-4 sm:space-y-5">
                            {sections.map((section, index) => (
                                <article
                                    id={`disclaimer-section-${index}`}
                                    key={section.number}
                                    className={`scroll-mt-[120px] rounded-[14px] border bg-white px-5 py-6 transition-all duration-300 sm:px-8 sm:py-8 ${activeIndex === index
                                        ? "border-[#D8D0BE] shadow-[0_8px_28px_rgba(0,0,0,0.035)]"
                                        : "border-[#E5E2DC]"
                                        }`}
                                >
                                    <div className="flex items-start gap-4 sm:gap-6">
                                        <span className="shrink-0 pt-1 font-sans text-[10px] font-[700] tracking-[0.08em] text-[#765A23] sm:text-[11px]">
                                            {section.number}
                                        </span>

                                        <div className="min-w-0 flex-1">
                                            <h2 className="font-display text-[23px] font-[500] leading-[1.15] tracking-[-0.02em] text-[#052E26] sm:text-[29px]">
                                                {section.title}
                                            </h2>

                                            <div className="mt-4 space-y-3 font-sans text-[14px] font-[400] leading-[1.75] text-[#424845] sm:mt-5 sm:text-[15px]">
                                                {section.content}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="border-t border-[#DCDAD5] bg-[#052E26] px-4 py-9 sm:px-6 sm:py-12 lg:px-[76px]">
                <div className="mx-auto flex max-w-[1216px] flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                    <div>
                        <p className="font-sans text-[10px] font-[700] uppercase tracking-[0.14em] text-[#F3D596]">
                            Disclosure Enquiries
                        </p>

                        <h2 className="mt-2 font-display text-[27px] font-[500] tracking-[-0.02em] text-[#FBF9F6] sm:text-[34px]">
                            Have a question about this disclaimer?
                        </h2>

                        <p className="mt-2 max-w-[600px] font-sans text-[13px] leading-[1.65] text-[#C8D2CE] sm:text-[14px]">
                            If you have a question about this Disclaimer or how our website
                            content should be interpreted, please get in touch with our
                            team.
                        </p>
                    </div>

                    <Link
                        href="/contact"
                        className="inline-flex shrink-0 items-center justify-center rounded-[7px] bg-[#F4D79B] px-6 py-3.5 font-sans text-[13px] font-[700] text-[#271900] transition-opacity duration-200 hover:opacity-90"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    );
}