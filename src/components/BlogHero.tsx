import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { getPublishedBlogs } from "@/lib/admin-api";

function formatDate(value: string | null) {
    if (!value) return "Recently published";
    return new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(value));
}

function estimateReadTime(content: string, blocks: unknown[]) {
    const text = `${content || ""} ${JSON.stringify(blocks || [])}`;
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return `${Math.max(1, Math.ceil(words / 200))} min read`;
}

export default async function BlogsPage() {
    const blogs = await getPublishedBlogs();

    return (
        <main className="min-h-screen bg-[#FBF9F6] px-5 pb-20 pt-[130px] sm:px-8 sm:pt-[140px] lg:px-12 lg:pt-[160px]">
            <Navbar />
            <div className="mx-auto max-w-[1280px]">
                <div className="mx-auto mb-12 max-w-[760px] text-center">
                    <p className="font-sans text-[13px] font-medium text-[#55766B] sm:text-[14px]">Financial Insights Blog</p>
                    <h1 className="mt-2 font-display text-[28px] font-semibold leading-tight tracking-[-0.025em] text-[#052E26] sm:text-[36px] lg:text-[40px]">Stay informed with our latest articles</h1>
                    <p className="mx-auto mt-3 max-w-[650px] font-sans text-[14px] leading-relaxed text-[#414B46] sm:text-[16px]">Explore insights to help you make informed financial decisions and achieve your goals.</p>
                </div>

                {blogs.length === 0 ? (
                    <div className="rounded-lg border border-[#DCE4DE] bg-white px-6 py-12 text-center text-sm text-[#59625D]">
                        No articles are published yet. Please check back soon.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                        {blogs.map((blog) => (
                            <Link href={`/blogs/${blog.slug}`} key={blog.slug} className="group block overflow-hidden rounded-[8px] bg-white shadow-[0_4px_18px_rgba(5,46,38,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(5,46,38,0.16)]">
                                <div className="relative aspect-[1.72/1] overflow-hidden bg-[#E8EAE5]">
                                    {blog.featuredImage ? <Image src={blog.featuredImage} alt={blog.title} fill unoptimized className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" /> : null}
                                </div>
                                <div className="px-5 pb-6 pt-5 text-left">
                                    <div className="flex items-center gap-2 font-sans text-[11px] text-[#65716B] sm:text-[12px]">
                                        <span>{formatDate(blog.publishedAt)}</span><span>·</span><span>{estimateReadTime(blog.content, blog.contentBlocks)}</span>
                                    </div>
                                    <h2 className="mt-3 font-display text-[18px] font-semibold leading-[1.4] text-[#10251E] transition-colors group-hover:text-[#55766B] sm:text-[20px]">{blog.title}</h2>
                                    <p className="mt-2 line-clamp-3 font-sans text-[13px] leading-[1.7] text-[#59625D] sm:text-[14px]">{blog.excerpt}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 font-sans text-[12px] font-semibold text-[#052E26]">Read Article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
