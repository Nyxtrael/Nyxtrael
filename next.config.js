/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for better debugging
  output: 'export', // Enable static export for Netlify
  images: {
    domains: ['res.cloudinary.com'], // Allow images from Cloudinary
    unoptimized: true, // Disable image optimization for static export
  },
  trailingSlash: true, // Add trailing slashes to URLs (e.g., /page/ instead of /page)
  experimental: {
    // Enable if you use Next.js features that need runtime (optional, comment out if not needed)
    // esmExternals: true,
  },
  webpack: (config, { isServer }) => {
    // Example: Add support for additional file types if needed
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false, // Fix for static export (fs not available in browser)
      };
    }
    return config;
  },
};

export default nextConfig;