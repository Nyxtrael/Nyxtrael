'use client';
import { motion } from 'framer-motion';

export default function HeroArtist() {
  return (
    <div className="relative text-center px-8 py-16">
      <p className="text-sm text-text-muted"><a href="/portfolio" className="underline hover:opacity-90">← Back to Portfolio</a></p>
      <motion.div
        className="relative space-y-4 max-w-2xl z-10 mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-6xl font-serif font-bold text-text-base drop-shadow-lg">
          Ethan Carter
        </h1>
        <p className="text-lg text-text-muted">
          Visual Artist & Photographer
        </p>
        <div className="flex items-center justify-center gap-3">
          <motion.a
            href="#gallery"
            className="mt-4 px-6 py-3 bg-gradient-cta text-neutral-900 font-semibold rounded-lg shadow-[0_8px_24px_rgba(56,189,248,0.25)] hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Explore gallery"
          >
            Explore Gallery
          </motion.a>
          <motion.a
            href="#contact"
            className="mt-4 px-6 py-3 ring-1 ring-white/10 text-text-base rounded-lg hover:ring-white/20 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact"
          >
            Contact
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
