'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Camera, Mail, Instagram } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '../../../context/ThemeContext';

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
  const [flares, setFlares] = useState([]);

  // Fix hydration issue by generating flares in useEffect
  useEffect(() => {
    setFlares(
      Array.from({ length: 10 }, (_, i) => ({
        id: i,
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
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: 'easeOut' } },
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
        className={`min-h-screen relative overflow-hidden font-sans text-gray-800 ${
          darkMode
            ? 'bg-[linear-gradient(to-bottom,#2F2A28,#1A1A18)]'
            : 'bg-[linear-gradient(to-bottom,#F5EDE4,#D9C2A8)]'
        }`}
      >
        <style>
          {`
            @keyframes glow {
              0% { opacity: 0.4; transform: scale(1); }
              50% { opacity: 0.8; transform: scale(1.1); }
              100% { opacity: 0.4; transform: scale(1); }
            }
            .flare {
              position: absolute;
              background: radial-gradient(circle, rgba(255, 215, 0, 0.3), transparent);
              border-radius: 50%;
              animation: glow 4s infinite;
            }
            .parchment-card {
              background: rgba(245, 237, 228, 0.95);
              border: 1px solid rgba(153, 101, 21, 0.2);
              border-radius: 1.5rem;
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
              transition: transform 0.4s ease, box-shadow 0.4s ease;
            }
            .parchment-card:hover {
              transform: translateY(-8px) scale(1.01);
              box-shadow: 0 8px 30px rgba(153, 101, 21, 0.2);
            }
            .accent-text {
              color: #8A4A21;
              text-shadow: 0 0 10px rgba(138, 74, 33, 0.3);
            }
            .overlay-fade {
              background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
            }
          `}
        </style>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden bg-fixed bg-[url('/images/wood-texture.jpg')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          {flares.map((f) => (
            <motion.div
              key={f.id}
              className="flare"
              style={{ top: f.top, left: f.left, width: 6, height: 6 }}
              animate={{ opacity: [0, 0.8, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: f.delay }}
            />
          ))}
          <motion.div
            className="relative z-10 text-center px-6"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-wide mb-6 flex items-center justify-center gap-4 accent-text font-playfair-display">
              <Camera className="w-14 h-14" aria-hidden /> Timeless Frames
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 font-light font-lora max-w-3xl mx-auto mb-10">
              Capturing the essence of life through natural light and authentic moments.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-[#8A4A21] text-white font-semibold font-lora rounded-xl hover:bg-[#6D3A1A] transition-all duration-300"
              aria-label="Book a photography session"
            >
              Book a Session <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-24 px-6 md:px-16 bg-[linear-gradient(to-bottom,#F5EDE4,#E8D4C0)]">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold mb-6 accent-text font-playfair-display">About the Artist</h2>
              <p className="text-gray-700 text-lg font-lora leading-relaxed">
                With over a decade of experience, I specialize in portrait, landscape, and event photography. My approach blends natural light with creative composition, delivering images that evoke emotion and tell your unique story.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative h-96"
            >
              <img
                src="/photographer/artist.jpg"
                alt="Photographer Nyxtrael"
                className="w-full h-full object-cover rounded-2xl parchment-card"
              />
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 px-6 md:px-16 bg-[#F9F1E7]">
          <h2 className="text-5xl font-bold text-center mb-16 accent-text font-playfair-display tracking-wide">
            Portfolio
          </h2>
          <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-3xl parchment-card">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative w-full h-[28rem] md:h-[36rem] rounded-3xl overflow-hidden"
              >
                <img
                  src={galleryImages[currentSlide]}
                  alt={`Gallery Image ${currentSlide + 1}`}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 overlay-fade flex items-end justify-center p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href={`/photographer/gallery/${currentSlide + 1}`}
                    className="text-white font-semibold font-lora text-lg hover:text-[#8A4A21] transition-colors"
                  >
                    View Details
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
                )
              }
              className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-[#8A4A21] text-white p-4 rounded-full shadow-md hover:bg-[#6D3A1A] hover:scale-110 transition-transform duration-300"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
              }
              className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#8A4A21] text-white p-4 rounded-full shadow-md hover:bg-[#6D3A1A] hover:scale-110 transition-transform duration-300"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
              {galleryImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-4 h-4 rounded-full ${
                    idx === currentSlide
                      ? 'bg-[#8A4A21]'
                      : 'bg-gray-300 bg-opacity-50'
                  } hover:bg-[#6D3A1A] transition-colors duration-300`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 md:px-16 bg-[linear-gradient(to-top,#E8D4C0,#F5EDE4)]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 accent-text font-playfair-display tracking-wide">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-xl font-lora mb-10">
              Ready to capture your next moment? Reach out to discuss your project or book a session.
            </p>
            <div className="flex justify-center space-x-8">
              <a
                href="mailto:contact@photographer.com"
                className="flex items-center text-gray-700 hover:text-[#8A4A21] text-lg font-lora transition-colors duration-300"
                aria-label="Send an email"
              >
                <Mail className="mr-3 w-6 h-6" /> Email
              </a>
              <a
                href="https://instagram.com/photographer"
                className="flex items-center text-gray-700 hover:text-[#8A4A21] text-lg font-lora transition-colors duration-300"
                aria-label="Visit Instagram profile"
              >
                <Instagram className="mr-3 w-6 h-6" /> Instagram
              </a>
            </div>
          </div>
          <motion.button
            onClick={toggleDarkMode}
            className="fixed top-6 right-6 p-3 rounded-full bg-[#8A4A21] text-white shadow-md hover:shadow-lg transition-shadow duration-300"
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