// src/components/NewsletterFooter.jsx
'use client';

import { Mail } from 'lucide-react';

export default function NewsletterFooter() {
  return (
    <section className="relative z-10 text-center max-w-xl mx-auto mb-20">
      <h2 className="text-2xl font-bold font-playfair mb-4 bg-gradient-to-r from-teal-400 to-coral-500 bg-clip-text text-transparent">
        Stay Updated
      </h2>
      <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="relative w-full sm:w-auto">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400" />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-64 pl-10 p-3 rounded-full bg-white/10 text-white placeholder-neutral-400"
            aria-label="Email for newsletter"
          />
        </div>
        <button
          type="submit"
          className="bg-fuchsia-500 text-white px-6 py-3 rounded-full font-semibold font-inter shadow hover:bg-fuchsia-400"
        >
          Subscribe
        </button>
      </form>
      <p className="text-neutral-400 text-sm mt-4">
        You'll receive a confirmation email to verify your subscription.{' '}
        <a href="/privacy" className="text-fuchsia-400 underline">
          Privacy Policy
        </a>
      </p>
    </section>
  );
}