// src/app/portfolio/shop/page.jsx
'use client';

import { useTheme } from '@/context/ThemeContext';
import type { Metadata } from 'next';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  return {
    title: `Gallery – ${params.slug}`,
    description: `Gallery page for ${params.slug}`,
    robots: 'noindex, follow',
    openGraph: {
      title: `Gallery – ${params.slug}`,
      description: `Gallery page for ${params.slug}`,
      url: `https://nyxtrael.netlify.app/portfolio/gallery/${params.slug}`,
    },
  };
}

export default function GalleryPage({ params }: { params: { slug: string } }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
    }`}>
      <h1 className="text-3xl font-bold mb-4">Gallery: {params.slug}</h1>
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600"
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
      {/* Gallery content goes here */}
    </div>
  );
}
