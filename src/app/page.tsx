'use client';

import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../context/ThemeContext';
import { FaArrowUp } from 'react-icons/fa';

// Motion-wrapped Link
const MotionLink = motion(Link);

export default function Home() {
  const [stars, setStars] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const starCount = window.innerWidth < 768 ? 50 : 100;
      const arr = Array.from({ length: starCount }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        size: Math.random() * 3 + 1,
      }));
      setStars(arr);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          videoRef.current.play().catch((error) => console.error('Video play failed:', error));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    const t = setTimeout(() => setIsLoaded(true), 1500);
    return () => {
      clearTimeout(t);
      observer.disconnect();
    };
  }, []);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nyxtrael',
    jobTitle: 'Senior Web Designer',
    url: 'https://nyxtrael.com',
    sameAs: ['https://instagram.com/nyxtrael', 'https://x.com/nyxtrael'],
    description: 'Nyxtrael creates responsive, animated web experiences using Next.js, Tailwind, and Framer Motion.',
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Nyxtrael – Professional Web Design & Development</title>
        <meta
          name="description"
          content="Nyxtrael creates responsive, animated web experiences using Next.js, Tailwind, and Framer Motion."
        />
        <meta name="keywords" content="web design, web development, freelance, animations, illustrations" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Nyxtrael – Professional Web Design & Development" />
        <meta property="og:description" content="Responsive, animated web experiences with Next.js, Tailwind, and Framer Motion." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://nyxtrael.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nyxtrael.com/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </Head>

      {!isLoaded && (
        <motion.div
          className="fixed inset-0 bg-[#111827] flex items-center justify-center z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            className="text-6xl font-bold bg-gradient-to-r from-[#1E3A8A] to-[#6B21A8] bg-clip-text text-transparent"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", type: "spring", bounce: 0.5 }}
          >
            N
          </motion.div>
        </motion.div>
      )}

      {isLoaded && (
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Full-page Background Video */}
          <motion.div
            className="fixed inset-0 z-0"
            style={{ y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/images/video-poster.jpg"
              className="w-full h-full object-cover opacity-0"
              aria-hidden="true"
              onCanPlay={() => videoRef.current.classList.remove('opacity-0')}
            >
              <source src="/videos/hero-bg.webm" type="video/webm" />
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/70 to-[#111827]/30" aria-hidden="true"></div>
          </motion.div>

          {/* Stars in Background */}
          <div className="absolute inset-0 z-10">
            {stars.map((s, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full disable-motion"
                style={{ top: s.top, left: s.left, width: s.size, height: s.size, background: s.color }}
                animate={{
                  opacity: [0, 0.7, 0],
                  scale: [1, 1.5, 1],
                  y: [0, -10, 0],
                }}
                transition={{ duration: 2.5, repeat: Infinity, delay: s.delay }}
              />
            ))}
          </div>

          {/* Hero Section */}
          <section className="relative z-20 flex flex-col items-center justify-center text-center min-h-screen pt-24 pb-20 px-6 md:px-12">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut", type: "spring", bounce: 0.3 }}
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold font-playfair mb-4 bg-gradient-to-r from-[#1E3A8A] to-[#6B21A8] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50, rotate: -10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              >
                Welcome to Nyxtrael
              </motion.h1>
              <motion.p
                className={`mb-6 text-xl md:text-2xl font-inter text-white drop-shadow-lg`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
              >
                I create responsive, animated web experiences for creatives and businesses using Next.js, Tailwind, and Framer Motion.
              </motion.p>
              <div className="flex gap-6 justify-center">
                <MotionLink
                  href="/contact"
                  className="bg-gradient-to-r from-[#1E3A8A] to-[#6B21A8] text-white px-8 py-4 rounded-full font-semibold font-inter shadow-lg hover:shadow-xl transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
                  whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 20px #6B21A8' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                  aria-label="Contact Nyxtrael"
                >
                  Contact Me
                </MotionLink>
                <MotionLink
                  href="/portfolio"
                  className="bg-gradient-to-r from-[#6B21A8] to-[#1E3A8A] text-white px-8 py-4 rounded-full font-semibold font-inter shadow-lg hover:shadow-xl transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
                  whileHover={{ scale: 1.1, rotate: -5, boxShadow: '0 0 20px #1E3A8A' }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  aria-label="View Portfolio"
                >
                  View Portfolio
                </MotionLink>
              </div>
            </motion.div>
          </section>

          {/* About Me */}
          <section className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-[#2E1A47]/20 to-[#111827]/20 backdrop-blur-md rounded-3xl my-10" id="about-me">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-playfair mb-8 bg-gradient-to-r from-[#6B21A8] to-[#A855F7] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>
            <motion.div
              className="flex flex-col md:flex-row items-center gap-10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50, rotate: -10 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                viewport={{ once: true }}
              >
                <Image src="/images/Persona.png" alt="Nyxtrael Avatar" width={180} height={180} className="rounded-full border-4 border-[#A855F7] hover:border-[#6B21A8] transition-colors duration-300 shadow-lg" />
              </motion.div>
              <motion.div
                className={`space-y-6 text-white drop-shadow-lg`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-lg md:text-xl font-inter leading-relaxed">
                  I am an independent web designer and developer with over 5 years of experience. I specialize in crafting responsive websites with animations using Next.js, Tailwind CSS, and Framer Motion.
                </p>
                <div className="flex justify-center gap-6">
                  {['Next.js', 'Tailwind', 'Framer'].map((skill, idx) => (
                    <motion.span
                      key={skill}
                      className="text-[#A855F7] font-semibold text-lg hover:text-[#6B21A8] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Services */}
          <section className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-[#0D9488]/20 to-[#111827]/20 backdrop-blur-md rounded-3xl my-10" id="services">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-playfair mb-8 bg-gradient-to-r from-[#0D9488] to-[#2DD4BF] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              {[
                { title: 'UI/UX Design', desc: 'Stunning designs with seamless user experiences.' },
                { title: 'Animations', desc: 'Custom animations to captivate your audience.' },
                { title: 'Web Development', desc: 'Robust web solutions with Next.js and Tailwind.' },
              ].map((service, idx) => (
                <motion.div
                  key={service.title}
                  className="bg-[#F9FAFB]/20 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-2xl transform transition-all duration-500 border border-[#2DD4BF]/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1, rotate: 2, background: '#F9FAFB/30', borderColor: '#0D9488' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className={`text-xl md:text-2xl font-semibold mb-4 text-white`}>{service.title}</h3>
                  <p className={`text-base md:text-lg text-white`}>{service.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Portfolio */}
          <section className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-[#D97706]/20 to-[#111827]/20 backdrop-blur-md rounded-3xl my-10" id="portfolio">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-playfair mb-8 bg-gradient-to-r from-[#D97706] to-[#FBBF24] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
            >
              Portfolio
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              {[
                { title: 'E-Commerce Store', desc: 'Next.js store optimized for SEO.', href: '/portfolio/ecommerce', img: '/images/ecommerce.jpg' },
                { title: 'Photographer Site', desc: 'Responsive photo gallery.', href: '/portfolio/photographer', img: '/images/photographer.jpg' },
                { title: 'Agency Landing', desc: 'Dynamic agency landing page.', href: '/portfolio/agency', img: '/images/agency.jpg' },
              ].map((proj, idx) => (
                <motion.div
                  key={proj.title}
                  className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-[#FBBF24]/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, rotate: 1, borderColor: '#D97706' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Image src={proj.img} alt={proj.title} width={400} height={300} className="w-full h-56 object-cover transition-opacity duration-300 hover:opacity-90" loading="lazy" />
                  <motion.div className="p-6 bg-[#F9FAFB]/20 backdrop-blur-md">
                    <motion.h3
                      className={`text-lg md:text-xl font-semibold mb-2 text-white`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {proj.title}
                    </motion.h3>
                    <motion.p
                      className={`text-sm md:text-base text-white`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {proj.desc}
                    </motion.p>
                    <MotionLink
                      href={proj.href}
                      className="text-[#FBBF24] font-medium hover:text-[#D97706] mt-2 inline-block hover:underline focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
                      whileHover={{ scale: 1.1, textShadow: '0 0 10px #FBBF24' }}
                      transition={{ duration: 0.3 }}
                    >
                      View Details →
                    </MotionLink>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Testimonials */}
          <section className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-[#4338CA]/20 to-[#111827]/20 backdrop-blur-md rounded-3xl my-10" id="testimonials">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-playfair mb-8 bg-gradient-to-r from-[#4338CA] to-[#818CF8] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
            >
              Testimonials
            </motion.h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              {[
                { quote: 'Nyxtrael transformed our website with stunning designs!', author: 'Jane Doe, Creative Director' },
                { quote: 'Amazing development skills and quick turnaround!', author: 'John Smith, CEO' },
              ].map((test, idx) => (
                <motion.div
                  key={test.quote}
                  className="bg-[#F9FAFB]/20 backdrop-blur-md p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 border border-[#818CF8]/30 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, borderColor: '#4338CA' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.p
                    className={`text-base md:text-lg text-white`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {`"${test.quote}"`}
                  </motion.p>
                  <motion.p
                    className={`mt-4 font-semibold text-white`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {test.author}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Social Proof */}
          <section className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-[#B45309]/20 to-[#111827]/20 backdrop-blur-md rounded-3xl my-10" id="social-proof">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-playfair mb-8 bg-gradient-to-r from-[#B45309] to-[#F59E0B] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
            >
              Social Proof
            </motion.h2>
            <motion.div
              className="flex flex-wrap justify-center gap-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/images/client1.png" alt="Client 1" width={120} height={60} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/images/client2.png" alt="Client 2" width={120} height={60} className="opacity-70 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
              <motion.p
                className={`text-xl md:text-2xl text-white`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Over 20 completed projects
              </motion.p>
            </motion.div>
          </section>

          {/* CTA Section */}
          <section className="relative z-20 max-w-xl mx-auto px-6 md:px-12 py-20 text-center bg-gradient-to-b from-[#1E3A8A]/20 to-[#111827]/20 backdrop-blur-md rounded-3xl my-10" id="cta">
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-playfair mb-8 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", type: "spring", bounce: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to Collaborate?
            </motion.h2>
            <motion.p
              className={`mb-8 text-lg md:text-xl text-white drop-shadow-lg`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Let’s create something extraordinary together!
            </motion.p>
            <MotionLink
              href="/contact"
              className="bg-gradient-to-r from-[#2563EB] to-[#1E3A8A] text-white px-8 py-4 rounded-full font-semibold font-inter shadow-lg hover:shadow-2xl transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
              whileHover={{ scale: 1.1, rotate: 5, boxShadow: '0 0 30px #2563EB' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              Get in Touch
            </MotionLink>
          </section>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-[#1E3A8A] text-white p-3 rounded-full shadow-lg hover:bg-[#6B21A8] transition-colors duration-300 z-30 focus:outline-none focus:ring-2 focus:ring-fuchsia-400 focus:ring-offset-2"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      )}
    </>
  );
}