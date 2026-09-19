"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const sections = [
    {
        number: "01",
        title: "Scope of Engagement",
        sidebarTitle: "Scope of Engagement",
        shortDescription:
            "The nature, scope, and objectives of services provided by Fundastra.",
        content: (
            <>
                <p>
                    Fundastra provides capital advisory and related financial advisory
                    services based on the specific requirements discussed with each
                    client.
                </p>

                <p>
                    The scope of an engagement will depend on the nature of the
                    assignment and may include advisory support relating to debt
                    financing, structured capital, equity fundraising, transaction
                    preparation, or other capital-related requirements.
                </p>

                <p>
                    The specific services, deliverables, responsibilities, and
                    limitations applicable to an engagement may be agreed separately with
                    the client.
                </p>
            </>
        ),
    },

    {
        number: "02",
        title: "Nature of Advisory Services",
        sidebarTitle: "Advisory Services",
        shortDescription:
            "The advisory nature of Fundastra's services and the basis on which recommendations are provided.",
        content: (
            <>
                <p>
                    Fundastra acts as a capital and financial advisory partner. Our role
                    may include helping clients understand available financing or
                    fundraising alternatives, preparing relevant information, coordinating
                    discussions, and supporting transaction processes.
                </p>

                <p>
                    Advisory recommendations are based on the information available to
                    us at the relevant time, together with our understanding of the
                    client's requirements and objectives.
                </p>

                <p>
                    The final decision to proceed with any financing, investment,
                    fundraising, or transaction remains with the client and the relevant
                    financial or investment institution.
                </p>
            </>
        ),
    },

    {
        number: "03",
        title: "Client Responsibilities",
        sidebarTitle: "Client Responsibilities",
        shortDescription:
            "The information, cooperation, and responsibilities expected from clients.",
        content: (
            <>
                <p>
                    Clients are expected to provide information and documentation that is
                    reasonably required for the advisory engagement.
                </p>

                <p>
                    Information supplied to Fundastra should be accurate, complete, and
                    current to the best of the client's knowledge. Clients should
                    promptly notify us if any material information previously provided
                    changes.
                </p>

                <p>
                    Delays, incomplete information, or inaccurate information may affect
                    the timing, scope, or outcome of an advisory assignment.
                </p>
            </>
        ),
    },

    {
        number: "04",
        title: "Business & Financial Information",
        sidebarTitle: "Business Information",
        shortDescription:
            "Information that may be provided when discussing funding, financing, or capital requirements.",
        content: (
            <>
                <p>
                    Depending on the nature of an enquiry or engagement, you may choose
                    to provide business, financial, operational, or transaction-related
                    information to help us understand your requirements.
                </p>

                <p>
                    Such information may include information relating to business
                    performance, financing requirements, existing facilities, proposed
                    transactions, management information, financial statements, or other
                    information relevant to a capital advisory engagement.
                </p>

                <p>
                    Please share only information that is necessary and appropriate for
                    the particular purpose. Where sensitive documents are required as
                    part of an engagement, we may provide separate instructions regarding
                    how such information should be submitted securely.
                </p>
            </>
        ),
    },

    {
        number: "05",
        title: "Due Diligence & Verification",
        sidebarTitle: "Due Diligence",
        shortDescription:
            "The importance of reviewing and verifying information supplied during an engagement.",
        content: (
            <>
                <p>
                    Information and documents provided by a client may be reviewed for
                    the purpose of understanding the client's business, financial
                    position, funding requirements, and transaction objectives.
                </p>

                <p>
                    Where appropriate, Fundastra may request additional information,
                    clarification, supporting documents, or verification from the client
                    or relevant third parties.
                </p>

                <p>
                    The extent of any review or verification will depend on the nature of
                    the engagement and does not necessarily constitute an independent
                    audit, assurance engagement, or legal verification.
                </p>
            </>
        ),
    },

    {
        number: "06",
        title: "Third-Party & Capital Providers",
        sidebarTitle: "Capital Providers",
        shortDescription:
            "How discussions and introductions with lenders, investors, and other parties may be handled.",
        content: (
            <>
                <p>
                    Depending on the engagement, Fundastra may coordinate discussions
                    with banks, financial institutions, investors, funds, lenders,
                    strategic partners, professional advisers, or other relevant
                    counterparties.
                </p>

                <p>
                    Any decision by a third party to provide financing, investment, or
                    other financial support is made independently by that third party
                    based on its own assessment, policies, and requirements.
                </p>

                <p>
                    Fundastra does not guarantee that any particular financing or
                    fundraising transaction will be completed.
                </p>
            </>
        ),
    },

    {
        number: "07",
        title: "Fees & Commercial Terms",
        sidebarTitle: "Fees & Commercial Terms",
        shortDescription:
            "The basis on which advisory fees and other commercial terms may be agreed.",
        content: (
            <>
                <p>
                    Fees, charges, retainers, success-based fees, or other commercial
                    terms may apply depending on the nature and scope of the engagement.
                </p>

                <p>
                    Applicable fees and commercial terms will be communicated to the
                    client and, where appropriate, documented separately before or during
                    the engagement.
                </p>

                <p>
                    Unless otherwise agreed in writing, any third-party charges,
                    professional fees, statutory charges, or transaction expenses remain
                    the responsibility of the relevant client.
                </p>
            </>
        ),
    },

    {
        number: "08",
        title: "No Guarantee of Transaction Outcome",
        sidebarTitle: "Transaction Outcomes",
        shortDescription:
            "Advisory services do not guarantee financing, investment, approval, or transaction completion.",
        content: (
            <>
                <p>
                    Fundastra does not guarantee that a client will obtain financing,
                    investment, approval, refinancing, or any other particular
                    transaction outcome.
                </p>

                <p>
                    Transaction outcomes may depend on factors outside Fundastra's
                    control, including lender or investor requirements, market
                    conditions, due diligence findings, credit considerations, valuation,
                    regulatory requirements, and the client's financial position.
                </p>

                <p>
                    Any indicative terms, estimates, projections, or discussions should
                    not be treated as a commitment by any lender, investor, or other
                    financial institution unless formally confirmed by that institution.
                </p>
            </>
        ),
    },

    {
        number: "09",
        title: "Confidentiality",
        sidebarTitle: "Confidentiality",
        shortDescription:
            "How confidential business and transaction information may be handled during an engagement.",
        content: (
            <>
                <p>
                    Fundastra will take reasonable steps to maintain the confidentiality
                    of information provided in connection with an engagement, subject to
                    the nature of the assignment and applicable legal or regulatory
                    requirements.
                </p>

                <p>
                    Information may be shared with relevant advisers, service providers,
                    lenders, investors, or other counterparties where reasonably
                    necessary for the agreed purpose of the engagement and subject to
                    appropriate confidentiality considerations.
                </p>

                <p>
                    Clients should identify any specific confidentiality restrictions or
                    sensitive information that requires particular handling before
                    providing such information.
                </p>
            </>
        ),
    },

    {
        number: "10",
        title: "Data & Privacy",
        sidebarTitle: "Data & Privacy",
        shortDescription:
            "How personal and business information is handled in connection with our services.",
        content: (
            <>
                <p>
                    Personal information and other information collected through our
                    website or during an engagement may be handled in accordance with
                    Fundastra's Privacy Policy and applicable requirements.
                </p>

                <p>
                    Information may be used to respond to enquiries, provide advisory
                    services, communicate with clients, coordinate transactions, maintain
                    records, and meet legal or regulatory obligations.
                </p>

                <p>
                    For further information about how personal information is handled,
                    please refer to our{" "}
                    <Link
                        href="/privacy-policy"
                        className="font-[600] text-[#765A23] underline underline-offset-4"
                    >
                        Privacy Policy
                    </Link>
                    .
                </p>
            </>
        ),
    },

    {
        number: "11",
        title: "Limitation of Responsibility",
        sidebarTitle: "Responsibility",
        shortDescription:
            "Important limitations relating to advisory information, third-party decisions, and transaction outcomes.",
        content: (
            <>
                <p>
                    Information and guidance provided by Fundastra are intended to
                    support the client's decision-making process and should be considered
                    in the context of the specific engagement.
                </p>

                <p>
                    Clients remain responsible for obtaining independent legal, tax,
                    accounting, regulatory, or other professional advice where
                    appropriate.
                </p>

                <p>
                    Fundastra is not responsible for decisions made independently by
                    clients, lenders, investors, financial institutions, or other third
                    parties.
                </p>
            </>
        ),
    },

    {
        number: "12",
        title: "Termination & Changes",
        sidebarTitle: "Termination",
        shortDescription:
            "How an engagement may be changed, paused, or brought to an end.",
        content: (
            <>
                <p>
                    An engagement may be amended, paused, or terminated in accordance
                    with the terms agreed between Fundastra and the client.
                </p>

                <p>
                    Either party may communicate concerns, changes in requirements, or
                    circumstances that may affect the continuation of an engagement.
                </p>

                <p>
                    Any outstanding fees, expenses, confidentiality obligations, or other
                    provisions intended to survive termination may continue to apply
                    after an engagement ends.
                </p>
            </>
        ),
    },

    {
        number: "13",
        title: "Updates to These Terms",
        sidebarTitle: "Terms Updates",
        shortDescription:
            "How these Terms of Engagement may be updated as our services and requirements evolve.",
        content: (
            <>
                <p>
                    Fundastra may update these Terms of Engagement from time to time to
                    reflect changes in our services, business practices, legal
                    requirements, or operating processes.
                </p>

                <p>
                    Where an engagement is governed by separately agreed written terms,
                    those terms will continue to apply according to their provisions.
                </p>

                <p>
                    We encourage clients and website visitors to review the latest
                    version of these terms where relevant.
                </p>
            </>
        ),
    },
];

