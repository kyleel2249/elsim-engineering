/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Required for Cloudflare Pages static hosting
  output: 'export',
  images: {
    unoptimized: true, // required with output: 'export' on Cloudflare Pages
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: '**.imgix.net' },
      { protocol: 'https', hostname: 'imagedelivery.net' },
    ],
  },
  transpilePackages: ['three'],
};

module.exports = nextConfig;
