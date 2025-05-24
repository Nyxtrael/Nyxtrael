const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export to generate a fully static site
  output: 'export',

  // Enables React Strict Mode to catch potential issues in development
  reactStrictMode: true,

  // Configure image handling for Next.js Image component
  images: {
    // Domains allowed for image sources
    domains: ['localhost', 'res.cloudinary.com'],
    // Disable image optimization for static export compatibility
    unoptimized: true,
  },

  // Custom Webpack configuration
  webpack(config) {
    // Add alias for '@' to point to the 'src' directory
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

module.exports = nextConfig;