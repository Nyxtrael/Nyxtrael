// src/components/NewsletterFooter.jsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NewsletterFooter() {
  const [toastVisible, setToastVisible] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  return (
    <footer className="relative z-10 text-center text-neutral-400 pb-10">
      <form onSubmit={handleNewsletterSubmit} className="mb-6 max-w-md mx-auto">
        <label htmlFor="newsletter-email" className="sr-only">
          Subscribe to newsletter
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            id="newsletter-email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full bg-white/10 text-white placeholder-neutral-400 border border-fuchsia-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-400"
            required
            aria-required="true"
          />
          <motion.button
            type="submit"
            className="bg-fuchsia-500 text-white px-6 py-2 rounded-full font-semibold font-inter"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe
          </motion.button>
        </div>
      </form>

      <AnimatePresence>
        {toastVisible && (
          <motion.div
            className="fixed bottom-4 right-4 bg-fuchsia-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            Thank you for subscribing!
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}