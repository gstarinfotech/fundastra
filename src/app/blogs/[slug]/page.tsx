import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { blogContentBlocks, getPublishedBlog, type PublicBlog } from "@/lib/admin-api";

type Props = { params: Promise<{ slug: string }> };

type BlogPost = {
    slug: string;
    category: string;
    date: string;
    readTime: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    content: ReturnType<typeof blogContentBlocks>;
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    robotsIndex?: boolean;
    robotsFollow?: boolean;
};

function toBlogPost(blog: PublicBlog): BlogPost {
    const blocks = blogContentBlocks(blog);
    const words = `${blog.content || ""} ${JSON.stringify(blocks)}`.trim().split(/\s+/).filter(Boolean).length;
    return {
        slug: blog.slug,
        category: "FINANCIAL INSIGHTS",
        date: blog.publishedAt ? new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "long", year: "numeric" }).format(new Date(blog.publishedAt)) : "Recently published",
        readTime: `${Math.max(1, Math.ceil(words / 200))} min read`,
        title: blog.title,
        description: blog.excerpt,
        image: blog.featuredImage,
        imageAlt: blog.title,
        content: blocks,
        metaTitle: blog.metaTitle,
        metaDescription: blog.metaDescription,
        canonicalUrl: blog.canonicalUrl,
        ogTitle?: string;
        ogDescription?: string;
        ogImage?: string;
        robotsIndex?: boolean;
        robotsFollow?: boolean;
    };
}

async function loadBlog(slug: string) {
    const record = await getPublishedBlog(slug);
    return record ? toBlogPost(record) : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const blog = await loadBlog(slug);
    if (!blog) return { title: "Article Not Found | Fund Astra", robots: { index: false, follow: false } };

    return {
        title: blog.metaTitle || `${blog.title} | Fund Astra`,
        description: blog.metaDescription || blog.description,
        alternates: { canonical: blog.canonicalUrl || `https://fundastra.in/blogs/${blog.slug}` },
        robots: {
            index: blog.robotsIndex !== false,
            follow: blog.robotsFollow !== false,
        },
        openGraph: {
            title: blog.ogTitle || blog.metaTitle || blog.title,
            description: blog.ogDescription || blog.metaDescription || blog.description,
            images: blog.ogImage ? [blog.ogImage] : blog.image ? [blog.image] : undefined,
            type: "article",
        },
    };
}

export default async function SingleBlogPage({ params }: Props) {
    const { slug } = await params;
    const blog = await loadBlog(slug);
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
            {blog.image && (
                <section className="px-5 sm:px-8 lg:px-12">
                    <div className="relative mx-auto aspect-[16/8] max-w-[1100px] overflow-hidden rounded-[8px] bg-[#E8EAE5]">
                        <Image
                            src={blog.image}
                            alt={blog.imageAlt}
                            fill
                            priority
                            unoptimized
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 1100px"
                        />
                    </div>
                </section>
            )}

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

                        if (block.type === "image") {
                            if (!block.src) return null;
                            return (
                                <figure key={index} className="my-8">
                                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[8px] bg-[#E8EAE5]">
                                        <Image src={block.src} alt={block.alt} fill unoptimized className="object-cover" sizes="(max-width: 780px) 100vw, 780px" />
                                    </div>
                                    {block.caption && <figcaption className="mt-3 text-center font-sans text-[13px] leading-relaxed text-[#718078]">{block.caption}</figcaption>}
                                </figure>
                            );
                        }
                        return null;
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
