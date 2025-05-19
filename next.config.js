// next.config.js
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    domains: ['localhost'], // + res.cloudinary.com gdy używasz Cloudinary
  },

  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

module.exports = nextConfig;
