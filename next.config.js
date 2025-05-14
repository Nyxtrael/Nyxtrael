/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export for Netlify
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true, // Disable image optimization for static export
  },
};

export default nextConfig;