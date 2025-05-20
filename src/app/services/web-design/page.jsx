'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';

// Service data
const service = {
  title: 'Web Design',
  desc: 'Craft visually stunning, responsive, and SEO-optimized websites that elevate your brand. From single-page sites to custom portfolios, our designs blend elegance with performance.',
  image: '/images/services/web-design.jpg',
};

// Features data (combining pricing packages, add-ons, and "What You Get")
const features = [
  {
    title: 'Landing Spark (€90)',
    desc: 'A single-page website with responsive design, custom colors/fonts, and 1 revision.',
    icon: '/images/icons/landing.svg',
  },
  {
    title: 'Storytelling Site (€180)',
    desc: '3-5 pages with animations, copy support, and 2 revisions. Perfect for engaging narratives.',
    icon: '/images/icons/storytelling.svg',
  },
  {
    title: 'Full Custom Website (€250–350)',
    desc: '5+ pages with custom UI/UX, SEO optimization, 3 revisions, and ongoing support.',
    icon: '/images/icons/custom-website.svg',
  },
  {
    title: 'Optional Add-ons',
    desc: 'Enhance with extra pages (+€50), blog CMS (+€80), priority delivery (+€100), SEO setup (+€40), or animations (+€60).',
    icon: '/images/icons/addons.svg',
  },
  {
    title: 'Responsive Layout',
    desc: 'Seamless performance across all devices with tailored typography and colors.',
    icon: '/images/icons/responsive.svg',
  },
  {
    title: 'Hosting & Domain',
    desc: 'Custom domain setup and hosting assistance for a smooth launch.',
    icon: '/images/icons/hosting.svg',
  },
];

// Project showcase data
const projects = [
  {
    title: 'Mystic Studio Website',
    desc: 'A visually striking single-page site with custom animations.',
    image: '/images/web/artist-x.webp',
  },
  {
    title: 'Celestial E-Commerce',
    desc: 'A responsive e-commerce platform with seamless UI/UX.',
    image: '/images/web/ecommerce.webp',
  },
  {
    title: 'Dark Academia Portfolio',
    desc: 'A multi-page portfolio with elegant typography and animations.',
    image: '/images/web/personal-site.webp',
  },
];

// FAQ data (including "How It Works" as answers)
const faqs = [
  {
    question: 'What does the web design process involve?',
    answer: 'Choose your package, share your goals, receive an initial concept, refine with revisions, and launch your site.',
  },
  {
    question: 'Can I update text/images myself after delivery?',
    answer: 'Yes, we can set up an easy editor for you, such as Webflow or a CMS.',
  },
  {
    question: 'Is domain registration included?',
    answer: 'We provide guidance for domain purchase, but the cost is separate.',
  },
  {
    question: 'What platforms do you use for web design?',
    answer: 'We typically use Next.js or Webflow, tailored to your project’s needs.',
  },
  {
    question: 'Can I upgrade my site later?',
    answer: 'Absolutely, our designs are built with scalability in mind.',
  },
];

// JSON-LD schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Web Design by Nyxtrael',
  url: 'https://nyxtrael.com/services/web-design',
  description: 'Responsive, SEO-optimized web design services by Nyxtrael, including landing pages, multi-page sites, and custom portfolios.',
  provider: {
    '@type': 'Organization',
    name: 'Nyxtrael',
    url: 'https://nyxtrael.com',
    logo: 'https://nyxtrael.com/images/logo.png',
  },
  serviceType: 'Web Design',
  areaServed: 'Global',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
};

export default function WebDesign() {
  const { darkMode } = useTheme();
  const [stars, setStars] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [useImageBackground, setUseImageBackground] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
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

  // Toggle FAQ
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Web Design | Nyxtrael</title>
        <meta
          name="description"
          content="Responsive, SEO-optimized web design services by Nyxtrael, including landing pages, multi-page sites, and custom portfolios starting at €90."
        />
        <meta property="og:title" content="Web Design | Nyxtrael" />
        <meta
          property="og:description"
          content="Craft visually stunning, responsive, and SEO-optimized websites that elevate your brand."
        />
        <meta property="og:image" content="/images/og-web-design.jpg" />
        <meta property="og:url" content="https://nyxtrael.com/services/web-design" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preload" href="/images/web-design-bg.jpg" as="image" />
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
        aria-label="Web Design Hero"
      >
        {useImageBackground ? (
          <Image
            src="/images/web-design-bg.jpg"
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
            <source src="/videos/web-design-bg.webm" type="video/webm" />
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
            src="/images/web-design-icon.png"
            alt="Web Design Icon"
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
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`relative z-10 text-lg font-inter max-w-3xl leading-relaxed ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          {service.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8"
        >
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-full font-playfair text-xl shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
            aria-label="Navigate to contact page for a web design quote"
          >
            Get a Quote
          </Link>
        </motion.div>
      </section>

      <main
        className={`relative z-10 px-6 py-24 md:px-16 space-y-32 ${
          darkMode
            ? 'bg-[radial-gradient(circle,rgba(45,212,191,0.15),transparent),linear-gradient(to_bottom,#1F2937,#111827)] text-white'
            : 'bg-gradient-to-b from-gray-200 to-gray-50 text-gray-900'
        }`}
        role="main"
      >
        {/* Features Section */}
        <section className="max-w-6xl mx-auto" role="region" aria-label="Features section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide"
          >
            Why Choose Our Web Design?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {features.map((feature, i) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-fuchsia-500/30"
              >
                <Image
                  src={feature.icon}
                  alt={`${feature.title} icon`}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="text-xl font-bold font-playfair text-white mb-2">{feature.title}</h3>
                <p className="text-base font-inter text-gray-300">{feature.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Project Showcase Section */}
        <section className="max-w-6xl mx-auto text-center" role="region" aria-label="Project showcase section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide"
          >
            Our Web Design Projects
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          >
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative rounded-xl overflow-hidden shadow-lg group bg-white/10 backdrop-blur-md border border-fuchsia-500/30"
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
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto" role="region" aria-label="FAQ section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-fuchsia-500/30"
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
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-base font-inter text-gray-300"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Testimonials Section */}
        <section className="max-w-4xl mx-auto text-center" role="region" aria-label="Testimonials section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold mb-12 font-playfair bg-gradient-to-r from-fuchsia-500 to-purple-500 bg-clip-text text-transparent tracking-wide"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {[
              { text: 'The website design was exactly what I needed!', client: '– Alex K., USA' },
              { text: 'Nyxtrael delivered a stunning portfolio site on time!', client: '– Marina L., UK' },
              { text: 'The animations made my site stand out!', client: '– Daniel R., Germany' },
            ].map(({ text, client }, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="italic text-gray-300 leading-relaxed font-inter"
              >
                “{text}” <br />
                <span className="text-fuchsia-400 text-sm">{client}</span>
              </motion.blockquote>
            ))}
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
            aria-label="Navigate to contact page to start your web design project"
          >
            Start Your Dream Site
          </Link>
        </motion.div>
      </main>
    </>
  );
}