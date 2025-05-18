'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';
import { FaArrowUp } from 'react-icons/fa';
import AboutSection from '../../components/AboutSection';

// Motion-wrapped Link
const MotionLink = motion(Link);

export default function About() {
  const [stars, setStars] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    const arr = Array.from({ length: 100 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 3,
      size: Math.random() * 3 + 1,
    }));
    setStars(arr);
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) toggleDarkMode(JSON.parse(savedMode));
    setTimeout(() => setIsLoaded(true), 1500); // Simulate loading
  }, [toggleDarkMode]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nyxtrael',
    jobTitle: 'Senior Web Designer',
    url: 'https://nyxtrael.com',
    sameAs: ['https://instagram.com/nyxtrael', 'https://x.com/nyxtrael'],
    description: 'Nyxtrael creates responsive, animated web experiences using Next.js, Tailwind, and Framer Motion.',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Nyxtrael – About Me</title>
        <meta
          name="description"
          content="Learn more about Nyxtrael, a senior web designer specializing in Next.js, Tailwind, and Framer Motion."
        />
        <meta name="keywords" content="web design, web development, freelance, animations, about" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Nyxtrael – About Me" />
        <meta property="og:description" content="Learn more about Nyxtrael, a senior web designer specializing in Next.js, Tailwind, and Framer Motion." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://nyxtrael.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nyxtrael.com/about" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Background Video */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero-bg.webm" type="video/webm" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 to-[#0F172A]/60" aria-hidden="true"></div>
      </motion.div>

      {/* Stars in Background */}
      <div className="absolute inset-0 z-1">
        {stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-[#A855F7] to-[#D946EF]"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
            animate={{ opacity: [0, 0.7, 0], scale: [1, 1.5, 1], y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: s.delay }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen pt-24 pb-20 px-6 md:px-12">
        <svg className="w-full h-4 text-[#A855F7]/20" preserveAspectRatio="none">
          <path d="M0 0 L200 100 L400 0 Z" fill="currentColor" />
        </svg>
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut", type: "spring", bounce: 0.3 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-playfair mb-4 bg-gradient-to-r from-[#A855F7] to-[#6B21A8] bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            About Nyxtrael
          </motion.h1>
          <motion.p
            className="mb-6 text-xl md:text-2xl font-inter text-[#E5E7EB] drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            Discover my journey as a web designer and developer.
          </motion.p>
          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <MotionLink
              href="/contact"
              className="bg-gradient-to-r from-[#A855F7] to-[#6B21A8] text-white px-8 py-4 rounded-full font-semibold font-inter shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px #A855F7' }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={(e) => {
                const ripple = document.createElement('span');
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.className = 'absolute w-0 h-0 rounded-full bg-white/20 animate-ripple';
                e.currentTarget.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
              }}
              aria-label="Contact Nyxtrael"
            >
              Contact Me
            </MotionLink>
            <MotionLink
              href="/portfolio"
              className="bg-gradient-to-r from-[#A855F7] to-[#6B21A8] text-white px-8 py-4 rounded-full font-semibold font-inter shadow-lg hover:shadow-xl transform transition-all duration-300 relative overflow-hidden"
              whileHover={{ scale: 1.1, rotate: -5, boxShadow: '0 0 20px #6B21A8' }}
              whileTap={{ scale: 0.95 }}
              onMouseDown={(e) => {
                const ripple = document.createElement('span');
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.className = 'absolute w-0 h-0 rounded-full bg-white/20 animate-ripple';
                e.currentTarget.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
              }}
              aria-label="View Portfolio"
            >
              View Portfolio
            </MotionLink>
          </motion.div>
        </motion.div>
        <svg className="w-full h-4 text-[#A855F7]/20 rotate-180" preserveAspectRatio="none">
          <path d="M0 0 L200 100 L400 0 Z" fill="currentColor" />
        </svg>
      </section>

      {/* About Section */}
      {isLoaded ? (
        <AboutSection />
      ) : (
        <section
          className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-[#111827]/50 to-[#0F172A]/30 backdrop-blur-md rounded-3xl my-10"
          id="about-me"
        >
          <svg className="w-full h-4 text-[#A855F7]/20" preserveAspectRatio="none">
            <path d="M0 0 L200 100 L400 0 Z" fill="currentColor" />
          </svg>
          <div className="animate-pulse">
            <div className="h-12 w-48 bg-gray-700/50 rounded mx-auto mb-8" />
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="w-[180px] h-[180px] rounded-full bg-gray-700/50" />
              <div className="space-y-4 w-full md:w-1/2">
                <div className="h-6 bg-gray-700/50 rounded w-3/4 mx-auto" />
                <div className="h-6 bg-gray-700/50 rounded w-1/2 mx-auto" />
                <div className="h-6 bg-gray-700/50 rounded w-2/3 mx-auto" />
              </div>
            </div>
          </div>
          <svg className="w-full h-4 text-[#A855F7]/20 rotate-180" preserveAspectRatio="none">
            <path d="M0 0 L200 100 L400 0 Z" fill="currentColor" />
          </svg>
        </section>
      )}

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-[#A855F7] text-white p-3 rounded-full shadow-lg hover:bg-[#6B21A8] transition-colors duration-300 z-50"
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        aria-label="Back to top"
        tabIndex={0}
        style={{ outline: '2px solid #D946EF', outlineOffset: '2px' }}
        onFocus={(e) => (e.currentTarget.style.outline = '2px solid #D946EF')}
      >
        <FaArrowUp />
      </motion.button>
    </>
  );
}