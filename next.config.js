const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  output: 'export', // Statyczne generowanie stron dla Netlify
  images: {
    domains: ['localhost', 'res.cloudinary.com'], // Domeny dla obrazów
    unoptimized: true, // Wyłącz optymalizację obrazów dla export
  },
  experimental: {
    // Zezwala na import ESM z "export *" w klient boundary
    esmExternals: 'loose',
  },
  webpack(config) {
    // Alias @ → src
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'),
    };

    // Dodatkowo wymuszamy automatyczne ładowanie plików .mjs jako JS
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
};

module.exports = nextConfig;
