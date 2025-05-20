'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';

export default function PortfolioHero({ stars }) {
  const { darkMode } = useTheme();

  return (
    <div className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-16">
      {/* Star Animation */}
      {stars.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-teal-400 to-fuchsia-400"
          style={{ top: s.top, left: s.left, width: 2, height: 2 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1, rotate: [0, 3, -3, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
        className="relative z-10 mb-6 w-24 h-24"
      >
        <Image
          src="/images/persona.png"
          alt="Nyxtrael avatar"
          width={96}
          height={96}
          className="rounded-full border-4 border-fuchsia-400 w-full h-full"
          loading="lazy"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`relative z-10 font-bold text-5xl md:text-6xl mb-2 font-playfair ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}
      >
        Portfolio by{' '}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
          Nyxtrael
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`relative z-10 text-lg font-inter max-w-2xl ${
          darkMode ? 'text-neutral-300' : 'text-gray-700'
        }`}
      >
        Discover my creative projects, from illustrations to web design.
      </motion.p>
    </div>
  );
}