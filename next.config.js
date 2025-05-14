/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, 
  output: 'export',
  images: {
    domains: ['res.cloudinary.com'], 
    unoptimized: true, 
  },
  trailingSlash: true, 
  experimental: {
   
  },
 
  webpack: (config,