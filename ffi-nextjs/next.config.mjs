/** @type {import('next').NextConfig} */
const nextConfig = {
  // Images are served from the original domains, exactly as in the source site.
  // We use plain <img> tags so nothing about the URLs changes, but these
  // patterns are here in case you migrate to next/image later.
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'fabricadefrasesinfinitas.com' },
      { protocol: 'https', hostname: 'fast.wistia.com' },
    ],
  },
};

export default nextConfig;
