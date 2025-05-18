'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import HeroCarousel from '../../components/HeroCarousel';
import ServiceCard from '../../components/ServiceCard';
import CaseStudyCard from '../../components/CaseStudyCard';
import FilterButtons from '../../components/FilterButtons';
import { services, featuredServices, testimonials, caseStudies } from '../../data/services';

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
  const [useStaticHeroBg, setUseStaticHeroBg] = useState(false);
  const [useStaticCaseStudyBg, setUseStaticCaseStudyBg] = useState(false);
  const [filter, setFilter] = useState('All');
  const [visibleServices, setVisibleServices] = useState(2);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setUseStaticHeroBg(mediaQuery.matches);
    setUseStaticCaseStudyBg(mediaQuery.matches);

    const handleMediaChange = (e) => {
      setUseStaticHeroBg(e.matches);
      setUseStaticCaseStudyBg(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  useEffect(() => {
    const starCount = useStaticHeroBg ? 0 : 15;
    setStars(
      Array.from({ length: starCount }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );
  }, [useStaticHeroBg]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleServices(services.length);
        }
      },
      { threshold: 0.1 }
    );
    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

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

  const filteredServices =
    filter === 'All' ? services : services.filter((service) => service.category === filter);
  const categories = ['All', 'Development', 'Design', 'Creative'];

  return (
    <>
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

      <section
        ref={heroRef}
        className={`relative flex flex-col items-center justify-center text-center overflow-hidden min-h-screen px-6 md:px-16 ${
          darkMode
            ? 'bg-[radial-gradient(circle_at_top,rgba(88,28,135,0.3),transparent),linear-gradient(to_bottom,#0f172a,#1e293b)]'
            : 'bg-[linear-gradient(to_bottom,#e2e8f0,#f1f5f9)]'
        } bg-fixed`}
        role="region"
        aria-label="Hero section"
      >
        <Image
          src={useStaticHeroBg ? "/images/services-bg.jpg" : "/videos/6917331_Motion Graphics_Motion Graphic_1280x720.webm"}
          alt="Background"
          fill
          className="object-cover opacity-15"
          priority
          onError={(e) => {
            e.target.src = '/images/fallback.jpg';
          }}
          aria-hidden="true"
        />

        {stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-400 to-cyan-400"
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
            onError={(e) => {
              e.target.src = '/images/fallback.jpg';
            }}
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`relative z-10 font-bold text-5xl md:text-6xl mb-4 font-playfair tracking-wide ${
            darkMode ? 'text-gray-100 text-shadow-md' : 'text-gray-900'
          }`}
        >
          Services by{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
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

        <HeroCarousel featuredServices={featuredServices} />

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
            ? 'bg-[radial-gradient(circle_at_top,rgba(88,28,135,0.3),transparent),linear-gradient(to_bottom,#0f172a,#1e293b)]'
            : 'bg-[linear-gradient(to_bottom,#e2e8f0,#f1f5f9)]'
        }`}
        role="main"
      >
        <nav className="max-w-6xl mx-auto mb-6" aria-label="Breadcrumb">
          <ol className="flex space-x-2 text-sm font-inter">
            <li>
              <Link href="/" className="text-fuchsia-400 hover:underline">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-400">›</span>
            </li>
            <li className="text-fuchsia-400">Services</li>
          </ol>
        </nav>

 
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
            <span className="font-inter text-base">Contact Us</span>
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

        <section ref={servicesRef} className="max-w-6xl mx-auto" role="region" aria-label="Services section">
          <header>
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent tracking-wide">
              My Services
            </h2>
          </header>
          <FilterButtons categories={categories} filter={filter} setFilter={setFilter} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredServices.slice(0, visibleServices).map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center" role="region" aria-label="Testimonials section">
          <header>
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent tracking-wide">
              What Clients Say
            </h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.article
                key={testimonial.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className={`p-6 rounded-xl shadow-md bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                <p className="mb-4 font-inter text-base">"{testimonial.text}"</p>
                <p className="text-fuchsia-500 font-semibold font-inter">{testimonial.author}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto text-center relative" role="region" aria-label="Case Studies section">
          <Image
            src={useStaticCaseStudyBg ? "/images/case-studies-bg.jpg" : "/videos/case-studies-bg.webm"}
            alt="Case Studies Background"
            fill
            className="object-cover opacity-10"
            loading="lazy"
            onError={(e) => {
              e.target.src = '/images/fallback.jpg';
            }}
            aria-hidden="true"
          />

          <header>
            <h2 className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent tracking-wide">
              Case Studies
            </h2>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 relative z-10">
            {caseStudies.map((study, i) => (
              <CaseStudyCard key={study.title} study={study} index={i} />
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            <Link
              href="/case-studies"
              className="inline-block px-8 py-3 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-full font-inter text-base shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
              aria-label="View all case studies"
            >
              See All Case Studies
            </Link>
          </motion.div>
        </section>

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