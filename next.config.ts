import type { NextConfig } from "next";

/**
 * Fully static export: `next build` writes plain HTML/CSS/JS to `out/`,
 * which any static host (Netlify, Vercel, GitHub Pages, cPanel) can serve.
 * Images keep their blur placeholders; they are served as the optimised JPGs in src/assets.
 */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
