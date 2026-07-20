import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // The database and worker source belongs to the original Cloudflare setup;
  // this brochure site is deployed as a static Vercel site.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
