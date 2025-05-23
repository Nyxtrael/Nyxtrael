"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaBusinessTime } from 'react-icons/fa';
import ServiceCard from '../../components/ServiceCard';

// Updated services array with personal tone
const services = [
  {
    icon: <FaCode className="text-accent text-5xl" />,
    title: 'Web Development',
    description:
      'I build custom, high-performance websites tailored to your needs, ensuring seamless functionality and scalability.',
    benefits: [
      'Fast load times (under 2 seconds) with modern frameworks.',
      'Responsive design for all devices.',
      'SEO-ready structure to boost visibility.',
    ],
  },
  {
    icon: <FaPaintBrush className="text-accent text-5xl" />,
    title: 'UI/UX Design',
    description:
      'I create intuitive and visually stunning designs that enhance user engagement and deliver exceptional experiences.',
    benefits: [
      'User-centered designs validated through testing.',
      'Improves engagement with thoughtful layouts.',
      'Consistent branding across all touchpoints.',
    ],
  },
  {
    icon: <FaBusinessTime className="text-accent text-5xl" />,
    title: 'Consulting',
    description:
      'I provide strategic insights to optimize your digital strategy, helping you achieve measurable growth.',
    benefits: [
      'Tailored technology roadmaps for your goals.',
      'Actionable advice to improve digital ROI.',
      'Expert guidance from 5+ years in the industry.',
    ],
  },
];

export default function Services() {
  // Parallax effect for hero background
  const parallax = {
    initial: { backgroundPositionY: '0%' },
    whileInView: { backgroundPositionY: '20%' },
    viewport: { once: true },
    transition: { duration: 1, ease: 'easeOut' },
  };

  return (
    <main className="bg-neutral-dark overflow-hidden">
      {/* Services Hero Section with Animated Gradient */}
      <section className="relative min-h-[60vh] flex items-center py-20 bg-gradient-to-br from-neutral-dark to-neutral-mid">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-brand/20 animate-gradient-x opacity-50" />
        <motion.div
          className="absolute inset-0 pattern-grid opacity-20"
          variants={parallax}
          initial="initial"
          whileInView="whileInView"
        />
        <div className="container mx-auto text-center z-10 relative">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 font-montserrat heading-underline bg-gradient-to-r from-white to-accent bg-clip-text text-transparent text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-[#F5F5F5] mb-10 leading-relaxed font-inter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Tailored solutions to elevate your digital presence and achieve your goals.
          </motion.p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="bg-gradient-to-b from-neutral-mid to-neutral-dark section-spacing">
        <div className="container">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16 font-montserrat heading-underline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What I Offer
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="section-spacing bg-gradient-to-br from-brand/30 to-accent/30 text-center">
        <div className="container">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8 font-montserrat heading-underline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Let’s Work Together
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-[#F5F5F5] mb-10 leading-relaxed font-inter"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Ready to transform your digital presence? Let’s discuss how I can help.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="/contact"
              className="btn-primary inline-block text-xl font-semibold font-montserrat text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}