'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import PortfolioHero from '../../components/PortfolioHero';
import PortfolioCarousel from '../../components/PortfolioCarousel';
import PortfolioGrid from '../../components/PortfolioGrid';
import PortfolioTestimonial from '../../components/PortfolioTestimonial';
import PortfolioProcess from '../../components/PortfolioProcess';
import { sections, featuredProjects } from '../../data/portfolio';

export default function PortfolioPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [stars, setStars] = useState([]);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Limit stars on mobile
    const starCount = window.innerWidth < 768 ? 6 : 12;
    setStars(
      Array.from({ length: starCount }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );

    // Handle adaptive background
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    setIsMobile(window.innerWidth < 768);
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: 'Nyxtrael Portfolio',
    url: 'https://nyxtrael.com/portfolio',
    description: 'Explore Nyxtrael’s diverse portfolio, including illustrations, web design, and more.',
  };

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
        className={`relative overflow-hidden min-h-screen ${
          darkMode
            ? 'bg-gradient-to-br from-[#1a0e2a] to-[#111827]'
            : 'bg-gradient-to-br from-gray-200 to-gray-50'
        }`}
      >
        {/* Adaptive Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/stars-fallback.png"
          preload="metadata"
          style={{
            display: reduceMotion || isMobile ? 'none' : 'block',
            opacity: 0.1,
          }}
          aria-hidden="true"
        >
          <source src="/videos/portfolio-bg.webm" type="video/webm" />
        </video>

        <PortfolioHero stars={stars} />
        <PortfolioCarousel featuredProjects={featuredProjects} />

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
            ? 'bg-gradient-to-br from-[#1a0e2a] to-[#111827] text-white'
            : 'bg-gradient-to-br from-gray-200 to-gray-50 text-gray-900'
        }`}
      >
   

        

        <PortfolioGrid sections={sections} />
        <PortfolioTestimonial />
        <PortfolioProcess />
      </main>
    </>
  );
}