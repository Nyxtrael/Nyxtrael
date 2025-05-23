"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { Palette, Sparkles, Mail } from 'lucide-react';
import Particles from '../../../components/Particles';

// Lazy-load the Gallery section
const Gallery = dynamic(() => import('./Gallery'), { ssr: false });

const illustrations = [
  { id: 1, path: '/images/illustration1.jpg', alt: 'Neon Ritual - Cyberpunk Cityscape', description: 'A vibrant cyberpunk cityscape with glowing neon lights.' },
  { id: 2, path: '/images/illustration2.jpg', alt: 'Neon Ritual - Futuristic Portrait', description: 'A futuristic portrait with glitch effects.' },
  { id: 3, path: '/images/illustration3.jpg', alt: 'Neon Ritual - Abstract Neon Waves', description: 'Abstract waves in neon hues, pulsing with energy.' },
];

export default function NeonRitual() {
  return (
    <main role="main" className="min-h-screen bg-neon-dark text-gray-200 font-montserrat overflow-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        role="region"
        aria-labelledby="hero-heading"
        className="relative flex items-center justify-center section-spacing container mx-auto min-h-screen overflow-hidden"
      >
        <Particles />
        <div className="relative z-10 text-center">
          <motion.h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-bebas text-neon-pink mb-6 tracking-wide font-bold"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            NeonRitual
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-montserrat"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            An Immersive AI Illustration Art Experience
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              href="#explore"
              className="btn-primary"
              aria-label="Explore the art gallery"
            >
              Explore the Art
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        role="region"
        aria-labelledby="about-heading"
        className="section-spacing bg-neon-dark text-center"
      >
        <div className="container mx-auto">
          <motion.h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bebas font-bold text-neon-blue heading-underline mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Welcome to NeonRitual
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            NeonRitual is a celebration of AI-generated art, where technology meets creativity to produce mesmerizing illustrations. Each piece is a fusion of neon aesthetics and digital magic, crafted to evoke wonder and inspire imagination.
          </motion.p>
        </div>
      </section>

      {/* Illustrations Gallery Section */}
      <Gallery illustrations={illustrations} />

      {/* Creation Process Section */}
      <section
        id="creation-process"
        role="region"
        aria-labelledby="creation-heading"
        className="section-spacing bg-neon-dark text-center text-gray-200"
      >
        <div className="container mx-auto">
          <motion.h2
            id="creation-heading"
            className="text-4xl md:text-5xl font-bebas font-bold text-neon-blue heading-underline mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The Creation Process
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Using advanced AI tools like SDXL and ComfyUI, I craft each illustration with a blend of algorithmic precision and artistic vision. The process involves generating base designs, refining them with neon effects, and animating them to bring the art to life.
          </motion.p>
          <motion.div
            className="flex justify-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Palette className="h-12 w-12 text-neon-pink animate-pulse" aria-hidden="true" />
            <Sparkles className="h-12 w-12 text-neon-blue animate-pulse" aria-hidden="true" />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="cta"
        role="region"
        aria-labelledby="cta-heading"
        className="section-spacing bg-gradient-to-br from-neon-pink to-neon-blue text-center text-neon-dark"
      >
        <div className="container mx-auto">
          <motion.h2
            id="cta-heading"
            className="text-4xl md:text-5xl font-bebas font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Commission Your Own NeonRitual
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-900 mb-10 leading-relaxed font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Want a custom AI illustration? Let’s create a digital masterpiece together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="btn-primary bg-neon-dark text-neon-pink"
              aria-label="Contact for custom illustration"
            >
              Contact Me <Mail className="inline-block ml-2 w-6 h-6" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}