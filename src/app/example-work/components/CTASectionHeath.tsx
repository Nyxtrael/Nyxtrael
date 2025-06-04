'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 bg-[#f5f5f5] text-center">
      <motion.h2
        className="text-3xl font-bold mb-4 text-[#1f2937]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Start Your Health Journey Today
      </motion.h2>
      <motion.p
        className="mb-8 text-[#4b5563] max-w-2xl mx-auto"
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
          <motion.p
            className="text-[#10b981] font-semibold"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thanks for subscribing! Check your inbox.
          </motion.p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded text-[#1f2937] bg-white border-[#10b981] focus:ring-2 focus:ring-[#14b8a6]"
            />
            <motion.button
              type="submit"
              className="px-6 py-3 bg-[#10b981] text-white font-medium rounded-lg shadow hover:bg-[#14b8a6] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe to Newsletter
            </motion.button>
          </form>
        )}
      </motion.div>
      <motion.div
        className="mt-6 space-x-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <motion.a
          href="/courses"
          className="inline-block px-6 py-3 bg-[#14b8a6] text-white font-medium rounded-lg shadow hover:bg-[#2dd4bf] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Courses
        </motion.a>
        <motion.a
          href="/contact"
          className="inline-block px-6 py-3 bg-[#f97316] text-white font-medium rounded-lg shadow hover:bg-[#fb923c] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </motion.div>
      <motion.div
        className="mt-4 text-[#4b5563] text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p>Reach out directly: support@healthpro.com | +1 (555) 987-6543</p>
      </motion.div>
    </section>
  );
}