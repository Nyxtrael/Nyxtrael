'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GalleryGrid from '../../components/GalleryGrid';
import galleryData from '../../data/gallery.json';

export default function PortfolioPage() {
  // ⭐ Stars background
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

  // 🏷️ Tags filter (real tags from data)
  const tags = ['All', ...new Set(galleryData.flatMap((g) => g.tags))];
  const [selected, setSelected] = useState('All');
  const filtered =
    selected === 'All'
      ? galleryData
      : galleryData.filter((g) => g.tags.includes(selected));

  return (
    <>
      <Head>
        <title>Portfolio – Illustration Series by Nyxtrael</title>
        <meta
          name="description"
          content="Explore Nyxtrael’s illustration series in Anime, Gothic, and Celestial styles."
        />
        <link rel="canonical" href="https://nyxtrael.com/portfolio" />
      </Head>

      {/* ===== HERO ===== */}
      <section className="relative flex flex-col items-center justify-center text-center overflow-hidden bg-black min-h-[80vh] px-6 md:px-16">
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
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
            style={{ top: s.top, left: s.left }}
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
            className="rounded-full border-4 border-pink-400 w-full h-full"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-bold text-5xl md:text-6xl mb-2 text-white"
        >
          Portfolio –{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Illustration Series
          </span>{' '}
          by Nyxtrael
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-lg text-neutral-400 max-w-2xl"
        >
          Explore my collection of illustrations in Anime, Gothic, and Celestial styles.
        </motion.p>

        <motion.a
          href="#main-content"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 z-10 text-pink-400 animate-bounce"
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

      {/* ===== MAIN CONTENT ===== */}
      <main
        id="main-content"
        className="relative z-10 bg-black text-white px-6 py-12 md:px-16 space-y-20"
      >
        {/* — Tags Filter — */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-3 p-4 rounded-full bg-white/5 backdrop-blur-md">
            {tags.map((tag) => {
              const isActive = selected === tag;
              return (
                <button
                  key={tag}
                  onClick={() => setSelected(tag)}
                  aria-pressed={isActive}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-transform duration-200 focus:outline-none ${
                    isActive
                      ? 'bg-pink-600 text-white scale-105 shadow-lg'
                      : 'text-neutral-300 hover:bg-white/20'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>

        {/* — Gallery — */}
        <GalleryGrid data={filtered} />

        {/* — What’s Next — */}
        <section className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-lg p-8 rounded-lg max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2 text-white">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-purple-400">
                <circle cx="12" cy="12" r="10" />
              </svg>
              What’s Next?
            </h2>
            <p className="italic text-neutral-300 mb-4">
              Upcoming:{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
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
                className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:ring-2 focus:ring-pink-500"
              />
              <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition transform hover:scale-105">
                Notify Me
              </button>
            </form>
          </div>
        </section>

        {/* — Other Works — */}
        <section className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-lg p-8 rounded-lg max-w-md mx-auto space-y-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2 text-white">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current text-pink-400">
                <polygon points="12,2 2,22 22,22 12,2" />
              </svg>
              Other Works
            </h2>
            <div className="flex flex-col gap-4">
              <Link
                href="/photographer"
                className="group block p-4 rounded-lg bg-black/50 hover:bg-black/40 transition"
              >
                <div className="flex items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-shrink-0 fill-current text-neutral-300 group-hover:text-pink-400"
                  >
                    <path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="text-white group-hover:text-pink-400">
                    Designed a responsive portfolio website for a photographer
                  </span>
                </div>
              </Link>
              <Link
                href="/case-studies/promo-video"
                className="group block p-4 rounded-lg bg-black/50 hover:bg-black/40 transition"
              >
                <div className="flex items-center gap-4">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-6 h-6 flex-shrink-0 fill-current text-neutral-300 group-hover:text-pink-400"
                  >
                    <path d="M5 3v18l15-9L5 3z" />
                  </svg>
                  <span className="text-white group-hover:text-pink-400">
                    Edited a promotional video for a small business
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
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
                  className="w-6 h-6 text-white hover:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z"/>
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
                  className="w-6 h-6 text-white hover:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"/>
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
                  className="w-6 h-6 text-white hover:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z"/>
                </svg>
              </a>
            </div>
        </footer>
      </main>
    </>
  );
}