'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';
import { useReducedMotion } from 'framer-motion';

// Service data
const service = {
  title: 'Web Development',
  desc: 'Elevate your online presence with bespoke web solutions tailored to your brand. We deliver high-performance sites optimized for SEO and responsiveness, ensuring success in a competitive digital landscape. Key benefits include:',
  benefits: ['Enhanced performance for faster load times', 'SEO optimization for better visibility', 'Full responsiveness across all devices'],
  image: '/images/services/web-development.jpg',
};

// Features data
const features = [
  { title: 'Custom Websites', desc: 'Bespoke designs tailored to your brand’s unique needs.', icon: '/images/icons/custom.svg' },
  { title: 'E-Commerce Solutions', desc: 'Secure, scalable stores with seamless payment integration.', icon: '/images/icons/ecommerce.svg' },
  { title: 'CMS Integration', desc: 'User-friendly systems like WordPress or headless CMS.', icon: '/images/icons/cms.svg' },
  { title: 'SEO Optimization', desc: 'Search-engine-friendly code and strategies for visibility.', icon: '/images/icons/seo.svg' },
];

// Project showcase data
const projects = [
  { title: 'Luxury Retail Store', desc: 'Responsive e-commerce with advanced filtering.', image: '/images/projects/luxury-retail.jpg' },
  { title: 'Corporate Website', desc: 'SEO-optimized site with CMS integration.', image: '/images/projects/corporate.jpg' },
  { title: 'Portfolio Platform', desc: 'Dynamic site with custom animations.', image: '/images/projects/portfolio.jpg' },
];

// FAQ data
const faqs = [
  { question: 'What types of websites do you build?', answer: 'Custom sites, e-commerce, blogs, portfolios, and corporate solutions.' },
  { question: 'How long does a project take?', answer: '4-8 weeks, depending on complexity.' },
  { question: 'Do you offer support?', answer: 'Yes, with maintenance and update packages.' },
];

// JSON-LD schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Development by Nyxtrael',
  url: 'https://nyxtrael.com/services/web-development',
  description: 'Custom web development services including websites, e-commerce, and SEO optimization.',
  provider: { '@type': 'Organization', name: 'Nyxtrael', url: 'https://nyxtrael.com', logo: 'https://nyxtrael.com/images/logo.png' },
  serviceType: 'Web Development',
  areaServed: 'Global',
  offers: { '@type': 'Offer', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
};

