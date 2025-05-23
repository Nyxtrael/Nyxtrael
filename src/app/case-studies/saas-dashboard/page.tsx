"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BarChart, Users, Zap, Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const features = [
  {
    title: 'Real-Time Analytics',
    description: 'Monitor your SaaS metrics in real time with live data updates and dynamic charts.',
    icon: <BarChart className="h-12 w-12 text-cyan-400" />,
  },
  {
    title: 'Predictive Insights',
    description: 'Leverage AI to forecast trends and make data-driven decisions with confidence.',
    icon: <Zap className="h-12 w-12 text-pink-500" />,
  },
  {
    title: 'User-Friendly Interface',
    description: 'An intuitive dashboard designed for all users, from beginners to experts.',
    icon: <Users className="h-12 w-12 text-cyan-400" />,
  },
];

const testimonials = [
  {
    quote: 'DataSync transformed how we analyze our SaaS metrics—intuitive and powerful!',
    author: 'Jane Doe, CEO of TechTrend',
  },
  {
    quote: 'The predictive insights gave us a competitive edge. Highly recommend!',
    author: 'John Smith, CTO of InnovateX',
  },
];

export default function DataSync() {
  // State to store particle properties
  const [particles, setParticles] = useState([]);

  // Generate particles only on the client side
  useEffect(() => {
    const numParticles = 20;
    const newParticles = Array.from({ length: numParticles }, () => ({
      cx: Math.random() * 100,
      cy: Math.random() * 100,
      r: Math.random() * 5 + 2,
      animateCxFrom: Math.random() * 100,
      animateCxTo: Math.random() * 100,
      animateCyFrom: Math.random() * 100,
      animateCyTo: Math.random() * 100,
      dur: Math.random() * 5 + 5,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <main className="bg-gray-100 text-gray-900 font-poppins overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-gray-900 to-indigo-900">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="absolute w-full h-full opacity-20">
            <defs>
              <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{ stopColor: '#00D4FF' }} />
                <stop offset="100%" style={{ stopColor: '#FF4081', stopOpacity: 0 }} />
              </radialGradient>
            </defs>
            {particles.map((particle, i) => (
              <circle
                key={i}
                cx={`${particle.cx}%`}
                cy={`${particle.cy}%`}
                r={particle.r}
                fill="url(#particleGradient)"
                opacity="0.6"
              >
                <animate
                  attributeName="cy"
                  from={`${particle.animateCyFrom}%`}
                  to={`${particle.animateCyTo}%`}
                  dur={`${particle.dur}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cx"
                  from={`${particle.animateCxFrom}%`}
                  to={`${particle.animateCxTo}%`}
                  dur={`${particle.dur}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}
          </svg>
        </div>
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            DataSync – SaaS Analytics Dashboard
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Empower your business with intuitive, real-time analytics and predictive insights.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              href="#get-started"
              className="inline-block bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-indigo-900 text-center mb-12 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why Choose DataSync?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-opacity-80 border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-indigo-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-12 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            See DataSync in Action
          </motion.h2>
          <motion.div
            className="relative bg-surface p-6 rounded-xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Simplified SVG Chart for Demo */}
            <svg className="w-full h-64" viewBox="0 0 300 150">
              <rect x="30" y="100" width="30" height="50" fill="#00D4FF">
                <animate attributeName="height" from="0" to="50" dur="1s" fill="freeze" />
              </rect>
              <rect x="90" y="70" width="30" height="80" fill="#FF4081">
                <animate attributeName="height" from="0" to="80" dur="1s" fill="freeze" />
              </rect>
              <rect x="150" y="50" width="30" height="100" fill="#00D4FF">
                <animate attributeName="height" from="0" to="100" dur="1s" fill="freeze" />
              </rect>
              <rect x="210" y="90" width="30" height="60" fill="#FF4081">
                <animate attributeName="height" from="0" to="60" dur="1s" fill="freeze" />
              </rect>
            </svg>
            <p className="mt-4 text-gray-300">Interactive dashboard with real-time data visualization.</p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-indigo-900 mb-12 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Users Say
          </motion.h2>
          <div className="relative">
            <motion.div
              className="flex space-x-6 overflow-hidden"
              initial={{ x: 0 }}
              animate={{ x: '-50%' }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-80 bg-white p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-80 border border-gray-200"
                >
                  <div className="flex justify-center mb-4">
                    <Star className="h-8 w-8 text-yellow-400" />
                  </div>
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <p className="text-indigo-900 font-semibold">{testimonial.author}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="get-started" className="py-16 bg-gradient-to-br from-cyan-400 to-pink-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-8 font-orbitron"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Unlock the Power of DataSync
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Start transforming your SaaS analytics today with a 14-day free trial.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/signup"
              className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/50"
            >
              Start Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}