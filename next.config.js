/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Ensure proper routing
  async rewrites() {
    return [];
  },
};

module.exports = nextConfig;

