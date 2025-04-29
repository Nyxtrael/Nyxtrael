'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GalleryGrid from '../../components/GalleryGrid';
import gallery from '../../data/gallery.json';
import Link from 'next/link';

export default function PortfolioPage() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] text-white overflow-hidden relative px-6 py-24 md:px-16">

      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        poster="/images/stars-fallback.png"
        aria-hidden="true"
      >
        <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
      </video>

      {/* Sparkling stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
            style={{
              width: '8px',
              height: '8px',
              top: star.top,
              left: star.left,
            }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Skip link */}
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-4 left-4 z-50 bg-black text-white px-4 py-2 rounded">
          Skip to content
        </a>

        {/* Header */}
        <div id="main-content" tabIndex={-1} className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Portfolio – Illustration Series by Nyxtrael
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto">
            Explore my collection of illustrations in Anime, Gothic, and Celestial styles.
          </p>
        </div>

        {/* Gallery */}
        <GalleryGrid data={gallery} />

        {/* What's Next */}
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF69B4" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="10" fill="url(#gradient)" />
            </svg>
            What's Next?
          </h2>
          <p className="italic text-neutral-400 mb-6">
            Upcoming: <span className="text-fuchsia-400">“Dreamless Machines”</span> – A futuristic series exploring synthetic themes and cybernetic designs.
          </p>
          <form className="flex flex-col sm:flex-row justify-center gap-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-pink-600 hover:bg-pink-700 text-white rounded-lg transition"
            >
              Notify Me
            </button>
          </form>
        </div>

        {/* Other Works */}
        <div className="mt-32 text-center border-t border-[#3A3A4E] pt-10">
          <h2 className="text-2xl font-bold mb-4 flex justify-center items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <polygon points="12,2 2,22 22,22 12,2" fill="url(#gradient)" />
            </svg>
            Other Works
          </h2>
          <ul className="text-neutral-400 text-sm space-y-2">
            <li>– <Link href="#" className="underline hover:text-pink-400">Designed a responsive portfolio website for a photographer.</Link></li>
            <li>– <Link href="#" className="underline hover:text-pink-400">Edited a promotional video for a small business.</Link></li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs text-neutral-400">
          <div className="flex justify-center space-x-6 mb-4">
            <Link href="mailto:nyxtrael@example.com" className="hover:text-pink-400">Email</Link>
            <Link href="https://instagram.com/nyxtrael" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">Instagram</Link>
            <Link href="https://twitter.com/nyxtrael" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">Twitter</Link>
          </div>
          <div className="space-x-2">
            <Link href="/faq" className="hover:text-pink-400">FAQ</Link>|
            <Link href="/terms" className="hover:text-pink-400">Terms</Link>|
            <Link href="/refund" className="hover:text-pink-400">Refund</Link>|
            <Link href="/privacy" className="hover:text-pink-400">Privacy</Link>|
            <Link href="/contact" className="hover:text-pink-400">Contact</Link>
          </div>
          <p className="mt-4">© 2025 Nyxtrael</p>
        </footer>
      </div>
    </main>
  );
}
