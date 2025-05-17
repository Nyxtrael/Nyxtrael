// src/app/portfolio/gallery/[slug]/page.jsx
'use client';

import { useTheme } from '@/context/ThemeContext';
import Head from 'next/head';

export default function GalleryPage({ params }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <Head>
        <title>Gallery – {params.slug}</title>
        <meta name="description" content={`Gallery page for ${params.slug}`} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div
        className={`min-h-screen p-8 transition-colors duration-300 ${
          darkMode
            ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white'
            : 'bg-gradient-to-br from-white to-gray-100 text-gray-900'
        }`}
      >
        <header className="max-w-4xl mx-auto">
          <motion.button
            onClick={toggleDarkMode}
            className="fixed top-6 right-6 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '🌞' : '🌙'}
          </motion.button>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair text-gray-200">
            Gallery: <span className="text-teal-400">{params.slug}</span>
          </h1>
          <p className="text-lg font-lora text-gray-400 mb-10">
            Explore the curated collection for {params.slug}.
          </p>
        </header>
        <main className="max-w-6xl mx-auto">
          {/* Gallery content goes here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for gallery items */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 animate-pulse" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}