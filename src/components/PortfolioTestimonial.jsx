'use client';

import { motion } from 'framer-motion';

export default function PortfolioTestimonial() {
  return (
    <section className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800 bg-opacity-70 p-6 rounded-2xl shadow-lg"
      >
        <p className="text-lg md:text-xl italic text-neutral-300">
          "Nyxtrael’s portfolio showcases incredible creativity and skill!"
        </p>
        <p className="mt-4 font-semibold text-fuchsia-400">- Jane Doe, Client</p>
      </motion.div>
    </section>
  );
}