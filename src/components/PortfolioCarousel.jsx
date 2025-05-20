'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function PortfolioCarousel({ featuredProjects }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (carouselRef.current) observer.observe(carouselRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView, isPaused, featuredProjects.length]);

  return (
    <div
      ref={carouselRef}
      className="relative w-full max-w-5xl mx-auto mt-12 overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden" // 16:9 aspect ratio
        >
          <Image
            src={featuredProjects[currentSlide].image}
            alt={featuredProjects[currentSlide].title}
            fill
            style={{ objectFit: 'cover' }}
            priority={currentSlide === 0}
            loading={currentSlide === 0 ? undefined : 'lazy'}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center text-white p-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-playfair">{featuredProjects[currentSlide].title}</h2>
              <p className="text-sm md:text-base font-inter">{featuredProjects[currentSlide].desc}</p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
        aria-label="Previous slide"
        tabIndex={0}
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredProjects.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
        aria-label="Next slide"
        tabIndex={0}
      >
        ›
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {featuredProjects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${idx === currentSlide ? 'bg-fuchsia-400' : 'bg-white bg-opacity-60'} hover:bg-fuchsia-300 transition-colors focus:outline-none focus:ring-2 focus:ring-fuchsia-400`}
            aria-label={`Go to slide ${idx + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
      {/* Case Study Teasers */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + idx * 0.1 }}
          >
            <Link
              href={project.caseStudyLink}
              className="bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:shadow-lg transition-all duration-300"
              aria-label={`View case study: ${project.title}`}
            >
              View Case Study: {project.title}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}