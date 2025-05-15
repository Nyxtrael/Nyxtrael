'use client';

import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useContactForm } from '../../hooks/useContactForm';
import localFont from 'next/font/local';
import Image from 'next/image';
import { Instagram, X as XIcon } from 'lucide-react';
import dynamic from 'next/dynamic';

const Mail = dynamic(() => import('lucide-react').then((mod) => mod.Mail), { ssr: false });
const User = dynamic(() => import('lucide-react').then((mod) => mod.User), { ssr: false });
const CheckCircle = dynamic(() => import('lucide-react').then((mod) => mod.CheckCircle), { ssr: false });

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

export default function ContactPage() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { register, handleSubmit, errors, onSubmit, submitted, setSubmitted } = useContactForm();
  const [selectedService, setSelectedService] = useState('');
  const [stars, setStars] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setStars(
      Array.from({ length: 15 }, () => ({
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
        className={`relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen px-6 md:px-16 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1A1A2E,#2A2A3E)]'
            : 'bg-gradient-to-b from-gray-200 to-gray-50'
        } bg-fixed ${CustomFont.className}`}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/stars-fallback.png"
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        >
          <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 pointer-events-none">
          {stars.map((s, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
              style={{ top: s.top, left: s.left }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 3, -3, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
          className="relative z-10 mb-6 w-24 h-24"
        >
          <motion.img
            src="/images/persona.png"
            alt="Nyxtrael avatar"
            className="rounded-full border-4 border-fuchsia-400 w-full h-full"
            animate={{ scale: [1, 1.05, 1], rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 flex items-center gap-2 text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
        >
          <Mail className="text-pink-400" aria-hidden />
          Contact
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-lg italic text-purple-300 mb-2"
        >
          Ready to bring your vision to life?
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-sm text-neutral-400 mb-12"
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
              className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden"
            >
              <Image
                src={testimonialsList[currentSlide].logo}
                alt={testimonialsList[currentSlide].author}
                fill
                className="object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center text-white p-6"
                >
                  <p className="text-lg md:text-xl font-inter mb-2">
                    &quot;{testimonialsList[currentSlide].quote}&quot;
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
            aria-label="Previous testimonial"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-transform"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonialsList.length)}
            aria-label="Next testimonial"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-transform"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-fuchsia-400' : 'bg-white bg-opacity-60'} hover:bg-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-colors`}
              />
            ))}
          </div>
        </div>

        {/* Scroll arrow smooth */}
        <motion.a
          href="#contact-form"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
          }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10 text-fuchsia-400"
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
        className={`relative z-10 px-6 py-16 md:px-16 space-y-20 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1A1A2E,#2A2A3E)] text-white'
            : 'bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900'
        } ${CustomFont.className}`}
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

        <section className="max-w-md mx-auto">
          <section id="contact-form" className="bg-[#2A2A3E]/50 p-8 rounded-xl shadow-lg border-t-2 border-fuchsia-500/30 pt-16 relative z-10">
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
                  className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
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
                    <User className="absolute left-3 top-3 text-pink-400 w-5 h-5" aria-hidden />
                    <motion.input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name or studio"
                      autoComplete="name"
                      className={`w-full p-3 pl-10 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] focus:ring-2 focus:ring-pink-400 transition ${errors.name ? 'ring-2 ring-pink-500' : ''}`}
                      {...register('name')}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  {errors.name && <p className="text-pink-400 text-sm mt-1">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-1">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-pink-400 w-5 h-5" aria-hidden />
                    <motion.input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your contact email"
                      autoComplete="email"
                      className={`w-full p-3 pl-10 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] focus:ring-2 focus:ring-pink-400 transition ${errors.email ? 'ring-2 ring-pink-500' : ''}`}
                      {...register('email')}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    />
                  </div>
                  {errors.email && <p className="text-pink-400 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm mb-1">Service</label>
                  <motion.select
                    id="service"
                    name="service"
                    className="w-full p-3 rounded-md bg-[#2A2A3E] text-white focus:ring-2 focus:ring-pink-400 transition"
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
                      className={`w-full p-3 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] resize-y min-h-[140px] focus:ring-2 focus:ring-pink-400 transition ${errors.message ? 'ring-2 ring-pink-500' : ''}`}
                      {...register('message')}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                    {errors.message && <p className="text-pink-400 text-sm mt-1">{errors.message.message}</p>}
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-br from-pink-600 to-purple-500 text-sm font-semibold shadow-md hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-pink-400"
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
}
