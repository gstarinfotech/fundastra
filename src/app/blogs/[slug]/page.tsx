import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";

type BlogContentBlock =
    | { type: "heading"; text: string; level?: 2 | 3 }
    | { type: "paragraph"; text: string }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "list"; items: string[] };

type BlogPost = {
    slug: string;
    category: string;
    date: string;
    readTime: string;
    title: string;
    description: string;
    image: string; // One main featured image for the listing card and article hero
    imageAlt: string;
    content: BlogContentBlock[]; // Add as many content blocks as needed, in any order
};

const blogs: BlogPost[] = [
    {
        slug: "sme-funding",
        category: "SME FUNDING",
        date: "October 30, 2026",
        readTime: "5 min read",
        title: "SME Funding: A Practical Guide to Financing Business Growth",
        description:
            "Understand the funding options available to growing businesses and how to choose the right financing structure.",
        image: "/smefunding.jpg",
        imageAlt: "SME funding and business growth",
        content: [
            {
                type: "paragraph",
                text: "Small and medium-sized enterprises play an important role in economic growth. As businesses expand, their financial requirements also evolve. Whether it is managing working capital, purchasing equipment or entering new markets, having access to the right funding can make a significant difference.",
            },
            {
                type: "heading",
                text: "Understanding SME Funding",
            },
            {
                type: "paragraph",
                text: "SME funding refers to financial assistance provided to small and medium-sized businesses to support their operational requirements, expansion plans and long-term growth.",
            },
            {
                type: "paragraph",
                text: "Businesses can explore different financing options depending on their requirements, financial performance, repayment capacity and available security.",
            },

            {
                type: "image",
                src: "/service1-2.png",
                alt: "Business financial planning",
                caption:
                    "Planning the right financial structure for sustainable business growth.",
            },

            {
                type: "heading",
                text: "Types of SME Funding Options",
            },
            {
                type: "paragraph",
                text: "There are several financing options available to businesses. Selecting the right option depends on the purpose of funding and the financial position of the business.",
            },
            {
                type: "list",
                items: [
                    "Working Capital Finance – To manage daily operational expenses.",
                    "Term Loans – To purchase machinery, equipment and business assets.",
                    "Loan Against Property – To access secured business financing.",
                    "Structured Debt – For specific and customised financing requirements.",
                    "Equity Funding – To raise capital by bringing in investors.",
                ],
            },
            {
                type: "heading",
                text: "Factors to Consider Before Choosing Funding",
            },
            {
                type: "paragraph",
                text: "Before selecting a financing option, businesses should evaluate their financial requirements and repayment capacity. Interest rates, repayment tenure, processing fees, collateral requirements and other applicable terms should be carefully reviewed.",
            },
            {
                type: "list",
                items: [
                    "Clearly define the purpose of funding.",
                    "Evaluate existing financial obligations.",
                    "Compare available financing structures.",
                    "Understand repayment terms and associated costs.",
                ],
            },
            {
                type: "heading",
                text: "Preparing Your Business for Funding",
            },
            {
                type: "paragraph",
                text: "A well-organised financial profile can help businesses prepare for discussions with lenders and financing partners. Financial statements, bank statements, GST records, business projections and details of existing borrowings may be required during the assessment process.",
            },

            {
                type: "image",
                src: "/smefunding.jpg",
                alt: "Business funding discussion",
                caption: "A clear funding plan can support informed business decisions.",
            },

            {
                type: "heading",
                text: "Conclusion",
            },
            {
                type: "paragraph",
                text: "Choosing the right funding structure is an important step towards sustainable business growth. Understanding the available options and evaluating them against business requirements can help owners make informed financial decisions.",
            },
            {
                type: "paragraph",
                text: "With the right financial guidance, businesses can explore suitable funding opportunities and plan their next stage of growth.",
            },
        ],
    },
];

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        return { title: "Article Not Found | Fund Astra" };
    }

    return {
        title: `${blog.title} | Fund Astra`,
        description: blog.description,
        alternates: {
            canonical: `https://fundastra.in/blogs/${blog.slug}`,
        },
        openGraph: {
            title: blog.title,
            description: blog.description,
            images: [blog.image],
            type: "article",
        },
    };
}

