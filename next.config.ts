import type { NextConfig } from "next";
import createMDX from "fumadocs-mdx/next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/a.dhd",
  assetPrefix: "/a.dhd/",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "avatars.githubusercontent.com" }],
  },
};

export default createMDX()(nextConfig);
