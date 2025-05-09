"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Camera, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Placeholder image URLs (replace with your own hosted images or CMS integration)
const galleryImages = [
  '/photographer/1.jpg',
  '/photographer/2.jpg',
  '/photographer/3.jpg',
  '/photographer/4.jpg',
  '/photographer/5.jpg',
  '/photographer/6.jpg',
];

const PhotographerPortfolio: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  // Animation variants for hero section
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  // Animation variants for gallery images
  const imageVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.05, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/photographer/hero.jpg" // Replace with your hero image
            alt="Photographer Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <motion.div
          className="relative z-10 text-center"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Capturing Moments, Crafting Stories
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Professional photography that brings your vision to life with unparalleled elegance.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Book a Session <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">About the Artist</h2>
            <p className="text-gray-300 leading-relaxed">
              With over a decade of experience, I specialize in portrait, landscape, and event
              photography. My approach blends technical precision with creative storytelling, ensuring
              every image resonates with emotion and authenticity.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-80"
          >
            <Image
              src="/photographer/artist.jpg" // Replace with artist portrait
              alt="Photographer"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-16 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              variants={imageVariants}
              initial="initial"
              whileHover="hover"
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity"
              />
              <AnimatePresence>
                {hoveredImage === index && (
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <p className="text-white font-semibold">View Details</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-16 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Ready to capture your next moment? Reach out to discuss your project or book a session.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:contact@photographer.com"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Mail className="mr-2" /> Email
            </a>
            <a
              href="https://instagram.com/photographer"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Instagram className="mr-2" /> Instagram
            </a>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default PhotographerPortfolio;