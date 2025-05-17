'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

// Define services with slugs for dynamic routing
const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    desc: 'Custom websites, e-commerce solutions, and CMS integration. Boost your online presence with SEO-optimized sites.',
    image: '/images/services/web-development.jpg',
    category: 'Development',
  },
  {
    title: 'Web Design',
    slug: 'web-design',
    desc: 'UI/UX design, responsive layouts, and animation integration to make your brand stand out.',
    image: '/images/services/web-design.jpg',
    category: 'Design',
  },
  {
    title: 'Animations & Illustrationsatious',
    slug: 'animations-illustrations',
    desc: 'Custom motion graphics and illustrations to bring your vision to life.',
    image: '/images/services/animations-illustrations.jpg',
    category: 'Creative',
  },
];

const featuredServices = [
  {
    title: 'Crafting Digital Experiences',
    desc: 'Bespoke web development with a focus on performance and SEO.',
    image: '/images/services/web-development.jpg',
  },
  {
    title: 'Designing the Future',
    desc: 'Stunning UI/UX designs with seamless animations.',
    image: '/images/services/web-design.jpg',
  },
  {
    title: 'Bringing Art to Life',
    desc: 'Custom illustrations and motion graphics for your brand.',
    image: '/images/services/animations-illustrations.jpg',
  },
];

const testimonials = [
  { text: 'Nyxtrael transformed our website with stunning designs!', author: 'Jane Doe, Creative Director' },
  { text: 'Amazing development skills and quick turnaround!', author: 'John Smith, CEO' },
];

const portfolioProjects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A responsive online store with seamless payment integration.',
    image: '/images/portfolio/ecommerce.jpg',
  },
  {
    title: 'SaaS Dashboard',
    desc: 'Modern UI/UX design for a SaaS application.',
    image: '/images/portfolio/saas.jpg',
  },
  {
    title: 'Brand Animation',
    desc: 'Engaging motion graphics for a marketing campaign.',
    image: '/images/portfolio/animation.jpg',
  },
];

