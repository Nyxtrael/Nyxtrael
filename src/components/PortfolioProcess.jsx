'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function PortfolioProcess() {
  const { darkMode } = useTheme();

  return (
    <section className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent">
        Creative Process
      </h2>
      <ul className={`list-disc list-inside space-y-6 font-inter ${darkMode ? 'text-neutral-300' : 'text-gray-700'} text-lg md:text-xl`}>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          We discuss your vision and project needs.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I create visual concepts and mockups for approval.
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I deliver final files and support integration.
        </motion.li>
      </ul>
    </section>
  );
}