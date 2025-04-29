'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function About() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <>
      <Head>
        <title>About Nyxtrael – Designer Profile</title>
        <meta
          name="description"
          content="Learn about Nyxtrael, a self-taught designer specializing in illustrations, web design, and video editing."
        />
      </Head>

      <main className="relative min-h-screen px-6 py-24 md:px-16 text-white bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to_bottom,#1A1A2E,#2A2A3E)] overflow-hidden scroll-smooth">
        
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          onFocus={(e) => e.target.pause()}
          onBlur={(e) => e.target.play()}
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0 focus:opacity-5"
          poster="/images/stars-fallback.jpg"
          aria-hidden="true"
        >
          <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
        </video>

        {/* Stars */}
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

        {/* Avatar */}
        <section className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
            <Image
              src="/images/persona.png"
              alt="Stylized illustration representing Nyxtrael"
              width={128}
              height={128}
              className="w-32 h-32 object-cover rounded-full border-4 border-pink-500 shadow-lg mb-6"
            />
          </motion.div>
          <h1 className="text-4xl font-bold mb-2">About Nyxtrael</h1>
          <p className="text-gray-300 text-lg leading-relaxed">Discover My Journey and Creative Process</p>
        </section>

        {/* Description */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-white text-lg leading-[1.6]">
            I’m <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Nyxtrael</span>, a self-taught designer passionate about blending creativity with functionality in every project. Let’s create something impactful together.
          </p>
        </motion.section>

        {/* Services */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold mb-6">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-100 text-base">
            {['Visual Artistry', 'Digital Alchemy', 'Memory in Motion'].map((title, idx) => (
              <div key={idx} className="hover:scale-105 transition">
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">{title}</h3>
                <p>
                  {title === 'Visual Artistry' ? 'Custom illustrations for personal and commercial use.' :
                   title === 'Digital Alchemy' ? 'Responsive SEO-optimized websites.' :
                   'Video edits for reels and promotional content.'}
                </p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Creative Process */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold mb-4">My Creative Process</h2>
          <ul className="text-gray-100 text-lg leading-relaxed space-y-4">
            {['Consultation', 'Design', 'Delivery'].map((item, idx) => (
              <motion.li key={idx} whileHover={{ scale: 1.05 }} className="p-4 rounded-lg bg-white/5">
                <svg className="inline-block w-6 h-6 mr-2" viewBox="0 0 24 24" fill="url(#gradient)">
                  <path d="M12 2L2 22h20L12 2z" />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{ stopColor: '#FF69B4' }} />
                      <stop offset="100%" style={{ stopColor: '#8B5CF6' }} />
                    </linearGradient>
                  </defs>
                </svg>
                <strong>{item}</strong> – {item === 'Consultation' ? 'We discuss your needs and vision.' : item === 'Design' ? 'I create a draft and refine it.' : 'Final delivery, ready for launch.'}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Why Me */}
        <motion.section initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold mb-4">Why Work With Me</h2>
          <ul className="text-gray-100 space-y-4 text-lg">
            {['Art meets functionality.', 'Listening to your vision.', 'No ghosting, only results.'].map((text, idx) => (
              <motion.li key={idx} whileHover={{ scale: 1.05 }} className="p-4 rounded-lg bg-white/5">
                <svg className="inline-block w-6 h-6 mr-2" viewBox="0 0 24 24" fill="url(#gradient)">
                  <path d="M12 2L2 22h20L12 2z" />
                </svg>
                {text}
              </motion.li>
            ))}
          </ul>
        </motion.section>

        {/* Testimonials */}
        <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl font-semibold mb-6">Client Testimonials</h2>
          <div className="space-y-6 text-gray-100 text-base">
            {[
              { quote: "Amazing website for my portfolio!", author: "— John, Photographer @LumenEye" },
              { quote: "Perfect illustrations for my game.", author: "— Maria, Game Dev @Pixel Witch" }
            ].map((item, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className="transition rounded p-4 bg-white/5">
                <p>“{item.quote}”</p>
                <span className="block text-sm text-neutral-400 mt-2">{item.author}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <section className="text-center max-w-xl mx-auto mb-24">
          <Link href="/contact" className="relative inline-block px-8 py-4 text-white font-bold rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 shadow-xl transition">
            Contact Me – Let's Talk
          </Link>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-neutral-500 border-t border-white/10 pt-8 pb-10">
          <div className="flex justify-center space-x-8 mb-4">
            <motion.a whileTap={{ scale: 0.9 }} href="mailto:nyxtrael@example.com" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-400 transition">
              Email
            </motion.a>
            <motion.a whileTap={{ scale: 0.9 }} href="https://instagram.com/nyxtrael" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-400 transition">
              Instagram
            </motion.a>
            <motion.a whileTap={{ scale: 0.9 }} href="https://x.com/nyxtrael" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-pink-400 transition">
              X (Twitter)
            </motion.a>
          </div>

          <div className="mt-6">
            {['FAQ', 'Terms of Service', 'Refund Policy', 'Privacy Note', 'Contact'].map((link, idx) => (
              <Link key={idx} href={`/${link.toLowerCase().replace(/ /g, '-')}`} className="hover:text-pink-400 transition mx-2">
                {link}
              </Link>
            ))}
          </div>

          <p className="mt-4">© 2025 Nyxtrael</p>
        </footer>

      </main>
    </>
  );
}
