import type { Metadata } from "next";
const API_ORIGIN = process.env.ADMIN_API_URL?.replace(/\/+$/, "");

export type SeoRecord = {
    path: string;
    pageName: string;
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    robotsIndex: boolean;
    robotsFollow: boolean;
    schemaMarkup?: unknown;
};

export type BlogBlock =
    | { type: "heading"; text: string; level?: 2 | 3 }
    | { type: "paragraph"; text: string }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "list"; items: string[] };

export type PublicBlog = {
    id?: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    contentBlocks: BlogBlock[];
    featuredImage: string;
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    robotsIndex?: boolean;
    robotsFollow?: boolean;
    publishedAt: string | null;
};

async function publicGet<T>(path: string): Promise<T | null> {
    if (!API_ORIGIN) {
        console.error("ADMIN_API_URL is not configured.");
        return null;
    }

    try {
        const response = await fetch(
            `${API_ORIGIN}/public${path}`,
            {
                cache: "no-store",
                headers: { Accept: "application/json" },
            }
        );

        if (!response.ok) return null;
        return (await response.json()) as T;
    } catch (error) {
        console.error("Admin API request failed:", error);
        return null;
    }
}

export function getPageSeo(path: string) {
    return publicGet<SeoRecord>(
        `/seo?path=${encodeURIComponent(path)}`
    );
}

export type TrackingSettings = {
    enabled: boolean;
    headCode: string;
    bodyStartCode: string;
    bodyEndCode: string;
};

const DEFAULT_TRACKING_SETTINGS: TrackingSettings = {
    enabled: true,
    headCode: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y560F8W6VL"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){window.dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Y560F8W6VL');
</script>`,
    bodyStartCode: "",
    bodyEndCode: "",
};

export async function getTrackingSettings(): Promise<TrackingSettings> {
    const settings = await publicGet<TrackingSettings>("/tracking");

    if (!settings) {
        return DEFAULT_TRACKING_SETTINGS;
    }

    return {
        enabled: settings.enabled ?? true,
        headCode: settings.headCode ?? "",
        bodyStartCode: settings.bodyStartCode ?? "",
        bodyEndCode: settings.bodyEndCode ?? "",
    };
}

export function getPublishedBlogs() {
    return publicGet<PublicBlog[]>("/blogs").then(
        (rows) => rows ?? []
    );
}

export function getPublishedBlog(slug: string) {
    return publicGet<PublicBlog>(
        `/blogs/${encodeURIComponent(slug)}`
    );
}

export function blogContentBlocks(blog: PublicBlog): BlogBlock[] {
    if (Array.isArray(blog.contentBlocks) && blog.contentBlocks.length) {
        return blog.contentBlocks;
    }

    if (blog.content) {
        try {
            const parsed = JSON.parse(blog.content);
            if (Array.isArray(parsed)) return parsed;
        } catch {
            // Legacy plain-text content
        }
    }

    return blog.content
        ? [{ type: "paragraph", text: blog.content }]
        : [];
}

export async function getManagedMetadata(
    path: string,
    fallback: Metadata
): Promise<Metadata> {
    const seo = await getPageSeo(path);

    if (!seo) return fallback;

    const title = seo.metaTitle || fallback.title;
    const description =
        seo.metaDescription || fallback.description;

    const canonical =
        seo.canonicalUrl || `https://fundastra.in${path}`;

    return {
        ...fallback,
        title,
        description,
        alternates: {
            ...fallback.alternates,
            canonical,
        },
        robots: {
            index: seo.robotsIndex,
            follow: seo.robotsFollow,
        },
        openGraph: {
            ...fallback.openGraph,
            title: seo.ogTitle || seo.metaTitle || fallback.title?.toString(),
            description:
                seo.ogDescription ||
                seo.metaDescription ||
                fallback.description?.toString(),
            images: seo.ogImage
                ? [{ url: seo.ogImage }]
                : undefined,
        },
    };
}
