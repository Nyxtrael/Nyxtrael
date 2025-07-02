'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-bg">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/video-poster.jpg"
        preload="none"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/abstract-lines-3d.webm" type="video/webm" />
        <source src="/videos/abstract-lines-3d.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-bg/80 backdrop-blur-sm" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6 container mx-auto flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Portrait/Graphic */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/images/profile-photo.jpg"
            alt="Nyxtrael - Front-end Developer specializing in React and Next.js"
            width={200}
            height={200}
            className="rounded-full border-4 border-accent/50 hover:border-yellow-400/50 transition-all"
            priority
          />
        </motion.div>

        {/* Text and CTA */}
        <div>
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-text-base mb-4 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Blazing-fast web apps to grow your business
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-text-muted mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Front-end developer crafting high-performance, user-focused solutions with React and Next.js.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/contact"
              className="bg-gradient-cta text-neutral-dark px-6 py-3 rounded-lg font-semibold hover:shadow-accent/50 transition-all duration-300"
              aria-label="Start your project with Nyxtrael"
            >
              Let’s Start Your Project
            </Link>
            <Link
              href="/portfolio"
              className="bg-transparent border-2 border-accent text-text-base px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-neutral-dark transition-all duration-300"
              aria-label="View Nyxtrael's portfolio"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;