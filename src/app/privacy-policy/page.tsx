"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const sections = [
    {
        number: "01",
        title: "Information We Collect",
        sidebarTitle: "What We Collect",
        shortDescription:
            "The information we may receive when you visit our website or make an advisory enquiry.",
        content: (
            <>
                <p>
                    When you interact with Fundastra, we may collect information that
                    helps us understand your requirements, communicate with you, and
                    provide relevant capital advisory services.
                </p>

                <h3>Information you provide to us</h3>

                <ul>
                    <li>
                        Name and contact details such as email address and phone number.
                    </li>
                    <li>Company or organisation name and business details.</li>
                    <li>
                        Information relating to your funding, financing, or capital
                        requirements.
                    </li>
                    <li>
                        Information submitted through enquiry, contact, advisory, or other
                        website forms.
                    </li>
                    <li>
                        Any additional information you voluntarily provide when
                        communicating with us.
                    </li>
                </ul>

                <h3>Information collected automatically</h3>

                <p>
                    When you visit our website, certain technical information may be
                    collected automatically, including your IP address, browser type,
                    device information, pages visited, approximate usage information,
                    and other standard website analytics data.
                </p>
            </>
        ),
    },

    {
        number: "02",
        title: "How We Use Your Information",
        sidebarTitle: "How We Use It",
        shortDescription:
            "How information helps us understand requirements, provide services, and communicate with you.",
        content: (
            <>
                <p>
                    Fundastra may use the information we collect for purposes including:
                </p>

                <ul>
                    <li>Responding to enquiries and requests for information.</li>
                    <li>
                        Understanding your business and capital requirements.
                    </li>
                    <li>
                        Providing and coordinating capital advisory services.
                    </li>
                    <li>
                        Evaluating potential financing or fundraising opportunities.
                    </li>
                    <li>
                        Communicating with you regarding your enquiry or engagement.
                    </li>
                    <li>
                        Improving our website, services, content, and user experience.
                    </li>
                    <li>
                        Maintaining website security and preventing misuse or fraudulent
                        activity.
                    </li>
                    <li>
                        Complying with applicable legal, regulatory, and contractual
                        obligations.
                    </li>
                </ul>

                <p>
                    We use personal information only for legitimate business purposes
                    connected with our services and operations.
                </p>
            </>
        ),
    },

    {
        number: "03",
        title: "Information Sharing",
        sidebarTitle: "When We Share",
        shortDescription:
            "When information may be shared with service providers, advisers, partners, or authorities.",
        content: (
            <>
                <p>
                    We do not sell or rent your personal information for monetary
                    consideration.
                </p>

                <p>
                    Where necessary for providing our services or operating our
                    business, information may be shared with trusted service providers,
                    professional advisers, technology providers, financial or business
                    partners, or other relevant parties, subject to appropriate
                    confidentiality and security considerations.
                </p>

                <p>
                    We may also disclose information where required to do so by law,
                    regulation, legal process, court order, or a legitimate request from
                    a governmental or regulatory authority.
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
                    transactions, or other information relevant to a capital advisory
                    engagement.
                </p>

                <p>
                    Please share only information that is necessary and appropriate for
                    the particular purpose. Where sensitive documents are required as
                    part of an engagement, we may provide separate instructions
                    regarding how such information should be submitted securely.
                </p>
            </>
        ),
    },

    {
        number: "05",
        title: "Cookies & Website Technologies",
        sidebarTitle: "Cookies & Technology",
        shortDescription:
            "How cookies and similar technologies may support website functionality and analytics.",
        content: (
            <>
                <p>
                    Our website may use cookies and similar technologies to support
                    essential website functionality, understand website usage, improve
                    performance, and enhance the user experience.
                </p>

                <p>
                    Cookies may allow us to remember certain preferences and understand
                    how visitors interact with different parts of the website.
                </p>

                <p>
                    You may be able to control or disable cookies through your browser
                    settings. Disabling certain cookies may affect some website
                    functionality.
                </p>
            </>
        ),
    },

    {
        number: "06",
        title: "Third-Party Services",
        sidebarTitle: "Third-Party Services",
        shortDescription:
            "How third-party technologies and service providers may support our website and operations.",
        content: (
            <>
                <p>
                    Our website may use third-party technologies or services such as
                    analytics, hosting, communication, security, or other infrastructure
                    providers.
                </p>

                <p>
                    These third parties may process limited information as necessary to
                    provide their services. Their handling of information may be
                    governed by their own privacy policies and terms.
                </p>

                <p>
                    Fundastra does not control the privacy practices of independent
                    third-party websites or services that may be accessible through
                    links on our website.
                </p>
            </>
        ),
    },

    {
        number: "07",
        title: "Data Security",
        sidebarTitle: "Keeping Information Secure",
        shortDescription:
            "Measures intended to protect information against unauthorised access and misuse.",
        content: (
            <>
                <p>
                    We take reasonable administrative, technical, and organisational
                    measures designed to protect personal information against
                    unauthorised access, misuse, alteration, disclosure, or destruction.
                </p>

                <p>
                    However, no website, transmission over the internet, or electronic
                    storage system can be guaranteed to be completely secure. You should
                    therefore avoid sending highly sensitive information through
                    unsecured channels unless specifically requested through an
                    appropriate secure process.
                </p>
            </>
        ),
    },

    {
        number: "08",
        title: "Data Retention",
        sidebarTitle: "How Long We Keep It",
        shortDescription:
            "How long personal information may be retained for business, legal, and operational purposes.",
        content: (
            <>
                <p>
                    We retain personal information only for as long as reasonably
                    necessary for the purposes for which it was collected, including
                    providing services, maintaining business records, resolving
                    disputes, complying with legal obligations, and enforcing
                    agreements.
                </p>

                <p>
                    The appropriate retention period may vary depending on the type of
                    information and the nature of our relationship with you.
                </p>
            </>
        ),
    },

    {
        number: "09",
        title: "Your Rights & Choices",
        sidebarTitle: "Your Choices",
        shortDescription:
            "Information about choices and requests you may have regarding your personal information.",
        content: (
            <>
                <p>
                    Depending on applicable law, you may have rights relating to your
                    personal information, including the right to request access,
                    correction, updating, or deletion of certain information.
                </p>

                <p>
                    You may also contact us regarding certain communications or request
                    that we stop using your information for particular purposes where
                    applicable.
                </p>

                <p>
                    Requests can be submitted through our{" "}
                    <Link
                        href="/contact"
                        className="font-[600] text-[#765A23] underline underline-offset-4"
                    >
                        Contact Us
                    </Link>{" "}
                    page.
                </p>
            </>
        ),
    },

    {
        number: "10",
        title: "Children's Privacy",
        sidebarTitle: "Children's Privacy",
        shortDescription:
            "Our approach to information relating to children and the intended audience of our services.",
        content: (
            <p>
                Our website and services are intended for businesses, entrepreneurs,
                professionals, and other users who are able to enter into applicable
                business relationships. We do not knowingly collect personal
                information from children for the purpose of providing our services.
            </p>
        ),
    },

    {
        number: "11",
        title: "External Links",
        sidebarTitle: "External Websites",
        shortDescription:
            "How privacy practices may differ on third-party websites linked from our website.",
        content: (
            <p>
                Our website may contain links to third-party websites or resources.
                These websites operate independently from Fundastra and may have their
                own privacy policies and terms. We encourage you to review the privacy
                practices of any third-party website before providing personal
                information.
            </p>
        ),
    },

    {
        number: "12",
        title: "Changes to This Privacy Policy",
        sidebarTitle: "Policy Updates",
        shortDescription:
            "How updates to this Privacy Policy will be communicated.",
        content: (
            <p>
                We may update this Privacy Policy from time to time to reflect changes
                in our services, website, business practices, or applicable legal
                requirements. Any updated version will be published on this page with
                the revised date. We encourage you to periodically review this page
                for the latest information.
            </p>
        ),
    },
];

