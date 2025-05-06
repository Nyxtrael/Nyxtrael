// src/app/contact/page.jsx
'use client';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import localFont from 'next/font/local';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Instagram, X as XIcon } from 'lucide-react';

const Mail = dynamic(() => import('lucide-react').then((mod) => mod.Mail), { ssr: false });
const User = dynamic(() => import('lucide-react').then((mod) => mod.User), { ssr: false });
const CheckCircle = dynamic(() => import('lucide-react').then((mod) => mod.CheckCircle), { ssr: false });

const CustomFont = localFont({ src: '../../fonts/Inter-Black.woff2', display: 'swap' });

const testimonialsList = [
  {
    logo: '/images/clients/pixelwitch-logo.png',
    quote: 'Amazing illustrations that brought my game to life! Nyxtrael exceeded my expectations.',
    author: 'Maria, Game Dev @PixelWitch',
  },
  {
    logo: '/images/clients/lumeneye-logo.png',
    quote: 'My portfolio site looks stunning and functions flawlessly. Highly recommend!',
    author: 'John, Photographer @LumenEye',
  },
  {
    logo: '/images/clients/alex-logo.png',
    quote: 'The video edits were cinematic and professional. It boosted my brand visibility!',
    author: 'Alex, Small Business Owner',
  },
];

export default function ContactPage() {
  const { register, handleSubmit, errors, onSubmit, submitted, setSubmitted } = useContactForm();
  const [selectedService, setSelectedService] = useState('');
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

  return (
    <>
      <Head>
        <title>Contact – Let’s Create Your Vision – Nyxtrael</title>
        <meta name="description" content="Contact Nyxtrael to start your project. I’ll respond within 24 hours." />
        <meta property="og:title" content="Contact Nyxtrael" />
        <meta property="og:description" content="Let’s bring your vision to life with Nyxtrael’s services." />
        <meta property="og:image" content="/images/contact-og.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`relative min-h-screen overflow-hidden text-white px-6 py-24 md:px-16 bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to-b,#1A1A2E,#2A2A3E)] ${CustomFont.className}`}>
        <video autoPlay muted loop playsInline poster="/images/stars-fallback.png" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-10 z-0">
          <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 pointer-events-none">
          {stars.map((s, i) => (
            <motion.div key={i} className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500" style={{ top: s.top, left: s.left }} animate={{ opacity: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: s.delay }} />
          ))}
        </div>

        <section className="max-w-lg mx-auto text-center relative z-10">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 flex justify-center items-center gap-2">
            <Mail className="text-pink-400" aria-hidden /> Contact
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg italic text-purple-300 mb-2">
            Ready to bring your vision to life?
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="text-sm text-neutral-400 mb-12">
            I’ll get back to you within 24 hours.
          </motion.p>
        </section>

        <section id="contact-form" className="max-w-md mx-auto bg-[#2A2A3E]/50 p-8 rounded-xl shadow-lg border border-[#3A3A4E] relative z-10">
          <AnimatePresence>
            {submitted && (
              <motion.div key="toast" initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.5 }} role="status" aria-live="polite" className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" /> Message sent!
                <button onClick={() => setSubmitted(false)} className="ml-4 text-white" aria-label="Dismiss">
                  <XIcon className="w-5 h-5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <fieldset className="space-y-6">
              <legend className="sr-only">Contact Form</legend>

              <div>
                <label htmlFor="name" className="block text-sm mb-1">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-pink-400 w-5 h-5" aria-hidden />
                  <input id="name" name="name" type="text" placeholder="Your name or studio" className={`w-full p-3 pl-10 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] focus:ring-2 focus:ring-pink-400 transition ${errors.name ? 'ring-2 ring-pink-500' : ''}`} {...register('name')} />
                </div>
                {errors.name && <p className="text-pink-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-pink-400 w-5 h-5" aria-hidden />
                  <input id="email" name="email" type="email" placeholder="Your contact email" className={`w-full p-3 pl-10 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] focus:ring-2 focus:ring-pink-400 transition ${errors.email ? 'ring-2 ring-pink-500' : ''}`} {...register('email')} />
                </div>
                {errors.email && <p className="text-pink-400 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-1">Service</label>
                <select id="service" name="service" className="w-full p-3 rounded-md bg-[#2A2A3E] text-white focus:ring-2 focus:ring-pink-400 transition" {...register('service')} onChange={(e) => setSelectedService(e.target.value)}>
                  <option value="">Select a service</option>
                  <option value="illustration">Custom Illustrations</option>
                  <option value="web">Web Design</option>
                  <option value="video">Motion & Video Editing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {selectedService && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} transition={{ duration: 0.3 }}>
                  <label htmlFor="message" className="block text-sm mb-1">Message</label>
                  <textarea id="message" name="message" rows={5} placeholder="Tell me about your idea or vision" className={`w-full p-3 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] resize-y min-h-[140px] focus:ring-2 focus:ring-pink-400 transition ${errors.message ? 'ring-2 ring-pink-500' : ''}`} {...register('message')} />
                  {errors.message && <p className="text-pink-400 text-sm mt-1">{errors.message.message}</p>}
                </motion.div>
              )}
            </fieldset>

            <button type="submit" className="w-full px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-sm font-semibold shadow-md hover:shadow-pink-500/50 transition focus:outline-none focus:ring-2 focus:ring-pink-400">
              Let’s Conjure Your Vision ✨
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
