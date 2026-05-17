import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ateeqhajtours.com',
      },
    ],
  },
};

export default nextConfig;
