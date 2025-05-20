"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";

export default function FAQPage() {
  const faqs = [
    { question: "How long does it take to receive my order?", answer: "Most orders are delivered within 1–3 business days, depending on the project size and package selected.", category: "Ordering" },
    { question: "Can I choose the style of my artwork?", answer: "Yes. You can choose from a set of predefined visual styles or share references and moodboards.", category: "Services" },
    { question: "Do you allow NSFW content?", answer: "Artistic nudity is allowed if respectful. No hate speech or gore.", category: "Services" },
    { question: "Can I use the artwork commercially?", answer: "Commercial licenses are available upon request before delivery.", category: "Ordering" },
    { question: "What payment methods do you support?", answer: "Stripe: credit/debit cards, Apple Pay, Google Pay, bank transfers.", category: "Payments" },
    { question: "Will I receive a receipt or invoice?", answer: "Yes. A confirmation email is sent after payment.", category: "Payments" },
    { question: "What if I need changes to the final artwork?", answer: "Most packages include 1–2 revisions. Must request within 7 days.", category: "Services" },
    { question: "Can I cancel my order?", answer: "Yes, if work hasn't started yet.", category: "Ordering" },
    { question: "Something went wrong — what should I do?", answer: "Contact us at nyxtrael@gmail.com with your order ID.", category: "Payments" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [openIndexes, setOpenIndexes] = useState({});

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Head>
        <title>FAQ – Answers to Your Questions – Nyxtrael</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Nyxtrael’s services."
        />
        <meta property="og:title" content="FAQ – Nyxtrael" />
        <meta
          property="og:description"
          content="Get answers to your questions about Nyxtrael's creative services."
        />
        <meta property="og:image" content="/images/faq-og.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a
        href="#faq-section"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-pink-600 focus:text-white focus:p-2 focus:rounded"
      >
        Skip to content
      </a>

      <main className="relative min-h-screen text-white px-6 py-24 md:px-16 bg-[#0a0a23] overflow-hidden">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center fade-in">
            📌 Frequently Asked Questions
          </h1>

          <div className="mb-12 fade-in">
            <label htmlFor="faq-search" className="block text-sm mb-2 text-neutral-400">
              Find Your Answer Quickly 🔍
            </label>
            <input
              id="faq-search"
              type="text"
              placeholder="Search for a question..."
              className="w-full p-3 rounded-md bg-[#2A2A3E] text-white placeholder-[#CCCCCC] focus:ring-2 focus:ring-pink-400"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <section id="faq-section" className="fade-in space-y-10">
            {["Ordering", "Services", "Payments"].map((category) => (
              <div key={category}>
                <h2 className="text-2xl font-semibold mb-4 text-pink-400" id={category.toLowerCase()}>
                  {category} Questions
                </h2>
                {filteredFaqs
                  .filter((faq) => faq.category === category)
                  .map((faq, index) => (
                    <div key={index} className="border-t border-[#3A3A4E] py-4">
                      <button
                        className="faq-question w-full text-left flex justify-between items-center text-pink-400 font-semibold hover:text-[#FF69B4] hover:shadow-md"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={openIndexes[index] || false}
                        aria-controls={`faq-answer-${index}`}
                      >
                        {faq.question}
                        <span>{openIndexes[index] ? "−" : "+"}</span>
                      </button>
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: openIndexes[index] ? "auto" : 0, opacity: openIndexes[index] ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-neutral-400 mt-2 overflow-hidden"
                      >
                        {faq.answer}
                      </motion.div>
                    </div>
                  ))}
              </div>
            ))}
          </section>

          <section className="max-w-4xl mx-auto mt-16 text-center fade-in">
            <h2 className="text-2xl font-semibold mb-4">Still Have Questions? 🌌</h2>
            <p className="text-neutral-400 mb-4">
              Still curious? Let’s conjure the answers together! 🌌
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 text-sm font-semibold shadow-md hover:shadow-pink-500/50 transition"
            >
              Contact Me ✨
            </a>
          </section>

          <section className="max-w-4xl mx-auto mt-12 text-center fade-in">
            <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
            <div className="flex justify-center gap-4">
              <a href="/Portfolio" className="text-pink-400 hover:text-pink-300">See My Portfolio 🌟</a>
              <a href="/order" className="text-pink-400 hover:text-pink-300">Start a Project 🚀</a>
            </div>
          </section>

          <footer className="max-w-4xl mx-auto mt-16 text-center text-neutral-400 text-sm fade-in">
            <p>
              Email: <a href="mailto:nyxtrael@gmail.com" className="text-pink-400 hover:text-pink-300">nyxtrael@gmail.com</a> |
              Instagram: <a href="https://instagram.com/nyxtrael" className="text-pink-400 hover:text-pink-300">@nyxtrael</a> |
              Twitter: <a href="https://twitter.com/nyxtrael" className="text-pink-400 hover:text-pink-300">@nyxtrael</a>
            </p>
           
          </footer>
        </div>
      </main>
    </>
  );
}
