import type { NextConfig } from "next";

function getAdminImagePattern() {
  const configuredOrigin =
    process.env.ADMIN_API_IMAGE_ORIGIN ||
    (process.env.NODE_ENV === "development"
      ? "http://localhost:4000"
      : "https://api.fundastra.in");

  try {
    const url = new URL(configuredOrigin);
    return {
      protocol: url.protocol.replace(":", "") as "http" | "https",
      hostname: url.hostname,
      ...(url.port ? { port: url.port } : {}),
      pathname: "/uploads/**",
    };
  } catch {
    const hostname = process.env.ADMIN_API_IMAGE_HOST || "api.fundastra.in";
    return {
      protocol: "https" as const,
      hostname,
      pathname: "/uploads/**",
    };
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [getAdminImagePattern()],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.fundastra.in" }],
        destination: "https://fundastra.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
