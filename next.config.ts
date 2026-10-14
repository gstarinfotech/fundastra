import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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