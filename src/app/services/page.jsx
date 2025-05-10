'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Paintbrush, Monitor, Film } from 'lucide-react';

export default function ServicesPage() {
  // ⭐ Parallax stars
  const [stars, setStars] = useState([]);
  useEffect(() => {
    setStars(
      Array.from({ length: 8 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  // 🛠 Services data
  const services = [
    {
      title: 'Custom Illustrations',
      desc: 'High-quality artwork for branding, games & fantasy projects—tailored to your vision.',
      href: '/services/illustrations',
      Icon: Paintbrush,
    },
    {
      title: 'Web Design',
      desc: 'Responsive, SEO-friendly websites to showcase your brand or portfolio with style.',
      href: '/services/web-design',
      Icon: Monitor,
    },
    {
      title: 'Motion & Video',
      desc: 'Cinematic video edits, reels & micro-interactions that elevate your storytelling.',
      href: '/services/video-editing',
      Icon: Film,
    },
  ];

  // 📸 Featured Works carousel
  const featuredWorks = [
    { title: 'Astral Divines Illustration', src: '/images/astral-divines-sample.jpg', alt: 'Astral Divines' },
    { title: 'Portfolio Website Design', src: '/images/web-design-sample.png', alt: 'Web Design Mockup', href: '/photographer' },
    { title: 'Astral Divines', src: '/images/astral-divines-sample.jpg', alt: 'Astral Divines', href: '/astral-divines' },
  ];
  const [currentWork, setCurrentWork] = useState(0);
  const nextWork = () => setCurrentWork((i) => (i + 1) % featuredWorks.length);
  const prevWork = () => setCurrentWork((i) => (i - 1 + featuredWorks.length) % featuredWorks.length);

  // 💬 Testimonials carousel
  const testimonials = [
    {
      quote: '“The illustrations brought my game to life… process was smooth from start to finish.”',
      author: 'Maria, Game Dev @PixelWitch',
      logo: '/images/clients/pixelwitch-logo.png',
    },
    {
      quote: '“My portfolio website looks amazing… delivered a design that exceeded my expectations.”',
      author: 'John, Photographer @LumenEye',
      logo: '/images/clients/lumeneye-logo.png',
    },
    {
      quote: '“The video edit was cinematic and professional—boosted my brand’s visibility.”',
      author: 'Alex, Small Business Owner',
      logo: '/images/clients/alex-logo.png',
    },
  ];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const nextTestimonial = () => setCurrentTestimonial((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);

  // 📬 Contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');
  const handleFormChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setFormError('Please fill in all fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Please enter a valid email address.');
      return;
    }
    setFormError('');
    setFormSuccess('Message sent successfully! I’ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Services – Nyxtrael | Web Design & Motion</title>
        <meta name="description" content="Nyxtrael’s services: illustrations, web design & motion." />
        <link rel="canonical" href="https://nyxtrael.com/services" />
      </Head>

      <main className="relative min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,105,180,0.2),transparent),linear-gradient(to_bottom,#1A1A2E,#2A2A3E)] overflow-hidden text-white">
        {/* Background video */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          aria-hidden="true"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Parallax stars */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((s,i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
              style={{ top: s.top, left: s.left }}
              animate={{ y: ['0%','5%','0%'], opacity: [0,1,0] }}
              transition={{ duration:4, repeat:Infinity, delay:s.delay }}
            />
          ))}
        </div>

        {/* ===== HERO ===== */}
        <section className="relative z-10 flex flex-col items-center text-center pt-24 pb-12 px-6 md:px-16">
          <motion.h1
            initial={{ opacity:0, y:-20 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity:0, y:10 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8, delay:0.2 }}
            className="text-lg text-gray-300 max-w-2xl mb-8"
          >
            Discover custom Illustrations, Responsive Web Design & Cinematic Motion—all crafted to bring your vision to life.
          </motion.p>
          <motion.div
            initial={{ opacity:0, scale:0.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:0.8, delay:0.4 }}
          >
            <Link href="/order" className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-3 rounded-full text-white font-semibold shadow-lg hover:scale-105 transform transition">
              Hire Me Today
            </Link>
          </motion.div>
        </section>

        {/* ===== SERVICES CARDS ===== */}
        <section className="relative z-10 max-w-6xl mx-auto px-6 md:px-0 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true }}
            variants={{
              hidden: {},
              visible:{ transition:{ staggerChildren:0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {services.map(({ title, desc, href, Icon }) => (
              <motion.div
                key={title}
                variants={{
                  hidden:{ opacity:0, y:20 },
                  visible:{ opacity:1, y:0 }
                }}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col hover:shadow-pink-500/30 hover:scale-105 transition"
              >
                <Icon className="w-12 h-12 text-gray-200 mb-4 group-hover:text-pink-400 transition-colors" />
                <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  {title}
                </h3>
                <p className="text-gray-300 flex-1 mb-4">{desc}</p>
                <Link href={href} className="text-pink-400 font-medium hover:underline">
                  View Details →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ===== FEATURED WORKS ===== */}
        <section className="relative z-10 max-w-4xl mx-auto px-6 md:px-0 py-12 text-center">
          <motion.h2
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
          >
            Featured Works
          </motion.h2>
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentWork}
                initial={{ opacity:0, x:50 }}
                animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x:-50 }}
                transition={{ duration:0.5 }}
                className="mx-auto max-w-md group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <Link href={featuredWorks[currentWork].href || '#'}>
                  <img
                    src={featuredWorks[currentWork].src}
                    alt={featuredWorks[currentWork].alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition"
                  />
                </Link>
                <div className="p-4 bg-black/60 text-white">
                  <p className="font-semibold">{featuredWorks[currentWork].title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevWork}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-pink-500 hover:text-white transition"
              aria-label="Previous work"
            >←</button>
            <button
              onClick={nextWork}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-pink-500 hover:text-white transition"
              aria-label="Next work"
            >→</button>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="relative z-10 max-w-3xl mx-auto px-6 md:px-0 py-12">
          <motion.h2
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 text-center"
          >
            What Clients Say
          </motion.h2>
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity:0, x:50 }}
                animate={{ opacity:1, x:0 }}
                exit={{ opacity:0, x:-50 }}
                transition={{ duration:0.5 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl mx-4 shadow-lg"
              >
                <img
                  src={testimonials[currentTestimonial].logo}
                  alt={testimonials[currentTestimonial].author}
                  className="mx-auto mb-4 w-16 h-16"
                />
                <p className="italic text-gray-300 mb-4">
                  {testimonials[currentTestimonial].quote}
                </p>
                <span className="text-gray-400 block text-center">
                  {testimonials[currentTestimonial].author}
                </span>
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-pink-500 hover:text-white transition"
              aria-label="Previous testimonial"
            >←</button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-pink-500 hover:text-white transition"
              aria-label="Next testimonial"
            >→</button>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section className="relative z-10 max-w-md mx-auto px-6 md:px-0 py-12">
          <motion.h2
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            className="text-2xl font-semibold mb-6 text-center"
          >
            Get in Touch
          </motion.h2>
          <form
            onSubmit={handleFormSubmit}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl space-y-4"
            name="contact-services"
            method="POST"
          >
            <input
              name="name" placeholder="Your Name"
              value={formData.name} onChange={handleFormChange}
              className="w-full p-3 bg-black/50 text-white placeholder-gray-500 rounded focus:ring-2 focus:ring-pink-400 transition"
              required
            />
            <input
              name="email" type="email" placeholder="Your Email"
              value={formData.email} onChange={handleFormChange}
              className="w-full p-3 bg-black/50 text-white placeholder-gray-500 rounded focus:ring-2 focus:ring-pink-400 transition"
              required
            />
            <textarea
              name="message" placeholder="Your Message"
              value={formData.message} onChange={handleFormChange}
              className="w-full p-3 bg-black/50 text-white placeholder-gray-500 rounded focus:ring-2 focus:ring-pink-400 transition h-32"
              required
            />
            {formError && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-red-400">{formError}</motion.p>}
            {formSuccess && <motion.p initial={{opacity:0}} animate={{opacity:1}} className="text-green-400">{formSuccess}</motion.p>}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:scale-105 transition"
            >
              Send Message
            </button>
          </form>
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
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="relative z-10 text-center text-gray-500 py-8">
          © 2025 Nyxtrael. All rights reserved.
        </footer>
      </main>
    </>
  );
}