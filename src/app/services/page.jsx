'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [stars, setStars] = useState([]);
  const [currentWork, setCurrentWork] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  useEffect(() => {
    const generatedStars = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  const TriangleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#FF69B4' }} />
          <stop offset="100%" style={{ stopColor: '#8B5CF6' }} />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M12 2L2 22h20L12 2z" fill="url(#gradient)" filter="url(#glow)" />
    </svg>
  );

  const featuredWorks = [
    {
      title: 'Sunroom Diaries Illustration',
      src: '/images/illustration-sample.jpg',
      alt: 'Sunroom Diaries Illustration',
    },
    {
      title: 'Portfolio Website Design',
      src: '/images/web-design-sample.jpg',
      alt: 'Portfolio Website Design',
    },
    {
      title: 'Promotional Video Edit',
      src: '/images/video-editing-sample.jpg',
      alt: 'Promotional Video Edit',
    },
  ];

  const testimonials = [
    {
      quote: "The illustrations brought my game to life! Nyxtrael perfectly captured the aesthetic I envisioned, and the process was smooth from start to finish.",
      author: "Maria, Game Dev @PixelWitch",
      logo: "/images/clients/pixelwitch-logo.png",
    },
    {
      quote: "My portfolio website looks amazing and works perfectly. Nyxtrael was responsive and delivered a design that exceeded my expectations.",
      author: "John, Photographer @LumenEye",
      logo: "/images/clients/lumeneye-logo.png",
    },
    {
      quote: "The video edit for my promo was cinematic and professional. It significantly boosted my brand’s visibility online.",
      author: "Alex, Small Business Owner",
      logo: "/images/clients/alex-logo.png",
    },
  ];

  const nextWork = () => setCurrentWork((prev) => (prev + 1) % featuredWorks.length);
  const prevWork = () => setCurrentWork((prev) => (prev - 1 + featuredWorks.length) % featuredWorks.length);
  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      <a href="#services-section" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-600 text-white p-2 rounded">
        Skip to content
      </a>

      <main id="services-section" className="relative min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] overflow-hidden scroll-smooth">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 focus:opacity-5"
          poster="/images/stars-fallback.jpg"
          aria-hidden="true"
          onFocus={(e) => e.target.pause()}
          onBlur={(e) => e.target.play()}
        >
          <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-0">
          {stars.map((star, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
              style={{ width: '8px', height: '8px', top: star.top, left: star.left }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: star.delay }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-bold mb-8 flex justify-center items-center gap-2">
              <TriangleIcon className="w-7 h-7 text-gradient" />
              Services
            </h1>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
              Discover Nyxtrael’s services: custom illustrations, responsive web design, and professional video editing for personal and commercial projects.
              By using our services, you agree to our <Link href="/terms" className="text-pink-400 underline hover:text-pink-300 z-10">Terms of Service</Link>.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Illustrations',
                desc: 'Custom illustrations for branding, games, and fantasy projects.',
                price: 'From €15 / image',
                icon: '🎨',
                href: '/services/illustrations',
              },
              {
                title: 'Web Design',
                desc: 'Responsive and dynamic websites for your portfolio or business.',
                price: 'From €90',
                icon: '🖥️',
                href: '/services/web-design',
              },
              {
                title: 'Video Editing',
                desc: 'Professional cuts, reels, intros and cinematic edits.',
                price: 'From €30 / edit',
                icon: '🎬',
                href: '/services/video-editing',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-[#2A2A3E]/50 border border-[#3A3A4E] p-8 rounded-2xl shadow-md hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-purple-600/10 hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex flex-col cursor-pointer z-10"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="text-xl font-semibold text-pink-400">{service.title}</h3>
                </div>
                <p className="text-neutral-300 mb-3">{service.desc}</p>
                <p className="text-fuchsia-400 font-semibold mb-4">{service.price}</p>
                <Link href={service.href} className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-semibold z-10">
                  View Details →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Link href="/order">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-pink-500 hover:to-purple-600 px-8 py-4 rounded-full text-white font-semibold shadow-md hover:shadow-pink-500/50 hover:scale-110 hover:animate-pulse transition-all duration-300 ease-in-out z-10">
                Start Your Project
              </button>
            </Link>
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h2 className="text-3xl font-bold mb-8 flex justify-center items-center gap-2">
              <TriangleIcon className="w-7 h-7 text-gradient" />
              Featured Works
            </h2>
            <div className="relative">
              <motion.div
                key={currentWork}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="group relative block overflow-hidden rounded-lg transition-transform hover:scale-105 mx-auto max-w-md"
              >
                <Image
                  src={featuredWorks[currentWork].src}
                  alt={featuredWorks[currentWork].alt}
                  width={400}
                  height={300}
                  className="h-[300px] w-full object-cover transition duration-300 group-hover:brightness-110 rounded"
                />
                <div className="p-3 bg-gradient-to-t from-black/80 to-black/30 absolute bottom-0 w-full">
                  <p className="text-sm text-white font-semibold">{featuredWorks[currentWork].title}</p>
                </div>
              </motion.div>
              <button
                onClick={prevWork}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 hover:scale-125 hover:bg-pink-600 hover:rounded-full hover:w-10 hover:h-10 flex items-center justify-center transition-all duration-300 z-10"
                aria-label="Previous work"
              >
                ←
              </button>
              <button
                onClick={nextWork}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 hover:scale-125 hover:bg-pink-600 hover:rounded-full hover:w-10 hover:h-10 flex items-center justify-center transition-all duration-300 z-10"
                aria-label="Next work"
              >
                →
              </button>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h2 className="text-3xl font-bold mb-8 flex justify-center items-center gap-2">
              <TriangleIcon className="w-7 h-7 text-gradient" />
              What Clients Say
            </h2>
            <div className="relative max-w-2xl mx-auto">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="transition rounded p-6 bg-[#1e162f] shadow-md hover:shadow-pink-500/20"
              >
                <Image
                  src={testimonials[currentTestimonial].logo}
                  alt={`${testimonials[currentTestimonial].author} logo`}
                  width={50}
                  height={50}
                  className="w-12 h-12 object-contain mx-auto mb-4"
                />
                <p className="text-neutral-300 italic mb-4">“{testimonials[currentTestimonial].quote}”</p>
                <span className="block text-neutral-400 text-sm">{testimonials[currentTestimonial].author}</span>
              </motion.div>
              <button
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 hover:scale-125 hover:bg-pink-600 hover:rounded-full hover:w-10 hover:h-10 flex items-center justify-center transition-all duration-300 z-10"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-pink-400 hover:scale-125 hover:bg-pink-600 hover:rounded-full hover:w-10 hover:h-10 flex items-center justify-center transition-all duration-300 z-10"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </motion.section>

          <section className="text-center max-w-xl mx-auto mt-32 mb-24">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form
              name="contact-services"
              method="POST"
              data-netlify="true"
              onSubmit={handleFormSubmit}
              className="bg-white/5 p-6 rounded-lg"
            >
              <input type="hidden" name="form-name" value="contact-services" />
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your Message"
                  className="w-full p-3 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 h-32"
                  required
                />
                {formError && <p className="text-red-400 text-sm">{formError}</p>}
                {formSuccess && <p className="text-green-400 text-sm">{formSuccess}</p>}
                <button
                  type="submit"
                  className="w-full bg-pink-600 font-semibold px-6 py-3 rounded-full shadow hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 hover:animate-pulse text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-pink-400 z-10"
                >
                  Send Message
                </button>
              </div>
            </form>
            <Link
              href="/contact"
              className="mt-4 inline-block text-pink-400 font-semibold px-4 py-2 rounded-full border border-pink-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:text-white hover:scale-110 hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 ease-in-out z-10"
              aria-label="Contact Nyxtrael for a custom project"
            >
              Or Contact Me Directly →
            </Link>
          </section>
        </div>

        <footer className="text-center text-neutral-400 pb-10">
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:nyxtrael@example.com"
              className="hover:scale-110 transition-transform duration-300 z-10"
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
              className="hover:scale-110 transition-transform duration-300 z-10"
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
              className="hover:scale-110 transition-transform duration-300 z-10"
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
  );
}