// JSON-LD schema with enhanced details
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Services by Nyxtrael',
  url: 'https://nyxtrael.com/services',
  description: 'Web Development, Web Design, and Animations by Nyxtrael - Custom solutions for your brand.',
  provider: {
    '@type': 'Organization',
    name: 'Nyxtrael',
    url: 'https://nyxtrael.com',
    logo: 'https://nyxtrael.com/images/logo.png',
  },
  serviceType: ['Web Development', 'Web Design', 'Animations', 'Illustrations'],
  areaServed: 'Global',
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
  const [filter, setFilter] = useState('All');
  const heroRef = useRef(null);

  // Check for prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setUseImageBackground(mediaQuery.matches);
    setIsClient(true);
  }, []);

  // Generate stars for background
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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollTop = window.pageYOffset;
        heroRef.current.style.backgroundPositionY = `${-scrollTop * 0.3}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter services
  const filteredServices =
    filter === 'All' ? services : services.filter((service) => service.category === filter);
  const categories = ['All', 'Development', 'Design', 'Creative'];

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Services | Nyxtrael</title>
        <meta
          name="description"
          content="Explore Nyxtrael's services: Web Development, Web Design, and Animations & Illustrations to elevate your brand."
        />
        <meta property="og:title" content="Services | Nyxtrael" />
        <meta
          property="og:description"
          content="Custom web solutions, stunning designs, and captivating animations by Nyxtrael."
        />
        <meta property="og:image" content="/images/og-services.jpg" />
        <meta property="og:url" content="https://nyxtrael.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preload" href="/images/services-bg.jpg" as="image" />
      </Head>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen px-6 md:px-16 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.15),transparent),linear-gradient(to_bottom,#1F2937,#111827)]'
            : 'bg-gradient-to-b from-gray-200 to-gray-50'
        } bg-fixed`}
        role="region"
        aria-label="Hero section"
      >
        {useImageBackground ? (
          <Image
            src="/images/services-bg.jpg"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
            aria-hidden="true"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-15"
            poster="/images/stars-fallback.png"
            aria-hidden="true"
          >
            <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.webm" type="video/webm" />
          </video>
        )}

        {isClient &&
          stars.map((s, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-teal-400 to-fuchsia-500"
              style={{ top: s.top, left: s.left, width: 2, height: 2 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
            />
          ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 mb-8 w-28 h-28"
        >
          <Image
            src="/images/persona.png"
            alt="Nyxtrael avatar"
            width={112}
            height={112}
            className="rounded-full border-4 border-fuchsia-500"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative z-10 font-bold text-5xl md:text-6xl mb-4 font-playfair tracking-wide ${
            darkMode ? 'text-white text-shadow-md' : 'text-gray-900'
          }`}
        >
          Services by{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-purple-500">
            Nyxtrael
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative z-10 text-lg font-inter max-w-3xl leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          Elevate your brand with custom web solutions, stunning designs, and captivating animations.
        </motion.p>

        {/* Hero Carousel */}
        <div className="relative w-full max-w-5xl mt-12 overflow-hidden rounded-xl shadow-xl">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden"
            >
              <Image
                src={featuredServices[currentSlide].image}
                alt={featuredServices[currentSlide].title}
                fill
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center text-white p-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-playfair">
                    {featuredServices[currentSlide].title}
                  </h2>
                  <p className="text-base md:text-lg font-inter mt-2">
                    {featuredServices[currentSlide].desc}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredServices.length) % featuredServices.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredServices.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            aria-label="Next slide"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
            {featuredServices.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentSlide ? 'bg-fuchsia-500' : 'bg-gray-300'
                } hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-colors`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.a
          href="#main-content"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10 text-fuchsia-500 hover:text-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
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
        className={`relative z-10 px-6 py-24 md:px-16 space-y-32 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.15),transparent),linear-gradient(to_bottom,#1F2937,#111827)] text-white'
            : 'bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900'
        }`}
        role="main"
      >
        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-3 rounded-full bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌞' : '🌙'}
        </motion.button>

        {/* Sticky Contact Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed bottom-8 right-8 z-20"
        >
          <Link
            href="/contact"
            className="flex items-center px-6 py-3 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            aria-label="Contact us"
          >
            <span className="hi font-inter text-base">Contact Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto" role="region" aria-label="Services section">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
            My Services
          </h2>

          {/* Service Filter */}
          <div className="flex gap-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-inter text-base border ${
                  filter === category
                    ? 'bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white border-transparent'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 border-gray-600'
                    : 'bg-gray-100 text-gray-700 border-gray-300'
                } hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-purple-500 hover:text-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all`}
                whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredServices.map((service, i) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-lg group bg-white/10 backdrop-blur-md"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:bg-black/90"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-xl md:text-2xl font-bold font-playfair text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-base font-inter text-gray-200 mb-4 line-clamp-2">{service.desc}</p>
                  <div className="flex gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="px-5 py-2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-lg font-inter text-sm shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      Learn More
                    </Link>
                    <Link
                      href="/contact"
                      className="px-5 py-2 bg-transparent border border-fuchsia-500 text-fuchsia-500 rounded-lg font-inter text-sm hover:bg-fuchsia-500 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
                      aria-label={`Contact us for ${service.title}`}
                    >
                      Contact
                    </Link>
                  </div>
                </motion.div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-4xl mx-auto text-center" role="region" aria-label="Testimonials section">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.article
                key={testimonial.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`p-6 rounded-xl shadow-md bg-white/10 backdrop-blur-md ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <p className="mb-4 font-inter text-base">"{testimonial.text}"</p>
                <p className="text-fuchsia-500 font-semibold font-inter">{testimonial.author}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="max-w-6xl mx-auto text-center" role="region" aria-label="Portfolio section">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
            Our Work
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-lg group bg-white/10 backdrop-blur-md"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:bg-black/90"
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 1 }}
                >
                  <h3 className="text-xl font-bold font-playfair text-white mb-2">{project.title}</h3>
                  <p className="text-base font-inter text-gray-200 mb-4 line-clamp-2">{project.desc}</p>
                  <Link
                    href="/portfolio"
                    className="px-5 py-2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-lg font-inter text-sm shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
                    aria-label={`View ${project.title} details`}
                  >
                    View Project
                  </Link>
                </motion.div>
              </motion.article>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/portfolio"
              className="inline-block px-8 py-3 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-full font-inter text-base shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
              aria-label="View full portfolio"
            >
              See Full Portfolio
            </Link>
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-full font-playfair text-xl shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            aria-label="Get started with Nyxtrael"
          >
            Get Started Now
          </Link>
        </motion.div>
      </main>
    </>
  );
}