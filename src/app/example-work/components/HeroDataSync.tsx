'use client';

import { motion } from 'framer-motion';

export default function HeroDataSync() {
  return (
    <section className="relative h-screen bg-gradient-to-r from-[#ff6b6b] to-[#ff8e53] flex items-center justify-center text-center px-8">
      <motion.div
        className="space-y-4 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-6xl font-bold text-[#1f2937] dark:text-[#e5e7eb]">
          Unlock Actionable Insights
        </h1>
        <p className="text-lg text-[#1f2937] dark:text-[#bfdbfe]">
          Real-Time Analytics Dashboard for Your Business Growth
        </p>
        <button className="mt-4 px-6 py-3 bg-[#1f2937] text-[#e5e7eb] font-medium rounded-lg shadow hover:bg-[#2d3748] transition">
          Get Started
        </button>
      </motion.div>
    </section>
  );
}