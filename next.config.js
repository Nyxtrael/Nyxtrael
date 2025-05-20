const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  
  output: 'export', // TO JEST KLUCZOWE - generuje pliki statyczne zamiast next export
  
  images: {
    domains: ['localhost', 'res.cloudinary.com'], // Dodaj inne domeny, jeżeli potrzebujesz
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
