'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
  const [stars, setStars] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Stars Animation
  useEffect(() => {
    const generatedStars = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  // Preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const projects = [
    {
      title: 'Anime Character – Sunroom Diaries, 2025',
      description: 'A serene anime character in a sunlit room.',
      src: '/images/sunroom-diaries/cover.png',
      href: '/Portfolio/sunroom-diaries',
      alt: 'Anime Character – Sunroom Diaries cover',
    },
    {
      title: 'Gothic Figure – Red Requiem, 2025',
      description: 'A gothic figure in a dark, mystical setting.',
      src: '/images/red-requiem/cover.png',
      href: '/Portfolio/red-requiem',
      alt: 'Gothic Figure – Red Requiem cover',
    },
    {
      title: 'Celestial Guardian – Astral Divines, 2025',
      description: 'A celestial guardian with cosmic energy.',
      src: '/images/astral-divines/cover.png',
      href: '/Portfolio/astral-divines',
      alt: 'Celestial Guardian – Astral Divines cover',
    },
  ];

  const testimonials = [
    {
      quote: "Simple, beautiful, and perfectly tailored to my needs.",
      author: "Anna, Freelance Artist",
      date: "April 8, 2025",
    },
    {
      quote: "Nyxtrael brought my vision to life with stunning visuals.",
      author: "Mark, Game Developer",
      date: "March 15, 2025",
    },
    {
      quote: "The website design was exactly what I needed.",
      author: "Lisa, Photographer",
      date: "February 20, 2025",
    },
  ];

  const caseStudies = [
    {
      title: "Sunroom Diaries – Ilustracja w 2 tygodnie",
      description: "Jak stworzyłam spokojną ilustrację anime dla klienta w rekordowym czasie.",
      href: "/blog/sunroom-diaries",
    },
    {
      title: "Red Requiem – Mroczny design strony",
      description: "Proces projektowania gotyckiej strony dla muzycznego projektu.",
      href: "/blog/red-requiem",
    },
  ];

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  // Parallax effect for Hero section
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <>
      {/* Preloader */}
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-[#1a0e2a] z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 1 }}
          >
            N
          </motion.div>
        </motion.div>
      )}

      {isLoaded && (
        <>
          <Head>
            <title>Nyxtrael – Professional Illustrations, Web Design & Video Editing</title>
            <meta
              name="description"
              content="Nyxtrael offers professional anime illustrations, responsive web design, and cinematic video editing services for personal and commercial projects."
            />
            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            {/* Open Graph */}
            <meta property="og:title" content="Nyxtrael – Professional Illustrations, Web Design & Video Editing" />
            <meta
              property="og:description"
              content="Nyxtrael offers professional anime illustrations, responsive web design, and cinematic video editing services for personal and commercial projects."
            />
            <meta property="og:image" content="/images/og-image.jpg" />
            <meta property="og:url" content="https://nyxtrael.com" />
            <meta property="og:type" content="website" />
            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Nyxtrael – Professional Illustrations, Web Design & Video Editing" />
            <meta
              name="twitter:description"
              content="Nyxtrael offers professional anime illustrations, responsive web design, and cinematic video editing services for personal and commercial projects."
            />
            <meta name="twitter:image" content="/images/og-image.jpg" />
            {/* Plausible Analytics */}
            <script defer data-domain="nyxtrael.com" src="https://plausible.io/js/plausible.js"></script>
            {/* Schema.org */}
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Nyxtrael",
                url: "https://nyxtrael.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://nyxtrael.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Nyxtrael",
                url: "https://nyxtrael.com",
                sameAs: [
                  "https://instagram.com/nyxtrael",
                  "https://x.com/nyxtrael",
                ],
                jobTitle: "Illustrator and Web Designer",
              })}
            </script>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                serviceType: "Illustration, Web Design, Video Editing",
                provider: {
                  "@type": "Person",
                  name: "Nyxtrael",
                },
                description: "Professional anime illustrations, responsive web design, and cinematic video editing services.",
              })}
            </script>
          </Head>

          <main id="main-content" className="relative min-h-screen bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)] text-white px-6 py-12 md:px-16 overflow-hidden">
            <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-600 text-white p-2 rounded">
              Skip to content
            </a>

            {/* Stars Animation */}
            <div className="absolute inset-0 z-0">
              {stars.map((star, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
                  style={{
                    width: '8px',
                    height: '8px',
                    top: star.top,
                    left: star.left,
                  }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* HERO SECTION */}
            <section className="relative min-h-[80vh] flex items-center justify-center text-center mb-20">
              <motion.video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
                poster="/images/hero-fallback.jpg"
                aria-hidden="true"
                style={{ y }}
              >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
              </motion.video>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-20 max-w-3xl px-6"
              >
                <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-4">Where AI Meets Myth</h1>
                <p className="text-neutral-300 text-lg md:text-xl mb-6">Professional Illustrations, Web Design, and Video Editing Services</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/Portfolio"
                    className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-pink-100 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    aria-label="View Nyxtrael's Portfolio"
                  >
                    View Portfolio
                  </Link>
                  <Link
                    href="/services"
                    className="bg-pink-600 hover:bg-pink-500 hover:scale-110 text-white font-semibold px-6 py-3 rounded-full shadow transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                    aria-label="Browse Nyxtrael's Services"
                  >
                    Browse Services
                  </Link>
                </div>
              </motion.div>
            </section>

            {/* ABOUT ME */}
            <motion.section
              className="text-center max-w-3xl mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-[#D0D0D0] leading-relaxed">
                I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Nyxtrael</span>, a self-taught designer focused on creating illustrations, websites, and video edits that stand out. I help clients bring their ideas to life through visual design.
              </p>
            </motion.section>

            {/* SERVICES */}
            <motion.section
              className="text-center max-w-4xl mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6">Nyxtrael offers...</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#D0D0D0] text-sm">
                <div className="hover:scale-105 transition">
                  <div className="text-5xl mb-2">🎨</div>
                  <p><strong>Visual Art</strong> – Custom illustrations for personal and commercial use.</p>
                </div>
                <div className="hover:scale-105 transition">
                  <div className="text-5xl mb-2">🖥️</div>
                  <p><strong>Web Design</strong> – Responsive, SEO-optimized websites to showcase your work.</p>
                </div>
                <div className="hover:scale-105 transition">
                  <div className="text-5xl mb-2">🎬</div>
                  <p><strong>Video Editing</strong> – Cinematic edits for reels, intros, and ads.</p>
                </div>
              </div>
              <Link
                href="/services"
                className="mt-6 inline-block text-pink-400 font-semibold px-4 py-2 rounded-full border border-pink-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 ease-in-out"
                aria-label="Learn more about Nyxtrael's services"
              >
                Learn More →
              </Link>
            </motion.section>

            {/* PORTFOLIO */}
            <motion.section
              className="text-center max-w-5xl mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                  <Link
                    key={project.href}
                    href={project.href}
                    aria-label={`View project ${project.title}`}
                    className="group relative block overflow-hidden rounded-lg transition-transform hover:scale-105"
                  >
                    <Image
                      src={project.src}
                      alt={project.alt}
                      width={800}
                      height={600}
                      priority={index === 0}
                      loading={index === 0 ? undefined : "lazy"}
                      className="h-[200px] md:h-[300px] w-full object-cover transition duration-300 group-hover:brightness-110 rounded"
                    />
                    <div className="p-3 bg-gradient-to-t from-black/80 to-black/30 absolute bottom-0 w-full">
                      <p className="text-sm text-white font-semibold">{project.title}</p>
                      <p className="text-xs text-neutral-300 mt-1">{project.description}</p>
                      <button className="mt-2 text-xs text-pink-400 hover:text-pink-300 hover:translate-x-1 transition">View Details</button>
                    </div>
                  </Link>
                ))}
              </div>
              <Link
                href="/Portfolio"
                className="mt-6 inline-block text-pink-400 font-semibold px-4 py-2 rounded-full border border-pink-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 ease-in-out"
                aria-label="View all Nyxtrael's projects"
              >
                View All Projects →
              </Link>
            </motion.section>

            {/* TESTIMONIALS (Karuzela) */}
            <motion.section
              className="text-center max-w-5xl mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6">What Clients Say</h2>
              <div className="relative">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <blockquote className="italic text-purple-300">"{testimonials[currentTestimonial].quote}"</blockquote>
                  <p className="mt-2 text-sm text-neutral-400">— {testimonials[currentTestimonial].author} · {testimonials[currentTestimonial].date}</p>
                </motion.div>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 hover:scale-125 hover:bg-pink-600 hover:rounded-full hover:w-10 hover:h-10 flex items-center justify-center transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 hover:scale-125 hover:bg-pink-600 hover:rounded-full hover:w-10 hover:h-10 flex items-center justify-center transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </motion.section>

            {/* CASE STUDIES */}
            <motion.section
              className="text-center max-w-5xl mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((study) => (
                  <Link
                    key={study.href}
                    href={study.href}
                    className="p-4 bg-[#2a2a3e] rounded-lg hover:bg-[#3a3a4e] hover:scale-105 transition-transform duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white">{study.title}</h3>
                    <p className="text-neutral-300 mt-2">{study.description}</p>
                  </Link>
                ))}
              </div>
            </motion.section>

            {/* CTA SECTION */}
            <section id="cta-section" className="text-center max-w-xl mx-auto mb-20 px-4">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Need a Custom Project?</h2>
              <p className="text-neutral-300 mb-6">Let's create something unique together!</p>
              <Link
                href="/contact"
                className="bg-pink-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 hover:animate-pulse text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400"
                aria-label="Contact Nyxtrael for a custom project"
              >
                Contact Me
              </Link>
            </section>

            {/* FOOTER */}
            <footer className="text-center text-neutral-400 pb-10">
              <div className="flex justify-center space-x-6">
                <a
                  href="mailto:nyxtrael@example.com"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label="Email Nyxtrael"
                >
                  <svg className="inline-block w-8 h-8 fill-white hover:fill-pink-400 transition-all duration-300" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com/nyxtrael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label="Visit Nyxtrael on Instagram"
                >
                  <svg className="inline-block w-8 h-8 fill-white hover:fill-pink-400 transition-all duration-300" viewBox="0 0 24 24">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/nyxtrael"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform duration-300"
                  aria-label="Visit Nyxtrael on X"
                >
                  <svg className="inline-block w-8 h-8 fill-white hover:fill-pink-400 transition-all duration-300" viewBox="0 0 24 24">
                    <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z"/>
                  </svg>
                </a>
              </div>
            </footer>
          </main>
        </>
      )}
    </>
  );
}