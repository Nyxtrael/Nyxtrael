/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Włączamy App Router (jeśli korzystasz z /app)
  experimental: {
    appDir: true,
  },
  // Generujemy standalone build, który Netlify łatwiej obsłuży
  output: 'standalone',
  images: {
    unoptimized: true, // Netlify nie obsługuje Image Optimization by default
    // tu możesz dopisać domeny, jeśli ładujesz obrazy z zewnętrznych źródeł:
    // domains: ['example.com', 'res.cloudinary.com'],
  },
};

export default nextConfig;
