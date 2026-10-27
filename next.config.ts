import type { NextConfig } from "next";
import legacyRedirects from "./legacy-newsletter-redirects.json";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  experimental: {
    staleTimes: {
      dynamic: 60,
      static: 300,
    },
  },
  outputFileTracingIncludes: {
    "/api/tina/[...routes]": ["./content/**/*", "./tina/**/*"],
    "/": ["./content/**/*", "./tina/**/*"],
    "/contact-us": ["./content/**/*", "./tina/**/*"],
    "/design-lab": ["./content/**/*", "./tina/**/*"],
    "/newsletters/[slug]": ["./content/**/*", "./tina/**/*"],
  },
  async headers() {
    return [
      {
        source: "/video/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" }],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" }],
      },
      {
        source: "/icons/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=2592000" }],
      },
    ];
  },
  async redirects() {
    return legacyRedirects;
  },
  async rewrites() {
    return [{ source: "/admin", destination: "/admin/index.html" }];
  },
};

export default nextConfig;
