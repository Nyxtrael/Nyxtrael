'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../../context/ThemeContext';

// Service data
const service = {
  title: 'Animations & Illustrations',
  desc: 'Bring your brand to life with captivating animations and bespoke illustrations. From Lottie animations to vector art, we create visuals that engage and inspire.',
  image: '/images/services/animations-illustrations.jpg',
};

// Features data (pricing packages, add-ons, and benefits)
const features = [
  {
    title: 'Basic Animation (€120)',
    desc: 'A single Lottie or CSS animation for web or UI, with 1 revision.',
    icon: '/images/icons/basic-animation.svg',
  },
  {
    title: 'Illustration Pack (€200)',
    desc: 'Set of 3-5 custom vector illustrations or icons, with 2 revisions.',
    icon: '/images/icons/illustration-pack.svg',
  },
  {
    title: 'Premium Bundle (€350–500)',
    desc: 'Complex animation (e.g., video, UI sequence) plus 5+ illustrations, with 3 revisions.',
    icon: '/images/icons/premium-bundle.svg',
  },
  {
    title: 'Optional Add-ons',
    desc: 'Include source files (+€50), extra revisions (+€30 each), or rush delivery (+€100).',
    icon: '/images/icons/addons.svg',
  },
  {
    title: 'Engaging Visuals',
    desc: 'Animations and illustrations tailored to your brand’s style and audience.',
    icon: '/images/icons/visuals.svg',
  },
  {
    title: 'Cross-Platform',
    desc: 'Optimized for web, mobile, and social media with seamless integration.',
    icon: '/images/icons/cross-platform.svg',
  },
];

// Project showcase data
const projects = [
  {
    title: 'Lottie UI Animation',
    desc: 'Interactive Lottie animations for a SaaS dashboard.',
    image: '/images/projects/lottie-animation.jpg',
  },
  {
    title: 'Vector Character Set',
    desc: 'Custom character illustrations for a mobile app.',
    image: '/images/projects/character-set.jpg',
  },
  {
    title: 'Promo Video Animation',
    desc: 'Engaging video animation for a product launch campaign.',
    image: '/images/projects/promo-video.jpg',
  },
];

// FAQ data (including process details)
const faqs = [
  {
    question: 'What is the process for creating animations and illustrations?',
    answer: 'Select your package, share your vision, review initial sketches or storyboards, refine with revisions, and receive final deliverables.',
  },
  {
    question: 'What file formats will I receive?',
    answer: 'Animations in JSON (Lottie), MP4, or GIF; illustrations in SVG, PNG, or AI, based on your needs.',
  },
  {
    question: 'Can you integrate animations into my website?',
    answer: 'Yes, we provide integration support for platforms like Next.js, Webflow, or custom code.',
  },
  {
    question: 'How long does a project take?',
    answer: 'Most projects take 2-4 weeks, depending on complexity. Rush delivery is available.',
  },
  {
    question: 'Can I request changes after delivery?',
    answer: 'Additional revisions are available as an add-on, ensuring your complete satisfaction.',
  },
];

// Testimonials data
const testimonials = [
  { text: 'The Lottie animations added such flair to our app!', client: '– Sarah M., Canada' },
  { text: 'Nyxtrael’s illustrations perfectly captured our brand vibe!', client: '– Luca P., Italy' },
  { text: 'The promo video was a hit at our launch event!', client: '– Emma T., Australia' },
];

// JSON-LD schema
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Animations & Illustrations by Nyxtrael',
  url: 'https://nyxtrael.com/services/animations-illustrations',
  description: 'Custom animations and illustrations by Nyxtrael, including Lottie animations, vector art, and UI visuals.',
  provider: {
    '@type': 'Organization',
    name: 'Nyxtrael',
    url: 'https://nyxtrael.com',
    logo: 'https://nyxtrael.com/images/logo.png',
  },
  serviceType: 'Animations & Illustrations',
  areaServed: 'Global',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
};

export default function AnimationsIllustrations() {
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
        <title>Animations & Illustrations | Nyxtrael</title>
        <meta
          name="description"
          content="Custom animations and illustrations by Nyxtrael, including Lottie animations, vector art, and UI visuals starting at €120."
        />
        <meta property="og:title" content="Animations & Illustrations | Nyxtrael" />
        <meta
          property="og:description"
          content="Bring your brand to life with captivating animations and bespoke illustrations."
        />
        <meta property="og:image" content="/images/og-animations-illustrations.jpg" />
        <meta property="og:url" content="https://nyxtrael.com/services/animations-illustrations" />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preload" href="/images/animations-illustrations-bg.jpg" as="image" />
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
        aria-label="Animations & Illustrations Hero"
      >
        {useImageBackground ? (
          <Image
            src="/images/animations-illustrations-bg.jpg"
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
            <source src="/videos/animations-illustrations-bg.webm" type="video/webm" />
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
            src="/images/animations-illustrations-icon.png"
            alt="Animations & Illustrations Icon"
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
            aria-label="Navigate to contact page for an animations and illustrations quote"
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
            Why Choose Our Animations & Illustrations?
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
            Our Animation & Illustration Projects
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
            {testimonials.map(({ text, client }, i) => (
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
            aria-label="Navigate to contact page to start your animations and illustrations project"
          >
            Start Your Project
          </Link>
        </motion.div>
      </main>
    </>
  );
}