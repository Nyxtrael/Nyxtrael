'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/video-poster.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy"
      >
        <source src="/videos/background-video.webm" type="video/webm" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-mid/80 backdrop-blur-sm" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 container mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in heading-underline font-montserrat">
          Building Modern Web Experiences
        </h1>
        <p className="text-lg md:text-2xl text-[#F5F5F5] mb-10 animate-fade-in-delay font-inter">
          Front-end developer specializing in sleek, high-performance web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="/case-studies"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            View Case Studies
          </motion.a>
          <motion.a
            href="/contact"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;