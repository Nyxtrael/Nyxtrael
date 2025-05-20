'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

export default function PortfolioGrid({ sections }) {
  const { darkMode } = useTheme();
  const [visibleSections, setVisibleSections] = useState(3);

  const loadMore = () => {
    setVisibleSections((prev) => prev + 3);
  };

  return (
    <section className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 font-playfair bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent">
        All Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sections.slice(0, visibleSections).map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            className="relative bg-gray-800 bg-opacity-70 p-6 rounded-2xl overflow-hidden shadow-lg group"
          >
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
            <Image
              src={section.image}
              alt={section.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded-t-2xl mb-4"
              loading="lazy"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-3 font-playfair bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent z-10 relative">
              {section.title}
            </h3>
            <p className={`text-sm md:text-base mb-4 font-inter ${darkMode ? 'text-neutral-400' : 'text-gray-600'} z-10 relative`}>
              {section.desc}
            </p>
            <Link
              href={section.href}
              className="inline-block px-6 py-2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-lg font-inter shadow-md hover:shadow-xl transition-all duration-300 z-10 relative"
            >
              View Details →
            </Link>
          </motion.div>
        ))}
      </div>
      {visibleSections < sections.length && (
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={loadMore}
            className="bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Load more projects"
          >
            Load More
          </button>
        </motion.div>
      )}
    </section>
  );
}