// NOTE: This file uses 'use client' so it must NOT export any server functions
'use client';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import localFont from 'next/font/local';
import Image from 'next/image';
import { useState } from 'react';
import { Instagram, X } from 'lucide-react';

const Mail = dynamic(() => import('lucide-react').then(mod => mod.Mail), { ssr: false });
const User = dynamic(() => import('lucide-react').then(mod => mod.User), { ssr: false });
const CheckCircle = dynamic(() => import('lucide-react').then(mod => mod.CheckCircle), { ssr: false });

const CustomFont = localFont({ src: '../../fonts/Inter-Black.woff2', display: 'swap' });

const testimonialsList = [
  {
    logo: '/images/clients/pixelwitch-logo.png',
    quote: 'Amazing illustrations that brought my game to life! Nyxtrael exceeded my expectations.',
    author: 'Maria, Game Dev @PixelWitch'
  },
  {
    logo: '/images/clients/lumeneye-logo.png',
    quote: 'My portfolio site looks stunning and functions flawlessly. Highly recommend!',
    author: 'John, Photographer @LumenEye'
  }
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    errors,
    onSubmit,
    submitted,
    setSubmitted,
  } = useContactForm();

  const [selectedService, setSelectedService] = useState('');

  return (
    <>
      <Head>
        <title>Contact – Let’s Create Your Vision – Nyxtrael</title>
        <meta name="description" content="Contact Nyxtrael to start your web design, illustration, or video editing project. I’ll respond within 24 hours to bring your vision to life." />
        <meta property="og:title" content="Contact Nyxtrael" />
        <meta property="og:description" content="Let’s bring your vision to life with Nyxtrael’s creative services." />
        <meta property="og:image" content="/images/contact-og.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] text-white px-6 py-24 md:px-16 relative overflow-hidden ${CustomFont.className}`}>  
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
          poster="/images/stars-fallback.png"
          aria-hidden="true"
        >
          <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
        </video>

        {/* Hero */}
        <section className="max-w-lg mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 flex justify-center items-center gap-2"
          >
            <Mail className="text-pink-400" aria-hidden="true" /> Contact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg italic text-purple-300 mb-2"
          >
            Ready to bring your vision to life? Let’s weave some magic together. 🌟
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm text-neutral-400 mb-4"
          >
            I’ll get back to you within 24 hours – let’s make something extraordinary! ✨
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xs text-neutral-500 mb-12"
          >
            (Expect a reply within 24h after submission)
          </motion.p>
        </section>

        {/* Form Section */}
        <section id="contact-form" className="max-w-md mx-auto bg-[#2A2A3E]/50 p-8 rounded-xl shadow-lg border border-[#3A3A4E] relative z-10">
          <AnimatePresence>
            {submitted && (
              <motion.div
                key="toast"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 40, opacity: 0 }}
                transition={{ duration: 0.5 }}
                role="status"
                aria-live="polite"
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                Message sent! I’ll get back to you soon 🌌
                <button
                  onClick={() => setSubmitted(false)}
                  className="ml-4 text-white"
                  aria-label="Dismiss"
                >
                  Dismiss
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <fieldset className="space-y-6">
              <legend className="sr-only">Contact Form</legend>

              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm mb-1">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-pink-400 w-5 h-5" aria-hidden="true" />
                  <input
                    id="name" type="text"
                    placeholder="Enter your name or studio name"
                    className={`w-full p-3 pl-10 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] focus:ring-2 focus:ring-pink-400 focus:shadow-lg transition`}                    {...register('name')}
                  />
                </div>
                {errors.name && <p className="text-pink-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-pink-400 w-5 h-5" aria-hidden="true" />
                  <input
                    id="email" type="email"
                    placeholder="Your contact email address"
                    className={`w-full p-3 pl-10 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] focus:ring-2 focus:ring-pink-400 focus:shadow-lg transition`}
                    {...register('email')}
                  />
                </div>
                {errors.email && <p className="text-pink-400 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm mb-1">Service</label>
                <select
                  id="service"
                  className="w-full p-3 rounded-md bg-[#2A2A3E] text-white focus:ring-2 focus:ring-pink-400 focus:shadow-lg transition"
                  {...register('service')}
                  onChange={e => setSelectedService(e.target.value)}
                >
                  <option value="">Select a service</option>
                  <option value="illustration">Custom Illustrations</option>
                  <option value="web">Web Design</option>
                  <option value="video">Motion & Video Editing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              {selectedService && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm mb-1">Message</label>
                  <textarea
                    id="message" rows={5}
                    placeholder="Tell me about your idea, vision or any details you'd like to include"
                    className={`w-full p-3 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] resize-y min-h-[140px] focus:ring-2 focus:ring-pink-400 focus:shadow-lg transition`}
                    {...register('message')}
                  />
                  {errors.message && <p className="text-pink-400 text-sm mt-1">{errors.message.message}</p>}
                </motion.div>
              )}
            </fieldset>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-sm font-semibold shadow-md hover:shadow-pink-500/50 transition-all relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Let’s Conjure Your Vision ✨
            </button>
          </form>
        </section>

        {/* Other Contact Methods */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 text-center relative z-10"
        >
          <h2 className="text-xl font-semibold mb-2">Prefer Direct Contact?</h2>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="mailto:nyxtrael@example.com" className="hover:text-pink-400 transition" aria-label="Email">
              <Mail />
            </a>
            <a href="https://instagram.com/nyxtrael" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://x.com/nyxtrael" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition" aria-label="X">
              <X />
            </a>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="mt-16 relative z-10"
        >
          <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            What Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonialsList.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group bg-white/10 backdrop-blur-md rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition"                
              >
                <Image src={t.logo} alt={t.author} width={60} height={60} className="mb-4" />
                <p className="italic text-neutral-300 mb-2">“{t.quote}”</p>
                <span className="text-neutral-400 text-sm">{t.author}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="mt-16 text-center text-neutral-400 space-y-8 relative z-10">
          <div>
            <h3 className="mb-2 font-semibold">Quick Links</h3>
            <div className="flex justify-center gap-6 text-sm">
              <a href="/faq" className="hover:text-pink-400 transition">FAQ</a>
              <a href="/terms" className="hover:text-pink-400 transition">Terms of Service</a>
              <a href="/privacy" className="hover:text-pink-400 transition">Privacy Policy</a>
              <a href="/refund" className="hover:text-pink-400 transition">Refund Policy</a>
              <a href="/contact" className="hover:text-pink-400 transition">Contact</a>
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-semibold">Newsletter</h3>
            <form className="inline-flex" onSubmit={e => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-full bg-neutral-800 text-white focus:outline-none focus:shadow-lg transition" required />
              <button type="submit" className="px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-r-full text-white hover:scale-105 transition-all">Subscribe</button>
            </form>
          </div>
          <div className="flex justify-center gap-6 text-2xl">
            <a href="mailto:nyxtrael@example.com" aria-label="Email" className="hover:text-pink-400 transition"><Mail /></a>
            <a href="https://instagram.com/nyxtrael" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-400 transition"><Instagram /></a>
            <a href="https://x.com/nyxtrael" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-pink-400 transition"><X /></a>
          </div>
          <p className="text-xs">© 2025 Nyxtrael</p>
        </footer>

        <style jsx>{`
          @media (prefers-reduced-motion: reduce) {
            * { animation: none !important; }
          }
        `}</style>
      </main>
    </>
  );
}
