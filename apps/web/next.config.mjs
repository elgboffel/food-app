import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";




const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig  = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  output: "standalone",
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default withVanillaExtract(nextConfig);
