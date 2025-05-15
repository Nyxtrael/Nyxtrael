'use client';

import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useContactForm } from '../../hooks/useContactForm';
import localFont from 'next/font/local';
import Image from 'next/image';
import { Instagram, X as XIcon, Mail, User, CheckCircle } from 'lucide-react';

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

  useEffect(() => {
    setStars(
      Array.from({ length: 10 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonialsList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${-scrollTop * 0.3}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      <section
        ref={heroRef}
        className={`relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen px-6 md:px-16 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-700 bg-fixed ${CustomFont.className}`}
      >
        <style>
          {`
            @keyframes aurora {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
            .aurora-bg {
              background: linear-gradient(90deg, rgba(147, 197, 253, 0.3), rgba(167, 139, 250, 0.3), rgba(147, 197, 253, 0.3));
              background-size: 200% 200%;
              animation: aurora 15s ease infinite;
            }
            .glow-border {
              box-shadow: 0 0 15px rgba(167, 139, 250, 0.5);
            }
          `}
        </style>

        <div className="absolute inset-0 aurora-bg opacity-30 pointer-events-none z-0" />

        <div className="absolute inset-0 pointer-events-none">
          {stars.map((s, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              style={{ top: s.top, left: s.left }}
              animate={{ opacity: [0, 1, 0], scale: [1, 1.2, 1] }}
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
          <Image
            src="/images/persona.png"
            alt="Nyxtrael avatar"
            width={96}
            height={96}
            className="rounded-full border-4 border-purple-300 w-full h-full object-cover"
            onError={(e) => (e.currentTarget.src = '/images/fallback-avatar.png')} // Fallback image
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex items-center gap-2 text-5xl md:text-6xl font-bold text-white"
        >
          <Mail className="text-purple-300" aria-hidden />
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-lg italic text-purple-200 mb-2"
        >
          Ready to bring your vision to life?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-sm text-blue-200 mb-12"
        >
          I’ll get back to you within 24 hours.
        </motion.p>

        {/* Hero Carousel */}
        <div className="relative w-full max-w-5xl mt-12 overflow-hidden rounded-2xl shadow-2xl mb-16">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden glow-border"
            >
              <Image
                src={testimonialsList[currentSlide].logo}
                alt={testimonialsList[currentSlide].author}
                fill
                className="object-cover opacity-20"
                loading="lazy"
                onError={(e) => (e.currentTarget.src = '/images/fallback-testimonial.png')} // Fallback image
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center text-white p-6"
                >
                  <p className="text-lg md:text-xl font-inter mb-2">
                    "{testimonialsList[currentSlide].quote}"
                  </p>
                  <p className="text-sm md:text-base font-semibold text-purple-300">
                    {testimonialsList[currentSlide].author}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonialsList.length) % testimonialsList.length)}
            aria-label="Previous testimonial"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-transform"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonialsList.length)}
            aria-label="Next testimonial"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-transform"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-purple-300' : 'bg-white bg-opacity-60'} hover:bg-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-300 transition-colors`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Arrow */}
        <motion.a
          href="#contact-form"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10 text-purple-300"
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
      </section>

      <main
        id="main-content"
        className={`relative z-10 px-6 py-16 md:px-16 space-y-20 bg-gradient-to-b from-blue-800 to-indigo-900 text-white ${CustomFont.className}`}
      >
        <motion.button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-2 rounded-full bg-purple-500 text-white shadow-md hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌞' : '🌙'}
        </motion.button>

        <section className="max-w-md mx-auto">
          <section id="contact-form" className="bg-indigo-800/50 p-8 rounded-xl shadow-lg border-t-2 border-purple-300/50 pt-16 relative z-10">
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
                  className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" /> Message sent!
                  <button onClick={() => setSubmitted(false)} className="ml-4 text-white focus:outline-none focus:ring-2 focus:ring-white" aria-label="Dismiss notification">
                    <XIcon className="w-5 h-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <fieldset className="space-y-6">
                <legend className="sr-only">Contact Form</legend>

                <div>
                  <label htmlFor="name" className="block text-sm mb-1">Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-purple-300 w-5 h-5" aria-hidden />
                    <motion.input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name or studio"
                      autoComplete="name"
                      className={`w-full p-3 pl-10 rounded-md bg-indigo-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-300 transition ${errors.name ? 'ring-2 ring-red-500' : ''}`}
                      {...register('name')}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-purple-300 w-5 h-5" aria-hidden />
                    <motion.input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your contact email"
                      autoComplete="email"
                      className={`w-full p-3 pl-10 rounded-md bg-indigo-700 text-white placeholder-gray-300 focus:ring-2 focus:ring-purple-300 transition ${errors.email ? 'ring-2 ring-red-500' : ''}`}
                      {...register('email')}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                  </div>
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm mb-1">Service</label>
                  <motion.select
                    id="service"
                    name="service"
                    className="w-full p-3 rounded-md bg-indigo-700 text-white focus:ring-2 focus:ring-purple-300 transition"
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
                    <label htmlFor="message" className="block text-sm mb-1">Message</label>
                    <motion.textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your idea or vision"
                      className={`w-full p-3 rounded-md bg-indigo-700 text-white placeholder-gray-300 resize-y min-h-[140px] focus:ring-2 focus:ring-purple-300 transition ${errors.message ? 'ring-2 ring-red-500' : ''}`}
                      {...register('message')}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-purple-500 text-sm font-semibold shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-purple-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let’s Conjure Your Vision ✨
                </motion.button>
              </fieldset>
            </form>
          </section>
        </section>
      </main>
    </>
  );
};

export default ContactPage;