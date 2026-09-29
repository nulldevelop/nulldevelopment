import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [75, 100],
    unoptimized: true,
  },
};

export default nextConfig;
