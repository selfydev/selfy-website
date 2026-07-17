import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — no server runtime. Serve the `out/` directory.
  output: "export",
  // Emit each route as <route>/index.html so any static host serves clean URLs.
  trailingSlash: true,
  // The Image Optimization API needs a server, so it's off for static export.
  images: { unoptimized: true },
};

export default nextConfig;
