/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Zachowujemy dla optymalizacji deploymentu
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '', // Dodajemy dla jasności
      },
      {
        protocol: 'https',
        hostname: 'nyxtrael.com',
      },
      // Usuwamy wildcard '**' i dodajemy tylko potrzebne domeny
      {
        protocol: 'https',
        hostname: 'supabase.co', // Jeśli używasz Supabase dla obrazów
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Przykład dla zewnętrznych obrazów
      },
    ],
  },
  async headers() {
    return [
      {
        // Ograniczamy cache dla dynamicznych stron
        source: '/pricing',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate', // Bez cache dla dynamicznej strony
          },
        ],
      },
      {
        // Cache dla statycznych zasobów
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Domyślne cache dla innych stron
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=59',
          },
        ],
      },
    ];
  },
  // Dodajemy logowanie dla debugowania
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

module.exports = nextConfig;