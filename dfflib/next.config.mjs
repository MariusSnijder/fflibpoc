// next.config.mjs  (ESM only)
import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX(); // you can pass options here if needed

const isProd = process.env.NODE_ENV === "production";
const repo = "fflibpoc"; // set if deploying to GitHub Pages

/** @type {import('next').NextConfig} */
const config = {
  output: "export",           // generates /out on build
  trailingSlash: true,
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
};

export default withMDX(config);
