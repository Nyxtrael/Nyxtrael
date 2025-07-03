'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HeroArtist from '../components/HeroArtist';
import GalleryGrid from '../components/GalleryGrid';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

// Custom styles for section dividers, gradients, and lightbox
const customStyles = `
  .section-divider {
    height: 60px;
    background: linear-gradient(to right, #e9d5ff, #d8b4fe);
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  }
  .subtle-gradient {
    background: linear-gradient(to bottom, rgba(31, 41, 55, 0.95), rgba(31, 41, 55, 1));
  }
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .lightbox img {
    max-width: 90%;
    max-height: 90%;
  }
`;

export default function ShopTrendPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % 1); // No testimonials, so modulo 1
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + 1) % 1); // No testimonials
  };

  return (
    <>
      <style>{customStyles}</style>
      {/* Hero Section with Parallax */}
      <section className="relative min-h-[60vh] flex items-center py-20 bg-neutral-bg overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/shoptrend-hero-poster.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          >
            <source src="/videos/shoptrend-hero-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-bg/50 to-neutral-bg"
            initial={{ y: '-20%' }}
            animate={{ y: '20%' }}
            transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>
        <motion.div
          className="container mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <HeroArtist />
          <motion.button
            className="mt-6 px-6 py-3 bg-[#e9d5ff] text-[#1f2937] font-medium rounded-lg shadow hover:bg-[#d8b4fe] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d8b4fe]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#gallery')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Explore gallery"
          >
            Explore Gallery
          </motion.button>
        </motion.div>
      </section>

      <div className="section-divider" />
      <div className="subtle-gradient" id="gallery">
        <GalleryGrid onImageClick={handleImageClick} />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient" id="about">
        <AboutSection />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient" id="testimonials">
        <Testimonials testimonials={[]} currentIndex={currentTestimonial} onNext={nextTestimonial} onPrev={prevTestimonial} />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient" id="contact">
        <ContactSection />
      </div>

      {/* Lightbox for Gallery */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseLightbox}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged artwork"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}