// NOTE: This file uses 'use client' so it must NOT export any server functions
'use client';

import Head from 'next/head';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import localFont from 'next/font/local';
import Image from 'next/image';
import { useState } from 'react';

const Mail = dynamic(() => import('lucide-react').then(mod => mod.Mail), { ssr: false });
const User = dynamic(() => import('lucide-react').then(mod => mod.User), { ssr: false });
const CheckCircle = dynamic(() => import('lucide-react').then(mod => mod.CheckCircle), { ssr: false });

const CustomFont = localFont({ src: '../../fonts/Inter-Black.woff2', display: 'swap' });

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
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
          poster="/images/stars-fallback.png"
          aria-hidden="true"
        >
          <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
        </video>

        <section className="max-w-4xl mx-auto text-center relative z-10 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-2">
            <Mail className="text-pink-400" aria-hidden="true" /> Contact
          </h1>
          <p className="text-lg italic text-purple-300 mb-2">Ready to bring your vision to life? Let’s weave some magic together. 🌟</p>
          <p className="text-sm text-neutral-400 mb-12">I’ll get back to you within 24 hours – let’s make something extraordinary! ✨</p>
        </section>

        <section id="contact-form" className="max-w-2xl mx-auto bg-[#2A2A3E]/50 p-8 rounded-xl shadow-md border border-[#3A3A4E] relative z-10 fade-in">
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
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50"
              >
                Message sent! I’ll get back to you soon 🌌
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <fieldset className="space-y-6">
              <legend className="sr-only">Contact Form</legend>

              <div>
                <label htmlFor="name" className="block text-sm mb-1">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-pink-400 w-5 h-5" aria-hidden="true" />
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name or studio name"
                    className={`w-full p-3 pl-10 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] ${errors.name ? 'ring-2 ring-pink-500' : 'focus:ring-2 focus:ring-pink-400'}`}
                    {...register('name')}
                  />
                </div>
                {errors.name && <p className="text-pink-400 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-1">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-pink-400 w-5 h-5" aria-hidden="true" />
                  <input
                    id="email"
                    type="email"
                    placeholder="Your contact email address"
                    className={`w-full p-3 pl-10 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] ${errors.email ? 'ring-2 ring-pink-500' : 'focus:ring-2 focus:ring-pink-400'}`}
                    {...register('email')}
                  />
                </div>
                {errors.email && <p className="text-pink-400 text-sm mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="service" className="block text-sm mb-1">Service</label>
                <select
                  id="service"
                  className="w-full p-3 rounded-md bg-[#2A2A3E] text-white focus:ring-2 focus:ring-pink-400"
                  {...register('service')}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Select a service</option>
                  <option value="illustration">Illustration</option>
                  <option value="web">Web Design</option>
                  <option value="video">Video Editing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {selectedService && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <label htmlFor="message" className="block text-sm mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell me more about your project"
                    className={`w-full p-3 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] resize-y min-h-[140px] ${errors.message ? 'ring-2 ring-pink-500' : 'focus:ring-2 focus:ring-pink-400'}`}
                    {...register('message')}
                  />
                  {errors.message && <p className="text-pink-400 text-sm mt-1">{errors.message.message}</p>}
                </motion.div>
              )}
            </fieldset>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-sm font-semibold shadow-md hover:shadow-pink-500/50 transition relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-400"
            >
              Let’s Conjure Your Vision 🌌
            </button>
          </form>
        </section>

        <style jsx>{`
          .fade-in {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            .fade-in {
              animation: none !important;
            }
          }
          @media (prefers-color-scheme: light) {
            :root {
              --bg-color: #ffffff;
              --text-color: #111111;
            }
            body {
              background-color: var(--bg-color);
              color: var(--text-color);
            }
          }
        `}</style>
      </main>
    </>
  );
}
