import createMDX from "fumadocs-mdx/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/a.dhd",
  assetPrefix: "/a.dhd/",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "avatars.githubusercontent.com" }],
  },
};

export default createMDX()(nextConfig);
