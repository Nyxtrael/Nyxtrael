"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Gallery images for showcasing different sections of the e-commerce template
const galleryImages = [
  { src: '/e-commerce-template/product-listing.jpg', type: 'rectangular' },
  { src: '/e-commerce-template/cart.jpg', type: 'rectangular' },
  { src: '/e-commerce-template/checkout.jpg', type: 'rectangular' },
  { src: '/e-commerce-template/product-detail.jpg', type: 'square' },
  { src: '/e-commerce-template/payment.jpg', type: 'square' },
  { src: '/e-commerce-template/footer.jpg', type: 'square' },
];

const EcommerceTemplatePage: React.FC = () => {
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
            src="/e-commerce-template/hero.jpg"
            alt="E-commerce Website Template Hero"
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
            Launch Your Online Store with Ease
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            A customizable e-commerce website template designed for creators and businesses to sell products online effortlessly.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition"
          >
            Buy Now for €60 <ArrowRight className="ml-2" />
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
            <h2 className="text-4xl font-bold mb-6">About the Template</h2>
            <p className="text-gray-300 leading-relaxed">
              This e-commerce website template offers everything you need to start selling online: product listings, a shopping cart, and a seamless checkout process. It’s fully responsive, customizable, and designed with a modern aesthetic to help your products stand out. Perfect for small businesses, artists, and creators.
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
              src="/e-commerce-template/about.jpg"
              alt="E-commerce Template Preview"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-16 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Template Features</h2>
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Rectangular Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages
              .filter((img) => img.type === 'rectangular')
              .map((img, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src={img.src}
                    alt={`Template Feature ${index + 1}`}
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
          {/* Square Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages
              .filter((img) => img.type === 'square')
              .map((img, index) => (
                <motion.div
                  key={index + 3}
                  className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  onMouseEnter={() => setHoveredImage(index + 3)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src={img.src}
                    alt={`Template Feature ${index + 4}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity"
                  />
                  <AnimatePresence>
                    {hoveredImage === index + 3 && (
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-16 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get Your Template</h2>
          <p className="text-gray-300 mb-8">
            Ready to launch your online store with this e-commerce template? Purchase now or reach out for customization inquiries.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:contact@nyxtrael.com"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Mail className="mr-2" /> Email
            </a>
            <a
              href="https://instagram.com/nyxtrael"
              className="flex items-center text-gray-300 hover:text-white"
            >
              <Instagram className="mr-2" /> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 bg-black border-t border-gray-800">
        <p>© 2025 Nyxtrael. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default EcommerceTemplatePage;