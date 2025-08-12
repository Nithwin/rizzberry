/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
    images: {
    unoptimized: true,  // disables image optimization to support static export
  },
  
};

module.exports = nextConfig;
