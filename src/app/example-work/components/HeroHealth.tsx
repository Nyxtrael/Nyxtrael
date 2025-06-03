'use client';

import { motion } from 'framer-motion';

export default function HeroHealth() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-8">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/health-bg.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <motion.div
        className="relative space-y-4 max-w-2xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-white">
          Transform Your Life
        </h1>
        <p className="text-lg text-[#e5e7eb]">
          Discover Health, Diet & Exercise Plans That Work
        </p>
        <button className="mt-4 px-6 py-3 bg-[#f97316] text-white font-medium rounded-lg shadow hover:bg-[#fb923c] transition">
          Join a Course
        </button>
      </motion.div>
    </section>
  );
}