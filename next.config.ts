import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const root = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Avoid inferring parent lockfiles (e.g. in home directory) as workspace root
  outputFileTracingRoot: root,
  // Next 15.5 defaults devtoolSegmentExplorer to true; it can crash dev with:
  // "SegmentViewNode ... not found in the React Client Manifest"
  // (especially flaky with webpack HMR — see github.com/vercel/next.js/issues/91797-adjacent reports).
  experimental: {
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
