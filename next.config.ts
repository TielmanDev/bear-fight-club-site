import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Forces Next.js to output static HTML/CSS/JS assets
  images: {
    unoptimized: true, // Required because GitHub Pages can't optimize images on the fly
  },
};

export default nextConfig;