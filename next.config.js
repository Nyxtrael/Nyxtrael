const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'res.cloudinary.com'], // Domeny dla obrazów
  },
  webpack(config) {
    // Alias @ → src
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    return config;
  },
};

module.exports = nextConfig;