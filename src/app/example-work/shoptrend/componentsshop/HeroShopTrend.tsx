'use client';

import { motion } from 'framer-motion';

export default function HeroShopTrend() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-8">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/shoptrend-hero-bg-poster.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/shopping.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>
      <motion.div
        className="relative space-y-4 max-w-2xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white">
          Luxury Fashion, Timeless Elegance
        </h1>
        <p className="text-lg text-white">
          Discover the Latest Trends with ShopTrend
        </p>
        <button className="mt-4 px-6 py-3 bg-[#ff6b6b] text-white font-medium rounded-lg shadow hover:bg-[#ff8e53] transition">
          Shop Now
        </button>
      </motion.div>
    </section>
  );
}