import type { Metadata } from "next";
import { getManagedMetadata } from "@/lib/admin-api";
import BlogsPage from "@/components/BlogHero";

export async function generateMetadata(): Promise<Metadata> {
    return getManagedMetadata("/blogs", {
        title: "Financial Insights Blog | Fund Astra",
        description: "Explore Fund Astra insights on business funding, structured debt and equity fundraising.",
        metadataBase: new URL("https://fundastra.in"),
    });
}

export default function BlogPage() {
    return <BlogsPage />
}