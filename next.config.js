/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable experimental features if needed for 3D
  transpilePackages: ['three'],
};

module.exports = nextConfig;
