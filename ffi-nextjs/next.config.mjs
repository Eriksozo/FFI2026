/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export — produces a fully static site in ./out
  // (this site has no server features, so no Node runtime is needed).
  output: 'export',
  // We use plain <img> tags with external URLs, so disable the image optimizer.
  images: { unoptimized: true },
  // Nice clean URLs as folders with index.html
  trailingSlash: true,
};

export default nextConfig;
