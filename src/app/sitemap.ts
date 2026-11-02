import type { MetadataRoute } from "next";
import { getPageSeo, getPublishedBlogs } from "@/lib/admin-api";

const SITE_URL = "https://fundastra.in";

const STATIC_PATHS = [
  "/",
  "/about",
  "/partners",
  "/contact",
  "/blogs",
  "/services/asset-purchase",
  "/services/equity-fundraising",
  "/services/sme-funding",
  "/services/structured-debt",
  "/privacy-policy",
  "/disclaimer",
  "/terms-of-engagement",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [pageRecords, blogs] = await Promise.all([
    Promise.all(STATIC_PATHS.map((path) => getPageSeo(path))),
    getPublishedBlogs(),
  ]);

  const pages: MetadataRoute.Sitemap = STATIC_PATHS.flatMap((path, index) => {
    const seo = pageRecords[index];
    if (seo && !seo.robotsIndex) return [];

    return [{
      url: seo?.canonicalUrl || `${SITE_URL}${path}`,
      changeFrequency: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path === "/blogs" ? 0.8 : 0.7,
    }];
  });

  const blogEntries: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: blog.canonicalUrl || `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: blog.publishedAt ? new Date(blog.publishedAt) : undefined,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...blogEntries];
}
