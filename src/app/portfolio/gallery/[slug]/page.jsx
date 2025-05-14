'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function PortfolioPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [stars, setStars] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [useImageBackground, setUseImageBackground] = useState(false);

  useEffect(() => {
    setStars(
      Array.from({ length: 12 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  const sections = [
    { 
      title: 'Art Gallery', 
      href: '/portfolio/gallery', 
      desc: 'Explore my illustration series in Anime, Gothic, and Celestial styles.', 
      image: '/images/art-gallery/preview.jpg' 
    },
    { 
      title: 'Shop', 
      href: '/portfolio/shop', 
      desc: 'Purchase digital assets, templates, and prints.', 
      image: '/images/shop/preview.jpg' 
    },
    { 
      title: 'Photographer Portfolio', 
      href: '/portfolio/photographer', 
      desc: 'A responsive website designed for a photographer.', 
      image: '/images/photographer/preview.jpg' 
    },
    { 
      title: 'Agency Project', 
      href: '/portfolio/agency', 
      desc: 'Branding and web design for a creative agency.', 
      image: '/images/agency/preview.jpg' 
    },
    { 
      title: 'Blog', 
      href: '/portfolio/blog', 
      desc: 'Insights, tutorials, and project updates.', 
      image: '/images/blog/preview.jpg' 
    },
    { 
      title: 'Case Studies', 
      href: '/portfolio/case-studies/promo-video', 
      desc: 'Detailed case studies of selected projects.', 
      image: '/images/case-studies/preview.jpg' 
    },
  ];

  const featuredProjects = [
    {
      title: 'Sunroom Diaries',
      desc: 'A tranquil series inspired by nature and cozy mornings.',
      image: '/images/sunroom-diaries/cover.png',
    },
    {
      title: 'Red Requiem',
      desc: 'A gothic sci-fi series with cathedral silhouettes and neon.',
      image: '/images/red-requiem/cover.png',
    },
    {
      title: 'Astral Divines',
      desc: 'Celestial-themed illustrations blending mythology and cosmos.',
      image: '/images/astral-divines/cover.png',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Nyxtrael Portfolio',
    url: 'https://nyxtrael.com/portfolio',
    description: 'Explore Nyxtrael’s diverse portfolio, including illustrations, web design, and more.',
  };

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <>
      <Head>
        <title>Portfolio – Nyxtrael</title>
        <meta
          name="description"
          content="Explore Nyxtrael’s diverse portfolio, including illustrations, web design, and more."
        />
        <meta name="keywords" content="portfolio, illustrations, web design, photography, agency" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Portfolio – Nyxtrael" />
        <meta
          property="og:description"
          content="Explore Nyxtrael’s diverse portfolio, including illustrations, web design, and more."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://nyxtrael.com/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nyxtrael.com/portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      <section
        className={`relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen px-6 md:px-16 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)]'
            : 'bg-gradient-to-b from-gray-200 to-gray-50'
        }`}
      >
        {useImageBackground ? (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/images/portfolio-bg.jpg')" }}
            aria-hidden="true"
          />
        ) : (
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
        )}

        {stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-teal-400 to-fuchsia-400"
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
          Portfolio by{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
            Nyxtrael
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
          Discover my creative projects, from illustrations to web design.
        </motion.p>

        {/* Hero Carousel */}
        <div className="relative w-full max-w-5xl mt-12 overflow-hidden rounded-2xl shadow-2xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden"
            >
              <img
                src={featuredProjects[currentSlide].image}
                alt={featuredProjects[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center text-white p-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-playfair">{featuredProjects[currentSlide].title}</h2>
                  <p className="text-sm md:text-base font-inter">{featuredProjects[currentSlide].desc}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
            {featuredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-fuchsia-400' : 'bg-white bg-opacity-60'} hover:bg-fuchsia-300 transition-colors`}
              />
            ))}
          </div>
        </div>

        <motion.a
          href="#main-content"
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10 text-fuchsia-400"
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
        className={`relative z-10 px-6 py-16 md:px-16 space-y-20 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)] text-white'
            : 'bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900'
        }`}
      >
        <motion.button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white shadow-md hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌞' : '🌙'}
        </motion.button>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 font-playfair bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent">
            Explore My Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:bg-opacity-60">
                  <h3 className="text-xl md:text-2xl font-bold font-playfair text-white mb-2">
                    {section.title}
                  </h3>
                  <p className="text-sm md:text-base font-inter text-neutral-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {section.desc}
                  </p>
                  <Link
                    href={section.href}
                    className="inline-block px-6 py-2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-lg font-inter shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    View Details →
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 bg-opacity-20 rounded-bl-full transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent">
            Creative Process
          </h2>
          <ul className={`list-disc list-inside space-y-6 font-inter ${darkMode ? 'text-neutral-300' : 'text-gray-700'} text-lg md:text-xl`}>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              We discuss your vision and project needs.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I create visual concepts and mockups for approval.
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              I deliver final files and support integration.
            </motion.li>
          </ul>
        </section>
      </main>
    </>
  );
}