export default function WebDevelopment() {
  const { darkMode } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const [stars, setStars] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [useImageBackground, setUseImageBackground] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setUseImageBackground(mediaQuery.matches);
    setIsClient(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate stars with reduced motion consideration
  useEffect(() => {
    if (isClient && !prefersReducedMotion) {
      const count = isMobile ? 5 : 15;
      setStars(
        Array.from({ length: count }, () => ({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          delay: Math.random() * 2,
        }))
      );
    }
  }, [isClient, prefersReducedMotion, isMobile]);

  // Simple fade effect instead of parallax
  useEffect(() => {
    if (heroRef.current && !prefersReducedMotion) {
      heroRef.current.style.transition = 'opacity 0.3s ease';
      const handleScroll = () => {
        const opacity = 1 - window.scrollY / 500;
        heroRef.current.style.opacity = Math.max(0.7, opacity);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [prefersReducedMotion]);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);

  return (
    <>
      <Head>
        <title>Web Development | Nyxtrael</title>
        <meta name="description" content="Custom web development by Nyxtrael, including websites, e-commerce, and SEO." />
        <meta property="og:title" content="Web Development | Nyxtrael" />
        <meta property="og:description" content="Elevate your online presence with tailored web solutions." />
        <meta property="og:image" content="/images/og-web-development.jpg" />
        <meta property="og:url" content="https://nyxtrael.com/services/web-development" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <link rel="preload" href="/images/web-development-bg.jpg" as="image" />
      </Head>

      {/* Hero Section */}
      <header
        ref={heroRef}
        className={`relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen px-6 md:px-16 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.15),transparent),linear-gradient(to_bottom,#1F2937,#111827)]'
            : 'bg-gradient-to-b from-gray-200 to-gray-50'
        }`}
        role="banner"
        aria-label="Web Development Hero"
      >
        {useImageBackground ? (
          <Image
            src="/images/web-development-bg.jpg"
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
            data-src-mobile="/videos/web-development-bg-mobile.webm"
          >
            <source src="/videos/web-development-bg.webm" type="video/webm" />
            <source src="/videos/web-development-bg.mp4" type="video/mp4" />
          </video>
        )}

        {!prefersReducedMotion &&
          isClient &&
          stars.map((s, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-teal-400 to-fuchsia-500"
              style={{ top: s.top, left: s.left, width: 2, height: 2 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
            />
          ))}

        <nav className="w-full py-4 bg-gray-900/80 backdrop-blur-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold font-playfair text-white">
              Nyxtrael
            </Link>
            <ol className="flex space-x-2 text-sm font-inter text-gray-400">
              <li>
                <Link href="/services" className="hover:text-cyan-400">
                  Services
                </Link>
              </li>
              <li className="before:content-['/'] before:mx-2">Web Development</li>
            </ol>
          </div>
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 mb-8 w-28 h-28"
        >
          <Image
            src="/images/web-dev-icon.png"
            alt="Web Development Icon"
            width={112}
            height={112}
            className="rounded-full border-4 border-fuchsia-500"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.5 : 0.8 }}
          className={`relative z-10 font-bold text-5xl md:text-6xl mb-4 font-playfair tracking-wide ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.5 : 0.8, delay: 0.2 }}
          className={`relative z-10 text-lg font-inter max-w-3xl leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-800'
          }`}
        >
          {service.desc}
          <ul className="list-disc list-inside mt-2 text-gray-500">
            {service.benefits.map((benefit, i) => (
              <li key={i} className="mt-1">
                {benefit}
              </li>
            ))}
          </ul>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.5 : 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-full font-playfair text-xl shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            aria-label="Get a quote for web development"
            whileHover={{ scale: 1.05 }}
            animate={{ scale: [1, 1.02, 1], transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
          >
            Get a Quote
          </Link>
        </motion.div>
      </header>

      <main
        className={`relative z-10 px-6 py-24 md:px-16 space-y-32 ${
          darkMode ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.15),transparent),linear-gradient(to_bottom,#1F2937,#111827)] text-white' : 'bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900'
        }`}
        role="main"
      >
        {/* Features Section */}
        <section className="max-w-6xl mx-auto" role="region" aria-label="Features section">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
            Why Choose Our Web Development?
          </h2>
          <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.3 : 0.6, delay: i * 0.1 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg"
              >
                <Image src={feature.icon} alt={`${feature.title} icon`} width={48} height={48} className="mb-4" loading="lazy" />
                <h3 className="text-xl font-bold font-playfair text-white mb-2">{feature.title}</h3>
                <p className="text-base font-inter text-gray-300">{feature.desc}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Project Showcase Section */}
        <section className="max-w-6xl mx-auto text-center" role="region" aria-label="Project showcase section">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
            Our Web Development Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.3 : 0.6, delay: i * 0.1 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
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
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto" role="region" aria-label="FAQ section">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: prefersReducedMotion ? 0.3 : 0.6, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4"
              >
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left flex justify-between items-center text-xl font-playfair text-white"
                  aria-expanded={openFaq === i}
                  aria-controls={`faq-${i}`}
                >
                  {faq.question}
                  <svg
                    className={`w-6 h-6 transform transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      id={`faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: prefersReducedMotion ? 0.2 : 0.3 }}
                      className="mt-4 text-base font-inter text-gray-300"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0.5 : 0.8 }}
          className="text-center"
        >
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-full font-playfair text-xl shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            aria-label="Start your web development project"
            whileHover={{ scale: 1.05 }}
            animate={{ scale: [1, 1.02, 1], transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
          >
            Start Your Project
          </Link>
        </motion.div>
      </main>

      <footer
        className={`py-10 text-center ${
          darkMode ? 'bg-gray-900/90 text-gray-400' : 'bg-gray-100 text-gray-600'
        } backdrop-blur-md border-t border-gray-200`}
        role="contentinfo"
      >
        <p className="text-sm font-inter mb-4">
          © 2025 Nyxtrael. All rights reserved. |{' '}
          <Link href="/contact" className="hover:text-cyan-400">
            Contact
          </Link>{' '}
          |{' '}
          <Link href="/portfolio" className="hover:text-cyan-400">
            Portfolio
          </Link>
        </p>
      </footer>
    </>
  );
}