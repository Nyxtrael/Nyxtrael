'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// Motion-wrapped Link
const MotionLink = motion(Link);

export default function Home() {
  const [stars, setStars] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [toastVisible, setToastVisible] = useState(false);

  // Stars background
  useEffect(() => {
    const arr = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      size: Math.random() * 2 + 1,
    }));
    setStars(arr);
  }, []);

  // Preloader
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Parallax effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Newsletter form submission
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  // JSON-LD for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nyxtrael",
    "jobTitle": "Senior Web Designer",
    "url": "https://nyxtrael.com",
    "sameAs": [
      "https://instagram.com/nyxtrael",
      "https://x.com/nyxtrael"
    ],
    "description": "Nyxtrael creates responsive, animated web experiences with Next.js, Tailwind, and Framer Motion."
  };

  return (
    <>
      <Head>
        <title>Nyxtrael – Senior Web Design & Motion</title>
        <meta name="description" content="Nyxtrael creates responsive, animated web experiences with Next.js, Tailwind, and Framer Motion." />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Nyxtrael – Senior Web Design & Motion" />
        <meta property="og:description" content="Responsive, animated web experiences with Next.js, Tailwind, and Framer Motion." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://nyxtrael.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nyxtrael.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script defer data-domain="nyxtrael.com" src="https://plausible.io/js/plausible.js" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `
        }} />
        <script async src="https://cdn.jsdelivr.net/npm/@hotjar/1.0.0/hotjar.min.js" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};
            hj('trigger', 'homepage_heatmap');
          `
        }} />
      </Head>

      {!isLoaded && (
        <motion.div
          className="fixed inset-0 bg-[#1a0e2a] flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1 }}
          >
            N
          </motion.div>
        </motion.div>
      )}

      {isLoaded && (
        <main className={`relative min-h-screen overflow-hidden text-white px-6 py-12 md:px-16 ${darkMode ? 'bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)]' : 'bg-gradient-to-b from-gray-100 to-white text-black'}`}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-600 text-white p-2 rounded"
          >
            Skip to content
          </a>

          {/* Dark mode toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-[#3b2c5e] hover:bg-[#5d3aa6] text-white backdrop-blur-md shadow-lg transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '🌞' : '🌙'}
          </motion.button>

          {/* Stars (only in dark mode) */}
          {darkMode && (
            <div className="absolute inset-0 z-0">
              {stars.map((s, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
                  style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
                />
              ))}
            </div>
          )}

          {/* HERO + USP + Avatar + Mini Bio */}
          <section id="main-content" className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh] mb-20">
            <motion.div
              className="relative z-10 max-w-4xl px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/images/Persona.png"
                  alt="Nyxtrael – Senior Web Designer"
                  width={120}
                  height={120}
                  className="rounded-full border-4 border-pink-400 mx-auto"
                  priority
                />
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Hello, I’m Nyxtrael
              </h1>
              <p className="mb-6 text-lg md:text-xl text-neutral-300 font-inter">
                I don't just build websites. I craft spaces that breathe your brand with passion, style, and animation magic.
              </p>
              <MotionLink
                href="/contact"
                className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold font-inter shadow hover:bg-pink-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get in touch with Nyxtrael"
              >
                Contact Me
              </MotionLink>
            </motion.div>
          </section>

          {/* CTA */}
          <section className="relative z-10 text-center max-w-xl mx-auto mb-20">
            <h2 className="text-3xl font-bold font-playfair mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ready for a Stand-Out Website?
            </h2>
            <p className="text-neutral-300 font-inter mb-6">Let's create something magical together!</p>
            <MotionLink
              href="/contact"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold font-inter shadow hover:bg-pink-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </MotionLink>
          </section>

          {/* FOOTER with Newsletter */}
          <footer className="relative z-10 text-center text-neutral-400 pb-10">
            <form onSubmit={handleNewsletterSubmit} className="mb-6 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">Subscribe to newsletter</label>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white placeholder-neutral-400 border border-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                  aria-required="true"
                />
                <motion.button
                  type="submit"
                  className="bg-pink-600 text-white px-6 py-2 rounded-full font-semibold font-inter"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>

            <AnimatePresence>
              {toastVisible && (
                <motion.div
                  className="fixed bottom-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  Thank you for subscribing!
                </motion.div>
              )}
            </AnimatePresence>

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
            <p>&copy; {new Date().getFullYear()} Nyxtrael. All rights reserved.</p>
          </footer>
        </main>
      )}
    </>
  );
}