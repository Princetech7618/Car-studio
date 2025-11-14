/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ Ignore TypeScript build errors
    ignoreBuildErrors: true,
  },
  eslint: {
    // ✅ Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
    images: {
    domains: ["images.unsplash.com"], // ✅ Allow Unsplash images
  },
};



module.exports = nextConfig;
