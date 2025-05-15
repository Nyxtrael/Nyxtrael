'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';
import NewsletterFooter from '../components/NewsletterFooter';

// Motion-wrapped Link
const MotionLink = motion(Link);

export default function Home() {
  const [stars, setStars] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

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

  // JSON-LD for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nyxtrael',
    jobTitle: 'Senior Web Designer',
    url: 'https://nyxtrael.com',
    sameAs: ['https://instagram.com/nyxtrael', 'https://x.com/nyxtrael'],
    description: 'Nyxtrael creates responsive, animated web experiences with Next.js, Tailwind, and Framer Motion.',
  };

  return (
    <>
      <Head>
        <title>Nyxtrael – Senior Web Design & Motion</title>
        <meta
          name="description"
          content="Nyxtrael creates responsive, animated web experiences with Next.js, Tailwind, and Framer Motion."
        />
        <meta name="keywords" content="web design, web development, freelance developer, animations, illustrations" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Nyxtrael – Senior Web Design & Motion" />
        <meta
          property="og:description"
          content="Responsive, animated web experiences with Next.js, Tailwind, and Framer Motion."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://nyxtrael.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nyxtrael.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* Preloader */}
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 bg-[#1a0e2a] flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            className="text-6xl font-bold bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1 }}
          >
            N
          </motion.div>
        </motion.div>
      )}

      {/* Main Content */}
      {isLoaded && (
        <motion.main
          id="main-content"
          className={`relative min-h-screen overflow-x-hidden px-6 py-12 md:px-16 ${
            darkMode
              ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)] text-white'
              : 'bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900'
          }`}
          style={{ y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Dark Mode Toggle */}
          <motion.button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 p-2 rounded-full bg-fuchsia-500 text-white shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '🌞' : '🌙'}
          </motion.button>

          {/* Stars in Background */}
          <div className="absolute inset-0 z-0">
            {stars.map((s, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-gradient-to-r from-teal-400 to-coral-500"
                style={{ top: s.top, left: s.left, width: s.size, height: s.size }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
              />
            ))}
          </div>

          {/* Hero Section */}
          <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[80vh] mb-20">
  <motion.div
    className="max-w-4xl px-6"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
  >
    <motion.img
      src="/images/Persona.png"
      alt="Nyxtrael – Senior Web Designer and Developer"
      className="rounded-full border-4 border-fuchsia-400 mx-auto w-[120px] h-[120px] mb-6"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    />
    <motion.h1
      className="text-4xl md:text-6xl font-bold font-playfair mb-4 bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      Hello, I’m Nyxtrael
    </motion.h1>
    <motion.p
      className={`mb-2 text-lg md:text-xl font-inter ${darkMode ? 'text-neutral-300' : 'text-gray-700'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      Freelance Web Designer & Developer offering custom websites, animations, and illustrations.
    </motion.p>
    <motion.p
      className={`mb-6 text-lg md:text-xl font-inter ${darkMode ? 'text-neutral-300' : 'text-gray-700'}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.9 }}
    >
      I craft spaces that breathe your brand with passion, style, and animation magic.
    </motion.p>
    <MotionLink
      href="/contact"
      className="inline-block bg-fuchsia-500 text-white px-6 py-3 rounded-full font-semibold font-inter shadow hover:shadow-lg transform transition-transform hover:scale-105"
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
      aria-label="Get in touch with Nyxtrael"
    >
      Contact Me
    </MotionLink>
  </motion.div>
</section>

          {/* Recent Projects */}
          <section className="relative z-10 text-center max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold font-playfair mb-6 bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
              Recent Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'E-Commerce Demo Shop', desc: 'Custom Next.js store with cart functionality, optimized for SEO.', href: '/portfolio/ecommerce' },
                { title: 'Photographer Portfolio', desc: 'A responsive website designed for a photographer.', href: '/portfolio/photographer' },
              ].map((proj, idx) => (
                <motion.div
                  key={proj.title}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transform hover:scale-103 transition-transform"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-white">{proj.title}</h3>
                  <p className="text-neutral-400 mb-4">{proj.desc}</p>
                  <MotionLink
                    href={proj.href}
                    className="text-fuchsia-400 font-medium hover:underline"
                    whileHover={{ scale: 1.05 }}
                  >
                    View Project →
                  </MotionLink>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="relative z-10 text-center max-w-5xl mx-auto mb-20">
            <h2 className="text-3xl font-bold font-playfair mb-6 bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
              What Clients Say
            </h2>
            <p className="text-neutral-400">Testimonials coming soon.</p>
          </section>

          {/* CTA */}
          <section className="relative z-10 text-center max-w-xl mx-auto mb-20">
            <h2 className="text-3xl font-bold font-playfair mb-4 bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
              Ready for a Stand-Out Website?
            </h2>
            <p className={`font-inter mb-6 ${darkMode ? 'text-neutral-300' : 'text-gray-700'}`}>Let's create something magical together!</p>
            <MotionLink
              href="/contact"
              className="inline-block bg-fuchsia-500 text-white px-6 py-3 rounded-full font-semibold font-inter shadow hover:shadow-lg transform transition-transform hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </MotionLink>
          </section>

          {/* Newsletter Footer */}
          <NewsletterFooter />
        </motion.main>
      )}
    </>
  );
}
