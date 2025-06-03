'use client';

import { motion } from 'framer-motion';

export default function HeroArtist() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-8">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/artist-bg.jpg")',
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <motion.div
        className="relative space-y-4 max-w-2xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white">
          Luna Sterling
        </h1>
        <p className="text-lg text-[#4b5563] dark:text-[#bfdbfe]">
          Visual Artist & Designer
        </p>
        <button className="mt-4 px-6 py-3 bg-[#e9d5ff] text-[#1f2937] font-medium rounded-lg shadow hover:bg-[#d8b4fe] transition">
          Get in Touch
        </button>
      </motion.div>
    </section>
  );
}