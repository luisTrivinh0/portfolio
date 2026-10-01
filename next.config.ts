import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  agentRules: false,
  images: { unoptimized: true },
};

export default nextConfig;
