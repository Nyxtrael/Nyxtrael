/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 
  experimental: {
    appDir: true,
  },
 
  output: 'standalone',
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;
