/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Używamy Build Output API dla optymalizacji deploymentu
  images: {
    domains: ['localhost', 'nyxtrael.com'], // Dodajemy domeny dla obrazów
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, s-maxage=31536000, stale-while-revalidate=59',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;