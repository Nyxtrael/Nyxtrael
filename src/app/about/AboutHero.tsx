'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section role="banner" className="relative min-h-[60vh] flex items-center py-16 bg-neutral-bg">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/video-poster.jpg"
          preload="none"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          aria-hidden="true"
        >
          <source src="/videos/background-video.webm" type="video/webm" />
          <source src="/videos/background-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-neutral-bg/80 backdrop-blur-sm" />
      </div>

      <motion.div
        className="container mx-auto text-center relative z-10 bg-neutral-bg/40 backdrop-blur-md shadow-2xl rounded-xl border border-accent/30 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1
          className="text-5xl md:text-6xl font-bold text-text-base mb-4 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"
          aria-label="About Nyxtrael"
        >
          About Nyxtrael
          <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
        </h1>
        <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto font-inter leading-relaxed">
          I’m [Your Name], a front-end developer crafting impactful web solutions for startups, creators, and SaaS teams with React and Next.js.
        </p>
      </motion.div>
    </section>
  );
}