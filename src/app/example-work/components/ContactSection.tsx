'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <section className="py-12 bg-white dark:bg-[#1f2937] text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#1f2937] dark:text-[#e5e7eb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Let’s Connect
      </motion.h2>
      <motion.div
        className="max-w-md mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {submitted ? (
          <p className="text-[#c084fc] font-semibold">Thank you for your message! I’ll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded text-[#1f2937] dark:text-[#e5e7eb] bg-white dark:bg-gray-700 border-[#e9d5ff] focus:ring-2 focus:ring-[#d8b4fe]"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded text-[#1f2937] dark:text-[#e5e7eb] bg-white dark:bg-gray-700 border-[#e9d5ff] focus:ring-2 focus:ring-[#d8b4fe]"
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded text-[#1f2937] dark:text-[#e5e7eb] bg-white dark:bg-gray-700 border-[#e9d5ff] focus:ring-2 focus:ring-[#d8b4fe] h-32"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#e9d5ff] text-[#1f2937] font-medium rounded-lg shadow hover:bg-[#d8b4fe] transition"
            >
              Send Message
            </button>
          </form>
        )}
      </motion.div>
      <motion.div
        className="flex justify-center space-x-4 mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="https://instagram.com" aria-label="Instagram" className="text-[#e9d5ff] hover:text-[#d8b4fe] transition">
          <Instagram className="h-6 w-6" />
        </a>
        <a href="https://twitter.com" aria-label="Twitter" className="text-[#e9d5ff] hover:text-[#d8b4fe] transition">
          <Twitter className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com" aria-label="LinkedIn" className="text-[#e9d5ff] hover:text-[#d8b4fe] transition">
          <Linkedin className="h-6 w-6" />
        </a>
      </motion.div>
    </section>
  );
}