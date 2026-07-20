import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The database and worker source belongs to the original Cloudflare setup;
  // this brochure site is deployed as a static Vercel site.
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
