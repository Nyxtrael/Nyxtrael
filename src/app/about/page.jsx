'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  // ⭐ Hydratacja: gwiazdki tylko na kliencie
  const [mounted, setMounted] = useState(false);
  const [stars, setStars] = useState([]);
  useEffect(() => {
    setMounted(true);
    const arr = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(arr);
  }, []);

  // 🗣️ Testimonials
  const testimonials = [
    { quote: 'Incredible attention to detail and lightning-fast delivery.', author: 'Alex, Startup Founder' },
    { quote: 'The new site boosted our traffic by 40% in the first week.', author: 'Sam, Marketing Lead' },
    { quote: 'Nyxtrael’s animations made our brand stand out immediately.', author: 'Jamie, Creative Director' },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = useCallback(() => {
    setCurrentTestimonial(i => (i + 1) % testimonials.length);
  }, [testimonials.length]);
  const prevTestimonial = useCallback(() => {
    setCurrentTestimonial(i => (i - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);
  useEffect(() => {
    const iv = setInterval(nextTestimonial, 5000);
    return () => clearInterval(iv);
  }, [nextTestimonial]);

  // 🖼️ Notable Projects slider
  const projects = [
    {
      title: 'Anime Character – Sunroom Diaries, 2025',
      description: 'A serene anime character in a sunlit room, created for a client’s personal portfolio.',
      src: '/images/sunroom-diaries/cover.png',
      href: '/portfolio/sunroom-diaries',
      alt: 'Sunroom Diaries cover',
    },
    {
      title: 'Gothic Figure – Red Requiem, 2025',
      description: 'A gothic figure in a dark, mystical setting, designed for a music project.',
      src: '/images/red-requiem/cover.png',
      href: '/portfolio/red-requiem',
      alt: 'Red Requiem cover',
    },
  ];
  const [currentProject, setCurrentProject] = useState(0);
  const nextProject = () => setCurrentProject(i => (i + 1) % projects.length);
  const prevProject = () => setCurrentProject(i => (i - 1 + projects.length) % projects.length);

  // 📬 Form + Toast
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const [showToast, setShowToast] = useState(false);
  const handleFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setFormError('Please fill in all fields.');
      setFormSuccess('');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      setFormSuccess('');
      return;
    }
    setFormError('');
    setFormSuccess('Message sent successfully! I’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <>
      <Head>
        <title>About – Nyxtrael | Web Design & Motion</title>
        <meta
          name="description"
          content="Meet Nyxtrael: designer of custom web experiences, animations & illustrations."
        />
        <link rel="canonical" href="https://nyxtrael.com/about" />
        <link rel="sitemap" href="/sitemap.xml" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Nyxtrael',
          url: 'https://nyxtrael.com/about',
          sameAs: ['https://instagram.com/nyxtrael', 'https://x.com/nyxtrael'],
        }) }} />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `}} />
        {/* Hotjar Tracking */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1234567,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}} />
      </Head>

      

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-[80vh] overflow-hidden">
        <video
          autoPlay muted loop playsInline
          poster="/videos/Persona.png"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)]"
        />

        {mounted && stars.map((s, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
            style={{ top: s.top, left: s.left, animation: `twinkle 2s infinite ease-in-out`, animationDelay: `${s.delay}s` }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1, rotate: [0, 3, -3, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'mirror' }}
          className="relative z-10 mb-6 w-24 h-24"
        >
          <Image
            src="/images/persona.png"
            alt="Logo"
            width={96}
            height={96}
            className="rounded-full border-4 border-pink-400"
            loading="lazy"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 font-bold text-6xl md:text-7xl mb-2"
        >
          About{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Nyxtrael
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-xl text-gray-300 max-w-2xl"
        >
          Discover My Journey & Creative Process
        </motion.p>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 z-10"
        >
          <Link href="#main-content" className="text-pink-400" aria-label="Scroll to main content">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </motion.div>

        <style jsx>{`
          @keyframes twinkle { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
        `}</style>
      </section>

      {/* MAIN CONTENT */}
      <main id="main-content" className="relative px-6 py-12 md:px-16 space-y-20">
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)]" />

        {/* Story */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg leading-relaxed"
          >
            I’m{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Nyxtrael
            </span>, a <strong>self-taught</strong> designer passionate about blending creativity with functionality. My journey began five years ago…
          </motion.p>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-2xl font-semibold text-center mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Visual Artistry', desc: 'Custom illustrations.', icon: '🎨', href: '/services#art' },
              { title: 'Web Design', desc: 'SEO-friendly sites.', icon: '🖥️', href: '/services#web' },
              { title: 'Motion', desc: 'Video edits & micro-Interactions.', icon: '🎬', href: '/services#motion' },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 rounded-lg backdrop-blur-md"
              >
                <div className="text-5xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {s.title}
                </h3>
                <p className="mb-4">{s.desc}</p>
                <Link href={s.href} className="text-pink-400 hover:underline">
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">My Creative Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-500 opacity-60" />
            {[
              { step: 'Consultation', icon: '💬', desc: 'Rozmawiamy o Twojej wizji i potrzebach projektu.' },
              { step: 'Design', icon: '✍️', desc: 'Tworzę wizualne koncepcje i makiety do zatwierdzenia.' },
              { step: 'Delivery', icon: '🚀', desc: 'Przekazuję finalne pliki i wspieram przy integracji.' },
            ].map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className={`mb-16 flex ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}
              >
                <div className="bg-white/5 p-4 rounded-lg backdrop-blur-md max-w-xs">
                  <div className="text-3xl mb-2">{it.icon}</div>
                  <h3 className="font-semibold mb-1">{it.step}</h3>
                  <p className="text-sm">{it.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Work With Me */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">Why Work With Me</h2>
          {['Art meets functionality.', 'Listening to your vision.', 'No ghosting, only results.'].map((txt, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="mx-auto max-w-md p-4 bg-white/5 rounded-lg backdrop-blur-md flex items-center"
            >
              <span className="text-2xl mr-3 text-pink-400">⚡</span>
              <span>{txt}</span>
            </motion.div>
          ))}
        </section>

        {/* Testimonials */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-6">Client Testimonials</h2>
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.blockquote
                key={currentTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 p-8 rounded-lg backdrop-blur-md mx-4"
              >
                <p className="italic">“{testimonials[currentTestimonial].quote}”</p>
                <footer className="mt-4 text-right text-sm">
                  — {testimonials[currentTestimonial].author}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-pink-400 rounded-full"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-pink-400 rounded-full"
            >
              →
            </button>
          </div>
        </section>

        {/* Notable Projects */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Notable Projects</h2>
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-lg rounded-lg overflow-hidden shadow-lg"
              >
                <Link href={projects[currentProject].href} className="block">
                  <Image
                    src={projects[currentProject].src}
                    alt={projects[currentProject].alt}
                    width={800}
                    height={500}
                    className="w-full h-[300px] object-cover"
                    loading="lazy"
                  />
                  <div className="p-4 bg-white/10 backdrop-blur-md">
                    <h3 className="font-semibold">{projects[currentProject].title}</h3>
                    <p className="text-sm mb-2">{projects[currentProject].description}</p>
                    <span className="text-pink-400 hover:underline">View Details →</span>
                  </div>
                </Link>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevProject}
              aria-label="Previous project"
              className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-pink-400 rounded-full"
            >
              ←
            </button>
            <button
              onClick={nextProject}
              aria-label="Next project"
              className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white/10 hover:bg-pink-400 rounded-full"
            >
              →
            </button>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-md mx-auto text-center relative">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4 bg-white/5 p-6 rounded-lg backdrop-blur-md" noValidate>
            <input
              name="name"
              value={formData.name}
              onChange={handleFormChange}
              placeholder="Your Name"
              className="w-full p-3 rounded bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              aria-invalid={!!formError}
              aria-describedby={formError ? 'form-message' : undefined}
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleFormChange}
              placeholder="Your Email"
              className="w-full p-3 rounded bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              aria-invalid={!!formError}
              aria-describedby={formError ? 'form-message' : undefined}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleFormChange}
              placeholder="Your Message"
              className="w-full p-3 rounded h-32 bg-white text-black placeholder-gray-400 focus:ring-2 focus:ring-pink-400 focus:outline-none"
              aria-invalid={!!formError}
              aria-describedby={formError ? 'form-message' : undefined}
            />

            {formError && <p id="form-message" className="text-red-400" role="alert">{formError}</p>}
            {formSuccess && <p id="form-message" className="text-green-400" role="status">{formSuccess}</p>}
            <button
              type="submit"
              className="w-full py-3 bg-pink-500 rounded-full hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>

          {/* Toast */}
          <AnimatePresence>
            {showToast && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                className="fixed bottom-8 right-8 bg-green-500 text-white px-4 py-2 rounded shadow-lg"
                role="status"
              >
                Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Footer Social */}
        <footer className="text-center py-8 text-neutral-400 space-x-4">
          <div className="flex justify-center space-x-6 mb-4">
              <a
                href="mailto:nyxtrael@example.com"
                aria-label="Email Nyxtrael"
                className="p-2 rounded-full hover:scale-110 transition-transform"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white hover:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/nyxtrael"
                target="_blank"
                rel="noreferrer"
                aria-label="Nyxtrael on Instagram"
                className="p-2 rounded-full hover:scale-110 transition-transform"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white hover:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </a>
              <a
                href="https://x.com/nyxtrael"
                target="_blank"
                rel="noreferrer"
                aria-label="Nyxtrael on X"
                className="p-2 rounded-full hover:scale-110 transition-transform"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white hover:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z"/>
                </svg>
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()} Nyxtrael. All rights reserved.</p>
        </footer>

      </main>
    </>
  );
}
