"use client";

import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function TermsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    { id: "definitions", title: "📖 0. Definitions", content: "'Service' refers to the Nyxtrael website and all associated services. 'User' refers to any individual or entity accessing the Service. 'Content' includes all designs, illustrations, and materials created by Nyxtrael." },
    { id: "completion", title: "⏳ 1. Completion & Contact", content: "All orders are typically completed within 1–3 business days unless otherwise stated. You will receive confirmation and updates via email or the contact method you provide." },
    { id: "license", title: "🎨 2. License & Usage", content: "Unless explicitly agreed otherwise, all commissioned artworks are for personal use only. Commercial use, resale, or redistribution is prohibited without written permission or purchase of a commercial license. Learn more in the <a href=\"#commercial-use\" className=\"text-pink-400 underline\">Commercial Use Option</a>." },
    { id: "commercial-use", title: "💼 3. Commercial Use Option", content: "For commercial rights, please request a commercial license during the order process. This includes usage in branding, products, promotional materials, and monetized content. Fees vary based on intended use." },
    { id: "liability", title: "🔀 4. Liability & Magic Disclaimer", content: "Nyxtrael is not responsible for delays caused by incorrect contact information, unclear project descriptions, or external factors (e.g., internet outage, planetary alignment, etc.)." },
    { id: "tax", title: "🌍 5. Tax Responsibilities", content: "You are responsible for any local taxes, customs duties, or digital service fees applicable in your country. Prices listed exclude VAT unless otherwise stated." },
    { id: "age", title: "🧠 6. Age Requirements", content: "You must be at least 16 years old to place an order. By proceeding, you confirm you are of legal age to enter into this agreement." },
    { id: "policy-updates", title: "🔁 7. Policy Updates", content: "We reserve the right to update these policies anytime. Updates will be reflected on this page, and significant changes will be communicated via email or a notice on the Service. Updates apply to all future orders." },
    { id: "contact", title: "📬 8. Contact & Issue Resolution", content: "If you experience issues, contact us at <a href=\"mailto:nyxtrael@gmail.com\" className=\"text-pink-400 underline\">nyxtrael@gmail.com</a> within 7 days of delivery. We'll resolve it professionally. For refund-related inquiries, please refer to our <a href=\"/refund\" className=\"text-pink-400 underline\">Refund Policy</a>." },
    { id: "refund", title: "💸 9. Refund & Cancellation Policy", content: "Refunds are available under specific conditions, such as within 7 days of purchase for digital services not yet started, or in cases of technical failure. For full details, please review our <a href=\"/refund\" className=\"text-pink-400 underline\">Refund Policy</a>." },
    { id: "payment", title: "🧾 10. Payment Processing", content: "Payments are securely handled by Stripe. No payment data is stored on our servers." },
    { id: "privacy", title: "🔐 11. Privacy Note", content: "Contact details are used solely to complete your order and are not shared with third parties. Under GDPR and CCPA, you have the right to access, correct, or delete your personal data. To exercise these rights, contact us at <a href=\"mailto:nyxtrael@gmail.com\" className=\"text-pink-400 underline\">nyxtrael@gmail.com</a>." },
    { id: "ip", title: "📜 12. Intellectual Property", content: "All content including designs and logos are property of Nyxtrael and protected by copyright law. Unauthorized use is prohibited." },
    { id: "termination", title: "⛔ 13. Termination of Service", content: "Nyxtrael reserves the right to terminate or suspend access to users violating these Terms at our sole discretion." },
    { id: "governing-law", title: "⚖️ 14. Governing Law", content: "These Terms are governed by Polish law. Disputes will be resolved through arbitration in Warsaw, Poland." }
  ];

  const filteredSections = sections.filter(section =>
    section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>Terms of Service & Refund Policy - Nyxtrael</title>
        <meta name="description" content="Review Nyxtrael's Terms of Service, Refund Policy, Privacy Note, and Commercial License terms." />
      </Head>

      <a href="#terms-section" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-pink-600 text-white p-2 rounded">Skip to content</a>

      <main className="relative min-h-screen px-6 py-24 md:px-16 text-white bg-[#0a0a23] overflow-hidden scroll-smooth">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
          poster="/images/stars-fallback.jpg"
          aria-hidden="true"
        >
          <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center fade-in flex items-center justify-center gap-2">
            <img src="/icons/scroll.svg" alt="Scroll icon" width={28} height={28} />
            Terms of Service & Refund Policy
          </h1>

          <p className="text-neutral-400 text-center mb-8">By accessing or using the Nyxtrael website (\"Service\"), you agree to these Terms. If you do not agree, please do not use the Service. Last Updated: April 26, 2025.</p>

          <div className="mb-12 fade-in sticky top-16 bg-[#0a0a23] py-2 shadow-md">
            <label htmlFor="tos-search" className="block text-sm mb-2 text-neutral-400">Find a Section Quickly 🔍</label>
            <input
              id="tos-search"
              type="text"
              placeholder="Search terms..."
              aria-label="Search within Terms of Service"
              className="w-full p-3 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] focus:ring-2 focus:ring-pink-400"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <section id="terms-section" className="space-y-10 fade-in">
            {filteredSections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-t border-[#3A3A4E] pt-6"
              >
                <h2 className="text-2xl font-semibold text-pink-400 mb-2 hover:text-pink-300 section-title">{section.title}</h2>
                <p className="text-neutral-300 leading-relaxed text-base md:text-lg" dangerouslySetInnerHTML={{ __html: section.content }} />
              </motion.div>
            ))}
          </section>

          <section className="max-w-4xl mx-auto mt-16 text-center fade-in">
            <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
            <div className="flex justify-center gap-4">
              <a href="/portfolio" className="text-pink-400 hover:text-pink-300">See My Portfolio 🌟</a>
              <a href="/order" className="text-pink-400 hover:text-pink-300">Start a Project 🚀</a>
            </div>
          </section>

          <div className="flex justify-center mt-12">
            <a href="#terms-section" className="fixed bottom-4 right-4 px-4 py-2 rounded-full bg-pink-600 hover:bg-pink-500 text-sm font-semibold shadow-md hover:shadow-pink-500/50 transition flex items-center gap-2">
              <img src="/icons/arrow-up.svg" alt="Arrow up icon" width="16" height="16" />
              Back to Top ✨
            </a>
          </div>

          <footer className="max-w-4xl mx-auto mt-16 text-center text-neutral-400 text-sm fade-in">
            <p>© {new Date().getFullYear()} Nyxtrael | <a href="/faq" className="text-pink-400 hover:text-pink-300">FAQ</a> | <a href="/terms" className="text-pink-400 hover:text-pink-300">Terms of Service</a> | <a href="/refund" className="text-pink-400 hover:text-pink-300">Refund Policy</a> | <a href="/contact" className="text-pink-400 hover:text-pink-300">Contact</a></p>
          </footer>
        </div>
      </main>
    </>
  );
}
