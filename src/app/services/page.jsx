'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(generatedStars);
  }, []);

  // Reusable TriangleIcon component with glow effect
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

  return (
    <>
      {/* Skip link */}
      <a href="#services-section" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-600 text-white p-2 rounded">
        Skip to content
      </a>

      <main id="services-section" className="relative min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] overflow-hidden scroll-smooth">
        {/* Background animation */}
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

        {/* Migoczące gwiazdki */}
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

        {/* Main container */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Main heading */}
            <h1 className="text-5xl font-bold mb-8 flex justify-center items-center gap-2">
              <TriangleIcon className="w-7 h-7 text-gradient" />
              Services
            </h1>

            {/* Main description */}
            <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
              Discover Nyxtrael’s services: custom illustrations, responsive web design, and professional video editing for personal and commercial projects.
              By using our services, you agree to our <Link href="/terms" className="text-pink-400 underline hover:text-pink-300">Terms of Service</Link>.
            </p>
          </motion.div>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Illustrations',
                desc: 'Custom illustrations for branding, games, and fantasy projects.',
                price: 'From €15 / image',
                icon: <TriangleIcon className="w-6 h-6 text-gradient" />,
                href: '/services/illustrations',
              },
              {
                title: 'Web Design',
                desc: 'Responsive and dynamic websites for your portfolio or business.',
                price: 'From €90',
                icon: <TriangleIcon className="w-6 h-6 text-gradient" />,
                href: '/services/web-design',
              },
              {
                title: 'Video Editing',
                desc: 'Professional cuts, reels, intros and cinematic edits.',
                price: 'From €30 / edit',
                icon: <TriangleIcon className="w-6 h-6 text-gradient" />,
                href: '/services/video-editing',
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-[#2A2A3E]/50 border border-[#3A3A4E] p-8 rounded-2xl shadow-md hover:shadow-pink-500/30 transition-transform hover:scale-105 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-pink-400">{service.title}</h3>
                </div>
                <p className="text-neutral-300 mb-3">{service.desc}</p>
                <p className="text-fuchsia-400 font-semibold mb-4">{service.price}</p>
                <Link href={service.href} className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-semibold">
                  View Details →
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Start project button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <Link href="/order">
              <button className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-8 py-4 rounded-full text-white font-semibold shadow-md hover:shadow-pink-500/30 transition transform hover:scale-105">
                Start Your Project
              </button>
            </Link>
          </motion.div>

          {/* Featured Works */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative bg-[#1e162f] rounded-2xl p-4 hover:shadow-pink-500/30 transition-transform hover:scale-105 shadow-md overflow-hidden"
              >
                <Image
                  src="/images/illustration-sample.jpg"
                  alt="Sunroom Diaries Illustration"
                  width={400}
                  height={300}
                  className="object-cover rounded-xl w-full h-auto aspect-[4/3]"
                />
                <p className="text-neutral-300 mt-4">Sunroom Diaries Illustration</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative bg-[#1e162f] rounded-2xl p-4 hover:shadow-pink-500/30 transition-transform hover:scale-105 shadow-md overflow-hidden"
              >
                <Image
                  src="/images/web-design-sample.jpg"
                  alt="Portfolio Website Design"
                  width={400}
                  height={300}
                  className="object-cover rounded-xl w-full h-auto aspect-[4/3]"
                />
                <p className="text-neutral-300 mt-4">Portfolio Website Design</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative bg-[#1e162f] rounded-2xl p-4 hover:shadow-pink-500/30 transition-transform hover:scale-105 shadow-md overflow-hidden"
              >
                <Image
                  src="/images/video-editing-sample.jpg"
                  alt="Promotional Video Edit"
                  width={400}
                  height={300}
                  className="object-cover rounded-xl w-full h-auto aspect-[4/3]"
                />
                <p className="text-neutral-300 mt-4">Promotional Video Edit</p>
              </motion.div>
            </div>
          </motion.section>

          {/* Testimonials */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative bg-[#1e162f] rounded-2xl p-6 shadow-md hover:shadow-pink-500/20 transition-transform hover:scale-105"
              >
                <p className="text-neutral-300 italic mb-4">"The illustrations brought my game to life!"</p>
                <span className="text-neutral-400 text-sm">– Maria, Game Dev @PixelWitch</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative bg-[#1e162f] rounded-2xl p-6 shadow-md hover:shadow-pink-500/20 transition-transform hover:scale-105"
              >
                <p className="text-neutral-300 italic mb-4">"My portfolio website looks amazing and works perfectly."</p>
                <span className="text-neutral-400 text-sm">– John, Photographer @LumenEye</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative bg-[#1e162f] rounded-2xl p-6 shadow-md hover:shadow-pink-500/20 transition-transform hover:scale-105"
              >
                <p className="text-neutral-300 italic mb-4">"The video edit for my promo was cinematic and professional."</p>
                <span className="text-neutral-400 text-sm">– Alex, Small Business Owner</span>
              </motion.div>
            </div>
          </motion.section>

         
        </div>
      </main>
    </>
  );
}