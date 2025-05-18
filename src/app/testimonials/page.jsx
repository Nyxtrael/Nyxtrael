'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Initial testimonials data (fake testimonials)
const initialTestimonials = [
  {
    id: 1,
    name: 'Emily R.',
    role: 'Marketing Director, EcoSolutions',
    content: 'Working with Nyxtrael was a game-changer! Their innovative approach doubled our online engagement in just three months.',
    rating: 5,
    approved: true,
  },
  {
    id: 2,
    name: 'Michael S.',
    role: 'Founder, GreenTech Innovations',
    content: 'The team’s creativity and attention to detail brought our vision to life. We saw a 40% increase in customer inquiries!',
    rating: 5,
    approved: true,
  },
];

// Testimonials Page Component
const TestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [particles, setParticles] = useState([]);
  const [formData, setFormData] = useState({ name: '', role: '', content: '', rating: 5 });
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Particle effect setup
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

  // Fetch testimonials from API
  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch('/api/testimonials');
      const data = await res.json();
      setTestimonials(data.filter((t) => t.approved));
    };
    fetchTestimonials();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTestimonial = {
      id: Date.now(),
      ...formData,
      approved: false,
    };

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTestimonial),
      });

      if (res.ok) {
        setSubmissionStatus('Thank you! Your testimonial is awaiting approval.');
        setFormData({ name: '', role: '', content: '', rating: 5 });
      } else {
        setSubmissionStatus('Error submitting testimonial. Please try again.');
      }
    } catch (error) {
      setSubmissionStatus('Error submitting testimonial. Please try again.');
    }
  };

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
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-bold font-playfair accent-gradient leading-tight"
        >
          What Our Clients Say
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          className="mt-6 text-xl md:text-2xl text-gray-300 font-inter max-w-3xl mx-auto"
        >
          Hear from our happy clients about their experiences with Nyxtrael.
        </motion.p>
      </header>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
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

      {/* Submit Testimonial Form */}
      <section className="container mx-auto px-6 py-16 section-bg">
        <h2 className="text-4xl font-extrabold text-center font-playfair text-white mb-12 tracking-wide">
          Share Your Experience
        </h2>
        <motion.form
          onSubmit={handleSubmit}
          className="glass-card p-8 rounded-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6">
            <label className="block text-gray-300 font-inter mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-inter mb-2" htmlFor="role">
              Role/Company
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-inter mb-2" htmlFor="content">
              Your Testimonial
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
              rows="5"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 font-inter mb-2" htmlFor="rating">
              Rating (1-5)
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              className="w-full p-3 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} Star{num > 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white font-semibold font-inter rounded-xl hover:brightness-110 transition-all duration-300"
          >
            Submit Testimonial
          </button>
          {submissionStatus && (
            <p className="mt-4 text-center text-gray-300 font-inter">{submissionStatus}</p>
          )}
        </motion.form>
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
          Ready to Collaborate?
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

export default TestimonialsPage;