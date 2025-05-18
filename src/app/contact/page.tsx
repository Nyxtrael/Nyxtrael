'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';
import { useContactForm } from '../../hooks/useContactForm';
import localFont from 'next/font/local';
import ImageWithFallback from '../../components/ImageWithFallback';
import { X as XIcon, Mail, User, CheckCircle } from 'lucide-react';

const CustomFont = localFont({ src: '../../fonts/Inter-Black.woff2', display: 'swap' });

const testimonialsList = [
  {
    logo: '/images/clients/pixelwitch-logo.png',
    quote: 'Amazing illustrations that brought my game to life! Nyxtrael exceeded my expectations.',
    author: 'Maria, Game Dev @PixelWitch',
  },
  {
    logo: '/images/clients/lumeneye-logo.png',
    quote: 'My portfolio site looks stunning and functions flawlessly. Highly recommend!',
    author: 'John, Photographer @LumenEye',
  },
  {
    logo: '/images/clients/alex-logo.png',
    quote: 'The video edits were cinematic and professional. It boosted my brand visibility!',
    author: 'Alex, Small Business Owner',
  },
];

const ContactPage = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { register, handleSubmit, errors, onSubmit, submitted, setSubmitted } = useContactForm();
  const [selectedService, setSelectedService] = useState('');
  const [stars, setStars] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  // Use Framer Motion's useReducedMotion for accessibility
  const prefersReducedMotion = useReducedMotion();

  // Parallax effect using Framer Motion's useScroll
  const { scrollY } = useScroll();
  const backgroundPositionY = useTransform(scrollY, [0, 300], [0, -90]);

  // Star animations (limited for reduced motion)
  useEffect(() => {
    const starCount = prefersReducedMotion ? 5 : 10;
    setStars(
      Array.from({ length: starCount }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );
  }, [prefersReducedMotion]);

  // Auto-scroll carousel
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialsList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted, setSubmitted]);

  return (
    <>
      <Head>
        <title>Contact – Let’s Create Your Vision – Nyxtrael</title>
        <meta name="description" content="Contact Nyxtrael to start your project. I’ll respond within 24 hours." />
        <meta property="og:title" content="Contact Nyxtrael" />
        <meta property="og:description" content="Let’s bring your vision to life with Nyxtrael’s services." />
        <meta property="og:image" content="/images/contact-og.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.header
        ref={heroRef}
        style={{ backgroundPositionY }}
        className={`relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen px-6 md:px-16 ${
          darkMode
            ? 'bg-[radial-gradient(circle_at_top,rgba(88,28,135,0.3),transparent),linear-gradient(to_bottom,#0f172a,#1e293b)]'
            : 'bg-gradient-to-br from-gray-100 via-blue-100 to-indigo-100'
        } ${CustomFont.className}`}
        role="banner"
        aria-labelledby="hero-title"
      >
        <div className="absolute inset-0 aurora-bg opacity-30 pointer-events-none z-0" />

        <div className="absolute inset-0 pointer-events-none">
          {stars.map((s, i) => (
            <motion.div
              key={i}
              className="particle w-2 h-2"
              style={{ top: s.top, left: s.left }}
              animate={
                prefersReducedMotion
                  ? { opacity: 0.6 }
                  : { opacity: [0, 1, 0], scale: [1, 1.2, 1] }
              }
              transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 mb-6 w-24 h-24 rounded-full glow-border"
        >
          <ImageWithFallback
            src="/images/persona.png"
            fallbackSrc="/images/fallback-avatar.png"
            alt="Nyxtrael avatar"
            width={96}
            height={96}
            className="rounded-full border-4 border-fuchsia-500 w-full h-full object-cover"
          />
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex items-center gap-2 text-5xl md:text-6xl font-bold font-playfair text-gray-100"
        >
          <Mail className="text-cyan-400" aria-hidden />
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-lg italic text-gray-300 mb-2 font-inter"
        >
          Ready to bring your vision to life?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-sm text-gray-400 mb-12 font-inter"
        >
          I’ll get back to you within 24 hours.
        </motion.p>

        {/* Hero Carousel */}
        <aside
          className="relative w-full max-w-5xl mt-12 overflow-hidden rounded-2xl shadow-2xl mb-16"
          aria-roledescription="carousel"
          aria-label="Client testimonials carousel"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden glow-border"
            >
              <ImageWithFallback
                src={testimonialsList[currentSlide].logo}
                fallbackSrc="/images/fallback-testimonial.png"
                alt={testimonialsList[currentSlide].author}
                fill
                className="object-cover opacity-20"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center text-gray-100 p-6"
                >
                  <p className="text-lg md:text-xl font-inter mb-2">
                    "{testimonialsList[currentSlide].quote}"
                  </p>
                  <p className="text-sm md:text-base font-semibold text-fuchsia-400">
                    {testimonialsList[currentSlide].author}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length)}
            role="button"
            tabIndex={0}
            aria-label="Previous testimonial"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-transform"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonialsList.length)}
            role="button"
            tabIndex={0}
            aria-label="Next testimonial"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-transform"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                role="button"
                tabIndex={0}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-fuchsia-500' : 'bg-gray-300'} hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors`}
              />
            ))}
          </div>
        </aside>

        <motion.a
          href="#contact-form"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10 text-cyan-400"
          aria-label="Scroll to contact form"
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
      </motion.header>

      <main
        id="main-content"
        className={`relative z-10 px-6 py-16 md:px-16 space-y-20 ${
          darkMode
            ? 'bg-[radial-gradient(circle_at_top,rgba(88,28,135,0.3),transparent),linear-gradient(to_bottom,#0f172a,#1e293b)] text-gray-100'
            : 'bg-gradient-to-br from-gray-100 via-blue-100 to-indigo-100 text-gray-900'
        } ${CustomFont.className}`}
        role="main"
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

        <section className="max-w-md mx-auto" aria-labelledby="contact-form-title">
          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="glass-card p-8 rounded-xl shadow-lg pt-16 relative z-10"
          >
            <h2 id="contact-form-title" className="text-3xl font-bold font-playfair text-gray-100 mb-6 text-center">
              Let’s Get Started
            </h2>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  key="toast"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 40, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  role="status"
                  aria-live="polite"
                  className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" /> Message sent!
                  <button
                    onClick={() => setSubmitted(false)}
                    className="ml-4 text-white focus:outline-none focus:ring-2 focus:ring-white"
                    aria-label="Dismiss notification"
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <fieldset className="space-y-6">
              <legend className="sr-only">Contact Form</legend>

              <div>
                <label htmlFor="name" className="block text-sm mb-1 font-inter text-gray-300">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-cyan-400 w-5 h-5" aria-hidden />
                  <motion.input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name or studio"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full p-3 pl-10 rounded-md bg-gray-800/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition ${errors.name ? 'border-red-500' : ''}`}
                    {...register('name')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                {errors.name && (
                  <p id="name-error" className="text-red-400 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1 font-inter text-gray-300">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-cyan-400 w-5 h-5" aria-hidden />
                  <motion.input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your contact email"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full p-3 pl-10 rounded-md bg-gray-800/50 border border-gray-600 text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition ${errors.email ? 'border-red-500' : ''}`}
                    {...register('email')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  />
                </div>
                {errors.email && (
                  <p id="email-error" className="text-red-400 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-1 font-inter text-gray-300">
                  Service
                </label>
                <motion.select
                  id="service"
                  name="service"
                  className="w-full p-3 rounded-md bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400 transition"
                  {...register('service')}
                  onChange={(e) => setSelectedService(e.target.value)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <option value="">Select a service</option>
                  <option value="illustration">Custom Illustrations</option>
                  <option value="web">Web Design</option>
                  <option value="video">Motion & Video Editing</option>
                  <option value="other">Other</option>
                </motion.select>
              </div>

              {selectedService && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm mb-1 font-inter text-gray-300">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your idea or vision"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`w-full p-3 rounded-md bg-gray-800/50 border border-gray-600 text-gray-100 placeholder-gray-400 resize-y min-h-[140px] focus:outline-none focus:border-cyan-400 transition ${errors.message ? 'border-red-500' : ''}`}
                    {...register('message')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 text-sm font-semibold font-inter text-white shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-cyan-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let’s Conjure Your Vision ✨
              </motion.button>
            </fieldset>
          </form>
        </section>

        
          
      </main>
    </>
  );
};

export default ContactPage;