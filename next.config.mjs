// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // WAŻNE dla Netlify
  },
};

export default nextConfig;
