'use client';

import Link from 'next/link';
import { useState } from 'react';
import Hero from '../components/Hero';
import AboutSnippet from '../components/AboutSnippet';
import ServiceCard from '../components/ServiceCard';
import TestimonialsSlider from '../components/TestimonialsSlider';
import FinalCTA from '../components/FinalCTA';
import { CodeBracketIcon, PaintBrushIcon, LightBulbIcon, CheckCircleIcon, UserIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

// Define the ExampleWork type
interface ExampleWork {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
}

// Define the example work subpages data
const exampleWorkSubpages: ExampleWork[] = [
  {
    title: 'ShopTrend – E-commerce Redesign',
    description: 'A modern e-commerce store redesign with enhanced UX.',
    thumbnail: '/images/shoptrend.jpg',
    href: '/example-work/shop',
  },
  {
    title: 'DataSync – SaaS Analytics Dashboard',
    description: 'An intuitive analytics dashboard for a SaaS application.',
    thumbnail: '/images/datasync.jpg',
    href: '/example-work/data',
  },
  {
    title: 'Health & Wellness – Diet & Exercise Plans',
    description: 'A vibrant one-pager for health courses and tips.',
    thumbnail: '/images/health-wellness.jpg',
    href: '/example-work/health',
  },
  {
    title: 'Artist Portfolio – Creative Showcase',
    description: 'An elegant portfolio for a visual artist.',
    thumbnail: '/images/artist-portfolio.jpg',
    href: '/example-work/artist',
  },
];

const services = [
  {
    title: 'Web Development',
    description: 'Fast, responsive websites tailored to your needs.',
    icon: <CodeBracketIcon className="h-12 w-12 text-[#38bdf8] hover:text-[#facc15] transition-colors" />,
    benefits: [
      'Optimized for speed and SEO',
      'Mobile-first responsive design',
      'Custom functionality with Next.js',
    ],
    examples: ['SaaS Dashboard', 'E-commerce Platform', 'Portfolio Website'],
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and aesthetic designs that boost user engagement.',
    icon: <PaintBrushIcon className="h-12 w-12 text-[#38bdf8] hover:text-[#facc15] transition-colors" />,
    benefits: [
      'User-centered design process',
      'Interactive prototypes',
      'Consistent brand visuals',
    ],
    examples: ['Landing Page Design', 'App Interface', 'Design System'],
  },
  {
    title: 'Consulting',
    description: 'Expert guidance on digital strategy and project optimization.',
    icon: <LightBulbIcon className="h-12 w-12 text-[#38bdf8] hover:text-[#facc15] transition-colors" />,
    benefits: [
      'Technical audits and recommendations',
      'Performance optimization strategies',
      'Scalable architecture planning',
    ],
    examples: ['SEO Audit', 'Performance Optimization', 'Tech Strategy'],
  },
];

const serviceFAQs = [
  {
    question: 'Can I hire you for design without development?',
    answer: 'Yes! I offer standalone UI/UX design services, including interactive prototypes and design systems.',
  },
  {
    question: 'What technologies do you use for web development?',
    answer: 'I specialize in React, Next.js, and Tailwind CSS to build modern, high-performance web applications.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, I offer support packages tailored to your needs, from one-month to ongoing maintenance.',
  },
];

const benefits = [
  {
    title: 'Transparency & Communication',
    description: 'Clear updates and open dialogue throughout your project.',
    icon: <UserIcon className="h-12 w-12 text-[#38bdf8] hover:text-[#facc15] transition-colors" />,
  },
  {
    title: 'On-Time Delivery',
    description: 'Projects delivered on schedule, every time.',
    icon: <CheckCircleIcon className="h-12 w-12 text-[#38bdf8] hover:text-[#facc15] transition-colors" />,
  },
  {
    title: 'Modern Tech Stack',
    description: 'Built with Next.js, Tailwind CSS, and AI-driven tools.',
    icon: <RocketLaunchIcon className="h-12 w-12 text-[#38bdf8] hover:text-[#facc15] transition-colors" />,
  },
  {
    title: 'Flexible Billing',
    description: 'Choose between subscription or one-time payment.',
    icon: <CheckCircleIcon className="h-12 w-12 text-[#38bdf8] hover:text-[#facc15] transition-colors" />,
  },
];

const testimonials = [
  {
    quote: 'Super fast delivery, amazing design. Will hire again!',
    author: 'Alex, Startup Founder',
    avatar: '/images/avatar-alex.jpg',
  },
  {
    quote: 'Nyxtrael transformed our website into a modern masterpiece!',
    author: 'Sarah, E-commerce Owner',
    avatar: '/images/avatar-sarah.jpg',
  },
  {
    quote: 'Professional, communicative, and highly skilled. Highly recommend!',
    author: 'Mark, SaaS CEO',
    avatar: '/images/avatar-mark.jpg',
  },
];

// Define customStyles
const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #0d1117 0%, #1f2937 50%, #0d1117 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

export default function Home() {
  return (
    <div className="bg-[#0d1117]">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <Hero />

      {/* Divider */}
      <div className="section-divider"></div>

      {/* About Snippet */}
      <AboutSnippet />

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Services Section */}
      <section className="section bg-[#0d1117] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            My Services
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#38bdf8] to-[#facc15] mx-auto mt-2"></span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                benefits={service.benefits}
                examples={service.examples}
                className={`delay-${index * 100}`}
              />
            ))}
          </div>
          {/* FAQ Section */}
          <div className="mt-12">
            <motion.h3
              className="text-2xl font-serif font-semibold text-[#e5e7eb] text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Frequently Asked Questions
            </motion.h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              {serviceFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-[#1f2937] p-6 rounded-lg shadow-md border border-[#38bdf8]/30 hover:border-[#facc15]/50 hover:shadow-[#38bdf8]/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-serif font-semibold text-[#e5e7eb] mb-2">{faq.question}</h4>
                  <p className="text-[#9ca3af] font-inter">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Why Work With Me Section */}
      <section className="section bg-[#0d1117] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Work With Me
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#38bdf8] to-[#facc15] mx-auto mt-2"></span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-[#1f2937] p-6 rounded-2xl border border-[#38bdf8]/30 hover:border-[#facc15]/50 hover:shadow-[#38bdf8]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4" aria-hidden="true">{benefit.icon}</div>
                <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2 text-center">{benefit.title}</h3>
                <p className="text-[#9ca3af] leading-relaxed text-center font-inter">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Testimonials Section */}
      <TestimonialsSlider testimonials={testimonials} />

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Smart Tools Section */}
      <section className="section bg-[#0d1117] grain-overlay py-24 grid-pattern">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Smart Tools for Modern Development
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#38bdf8] to-[#facc15] mx-auto mt-2"></span>
          </motion.h2>
          <div className="text-center max-w-3xl mx-auto">
            <motion.p
              className="text-lg text-[#9ca3af] leading-relaxed font-inter"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              I leverage cutting-edge AI tools and automation to streamline development, enabling faster iterations and smarter prototyping.
            </motion.p>
            <motion.div
              className="flex justify-center gap-4 mt-6 flex-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="bg-[#38bdf8] text-[#0d1117] px-4 py-2 rounded-full text-sm font-medium font-inter">AI Content Generation</span>
              <span className="bg-[#38bdf8] text-[#0d1117] px-4 py-2 rounded-full text-sm font-medium font-inter">Rapid Prototyping</span>
              <span className="bg-[#38bdf8] text-[#0d1117] px-4 py-2 rounded-full text-sm font-medium font-inter">Automated Testing</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Example Work Highlights Section */}
      <section className="section bg-[#0d1117] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Example Work Highlights
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#38bdf8] to-[#facc15] mx-auto mt-2"></span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {exampleWorkSubpages.map((subpage, index) => (
              <motion.div
                key={index}
                className="relative bg-[#1f2937] rounded-2xl overflow-hidden border border-[#38bdf8]/30 hover:border-[#facc15]/50 hover:shadow-[#38bdf8]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={subpage.thumbnail}
                  alt={subpage.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] to-transparent opacity-70"></div>
                <div className="relative p-6">
                  <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">{subpage.title}</h3>
                  <p className="text-[#9ca3af] mb-4 font-inter">{subpage.description}</p>
                  <Link
                    href={subpage.href}
                    className="inline-block bg-gradient-to-r from-[#38bdf8] to-[#facc15] text-[#0d1117] px-4 py-2 rounded-lg font-inter font-semibold hover:shadow-[#38bdf8]/50 transition-all duration-300"
                    aria-label={`View ${subpage.title}`}
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}