export default function TermsOfEngagementPage() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        sections.forEach((_, index) => {
            const element = document.getElementById(`terms-section-${index}`);

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
                            Legal & Engagement
                        </span>
                    </div>

                    <h1 className="max-w-[850px] font-display text-[35px] font-[500] leading-[1.02] tracking-[-0.035em] text-[#FBF9F6] sm:text-[60px] lg:text-[71px]">
                        Terms of Engagement
                    </h1>

                    <p className="mt-4 max-w-[720px] font-sans text-[14px] font-[400] leading-[1.65] text-[#D7DFDB] sm:mt-5 sm:text-[17px] sm:leading-[1.7]">
                        These Terms of Engagement outline the basis on which Fundastra
                        provides capital advisory and related financial advisory services
                        to clients and prospective clients.
                    </p>

                    <div className="mt-5 flex items-center gap-3 font-sans text-[11px] text-[#B8C4BF] sm:mt-6 sm:text-[12px]">
                        <span>Last Updated</span>

                        <span className="h-1 w-1 rounded-full bg-[#F3D596]" />

                        <span>September 19, 2026</span>
                    </div>
                </div>
            </section>

            {/* =========================================================
          INTRO
      ========================================================= */}
            <section className="px-4 py-6 sm:px-6 sm:py-10 lg:px-[76px]">
                <div className="mx-auto max-w-[1216px]">
                    <div className="rounded-[16px] border border-[#E5E2DC] bg-white px-5 py-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] sm:px-8 sm:py-7 lg:px-10">
                        <div className="flex gap-4">
                            <div className="mt-1 hidden h-10 w-1 shrink-0 rounded-full bg-[#765A23] sm:block" />

                            <div>
                                <h2 className="font-display text-[25px] font-[500] tracking-[-0.02em] text-[#052E26] sm:text-[30px]">
                                    About these terms
                                </h2>

                                <p className="mt-2.5 font-sans text-[14px] leading-[1.7] text-[#424845] sm:text-[15px]">
                                    These Terms of Engagement describe the general framework
                                    under which Fundastra may provide capital advisory and
                                    related financial advisory services. The specific scope,
                                    commercial terms, and deliverables of an engagement may be
                                    agreed separately with the relevant client.
                                </p>

                                <p className="mt-2.5 font-sans text-[14px] leading-[1.7] text-[#424845] sm:text-[15px]">
                                    By proceeding with an engagement, clients acknowledge that
                                    advisory services are subject to the agreed scope,
                                    information provided by the client, and the circumstances
                                    applicable to the relevant transaction.
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
                                    Engagement
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
                                    id={`terms-section-${index}`}
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
                            Engagement Enquiries
                        </p>

                        <h2 className="mt-2 font-display text-[27px] font-[500] tracking-[-0.02em] text-[#FBF9F6] sm:text-[34px]">
                            Have a question about our engagement terms?
                        </h2>

                        <p className="mt-2 max-w-[600px] font-sans text-[13px] leading-[1.65] text-[#C8D2CE] sm:text-[14px]">
                            If you have a question about these Terms of Engagement, our
                            advisory process, or a potential engagement, please get in touch
                            with our team.
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