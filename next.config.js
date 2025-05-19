// next.config.js
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    domains: ['localhost'], // + inne domeny jak res.cloudinary.com
  },

  webpack(config) {
    // doklejamy aliasy do domyślnych
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },
};

module.exports = nextConfig;
