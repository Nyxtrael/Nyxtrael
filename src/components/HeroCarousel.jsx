'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function HeroCarousel({ featuredServices }) {
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
      setCurrentSlide((prev) => (prev + 1) % featuredServices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView, isPaused, featuredServices.length]);

  return (
    <div
      ref={carouselRef}
      className="relative w-full max-w-5xl mx-auto mt-12 overflow-hidden rounded-xl shadow-xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden"
        >
          <Image
            src={featuredServices[currentSlide].image}
            alt={featuredServices[currentSlide].title}
            fill
            style={{ objectFit: 'cover' }}
            loading="lazy"
            onError={(e) => {
              e.target.src = '/images/fallback.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-white p-6"
            >
              <h2 className="text-2xl md:text-3xl font-bold font-playfair bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
                {featuredServices[currentSlide].title}
              </h2>
              <p className="text-base md:text-lg font-inter mt-2 text-gray-300">
                {featuredServices[currentSlide].desc}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + featuredServices.length) % featuredServices.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
        aria-label="Previous slide"
        tabIndex={0}
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % featuredServices.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white p-3 rounded-full shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
        aria-label="Next slide"
        tabIndex={0}
      >
        ›
      </button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {featuredServices.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentSlide ? 'bg-fuchsia-500' : 'bg-gray-300'
            } hover:bg-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-colors`}
            aria-label={`Go to slide ${idx + 1}`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}