
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

const blogs = [
    {
        slug: "sme-funding",
        image: "/smefunding.jpg",
        date: "Oct 30",
        readTime: "5 min",
        title: "SME Funding: A Practical Guide to Financing Business Growth",
        description:
            "Understand the funding options available to growing businesses and how to choose the right financing structure.",
    },
    {
        slug: "structured-debt",
        image: "/structured-debt.jpeg",
        date: "Oct 30",
        readTime: "4 min",
        title: "Structured Debt: Understanding the Right Financing Approach",
        description:
            "Explore structured debt solutions and the factors businesses should consider before choosing a financing facility.",
    },
    {
        slug: "equity-fundraising",
        image: "/equity-fundraising.jpeg",
        date: "Oct 30",
        readTime: "4 min",
        title: "Preparing Your Business for Equity Fundraising",
        description:
            "Discover the key financial and business information to prepare before approaching potential equity partners.",
    },
];

export default function BlogsPage() {
    return (
        <main className="min-h-screen bg-[#FBF9F6] px-5 pb-20 pt-[130px] sm:px-8 sm:pt-[140px] lg:px-12 lg:pt-[160px]">
            <Navbar />

            <div className="mx-auto max-w-[1280px]">

                {/* HEADER */}
                <div className="mx-auto mb-12 max-w-[760px] text-center">
                    <p className="font-sans text-[13px] font-medium text-[#55766B] sm:text-[14px]">
                        Financial Insights Blog
                    </p>

                    <h1 className="mt-2 font-display text-[28px] font-semibold leading-tight tracking-[-0.025em] text-[#052E26] sm:text-[36px] lg:text-[40px]">
                        Stay informed with our latest articles
                    </h1>

                    <p className="mx-auto mt-3 max-w-[650px] font-sans text-[14px] leading-relaxed text-[#414B46] sm:text-[16px]">
                        Explore insights to help you make informed financial decisions
                        and achieve your goals.
                    </p>
                </div>

                {/* BLOG GRID */}
                <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">

                    {blogs.map((blog) => (
                        <Link
                            href={`/blogs/${blog.slug}`}
                            key={blog.slug}
                            className="group block overflow-hidden rounded-[8px] bg-white shadow-[0_4px_18px_rgba(5,46,38,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(5,46,38,0.16)]"
                        >
                            {/* BLOG IMAGE */}
                            <div className="relative aspect-[1.72/1] overflow-hidden bg-[#E8EAE5]">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                            </div>

                            {/* BLOG CONTENT */}
                            <div className="px-5 pb-6 pt-5 text-left">

                                {/* DATE & READ TIME */}
                                <div className="flex items-center gap-2 font-sans text-[11px] text-[#65716B] sm:text-[12px]">
                                    <span>{blog.date}</span>
                                    <span>·</span>
                                    <span>{blog.readTime}</span>
                                </div>

                                {/* TITLE */}
                                <h2 className="mt-3 font-display text-[18px] font-semibold leading-[1.4] text-[#10251E] transition-colors group-hover:text-[#55766B] sm:text-[20px]">
                                    {blog.title}
                                </h2>

                                {/* DESCRIPTION */}
                                <p className="mt-2 line-clamp-3 font-sans text-[13px] leading-[1.7] text-[#59625D] sm:text-[14px]">
                                    {blog.description}
                                </p>

                                {/* READ MORE */}
                                <span className="mt-4 inline-flex items-center gap-2 font-sans text-[12px] font-semibold text-[#052E26]">
                                    Read Article
                                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </span>

                            </div>
                        </Link>
                    ))}

                </div>
            </div>
        </main>
    );
}