export default async function SingleBlogPage({ params }: Props) {
    const { slug } = await params;
    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) notFound();

    return (
        <main className="min-h-screen bg-[#FBF9F6]">
            <Navbar />

            {/* BLOG HEADER */}
            <section className="px-5 pb-10 pt-[180px] sm:px-8 sm:pt-[200px] lg:px-12 lg:pt-[135px]">
                <div className="mx-auto max-w-[900px]">
                    <div className="mt-8 text-center">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#55766B]">
                            {blog.category}
                        </p>

                        <h1 className="mt-4 font-display text-[29px] font-semibold leading-[1.25] tracking-[-0.02em] text-[#052E26] sm:text-[38px] lg:text-[44px]">
                            {blog.title}
                        </h1>

                        <p className="mx-auto mt-5 max-w-[700px] font-sans text-[14px] leading-[1.8] text-[#59625D] sm:text-[16px]">
                            {blog.description}
                        </p>

                        <div className="mt-6 flex items-center justify-center gap-3 text-[12px] text-[#65716B]">
                            <span>{blog.date}</span>
                            <span>·</span>
                            <span>{blog.readTime}</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ONE MAIN FEATURED IMAGE */}
            <section className="px-5 sm:px-8 lg:px-12">
                <div className="relative mx-auto aspect-[16/8] max-w-[1100px] overflow-hidden rounded-[8px] bg-[#E8EAE5]">
                    <Image
                        src={blog.image}
                        alt={blog.imageAlt}
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 1100px"
                    />
                </div>
            </section>

            {/* FLEXIBLE ARTICLE CONTENT: paragraphs, headings, lists and any number of images */}
            <article className="px-5 pb-16 pt-12 sm:px-8 sm:pt-16 lg:px-12">
                <div className="mx-auto max-w-[820px] space-y-7">
                    {blog.content.map((block, index) => {
                        if (block.type === "heading") {
                            return block.level === 3 ? (
                                <h3
                                    key={index}
                                    className="pt-2 font-display text-[20px] font-semibold leading-[1.4] text-[#052E26] sm:text-[23px]"
                                >
                                    {block.text}
                                </h3>
                            ) : (
                                <h2
                                    key={index}
                                    className="pt-2 font-display text-[23px] font-semibold leading-[1.4] text-[#052E26] sm:text-[27px]"
                                >
                                    {block.text}
                                </h2>
                            );
                        }

                        if (block.type === "paragraph") {
                            return (
                                <p
                                    key={index}
                                    className="font-sans text-[14px] leading-[1.9] text-[#414B46] sm:text-[16px]"
                                >
                                    {block.text}
                                </p>
                            );
                        }

                        if (block.type === "list") {
                            return (
                                <ul key={index} className="space-y-3 pl-5">
                                    {block.items.map((item, itemIndex) => (
                                        <li
                                            key={itemIndex}
                                            className="list-disc font-sans text-[14px] leading-[1.8] text-[#414B46] sm:text-[15px]"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            );
                        }

                        return (
                            <figure key={index} className="my-8">
                                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[8px] bg-[#E8EAE5]">
                                    <Image
                                        src={block.src}
                                        alt={block.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 780px) 100vw, 780px"
                                    />
                                </div>
                                {block.caption && (
                                    <figcaption className="mt-3 text-center font-sans text-[13px] leading-relaxed text-[#718078]">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </figure>
                        );
                    })}

                    {/* CONTACT CTA */}
                    <div className="mt-14 rounded-[8px] bg-[#052E26] px-6 py-10 text-center sm:px-12">
                        <h2 className="font-display text-[25px] font-semibold leading-[1.35] text-[#FBF9F6] sm:text-[32px]">
                            Looking for the Right Funding Solution?
                        </h2>

                        <p className="mx-auto mt-4 max-w-[550px] font-sans text-[14px] leading-[1.8] text-white/75 sm:text-[15px]">
                            Connect with Fund Astra to explore financial solutions
                            aligned with your business requirements.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-7 inline-flex bg-[#FBF9F6] px-7 py-3 font-sans text-[13px] font-semibold text-[#052E26] transition-opacity hover:opacity-85"
                        >
                            Contact Us
                        </Link>
                    </div>

                    <div className="pt-3">
                        <Link
                            href="/blogs"
                            className="text-[13px] font-semibold text-[#55766B] hover:text-[#052E26]"
                        >
                            ← Explore More Articles
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
