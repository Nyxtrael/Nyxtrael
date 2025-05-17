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
  const [flares, setFlares] = useState([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 5 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );
    setFlares(
      Array.from({ length: 5 }, (_, i) => ({
        id: i + 5,
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
            ? 'bg-[linear-gradient(to-bottom,#2F2A28,#1A1A18)]'
            : 'bg-[linear-gradient(to-bottom,#F5EDE4,#D9C2A8)]'
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

        {stars.map((s) => (
          <motion.div
            key={s.id}
            className="absolute rounded-full bg-gradient-to-r from-teal-400 to-coral-500"
            style={{ top: s.top, left: s.left, width: 2, height: 2 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
          />
        ))}
        {flares.map((f) => (
          <motion.div
            key={f.id}
            className="absolute bg-[#8A4A21]/30 blur-sm"
            style={{ top: f.top, left: f.left, width: 4, height: 4 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: f.delay }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 3, -3, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
          className="relative z-10 mb-6 w-28 h-28"
        >
          <img
            src="/images/persona.png"
            alt="Nyxtrael avatar"
            className="rounded-full border-4 border-[#8A4A21] w-full h-full"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative z-10 font-bold text-5xl md:text-6xl mb-2 font-playfair ${
            darkMode ? 'text-[#F5EDE4]' : 'text-[#2F2A28]'
          }`}
        >
          Art Gallery –{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-[#8A4A21]">
            Illustration Series
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative z-10 text-lg font-lora max-w-2xl ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Explore my collection of illustrations in Anime, Gothic, and Celestial styles.
        </motion.p>

        <motion.a
          href="#main-content"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 z-10 text-[#8A4A21] animate-bounce"
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
        className={`relative z-10 px-6 py-16 md:px-16 space-y-24 ${
          darkMode
            ? 'bg-[linear-gradient(to-bottom,#2F2A28,#1A1A18)] text-[#F5EDE4]'
            : 'bg-[linear-gradient(to-bottom,#F5EDE4,#D9C2A8)] text-[#2F2A28]'
        }`}
      >
        <motion.button
          onClick={toggleDarkMode}
          className="fixed top-6 right-6 p-3 rounded-full bg-[#8A4A21] text-white shadow-md hover:shadow-lg transition-shadow duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌞' : '🌙'}
        </motion.button>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 p-4 rounded-2xl bg-[#F5EDE4]/20 backdrop-blur-md shadow-lg">
            {tags.map((tag) => {
              const isActive = selected === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelected(tag)}
                  aria-pressed={isActive}
                  className={`px-6 py-2 text-sm font-medium rounded-full font-lora transition-transform duration-200 focus:outline-none ${
                    isActive
                      ? 'bg-[#8A4A21] text-[#F5EDE4] scale-105 shadow-md'
                      : darkMode
                      ? 'text-gray-300 hover:bg-[#F5EDE4]/30'
                      : 'text-[#2F2A28] hover:bg-[#D9C2A8]/50'
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
          <div className="inline-block bg-[#F5EDE4]/20 backdrop-blur-lg p-10 rounded-2xl max-w-2xl mx-auto shadow-xl">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3 font-playfair bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-[#8A4A21]">
              <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current text-teal-400">
                <circle cx="12" cy="12" r="10" />
              </svg>
              What’s Next?
            </h2>
            <p className={`italic mb-6 text-lg font-lora ${
              darkMode ? 'text-gray-300' : 'text-[#2F2A28]'
            }`}>
              Upcoming:{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-[#8A4A21]">
                “Dreamless Machines”
              </span>{' '}
              – A futuristic series exploring synthetic themes and cybernetic designs.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className={`flex-1 px-6 py-3 rounded-xl font-lora ${
                  darkMode
                    ? 'bg-[#1A1A18]/50 text-[#F5EDE4] placeholder-gray-400 border border-[#8A4A21]'
                    : 'bg-[#F5EDE4]/50 text-[#2F2A28] placeholder-gray-600 border border-[#8A4A21]'
                } focus:ring-2 focus:ring-[#8A4A21] focus:outline-none`}
              />
              <motion.button
                className="px-8 py-3 bg-[#8A4A21] hover:bg-[#6D3A1A] text-[#F5EDE4] rounded-xl font-lora transition transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </form>
          </div>
        </section>

        <footer className="text-center py-10 text-gray-500">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="mailto:nyxtrael@example.com"
              aria-label="Email Nyxtrael"
              className="p-3 rounded-full hover:bg-[#F5EDE4]/20 hover:text-[#8A4A21] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/nyxtrael"
              target="_blank"
              rel="noreferrer"
              aria-label="Nyxtrael on Instagram"
              className="p-3 rounded-full hover:bg-[#F5EDE4]/20 hover:text-[#8A4A21] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            <a
              href="https://x.com/nyxtrael"
              target="_blank"
              rel="noreferrer"
              aria-label="Nyxtrael on X"
              className="p-3 rounded-full hover:bg-[#F5EDE4]/20 hover:text-[#8A4A21] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z" />
              </svg>
            </a>
          </div>
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © {new Date().getFullYear()} Nyxtrael. All rights reserved.
          </p>
        </footer>
      </main>
    </>
  );
}