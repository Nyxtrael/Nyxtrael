"use client";

import Link from "next/link";
import { Instagram, Twitter, Mail, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer role="contentinfo" className="py-12 bg-shoptrend-bg text-shoptrend-text text-center border-t border-shoptrend-brown">
      <div className="container space-y-6">
        <h3 className="text-xl xs:text-2xl font-bold font-playfair mb-4">ShopTrend</h3>
        <p className="text-base mb-4 font-lora leading-relaxed">Elevate Your Style – Shop with Confidence</p>
        <nav aria-label="Footer navigation" className="space-x-6 mb-6">
          <Link href="#products" className="hover:text-shoptrend-gold transition-colors font-lora text-lg" aria-label="Shop products">
            Shop
          </Link>
          <Link href="#categories" className="hover:text-shoptrend-gold transition-colors font-lora text-lg" aria-label="View categories">
            Categories
          </Link>
          <Link href="#promo" className="hover:text-shoptrend-gold transition-colors font-lora text-lg" aria-label="View offers">
            Offers
          </Link>
          <Link href="/contact" className="hover:text-shoptrend-gold transition-colors font-lora text-lg" aria-label="Contact us">
            Contact
          </Link>
        </nav>
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link href="https://instagram.com" className="hover:text-shoptrend-gold transition-colors" aria-label="Visit Instagram">
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href="https://twitter.com" className="hover:text-shoptrend-gold transition-colors" aria-label="Visit Twitter">
            <Twitter className="w-6 h-6" />
          </Link>
          <Link href="mailto:contact@shoptrend.com" className="hover:text-shoptrend-gold transition-colors" aria-label="Send email">
            <Mail className="w-6 h-6" />
          </Link>
          <Link href="https://github.com" className="hover:text-shoptrend-gold transition-colors" aria-label="Visit GitHub">
            <Github className="w-6 h-6" />
          </Link>
        </div>
        {/* Newsletter Opt-In */}
        <div className="max-w-md mx-auto">
          <h4 className="text-lg font-playfair font-semibold mb-4">Join Our Newsletter</h4>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-shoptrend-bg border border-shoptrend-brown focus:outline-none focus:ring-2 focus:ring-shoptrend-gold text-shoptrend-text font-lora"
              aria-label="Enter your email to join the newsletter"
            />
            <button
              className="bg-shoptrend-gold text-shoptrend-bg px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 font-lora shadow-md"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
        <p className="text-sm mt-6 font-lora">© 2025 ShopTrend. All rights reserved. Built with Next.js.</p>
      </div>
    </footer>
  );
}