'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    { id: "definitions", title: "📖 0. Definitions", content: "'Service' refers to the Nyxtrael website and all associated services. 'User' refers to any individual or entity accessing the Service. 'Content' includes all designs, illustrations, and materials created by Nyxtrael." },
    { id: "completion", title: "⏳ 1. Completion & Contact", content: "All orders are typically completed within 1–3 business days unless otherwise stated. You will receive confirmation and updates via email or the contact method you provide." },
    { id: "license", title: "🎨 2. License & Usage", content: "Unless explicitly agreed otherwise, all commissioned artworks are for personal use only. Commercial use, resale, or redistribution is prohibited without written permission or purchase of a commercial license." },
    { id: "commercial-use", title: "💼 3. Commercial Use Option", content: "For commercial rights, please request a commercial license during the order process. This includes usage in branding, products, promotional materials, and monetized content. Fees vary based on intended use." },
    { id: "liability", title: "🔀 4. Liability & Magic Disclaimer", content: "Nyxtrael is not responsible for delays caused by incorrect contact information, unclear project descriptions, or external factors (e.g., internet outage, planetary alignment, etc.)." },
    { id: "tax", title: "🌍 5. Tax Responsibilities", content: "You are responsible for any local taxes, customs duties, or digital service fees applicable in your country. Prices listed exclude VAT unless otherwise stated." },
    { id: "age", title: "🧠 6. Age Requirements", content: "You must be at least 16 years old to place an order. By proceeding, you confirm you are of legal age to enter into this agreement." },
    { id: "policy-updates", title: "🔁 7. Policy Updates", content: "We reserve the right to update these policies anytime. Updates will be reflected on this page." },
    { id: "contact", title: "📬 8. Contact & Issue Resolution", content: "If you experience issues, contact us at nyxtrael@gmail.com within 7 days of delivery. We'll resolve it professionally." },
    { id: "refund", title: "💸 9. Refund & Cancellation Policy", content: "Refunds are not issued once work has started unless due to technical failure. Partial refunds may apply if work is incomplete." },
    { id: "payment", title: "🧾 10. Payment Processing", content: "Payments are securely handled by Stripe. No payment data is stored on our servers." },
    { id: "privacy", title: "🔐 11. Privacy Note", content: "Contact details are used solely to complete your order and are not shared with third parties. You have the right to access, correct, or delete your personal data under GDPR and CCPA." },
    { id: "ip", title: "📜 12. Intellectual Property", content: "All content including designs and logos are property of Nyxtrael and protected by copyright law. Unauthorized use is prohibited." },
    { id: "termination", title: "⛔ 13. Termination of Service", content: "Nyxtrael reserves the right to terminate or suspend access to users violating these Terms at our sole discretion." },
    { id: "governing-law", title: "⚖️ 14. Governing Law", content: "These Terms are governed by Polish law. Disputes will be resolved through arbitration in Warsaw, Poland." }
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="relative min-h-screen px-6 py-24 md:px-16 text-white bg-[#0a0a23] overflow-hidden scroll-smooth">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        poster="/images/stars-fallback.png"
        aria-hidden="true"
      >
        <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* Skip Link */}
        <a href="#terms-section" className="sr-only focus:not-sr-only focus:absolute top-4 left-4 bg-pink-600 text-white p-2 rounded">
          Skip to content
        </a>

        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center flex items-center justify-center gap-2">
          <img src="/icons/scroll.svg" alt="Scroll icon" width={28} height={28} />
          Terms of Service & Refund Policy
        </h1>

        <p className="text-neutral-400 text-center mb-8">
          By accessing or using the Nyxtrael website ("Service"), you agree to these Terms. Last Updated: April 26, 2025.
        </p>

        {/* Search Bar */}
        <div className="mb-12 sticky top-16 bg-[#0a0a23] py-2 fade-in">
          <label htmlFor="tos-search" className="block text-sm mb-2 text-neutral-400">Find a Section Quickly 🔍</label>
          <input
            id="tos-search"
            type="text"
            placeholder="Search terms..."
            aria-label="Search Terms"
            className="w-full p-3 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] focus:ring-2 focus:ring-pink-400"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Sections */}
        <section id="terms-section" className="space-y-10 fade-in">
          {filteredSections.map((section, idx) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="border-t border-[#3A3A4E] pt-6"
            >
              <h2 className="text-2xl font-semibold text-pink-400 mb-2">{section.title}</h2>
              <p className="text-neutral-300 leading-relaxed text-base md:text-lg">{section.content}</p>
            </motion.div>
          ))}
        </section>

        {/* Explore More */}
        <section className="max-w-4xl mx-auto mt-16 text-center fade-in">
          <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
          <div className="flex justify-center gap-4">
            <Link href="/portfolio" className="text-pink-400 hover:text-pink-300">See My Portfolio 🌟</Link>
            <Link href="/order" className="text-pink-400 hover:text-pink-300">Start a Project 🚀</Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-xs text-neutral-400 fade-in">
          <p>
            © {new Date().getFullYear()} Nyxtrael |{' '}
            <Link href="/faq" className="text-pink-400 hover:text-pink-300">FAQ</Link> |{' '}
            <Link href="/terms" className="text-pink-400 hover:text-pink-300">Terms</Link> |{' '}
            <Link href="/refund" className="text-pink-400 hover:text-pink-300">Refund</Link> |{' '}
            <Link href="/contact" className="text-pink-400 hover:text-pink-300">Contact</Link>
          </p>
        </footer>

      </div>
    </main>
  );
}
