'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
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
    image: '/images/case-studies/cs1.png',
    description: 'Crafted a sustainable brand identity with eco-friendly packaging, driving significant market impact.',
  },
  {
    id: 2,
    title: 'Nature-Inspired Website',
    client: 'WildHaven',
    date: 'July 2024',
    duration: '3 months',
    result: '50% increase in user retention',
    image: '/images/case-studies/cs2.png',
    description: 'Designed a visually stunning website that enhanced user engagement and brand loyalty.',
  },
  {
    id: 3,
    title: 'Organic Campaign',
    client: 'EarthFest',
    date: 'February 2025',
    duration: '2 months',
    result: '150% attendance boost',
    image: '/images/case-studies/cs3.png',
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
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        width: `${Math.random() * 6 + 3}px`,
        height: `${Math.random() * 6 + 3}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
      }))
    );
  }, []);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(88,28,135,0.3),transparent),linear-gradient(to_bottom,#0f172a,#1e293b)] text-gray-100 font-sans relative overflow-hidden">
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(1); opacity: 0.6; }
          }
          .particle {
            position: absolute;
            background: radial-gradient(circle, #fbbf24, #22d3ee);
            border-radius: 50%;
            animation: pulse 6s infinite;
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.5);
          }
          .glass-card {
            background: rgba(20, 20, 30, 0.9);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(34, 211, 238, 0.2);
            border-radius: 1.5rem;
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }
          .glass-card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 40px rgba(34, 211, 238, 0.3), 0 0 20px rgba(59, 130, 246, 0.2);
          }
          .accent-gradient {
            background: linear-gradient(135deg, #22d3ee, #d946ef, #a855f7);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 15px rgba(34, 211, 238, 0.7);
          }
          .timeline-connector {
            position: absolute;
            height: 2px;
            background: linear-gradient(to right, #22d3ee, #a855f7);
            width: 100%;
            top: 25px;
            z-index: 0;
          }
          .section-bg {
            background: linear-gradient(135deg, rgba(20, 20, 30, 0.8), rgba(30, 30, 40, 0.9));
          }
        `}
      </style>

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="particle"
          style={{
            width: particle.width,
            height: particle.height,
            left: particle.left,
            top: particle.top,
            animationDelay: particle.animationDelay,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        />
      ))}

      {/* Hero Section */}
      <header className="relative z-10 py-28 text-center section-bg">
        <motion.h1
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold font-playfair accent-gradient leading-tight"
        >
          Transforming Visions into Success
        </motion.h1>
        <motion.p
          style={{ opacity }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 text-xl md:text-2xl text-gray-300 font-inter max-w-3xl mx-auto"
        >
          Discover how we empower businesses with innovative, tailored solutions.
        </motion.p>
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
        >
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center px-8 py-4 text-white font-semibold font-inter rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-500 hover:brightness-110 transition-all duration-300"
          >
            Get Started <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </motion.div>
      </header>

      {/* Case Studies Grid */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold text-center font-playfair text-white mb-12 tracking-wide">
          Our Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              className="glass-card p-6 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="relative w-full h-60 mb-6">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="rounded-lg object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <h3 className="text-2xl font-semibold font-playfair text-cyan-400 mb-3">{study.title}</h3>
              <p className="text-gray-400 text-sm font-inter mb-2">Client: {study.client}</p>
              <p className="text-cyan-400 text-sm font-inter flex items-center mb-3">{study.date}</p>
              <p className="text-gray-300 text-base font-inter mb-4 line-clamp-2">{study.description}</p>
              <p className="text-green-400 font-medium text-sm">Result: {study.result}</p>
              <Link
                href={`/case-studies/${study.id}`}
                className="mt-4 inline-block text-fuchsia-400 font-semibold font-inter hover:text-fuchsia-300 transition-colors underline decoration-2 decoration-fuchsia-400/50"
              >
                View Case Study <ArrowRight className="inline ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6 py-16 section-bg">
        <h2 className="text-4xl font-extrabold text-center font-playfair text-white mb-12 tracking-wide">
          Our Proven Process
        </h2>
        <div className="relative">
          <div className="timeline-connector" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {timeline.map((item, index) => (
              <motion.div
                key={item.step}
                className="glass-card p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-fuchsia-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold font-playfair text-white">{item.step}</h3>
                <p className="text-gray-400 text-sm font-inter mt-2">{item.time}</p>
                <p className="text-gray-300 mt-3 text-base font-inter">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-extrabold text-center font-playfair text-white mb-12 tracking-wide">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
            >
              <div className="flex mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-amber-400 fill-current mr-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.332 1.151-6.001 5.822 1.418 8.257L12 18.897l-7.417 3.364 1.418-8.257-6.001-5.822 8.332-1.151z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 font-inter text-lg italic mb-4">"{testimonial.content}"</p>
              <p className="text-white font-semibold font-playfair text-base">{testimonial.name}</p>
              <p className="text-gray-400 text-sm font-inter">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center section-bg">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold font-playfair text-white mb-6 tracking-wide"
        >
          Ready to Elevate Your Business?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-200 text-xl font-inter mb-8 max-w-2xl mx-auto"
        >
          Let’s create something extraordinary together.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 text-white font-semibold font-inter rounded-xl bg-gradient-to-br from-fuchsia-500 to-purple-500 hover:brightness-110 transition-all duration-300"
          >
            Contact Us Today <ArrowRight className="ml-3 w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-900/80 backdrop-blur-md">
        <p className="text-gray-400 text-sm font-inter">
          © 2025 Nyxtrael. All rights reserved.{' '}
          <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Get in Touch
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default CaseStudiesPage;