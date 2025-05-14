'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import GalleryGrid from '../../../components/GalleryGrid';
import galleryData from '../../../data/gallery.json';
import { useTheme } from '../../../context/ThemeContext';

export default function GalleryPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 5 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  const tags = ['All', ...new Set(galleryData.flatMap((g) => g.tags))];
  const [selected, setSelected] = useState('All');
  const filtered =
    selected === 'All'
      ? galleryData
      : galleryData.filter((g) => g.tags.includes(selected));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Nyxtrael Art Gallery',
    url: 'https://nyxtrael.com/portfolio/gallery',
    description: 'Explore Nyxtrael’s illustration series in Anime, Gothic, and Celestial styles.',
  };

  return (
    <>
      <Head>
        <title>Art Gallery – Nyxtrael</title>
        <meta
          name="description"
          content="Explore Nyxtrael’s illustration series in Anime, Gothic, and Celestial styles."
        />
        <meta name="keywords" content="illustrations, anime, gothic, celestial" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Art Gallery – Nyxtrael" />
        <meta
          property="og:description"
          content="Explore Nyxtrael’s illustration series in Anime, Gothic, and Celestial styles."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://nyxtrael.com/portfolio/gallery" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nyxtrael.com/portfolio/gallery" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <section
        className={`relative flex flex-col items-center justify-center text-center overflow-hidden min-h-[80vh] px-6 md:px-16 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)]'
            : 'bg-gradient-to-b from-gray-200 to-gray-50'
        }`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          poster="/images/stars-fallback.png"
          aria-hidden="true"
        >
          <source
            src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4"
            type="video/mp4"
          />
        </video>

        {stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-400 to-coral-500"
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
          <img
            src="/images/persona.png"
            alt="Nyxtrael avatar"
            className="rounded-full border-4 border-fuchsia-400 w-full h-full"
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
          Art Gallery –{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
            Illustration Series
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
          Explore my collection of illustrations in Anime, Gothic, and Celestial styles.
        </motion.p>

        <motion.a
          href="#main-content"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 z-10 text-fuchsia-400 animate-bounce"
          aria-label="Scroll to main content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </section>

      <main
        id="main-content"
        className={`relative z-10 px-6 py-12 md:px-16 space-y-20 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)] text-white'
            : 'bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900'
        }`}
      >
        <motion.button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-fuchsia-500 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌞' : '🌙'}
        </motion.button>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 p-4 rounded-full bg-white/10 backdrop-blur-md">
            {tags.map((tag) => {
              const isActive = selected === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelected(tag)}
                  aria-pressed={isActive}
                  className={`px-5 py-2 text-sm font-medium rounded-full font-inter transition-transform duration-200 focus:outline-none ${
                    isActive
                      ? 'bg-fuchsia-500 text-white scale-105 shadow-lg'
                      : darkMode
                      ? 'text-neutral-300 hover:bg-white/20'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        <GalleryGrid data={filtered} />

        <section className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-lg p-8 rounded-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2 font-playfair bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-fuchsia-400">
                <circle cx="12" cy="12" r="10" />
              </svg>
              What’s Next?
            </h2>
            <p className={`italic mb-4 font-inter ${darkMode ? 'text-neutral-300' : 'text-gray-700'}`}>
              Upcoming:{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
                “Dreamless Machines”
              </span>{' '}
              – A futuristic series exploring synthetic themes and cybernetic designs.
            </p>
            <form className="flex flex-col sm:flex-row gap-2 justify-center">
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className={`flex-1 px-4 py-2 rounded-lg font-inter ${
                  darkMode
                    ? 'bg-white/10 text-white placeholder-neutral-400 border border-fuchsia-400'
                    : 'bg-gray-100 text-gray-900 placeholder-gray-400 border border-fuchsia-400'
                } focus:ring-2 focus:ring-fuchsia-400 focus:outline-none`}
              />
              <motion.button
                className="px-6 py-2 bg-fuchsia-500 hover:bg-fuchsia-400 text-white rounded-lg font-inter transition transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </form>
          </div>
        </section>

        <footer className="text-center py-8 text-neutral-400 space-x-4">
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="mailto:nyxtrael@example.com"
              aria-label="Email Nyxtrael"
              className="p-2 rounded-full hover:scale-110 transition-transform"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 ${darkMode ? 'text-white hover:text-fuchsia-400' : 'text-gray-900 hover:text-fuchsia-400'}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/nyxtrael"
              target="_blank"
              rel="noreferrer"
              aria-label="Nyxtrael on Instagram"
              className="p-2 rounded-full hover:scale-110 transition-transform"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 ${darkMode ? 'text-white hover:text-fuchsia-400' : 'text-gray-900 hover:text-fuchsia-400'}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            <a
              href="https://x.com/nyxtrael"
              target="_blank"
              rel="noreferrer"
              aria-label="Nyxtrael on X"
              className="p-2 rounded-full hover:scale-110 transition-transform"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 ${darkMode ? 'text-white hover:text-fuchsia-400' : 'text-gray-900 hover:text-fuchsia-400'}`}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z" />
              </svg>
            </a>
          </div>
          <p className={darkMode ? 'text-neutral-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} Nyxtrael. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}