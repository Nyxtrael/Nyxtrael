'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const services = [
  {
    title: 'Web Development',
    desc: 'Custom websites, e-commerce solutions, and CMS integration. Boost your online presence with SEO-optimized sites.',
    image: '/images/services/web-development.jpg',
  },
  {
    title: 'Web Design',
    desc: 'UI/UX design, responsive layouts, and animation integration to make your brand stand out.',
    image: '/images/services/web-design.jpg',
  },
  {
    title: 'Animations & Illustrations',
    desc: 'Custom motion graphics and illustrations to bring your vision to life.',
    image: '/images/services/animations-illustrations.jpg',
  },
];

const featuredServices = [
  {
    title: 'Crafting Digital Experiences',
    desc: 'Bespoke web development with a focus on performance and SEO.',
    image: '/images/services/featured/web-development.jpg',
  },
  {
    title: 'Designing the Future',
    desc: 'Stunning UI/UX designs with seamless animations.',
    image: '/images/services/featured/web-design.jpg',
  },
  {
    title: 'Bringing Art to Life',
    desc: 'Custom illustrations and motion graphics for your brand.',
    image: '/images/services/featured/animations.jpg',
  },
];

const testimonials = [
  { text: 'Nyxtrael transformed our website with stunning designs!', author: 'Jane Doe, Creative Director' },
  { text: 'Amazing development skills and quick turnaround!', author: 'John Smith, CEO' },
];

// JSON-LD schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Services by Nyxtrael',
  url: 'https://nyxtrael.netlify.app/services',
  description: 'Web Development Services by Nyxtrael - Custom sites, SEO optimization, animations, and illustrations.',
  provider: {
    '@type': 'Organization',
    name: 'Nyxtrael',
    url: 'https://nyxtrael.netlify.app',
  },
  serviceType: ['Web Development', 'Web Design', 'Animations', 'Illustrations'],
  offers: {
    '@type': 'Offer',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
};

export default function Services() {
  const { darkMode, toggleDarkMode } = useTheme();
  const [stars, setStars] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [useImageBackground, setUseImageBackground] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const heroRef = useRef(null);

  // Check for prefers-reduced-motion to toggle video/image background
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setUseImageBackground(mediaQuery.matches);
    setIsClient(true); // For client-side rendering of stars
  }, []);

  // Generate stars on the client side
  useEffect(() => {
    if (isClient) {
      setStars(
        Array.from({ length: 15 }, () => ({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 2,
        }))
      );
    }
  }, [isClient]);

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredServices.length]);

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
      {/* JSON-LD for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section
        ref={heroRef}
        className={`relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen px-6 md:px-16 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)]'
            : 'bg-gradient-to-b from-gray-200 to-gray-50'
        } bg-fixed`}
      >
        {useImageBackground ? (
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/images/services-bg.jpg')" }}
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
            <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
          </video>
        )}

        {isClient &&
          stars.map((s, i) => (
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
          className={`relative z-10 font-bold text-5xl md:text-6xl mb-2 font-playfair ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          Services by{' '}
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
          Elevate your brand with custom web solutions, stunning designs, and captivating animations.
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
                src={featuredServices[currentSlide].image}
                alt={featuredServices[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-center text-white p-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-playfair">{featuredServices[currentSlide].title}</h2>
                  <p className="text-sm md:text-base font-inter">{featuredServices[currentSlide].desc}</p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredServices.length) % featuredServices.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredServices.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
            {featuredServices.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-fuchsia-400' : 'bg-white bg-opacity-60'} hover:bg-fuchsia-300 transition-colors`}
                aria-label={`Go to slide ${idx + 1}`}
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
          <span className="sr-only">Scroll to main content</span>
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
          <span className="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
          {darkMode ? '🌞' : '🌙'}
        </motion.button>

        <section className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-16 font-playfair bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent">
            My Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-2xl overflow-hidden shadow-lg group"
              >
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:bg-opacity-80"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold font-playfair text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base font-inter text-neutral-200 mb-4">
                    {service.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-block px-6 py-2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-lg font-inter shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    Hire Me Today →
                  </Link>
                </motion.div>
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-purple-500 bg-opacity-20 rounded-bl-full transform translate-x-1/2 -translate-y-1/2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1, borderWidth: 4 }}
                />
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-teal-400 to-fuchsia-400 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md"
              >
                <p className="text-neutral-300 mb-2 font-inter">{testimonial.text}</p>
                <p className="text-fuchsia-400 font-semibold font-inter">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-full font-playfair text-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Now
          </Link>
        </motion.div>
      </main>
    </>
  );
}