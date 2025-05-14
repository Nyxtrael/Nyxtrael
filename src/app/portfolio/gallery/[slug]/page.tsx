'use client';

import { useTheme } from '@/context/ThemeContext';
import Head from 'next/head';

export default function GalleryPage({ params }: { params: { slug: string } }) {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <Head>
        <title>Gallery - {params.slug}</title>
        <meta name="description" content={`Gallery page for ${params.slug}`} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
        <h1 className="text-3xl font-bold">Gallery: {params.slug}</h1>
        <button
          onClick={toggleDarkMode}
          className="mt-4 p-2 bg-teal-500 text-white rounded hover:bg-teal-600"
        >
          Toggle Dark Mode
        </button>
      </div>
    </>
  );
}