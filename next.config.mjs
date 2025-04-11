/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'], // dodaj swoje jeśli używasz zewnętrznych
    formats: ['image/webp'],
  },
  experimental: {
    serverActions: true, // jeśli korzystasz z tego ficzera
  },
};

export default nextConfig;
