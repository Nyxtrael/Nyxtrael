'use client';

import { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// Motion-wrapped Link
const MotionLink = motion(Link);

// Dane poza komponentem
const projects = [
  {
    title: 'Sunroom Diaries – Advanced Landing Page',
    description: 'Built a responsive landing page with parallax and animations in under 48h.',
    src: '/images/sunroom-diaries/cover.png',
    href: '/portfolio/sunroom-diaries',
    alt: 'Sunroom Diaries landing page',
  },
  {
    title: 'Red Requiem – Dark Theme Web App',
    description: 'Designed and implemented a dark-mode-first web app for a music project.',
    src: '/images/red-requiem/cover.png',
    href: '/portfolio/red-requiem',
    alt: 'Red Requiem web app',
  },
  {
    title: 'Astral Divines – E-Commerce Concept',
    description: 'Created a high-conversion e-commerce demo with dynamic filtering.',
    src: '/images/astral-divines/cover.png',
    href: '/portfolio/astral-divines',
    alt: 'Astral Divines e-commerce concept',
  },
];

const testimonials = [
  { quote: '“Incredible attention to detail and lightning-fast delivery.”', author: 'Alex, Startup Founder' },
  { quote: '“The new site boosted our traffic by 40% in the first week.”', author: 'Sam, Marketing Lead' },
  { quote: '“Nyxtrael’s animations made our brand stand out immediately.”', author: 'Jamie, Creative Director' },
];

const caseStudies = [
  {
    title: 'This Very Page – Built in 3 Days',
    description:
      'How I architected and launched my own portfolio homepage using Next.js, Tailwind and Framer Motion.',
    href: '/case-studies/this-page',
  },
  {
    title: 'Client CRM Dashboard – React & DnD',
    description:
      'Developed a drag-and-drop project management dashboard for a small agency.',
    href: '/case-studies/crm-dashboard',
  },
];

export default function Home() {
  const [stars, setStars] = useState<{ top: string; left: string; delay: number }[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonial carousel
  const nextTestimonial = useCallback(
    () => setCurrentTestimonial(i => (i + 1) % testimonials.length),
    []
  );
  const prevTestimonial = useCallback(
    () => setCurrentTestimonial(i => (i - 1 + testimonials.length) % testimonials.length),
    []
  );
  useEffect(() => {
    const iv = setInterval(nextTestimonial, 5000);
    return () => clearInterval(iv);
  }, [nextTestimonial]);

  // Stars background
  useEffect(() => {
    const arr = Array.from({ length: 5 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
    }));
    setStars(arr);
  }, []);

  // Preloader
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 1500);
    return () => clearTimeout(t);
  }, []);

  // Parallax video
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 bg-[#1a0e2a] flex items-center justify-center z-50"
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
            <title>Nyxtrael – Web Design & Motion</title>
            <link rel="canonical" href="https://nyxtrael.com/" />
            <meta
              name="description"
              content="Nyxtrael creates responsive, animated web experiences with Next.js, Tailwind and Framer Motion."
            />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Nyxtrael – Web Design & Motion" />
            <meta
              property="og:description"
              content="Responsive, animated web experiences with Next.js, Tailwind and Framer Motion."
            />
            <meta property="og:image" content="/images/og-image.jpg" />
            <meta property="og:url" content="https://nyxtrael.com" />
            <meta name="twitter:card" content="summary_large_image" />
            <script defer data-domain="nyxtrael.com" src="https://plausible.io/js/plausible.js" />
          </Head>

          <main className="relative min-h-screen overflow-hidden text-white bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)] px-6 py-12 md:px-16">
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-600 text-white p-2 rounded"
            >
              Skip to content
            </a>

            {/* stars */}
            <style jsx global>{`
              @keyframes twinkle {
                0%,100% { opacity: 0; }
                50% { opacity: 1; }
              }
              .star { animation: twinkle 2s infinite; }
            `}</style>
            <div className="absolute inset-0 z-0">
              {stars.map((s, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 star"
                  style={{ top: s.top, left: s.left, animationDelay: `${s.delay}s` }}
                />
              ))}
            </div>

            {/* HERO */}
            <section id="main-content" className="relative z-10 flex items-center justify-center text-center min-h-[80vh] mb-20">
              <motion.video
                autoPlay muted loop playsInline
                style={{ y }}
                className="absolute inset-0 object-cover w-full h-full opacity-10 z-0"
                poster="/images/hero-fallback.png"
                aria-hidden="true"
              >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
              </motion.video>

              <motion.div
                className="relative z-10 max-w-3xl px-6"
                initial={{ opacity:0, y:20 }}
                animate={{ opacity:1, y:0 }}
                transition={{ duration:1 }}
              >
                <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow mb-4">
                  Expert Web Design & Motion
                </h1>
                <p className="mb-6 text-lg md:text-xl text-neutral-300">
                  Responsive, animated websites that captivate and convert.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <MotionLink
                    href="/portfolio"
                    className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow hover:bg-pink-100"
                    whileHover={{ scale: 1.05 }}
                  >
                    View Portfolio
                  </MotionLink>
                  <MotionLink
                    href="/about"
                    className="bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    About Me
                  </MotionLink>
                </div>
              </motion.div>
            </section>

            {/* WHAT I OFFER */}
            <motion.section
              className="relative z-10 text-center max-w-4xl mx-auto mb-20"
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              viewport={{ once:true }}
            >
              <h2 className="text-2xl font-semibold mb-6">What I Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-neutral-300">
                <motion.div whileHover={{ scale:1.05 }} className="p-4 rounded-lg bg-white/10">
                  <div className="text-5xl mb-2">🖥️</div>
                  <p><strong>Web Design</strong>—modern, responsive, SEO-friendly sites.</p>
                </motion.div>
                <motion.div whileHover={{ scale:1.05 }} className="p-4 rounded-lg bg-white/10">
                  <div className="text-5xl mb-2">⚙️</div>
                  <p><strong>Animations</strong>—Framer Motion & Lottie micro-interactions.</p>
                </motion.div>
                <motion.div whileHover={{ scale:1.05 }} className="p-4 rounded-lg bg-white/10">
                  <div className="text-5xl mb-2">📱</div>
                  <p><strong>Performance</strong>—Next.js-powered, blazing fast.</p>
                </motion.div>
              </div>
            </motion.section>

            {/* FEATURED PROJECTS */}
            <motion.section
  className="relative z-10 text-center max-w-5xl mx-auto mb-20"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {projects.map((p) => (
      <MotionLink
        key={p.href}
        href={p.href}
        className="relative group block overflow-hidden rounded-lg transition-transform hover:scale-105"
      >
        <Image
          src={p.src}
          alt={p.alt}
          width={800}
          height={600}
          className="w-full h-[200px] md:h-[300px] object-cover rounded"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center p-4">
          <p className="text-white font-semibold">{p.title}</p>
          <p className="text-neutral-300 text-sm mt-1">{p.description}</p>
        </div>
      </MotionLink>
    ))}
  </div>
  <MotionLink
    href="/portfolio"
    className="mt-6 inline-block px-6 py-3 rounded-full border border-pink-400 text-pink-400 font-semibold transition hover:bg-pink-500 hover:text-white"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    View All Projects →
  </MotionLink>
</motion.section>

            {/* TESTIMONIALS */}
            <motion.section
              className="relative z-10 text-center max-w-5xl mx-auto mb-20"
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-6">What Clients Say</h2>
              <div className="overflow-hidden relative">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    className="px-4"
                    initial={{ opacity:0, x:50 }}
                    animate={{ opacity:1, x:0 }}
                    exit={{ opacity:0, x:-50 }}
                    transition={{ duration:0.5 }}
                  >
                    <blockquote className="italic text-purple-300">
                      {testimonials[currentTestimonial].quote}
                    </blockquote>
                    <p className="mt-2 text-neutral-400">
                      — {testimonials[currentTestimonial].author}
                    </p>
                  </motion.div>
                </AnimatePresence>
                <button
                  onClick={prevTestimonial}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center z-20"
                  aria-label="Previous testimonial"
                >←</button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center z-20"
                  aria-label="Next testimonial"
                >→</button>
              </div>
            </motion.section>

            {/* CASE STUDIES */}
            <motion.section
              className="relative z-10 text-center max-w-5xl mx-auto mb-20"
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
            >
              <h2 className="text-2xl font-semibold mb-6">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map(cs => (
                  <MotionLink
                    key={cs.href}
                    href={cs.href}
                    className="block p-4 bg-white/10 rounded-lg hover:scale-105 transition"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="font-semibold mb-2">{cs.title}</h3>
                    <p className="text-neutral-300">{cs.description}</p>
                  </MotionLink>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <section className="relative z-10 text-center max-w-xl mx-auto mb-20">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready for a Stand-Out Website?
              </h2>
              <p className="text-neutral-300 mb-6">Let’s build something exceptional together!</p>
              <MotionLink
  href="/contact"
  className="mt-6 inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold shadow transition transform hover:scale-110 motion-safe:animate-pulse"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Contact Me
</MotionLink>
            </section>

            {/* FOOTER */}
            <footer className="relative z-10 text-center text-neutral-400 pb-10">
  <div className="flex justify-center space-x-6 mb-4">
    {/* E-mail */}
    <a
      href="mailto:nyxtrael@example.com"
      aria-label="Email"
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

    {/* Instagram */}
    <a
      href="https://instagram.com/nyxtrael"
      target="_blank"
      rel="noreferrer"
      aria-label="Instagram"
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

    {/* X (dawniej Twitter) */}
    <a
      href="https://x.com/nyxtrael"
      target="_blank"
      rel="noreferrer"
      aria-label="X"
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
</footer>


          </main>
        </>
      )}
    </>
  );
}
