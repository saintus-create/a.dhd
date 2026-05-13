import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/a.dhd",
  assetPrefix: "/a.dhd/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;

