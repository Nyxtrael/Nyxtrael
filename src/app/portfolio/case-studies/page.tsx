'use client';

import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Clock, Check, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const caseStudies = [
  {
    id: 1,
    title: 'Eco-Friendly Brand Launch',
    client: 'GreenLeaf Co.',
    date: 'March 2023',
    duration: '4 months',
    result: '200% growth in eco-conscious sales',
    image: '/case-studies/cs1.jpg',
    description: 'Crafted a sustainable brand identity with eco-friendly packaging, driving significant market impact.',
  },
  {
    id: 2,
    title: 'Nature-Inspired Website',
    client: 'WildHaven',
    date: 'July 2024',
    duration: '3 months',
    result: '50% increase in user retention',
    image: '/case-studies/cs2.jpg',
    description: 'Designed a visually stunning website that enhanced user engagement and brand loyalty.',
  },
  {
    id: 3,
    title: 'Organic Campaign',
    client: 'EarthFest',
    date: 'February 2025',
    duration: '2 months',
    result: '150% attendance boost',
    image: '/case-studies/cs3.jpg',
    description: 'Developed a high-impact campaign to promote environmental awareness and community engagement.',
  },
];

const timeline = [
  { step: 'Discovery', time: 'Week 1', content: 'Understanding your vision and goals.' },
  { step: 'Strategy', time: 'Weeks 2-3', content: 'Crafting a tailored plan for success.' },
  { step: 'Development', time: 'Weeks 4-8', content: 'Building and refining your solution.' },
  { step: 'Launch', time: 'Week 9', content: 'Delivering a polished, impactful product.' },
];

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'CEO, GreenLeaf Co.',
    content: 'Their expertise transformed our brand, delivering results beyond expectations.',
    rating: 5,
  },
  {
    name: 'James T.',
    role: 'Founder, WildHaven',
    content: 'A seamless process with stunning outcomes. Highly recommend!',
    rating: 5,
  },
];

const CaseStudiesPage = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <style>
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .glass-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 20px rgba(0, 255, 255, 0.2);
          }
          .accent-gradient {
            background: linear-gradient(135deg, #06B6D4, #3B82F6);
          }
          .timeline-connector {
            position: absolute;
            height: 2px;
            background: #06B6D4;
            width: 100%;
            top: 20px;
          }
        `}
      </style>

     

      {/* Hero Section */}
      <header className="relative py-20 text-center bg-gradient-to-b from-gray-800 to-gray-900">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold font-poppins text-white"
        >
          Transforming Visions into Success
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-300 font-inter max-w-2xl mx-auto"
        >
          Discover how we empower businesses with innovative, tailored solutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="mt-6 inline-block px-6 py-3 text-white font-inter rounded-md accent-gradient hover:brightness-110 transition"
          >
            Get Started <ArrowRight className="inline ml-2" />
          </Link>
        </motion.div>
      </header>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center font-poppins text-white mb-8">
          Our Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="glass-card rounded-lg overflow-hidden"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={study.image}
                alt={study.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold font-poppins text-white mb-2">{study.title}</h3>
                <p className="text-gray-400 text-sm font-inter mb-2">Client: {study.client}</p>
                <p className="text-cyan-400 text-sm font-inter flex items-center mb-3">
                  <Clock className="w-4 h-4 mr-1" /> {study.duration}
                </p>
                <p className="text-gray-300 text-sm font-inter mb-4">{study.description}</p>
                <Link
                  href={`/case-studies/${study.id}`}
                  className="text-cyan-400 font-inter hover:text-cyan-300 transition-colors"
                >
                  View Case Study <ArrowRight className="inline ml-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center font-poppins text-white mb-8">
          Our Proven Process
        </h2>
        <div className="relative">
          <div className="timeline-connector" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {timeline.map((item, index) => (
              <motion.div
                key={item.step}
                className="glass-card p-5 rounded-lg text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="w-8 h-8 bg-cyan-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold font-poppins text-white">{item.step}</h3>
                <p className="text-gray-400 text-sm font-inter">{item.time}</p>
                <p className="text-gray-300 mt-2 text-sm font-inter">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-12 bg-gray-800">
        <h2 className="text-3xl font-bold text-center font-poppins text-white mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 font-inter mb-4">{testimonial.content}</p>
              <p className="text-white font-semibold font-poppins">{testimonial.name}</p>
              <p className="text-gray-400 text-sm font-inter">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold font-poppins text-white mb-4"
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-lg font-inter mb-6"
        >
          Let’s create something extraordinary together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-white font-inter rounded-md accent-gradient hover:brightness-110 transition"
          >
            Contact Us Today <ArrowRight className="inline ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800">
        <p className="text-gray-400 text-sm font-inter">
          © {new Date().getFullYear()} [Your Brand Name]. All rights reserved.{' '}
          <Link href="/contact" className="text-cyan-400 hover:text-cyan-300">
            Get in Touch
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default CaseStudiesPage;