'use client';

import { motion } from 'framer-motion';

export default function HeroArtist() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-8">
      {/* Background Video with Overlay */}
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
        <div className="absolute inset-0 bg-black bg-opacity-40" />
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
        <button className="mt-4 px-6 py-3 bg-[#e9d5ff] text-[#1f2937] font-medium rounded-lg shadow hover:bg-[#d8b4fe] transition">
          Get in Touch
        </button>
      </motion.div>
    </section>
  );
}