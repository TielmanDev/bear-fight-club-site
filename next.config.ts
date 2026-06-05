import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Safely applies the subfolder path ONLY on GitHub production builds, leaving your desktop perfectly clean
  basePath: process.env.NODE_ENV === 'production' ? '/bear-fight-club-site' : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;