export default function PrivacyPolicyPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const activationPoint = window.innerHeight * 0.32;

            let currentIndex = 0;

            sections.forEach((_, index) => {
                const element = document.getElementById(
                    `privacy-section-${index}`
                );

                if (!element) return;

                const rect = element.getBoundingClientRect();

                // Next section tabhi active hoga jab uska TOP
                // actual reading area tak aa jayega.
                if (rect.top <= activationPoint) {
                    currentIndex = index;
                }
            });

            setActiveIndex(currentIndex);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
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

                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F3D596]/30 bg-[#F3D596]/10 px-4 py-2 sm:mb-5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F3D596]" />

                        <span className="font-sans text-[10px] font-[600] uppercase tracking-[0.14em] text-[#F3D596] sm:text-[11px]">
                            Legal & Privacy
                        </span>
                    </div>

                    <h1 className="max-w-[850px] font-display text-[35px] font-[500] leading-[1.02] tracking-[-0.035em] text-[#FBF9F6] sm:text-[60px] lg:text-[71px]">
                        Privacy Policy
                    </h1>

                    <p className="mt-4 max-w-[700px] font-sans text-[14px] font-[400] leading-[1.65] text-[#D7DFDB] sm:mt-5 sm:text-[17px] sm:leading-[1.7]">
                        Your privacy matters to us. This Privacy Policy explains how
                        Fundastra collects, uses, protects, and handles information when
                        you visit our website or interact with our services.
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
                                    About this policy
                                </h2>

                                <p className="mt-2.5 font-sans text-[14px] leading-[1.7] text-[#424845] sm:text-[15px]">
                                    This Privacy Policy applies to information collected through
                                    the Fundastra website and through communications or enquiries
                                    initiated through the website. By using the website, you
                                    acknowledge that you have read and understood this policy.
                                </p>

                                <p className="mt-2.5 font-sans text-[14px] leading-[1.7] text-[#424845] sm:text-[15px]">
                                    Fundastra is committed to handling information responsibly
                                    and using it in a manner consistent with the purpose for
                                    which it was provided and with applicable requirements.
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
                                    Privacy
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
                        <div className="space-y-4 sm:space-y-5">
                            {sections.map((section, index) => (
                                <article
                                    id={`privacy-section-${index}`}
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
                            Privacy Enquiries
                        </p>

                        <h2 className="mt-2 font-display text-[27px] font-[500] tracking-[-0.02em] text-[#FBF9F6] sm:text-[34px]">
                            Have a question about your information?
                        </h2>

                        <p className="mt-2 max-w-[600px] font-sans text-[13px] leading-[1.65] text-[#C8D2CE] sm:text-[14px]">
                            If you have a question, request, or concern regarding this
                            Privacy Policy or the handling of your information, please get
                            in touch with our team.
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