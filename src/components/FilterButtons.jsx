'use client';

import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function FilterButtons({ categories, filter, setFilter }) {
  const { darkMode } = useTheme();

  return (
    <nav className="flex gap-4 mb-12 flex-wrap" aria-label="Service category filters">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => setFilter(category)}
          className={`px-6 py-2 rounded-full font-inter text-base border ${
            filter === category
              ? 'bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white border-transparent'
              : darkMode
              ? 'bg-gray-800 text-gray-300 border-gray-600'
              : 'bg-gray-100 text-gray-700 border-gray-300'
          } hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-purple-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`Filter by ${category}`}
          aria-current={filter === category ? 'true' : 'false'}
        >
          {category}
        </motion.button>
      ))}
    </nav>
  );
}