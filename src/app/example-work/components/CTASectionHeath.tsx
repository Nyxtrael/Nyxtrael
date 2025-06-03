'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <section className="py-12 bg-[#1f2937] text-center">
      <motion.h2
        className="text-3xl font-bold mb-4 text-[#e5e7eb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Start Your Health Journey Today
      </motion.h2>
      <motion.p
        className="mb-8 text-[#bfdbfe] max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Join thousands of others and transform your life with our expert plans.
      </motion.p>
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {submitted ? (
          <p className="text-[#10b981] font-semibold">Thanks for subscribing! Check your inbox.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded text-[#1f2937] dark:text-[#e5e7eb] bg-white dark:bg-gray-700 border-[#10b981] focus:ring-2 focus:ring-[#14b8a6]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#f97316] text-white font-medium rounded-lg shadow hover:bg-[#fb923c] transition"
            >
              Subscribe to Newsletter
            </button>
          </form>
        )}
      </motion.div>
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-[#14b8a6] text-white font-medium rounded-lg shadow hover:bg-[#2dd4bf] transition"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}