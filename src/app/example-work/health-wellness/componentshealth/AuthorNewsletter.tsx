'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function AuthorNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-12 flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/author.jpg"
          alt="Alex Harper"
          width={300}
          height={300}
          className="rounded-full shadow-md"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-6 md:mt-0 md:pl-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#1f2937]">About Alex Harper</h2>
        <p className="text-[#4b5563] mb-4">
          I’m Alex Harper, a certified fitness trainer and nutritionist with over 10 years of experience helping people achieve their health goals.
        </p>
        <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">Join My Newsletter</h3>
        <p className="text-[#4b5563] mb-4">Get weekly tips, recipes, and a free e-book on healthy living!</p>
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
              className="w-full px-4 py-2 border rounded text-[#1f2937] bg-white border-[#10b981] focus:ring-2 focus:ring-[#14b8a6]"
            />
            <motion.button
              type="submit"
              className="px-6 py-3 bg-[#10b981] text-white font-medium rounded-lg shadow hover:bg-[#14b8a6] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        )}
      </motion.div>
    </section>
  );
}