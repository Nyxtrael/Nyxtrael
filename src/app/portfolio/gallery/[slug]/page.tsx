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
        className={`min-h-screen p-6 transition-colors duration-300 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        }`}
      >
        <h1 className="text-3xl font-bold mb-4">Gallery: {params.slug}</h1>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        {/* Gallery content goes here */}
      </div>
    </>
  );
}
