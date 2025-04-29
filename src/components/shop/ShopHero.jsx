'use client';

import { motion } from 'framer-motion';

export default function ShopHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Welcome to Nyxtrael’s Shop
      </h1>
      <p className="text-neutral-400 max-w-2xl mx-auto">
        Discover exclusive digital art prints, website templates, and video editing assets crafted with magic and creativity.
      </p>
    </motion.section>
  );
}