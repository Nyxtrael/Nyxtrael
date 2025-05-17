'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function About() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [stars, setStars] = useState([]);
  const [useVideoBackground, setUseVideoBackground] = useState(true);

  // Check for prefers-reduced-motion and set client-side rendering flag
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setUseVideoBackground(!mediaQuery.matches);
    setIsClient(true);
  }, []);

  // Generate stars on the client side
  useEffect(() => {
    if (isClient) {
      const arr = Array.from({ length: 5 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }));
      setStars(arr);
    }
  }, [isClient]);

  // Testimonials
  const testimonials = [
    { quote: 'Incredible attention to detail and lightning-fast delivery.', author: 'Alex, Startup Founder' },
    { quote: 'The new site boosted our traffic by 40% in the first week.', author: 'Sam, Marketing Lead' },
    { quote: 'Nyxtrael’s animations made our brand stand out immediately.', author: 'Jamie, Creative Director' },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial(i => (i + 1) % testimonials.length);
  }, [testimonials.length]);
  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial(i => (i - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);
  useEffect(() => {
    const iv = setInterval(nextTestimonial, 5000);
    return () => clearInterval(iv);
  }, [nextTestimonial]);

  // Notable Projects slider
  const projects = [
    {
      title: 'Anime Character – Sunroom Diaries, 2025',
      description: 'A serene anime character in a sunlit room, created for a client’s personal portfolio.',
      src: '/images/sunroom-diaries/cover.png',
      href: '/portfolio/gallery/sunroom-diaries',
      alt: 'Sunroom Diaries cover',
    },
    {
      title: 'Gothic Figure – Red Requiem, 2025',
      description: 'A gothic figure in a dark, mystical setting, designed for a music project.',
      src: '/images/red-requiem/cover.png',
      href: '/portfolio/gallery/red-requiem',
      alt: 'Red Requiem cover',
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);
  const nextProject = () => setCurrentProject(i => (i + 1) % projects.length);
  const prevProject = () => setCurrentProject(i => (i - 1 + projects.length) % projects.length);

  // Form + Toast
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [showToast, setShowToast] = useState(false);
  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setFormError('Please fill in all fields.');
      setFormSuccess('');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      setFormSuccess('');
      return;
    }
    setFormError('');
    setFormSuccess('Message sent successfully! I’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  // JSON-LD Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nyxtrael',
    url: 'https://nyxtrael.netlify.app/about', // Updated URL
    sameAs: ['https://instagram.com/nyxtrael', 'https://x.com/nyxtrael'],
  };

  return (
    <>
      <Head>
        <title>About – Nyxtrael | Web Design & Motion</title>
        <meta
          name="description"
          content="Meet Nyxtrael: designer of custom web experiences, animations & illustrations."
        />
        <meta name="keywords" content="web design, animations, illustrations, freelance designer" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About – Nyxtrael | Web Design & Motion" />
        <meta
          property="og:description"
          content="Meet Nyxtrael: designer of custom web experiences, animations & illustrations."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://nyxtrael.netlify.app/about" /> {/* Updated URL */}
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nyxtrael.netlify.app/about" /> {/* Updated URL */}
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden">
        {useVideoBackground ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/videos/Persona.png"
            className="absolute inset-0 w-full h-full object-cover opacity-10"
            aria-hidden="true"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
        ) : (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/videos/Persona.png')" }}
            aria-hidden="true"
          />
        )}
        <div
          aria-hidden="true"
          className={`absolute inset-0 ${
            darkMode
              ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)]'
              : 'bg-gradient-to-b from-gray-200 to-gray-50'
          }`}
        />

        {isClient &&
          stars.map((s, i) => (
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
            alt="Nyxtrael Logo"
            className="rounded-full border-4 border-fuchsia-400 w-full h-full"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative z-10 font-bold text-6xl md:text-7xl mb-2 font-playfair ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          About{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
            Nyxtrael
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative z-10 text-xl font-inter max-w-2xl ${
            darkMode ? 'text-neutral-300' : 'text-gray-700'
          }`}
        >
          Discover My Journey & Creative Process
        </motion.p>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10"
        >
          <Link href="#main-content" aria-label="Scroll to main content">
            <span className="sr-only">Scroll to main content</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-fuchsia-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </motion.div>
      </section>

      {/* MAIN CONTENT */}
      <main
        id="main-content"
        className={`relative px-6 py-12 md:px-16 space-y-20 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)] text-white'
            : 'bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900'
        }`}
      >
        {/* Dark Mode Toggle Button */}
        <motion.button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-fuchsia-500 text-white"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
          {darkMode ? '🌞' : '🌙'}
        </motion.button>

        {/* Story */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-lg leading-relaxed font-inter ${
              darkMode ? 'text-neutral-300' : 'text-gray-700'
            }`}
          >
            I’m{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
              Nyxtrael
            </span>, a designer dedicated to blending art and functionality for impactful websites.
          </motion.p>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-6 font-playfair bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Visual Artistry', desc: 'Custom illustrations.', icon: '🎨', href: '/services#art' },
              { title: 'Web Design', desc: 'SEO-friendly sites.', icon: '🖥️', href: '/services#web' },
              { title: 'Motion', desc: 'Video edits & micro-Interactions.', icon: '🎬', href: '/services#motion' },
            ].map((s, i) => (
              <motion.div
                key={s.title} // Updated key to be more specific
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/10 rounded-lg backdrop-blur-md"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 font-playfair">
                  {s.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-neutral-400' : 'text-gray-600'}`}>{s.desc}</p>
                <Link href={s.href} className="text-fuchsia-400 hover:underline font-inter">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center font-playfair bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
            My Creative Process
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-fuchsia-400 to-purple-500 opacity-60" />
            {[
              { step: 'Consultation', icon: '💬', desc: 'We discuss your vision and project needs.' },
              { step: 'Design', icon: '✍️', desc: 'I create visual concepts and mockups for approval.' },
              { step: 'Delivery', icon: '🚀', desc: 'I deliver final files and support integration.' },
            ].map((it, i) => (
              <motion.div
                key={it.step} // Updated key to be more specific
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`mb-16 flex ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              >
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-md max-w-xs">
                  <div className="text-3xl mb-2">{it.icon}</div>
                  <h3 className="font-semibold mb-1 font-inter">{it.step}</h3>
                  <p className={`text-sm ${darkMode ? 'text-neutral-400' : 'text-gray-600'}`}>{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Work With Me */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold font-playfair bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
            Why Work With Me
          </h2>
          {['Art meets functionality.', 'Listening to your vision.', 'No ghosting, only results.'].map((txt, i) => (
            <motion.div
              key={txt} // Updated key to be more specific
              whileHover={{ scale: 1.03 }}
              className="mx-auto max-w-md p-4 bg-white/10 rounded-lg backdrop-blur-md flex items-center"
            >
              <span className="text-2xl mr-3 text-fuchsia-400">⚡</span>
              <span className={darkMode ? 'text-neutral-300' : 'text-gray-700'}>{txt}</span>
            </motion.div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6 font-playfair bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.blockquote
                key={currentTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 p-8 rounded-lg backdrop-blur-md mx-4"
              >
                <p className={`italic ${darkMode ? 'text-neutral-300' : 'text-gray-700'}`}>
                  “{testimonials[currentTestimonial].quote}”
                </p>
                <footer className={`mt-4 text-right text-sm ${darkMode ? 'text-neutral-400' : 'text-gray-600'}`}>
                  — {testimonials[currentTestimonial].author}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-fuchsia-400 rounded-full"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-fuchsia-400 rounded-full"
            >
              →
            </button>
          </div>
        </section>

        {/* Notable Projects */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 font-playfair bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
            Notable Projects
          </h2>
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-lg rounded-lg overflow-hidden shadow-lg"
              >
                <Link href={projects[currentProject].href} className="block">
                  <img
                    src={projects[currentProject].src}
                    alt={projects[currentProject].alt}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-4 bg-white/10 backdrop-blur-md">
                    <h3 className="font-semibold font-inter">{projects[currentProject].title}</h3>
                    <p className={`text-sm mb-2 ${darkMode ? 'text-neutral-400' : 'text-gray-600'}`}>
                      {projects[currentProject].description}
                    </p>
                    <span className="text-fuchsia-400 hover:underline font-inter">View Details →</span>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevProject}
              aria-label="Previous project"
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-fuchsia-400 rounded-full"
            >
              ←
            </button>
            <button
              onClick={nextProject}
              aria-label="Next project"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-fuchsia-400 rounded-full"
            >
              →
            </button>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-md mx-auto text-center relative">
          <h2 className="text-2xl font-semibold mb-4 font-playfair bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <form
            onSubmit={handleFormSubmit}
            className="space-y-4 bg-white/10 p-6 rounded-lg backdrop-blur-md"
            noValidate
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Your Name"
              className={`w-full p-3 rounded ${
                darkMode
                  ? 'bg-white/10 text-white placeholder-neutral-400 border border-fuchsia-400'
                  : 'bg-gray-100 text-gray-900 placeholder-gray-400 border border-fuchsia-400'
              } focus:ring-2 focus:ring-fuchsia-400 focus:outline-none`}
              aria-invalid={!!formError}
              aria-describedby={formError ? 'form-message' : undefined}
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Your Email"
              className={`w-full p-3 rounded ${
                darkMode
                  ? 'bg-white/10 text-white placeholder-neutral-400 border border-fuchsia-400'
                  : 'bg-gray-100 text-gray-900 placeholder-gray-400 border border-fuchsia-400'
              } focus:ring-2 focus:ring-fuchsia-400 focus:outline-none`}
              aria-invalid={!!formError}
              aria-describedby={formError ? 'form-message' : undefined}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Your Message"
              className={`w-full p-3 rounded h-32 ${
                darkMode
                  ? 'bg-white/10 text-white placeholder-neutral-400 border border-fuchsia-400'
                  : 'bg-gray-100 text-gray-900 placeholder-gray-400 border border-fuchsia-400'
              } focus:ring-2 focus:ring-fuchsia-400 focus:outline-none`}
              aria-invalid={!!formError}
              aria-describedby={formError ? 'form-message' : undefined}
            />
            {formError && (
              <p id="form-message" className="text-red-400" role="alert">
                {formError}
              </p>
            )}
            {formSuccess && (
              <p id="form-message" className="text-fuchsia-400" role="status">
                {formSuccess}
              </p>
            )}
            <motion.button
              type="submit"
              className="w-full py-3 bg-fuchsia-500 text-white rounded-full font-semibold font-inter hover:bg-fuchsia-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>

          {/* Toast */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-8 right-8 bg-fuchsia-500 text-white px-4 py-2 rounded shadow-lg"
                role="status"
              >
                Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </main>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}