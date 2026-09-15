/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ...(process.env.CF_PAGES_STATIC === '1'
    ? { output: 'export', images: { unoptimized: true } }
    : {
        images: {
          remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
          ],
        },
      }),
  eslint: { ignoreDuringBuilds: true },
  transpilePackages: ['three'],
};

module.exports = nextConfig;
