'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
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

  return (
    <>
      <Head>
        <title>Nyxtrael – Professional Illustrations, Web Design & Video Editing</title>
        <meta
          name="description"
          content="Nyxtrael offers professional anime illustrations, responsive web design, and cinematic video editing services for personal and commercial projects."
        />
      </Head>

      

      <main id="main-content" className="relative min-h-screen bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)] text-white px-6 py-12 md:px-16 overflow-hidden">
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
            />
          ))}
        </div>

        {/* HERO SECTION */}
        <section className="relative min-h-[80vh] flex items-center justify-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-20 max-w-3xl px-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow mb-4">Where AI Meets Myth</h1>
            <p className="text-neutral-300 text-lg md:text-xl mb-6">Professional Illustrations, Web Design, and Video Editing Services</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/Portfolio" className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-pink-500">View Portfolio</Link>
              <Link href="/services" className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-pink-400">Browse Services</Link>
            </div>
          </motion.div>
        </section>

        {/* ABOUT ME */}
        <motion.section className="text-center max-w-3xl mx-auto mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-[#D0D0D0] leading-relaxed">I'm <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Nyxtrael</span>, a self-taught designer focused on creating illustrations, websites, and video edits that stand out. I help clients bring their ideas to life through visual design.</p>
        </motion.section>

        {/* SERVICES */}
        <motion.section className="text-center max-w-4xl mx-auto mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-semibold mb-6">Nyxtrael offers...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[#A0A0A0] text-sm">
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
        </motion.section>

        {/* PORTFOLIO */}
        <motion.section className="text-center max-w-5xl mx-auto mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
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
        </motion.section>

        {/* TESTIMONIAL */}
        <motion.section className="text-center max-w-xl mx-auto mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <blockquote className="italic text-purple-300">"Simple, beautiful, and perfectly tailored to my needs."</blockquote>
          <p className="mt-2 text-sm text-neutral-400">&mdash; Anna, Freelance Artist · April 8, 2025</p>
        </motion.section>

        {/* CTA SECTION */}
        <section className="text-center max-w-xl mx-auto mb-20 px-4">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Need a Custom Project?</h2>
          <p className="text-gray-300 mb-6">Let's create something unique together!</p>
          <Link href="/contact" className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-pink-400">Contact Me</Link>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-xs text-neutral-500 pb-10">
          <Link href="/privacy" className="hover:text-pink-400 transition mx-2">Privacy Note</Link>|
          <Link href="/contact" className="hover:text-pink-400 transition mx-2">Contact</Link>
        </footer>
      </main>
    </>
  );
}