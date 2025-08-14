'use client';

import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-12 text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Let’s Capture Your Story
      </motion.h2>
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded text-text-base bg-neutral-mid ring-1 ring-white/10 focus:ring-2 focus:ring-accent"
            disabled
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded text-text-base bg-neutral-mid ring-1 ring-white/10 focus:ring-2 focus:ring-accent"
            disabled
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 rounded text-text-base bg-neutral-mid ring-1 ring-white/10 focus:ring-2 focus:ring-accent h-32"
            disabled
          />
          <motion.button
            className="w-full px-6 py-3 bg-gradient-cta text-neutral-900 font-semibold rounded-lg shadow-[0_8px_24px_rgba(56,189,248,0.25)] hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled
          >
            Begin the Journey
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center space-x-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="https://instagram.com" aria-label="Instagram" className="text-accent hover:opacity-90 transition">
          <Instagram className="h-6 w-6" />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="text-accent hover:opacity-90 transition">
          <Twitter className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="text-accent hover:opacity-90 transition">
          <Linkedin className="h-6 w-6" />
        </a>
      </motion.div>
      <motion.div
        className="mt-4 text-text-muted text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p>Or reach out directly: ethan.carter@email.com | +1 (555) 123-4567</p>
      </motion.div>
    </section>
  );
}