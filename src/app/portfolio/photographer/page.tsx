'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Camera, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../../../context/ThemeContext'; // Updated import path

const galleryImages = [
  '/photographer/1.jpg',
  '/photographer/2.jpg',
  '/photographer/3.jpg',
  '/photographer/4.jpg',
  '/photographer/5.jpg',
  '/photographer/6.jpg',
];

const PhotographerPortfolio = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef(null);
  const [stars, setStars] = useState([]);

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
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
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

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  return (
    <>
      <head>
        <title>Photographer Portfolio - Nyxtrael</title>
        <meta
          name="description"
          content="Explore Nyxtrael's professional photography portfolio featuring portraits, landscapes, and events."
        />
        <meta
          name="keywords"
          content="photography, portrait, landscape, event, nyxtrael"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Photographer Portfolio - Nyxtrael"
        />
        <meta
          property="og:description"
          content="Explore Nyxtrael's professional photography portfolio featuring portraits, landscapes, and events."
        />
        <meta property="og:image" content="/images/photographer-og.jpg" />
        <meta
          property="og:url"
          content="https://nyxtrael.netlify.app/photographer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          rel="canonical"
          href="https://nyxtrael.netlify.app/photographer"
        />
      </head>
      <div
        className={`min-h-screen ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to-bottom,#1a0e2a,#0c0f1e)]'
            : 'bg-gradient-to-b from-black to-gray-900'
        } text-white`}
      >
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden bg-fixed"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            poster="/images/stars-fallback.png"
            aria-hidden="true"
          >
            <source
              src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40" />
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
            className="relative z-10 text-center"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 flex items-center justify-center gap-2">
              <Camera className="text-pink-400" aria-hidden /> Capturing Moments,
              Crafting Stories
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Professional photography that brings your vision to life with
              unparalleled elegance.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white font-semibold rounded-full hover:bg-fuchsia-600 transition"
              aria-label="Book a photography session"
            >
              Book a Session <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">About the Artist</h2>
              <p className="text-gray-300 leading-relaxed">
                With over a decade of experience, I specialize in portrait,
                landscape, and event photography. My approach blends technical
                precision with creative storytelling, ensuring every image
                resonates with emotion and authenticity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-80"
            >
              <img
                src="/photographer/artist.jpg"
                alt="Photographer"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 px-4 md:px-16">
          <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-2xl">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative w-full h-96 rounded-2xl overflow-hidden"
              >
                <img
                  src={galleryImages[currentSlide]}
                  alt={`Gallery Image ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-white font-semibold">View Details</p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
                )
              }
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
              }
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === currentSlide
                      ? 'bg-fuchsia-400'
                      : 'bg-white bg-opacity-60'
                  } hover:bg-fuchsia-300 transition-colors`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 md:px-16 bg-black">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Ready to capture your next moment? Reach out to discuss your project
              or book a session.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:contact@photographer.com"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Send an email"
              >
                <Mail className="mr-2" /> Email
              </a>
              <a
                href="https://instagram.com/photographer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Visit Instagram profile"
              >
                <Instagram className="mr-2" /> Instagram
              </a>
            </div>
          </div>
          <motion.button
            onClick={toggleDarkMode}
            className="fixed top-4 right-4 p-2 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white shadow-md hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? '🌞' : '🌙'}
          </motion.button>
        </section>
      </div>
    </>
  );
};

export default PhotographerPortfolio;