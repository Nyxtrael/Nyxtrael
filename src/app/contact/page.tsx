'use client';

import Link from 'next/link';
import { Suspense, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ContactForm from './ContactForm';

const faqs = [
  {
    question: 'What types of projects do you take on?',
    answer: 'I specialize in web development, UI/UX design, and consulting for SaaS, e-commerce, and creative projects. Explore my <a href="/portfolio" class="underline hover:text-accent">portfolio</a> for examples.',
  },
  {
    question: 'What is the typical timeline for a project?',
    answer: 'Most projects take 2-6 weeks, depending on complexity. I’ll provide a detailed timeline after our initial consultation.',
  },
  {
    question: 'How do we communicate during the project?',
    answer: 'I offer regular updates via email or Slack and schedule weekly calls, tailored to your preferences.',
  },
  {
    question: 'What if I need backend development?',
    answer: 'I can integrate with existing APIs or collaborate with backend developers to deliver a complete solution.',
  },
  {
    question: 'What if I’m not satisfied with the result?',
    answer: 'Client satisfaction is my priority. I include multiple rounds of revisions to ensure the final product meets your expectations.',
  },
];

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, var(--neutral-bg) 0%, var(--neutral-mid) 50%, var(--neutral-bg) 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(var(--accent-rgb), 0.3);
  }
`;

export default function Contact() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="bg-neutral-bg font-inter">
      <style>{customStyles}</style>

      {/* Contact Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-20 bg-neutral-bg">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
            preload="none"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            aria-hidden="true"
          >
            <source src="/videos/background-video.webm" type="video/webm" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-bg/80 backdrop-blur-md" />
        </div>
        <motion.div
          className="container mx-auto text-center z-10 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-text-base mb-6 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
            Get in Touch
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-10 leading-relaxed">
            I’m excited to hear about your project idea! Fill out the form or email me directly at{' '}
            <a href="mailto:hello@nyxtrael.com" className="underline hover:text-accent">
              hello@nyxtrael.com
            </a>. I’ll respond within 24 hours.
          </p>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Benefits and Form Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Work With Me?
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left: Benefits and Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-semibold text-text-base mb-6">Benefits of Working Together</h3>
              <ul className="space-y-4 text-text-muted">
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <div>
                    <strong>Quick Response</strong>: I’ll reply within 24 hours to discuss your project.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <div>
                    <strong>Streamlined Process</strong>: A clear, step-by-step approach from idea to launch.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-accent">•</span>
                  <div>
                    <strong>Impactful Results</strong>: Designs and solutions focused on your business goals.
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-text-base mb-4">Alternative Contact</h4>
                <p className="text-text-muted mb-2">
                  Email:{' '}
                  <a href="mailto:hello@nyxtrael.com" className="underline hover:text-accent">
                    hello@nyxtrael.com
                  </a>
                </p>
                <p className="text-text-muted mb-2">
                  LinkedIn:{' '}
                  <a href="https://www.linkedin.com/in/nyxtrael-nyxtrael-928670368/" className="underline hover:text-accent" target="_blank" rel="noopener noreferrer">
                    Nyxtrael
                  </a>
                </p>
                <p className="text-text-muted">Based in Europe, working globally</p>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-64">
                  <svg
                    className="animate-spin h-10 w-10 text-accent"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Common Questions
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-neutral-mid rounded-lg border border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  className="w-full flex justify-between items-center p-4 text-left text-text-base font-semibold"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-${index}`}
                >
                  {faq.question}
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-accent" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-accent" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      id={`faq-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 text-text-muted prose prose-invert"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-center text-text-muted mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Still have questions? Feel free to send a message above or email me directly at{' '}
            <a href="mailto:hello@nyxtrael.com" className="underline hover:text-accent">
              hello@nyxtrael.com
            </a>.
          </motion.p>
        </div>
      </section>
    </main>
  );
}