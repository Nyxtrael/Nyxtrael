// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Netlify tego chce, nie kłóć się z nią
  },
  experimental: {
    appDir: true, // wymagane dla Next.js 13+ app directory
  },
};

export default nextConfig;
