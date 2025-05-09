"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Gallery and team data for the agency template
const galleryImages = [
  { src: '/creative-agency-template/services-page.jpg', type: 'rectangular' },
  { src: '/creative-agency-template/about-page.jpg', type: 'rectangular' },
  { src: '/creative-agency-template/contact-page.jpg', type: 'square' },
  { src: '/creative-agency-template/portfolio-page.jpg', type: 'square' },
];
const teamMembers = [
  { name: 'Alex Carter', role: 'Creative Director', image: '/creative-agency-template/team1.jpg' },
  { name: 'Sara Kim', role: 'Lead Developer', image: '/creative-agency-template/team2.jpg' },
  { name: 'Liam Ortiz', role: 'Marketing Specialist', image: '/creative-agency-template/team3.jpg' },
];
const projects = [
  { title: 'Brand Launch', date: 'Jan 2024', image: '/creative-agency-template/project1.jpg' },
  { title: 'Website Redesign', date: 'Apr 2024', image: '/creative-agency-template/project2.jpg' },
  { title: 'Campaign Rollout', date: 'Sep 2024', image: '/creative-agency-template/project3.jpg' },
];

const CreativeAgencyTemplatePage: React.FC = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Animation variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const imageVariants = {
    initial: { scale: 1, opacity: 0.8 },
    hover: { scale: 1.05, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/creative-agency-template/hero.jpg"
            alt="Creative Agency Website Template Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>
        <motion.div
          className="relative z-10 text-center px-6"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Elevate Your Agency’s Online Presence
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            A versatile template for creative agencies to showcase services, team, and projects with a professional edge.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-600 transition"
          >
            Buy Now for €45 <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 md:px-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Design', 'Development', 'Marketing'].map((service, index) => (
            <motion.div
              key={service}
              className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md p-6 text-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              custom={index}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Image
                src={`/creative-agency-template/${service.toLowerCase()}.jpg`}
                alt={`${service} Service`}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-400">
                {service === 'Design' && 'Stunning visuals for your brand.'}
                {service === 'Development' && 'Robust websites with modern tech.'}
                {service === 'Marketing' && 'Targeted campaigns to grow your reach.'}
              </p>
              <AnimatePresence>
                {hoveredService === index && (
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="text-white font-bold">Learn More</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">Meet the Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeInVariants}
              custom={index}
              viewport={{ once: true }}
            >
              <div className="relative w-48 h-48 mx-auto overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Timeline Section */}
      <section className="py-20 px-4 md:px-16 bg-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className="max-w-6xl mx-auto relative">
          <div className="flex items-center justify-between space-x-8 overflow-x-auto pb-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="min-w-[300px] text-center"
                initial="hidden"
                whileInView="visible"
                variants={fadeInVariants}
                custom={index}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-48 overflow-hidden rounded-xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4">{project.title}</h3>
                <p className="text-gray-400">{project.date}</p>
              </motion.div>
            ))}
          </div>
          <div className="absolute top-1/2 w-full h-1 bg-gradient-to-r from-purple-600 to-pink-500 transform -translate-y-1/2" />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-16">
        <h2 className="text-4xl font-bold text-center mb-12">Template Preview</h2>
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {galleryImages
              .filter((img) => img.type === 'rectangular')
              .map((img, index) => (
                <motion.div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {galleryImages
              .filter((img) => img.type === 'square')
              .map((img, index) => (
                <motion.div
                  key={index + 2}
                  className="relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                  variants={imageVariants}
                  initial="initial"
                  whileHover="hover"
                  onMouseEnter={() => setHoveredImage(index + 2)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <Image
                    src={img.src}
                    alt={`Template Feature ${index + 3}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity"
                  />
                  <AnimatePresence>
                    {hoveredImage === index + 2 && (
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
            Ready to elevate your agency’s online presence? Purchase now or reach out for customization options.
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

export default CreativeAgencyTemplatePage;