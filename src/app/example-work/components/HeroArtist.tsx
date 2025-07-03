'use client';

import { motion } from 'framer-motion';

export default function HeroArtist() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-8">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/artist-hero-video-poster.jpg"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/artist-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-bg/50 to-neutral-bg"
          initial={{ y: '-20%' }}
          animate={{ y: '20%' }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
      <motion.div
        className="relative space-y-4 max-w-2xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl lg:text-6xl font-serif font-bold text-white">
          Ethan Carter
        </h1>
        <p className="text-lg text-white">
          Visual Artist & Photographer
        </p>
        <motion.button
          className="mt-4 px-6 py-3 bg-[#e9d5ff] text-[#1f2937] font-medium rounded-lg shadow hover:bg-[#d8b4fe] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Get in touch"
        >
          Get in Touch
        </motion.button>
      </motion.div>
    </section>
  );
}