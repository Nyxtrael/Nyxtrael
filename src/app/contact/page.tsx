'use client';

import ContactForm from './ContactForm';
import { MessageCircle, Clock, Shield, ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: MessageCircle,
    title: 'Free Consultation',
    desc: 'Get a no-obligation consultation to discuss your project and receive a tailored quote.',
  },
  {
    icon: Clock,
    title: 'Clear Process',
    desc: 'I guide you step-by-step from idea to launch, ensuring a smooth and transparent collaboration.',
  },
  {
    icon: Shield,
    title: 'Confidentiality',
    desc: 'Your ideas are safe with me— all information is treated with strict confidentiality.',
  },
];

const faqs = [
  {
    question: 'What types of projects do you take on?',
    answer: 'I specialize in web development, UI/UX design, and SaaS applications, delivering tailored solutions for startups and businesses.',
  },
  {
    question: 'What’s the typical timeline for a project?',
    answer: 'Timelines vary by scope: Basic projects take 1-2 weeks, Standard 2-4 weeks, and Premium 4-6 weeks, with clear milestones.',
  },
  {
    question: 'Can I view your previous work?',
    answer: (
      <>
        Yes! Explore my <Link href="/portfolio" className="underline text-accent hover:text-yellow-400">portfolio</Link> to see case studies and results.
      </>
    ),
  },
  {
    question: 'How do we communicate during the project?',
    answer: 'I provide regular updates via email or Slack, with optional weekly calls to align on progress, based on your preference.',
  },
  {
    question: 'What if I’m not satisfied with the project?',
    answer: 'Client satisfaction is my priority. I include revisions in all plans and iterate until you’re happy with the result.',
  },
];

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #0d1117 0%, #1f2937 50%, #0d1117 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
  }
`;

export default function Contact() {
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const toggleFaq = (index: number | null) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <main role="main" className="min-h-screen bg-neutral-bg font-inter relative overflow-hidden">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section
        role="banner"
        aria-labelledby="hero-heading"
        className="relative min-h-[60vh] flex items-center py-24 bg-neutral-bg text-center"
      >
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            aria-hidden="true"
          >
            <source src="/videos/background-video.webm" type="video/webm" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-bg/80 backdrop-blur-md" />
        </div>
        <motion.div
          className="relative z-10 container mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold text-text-base mb-4 bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent">
            Let’s Talk
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Got a project idea? Fill out the form or email me directly—I’ll respond within 24 hours. (Zapytania po polsku również mile widziane!)
          </p>
          <Link
            href="#form"
            scroll={true}
            className="inline-flex items-center gap-2 bg-gradient-cta text-neutral-dark px-8 py-4 rounded-lg font-semibold text-lg uppercase tracking-wide shadow-accent/50 hover:shadow-accent/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-bg hover:scale-105"
            aria-label="Scroll to contact form"
          >
            Let’s Talk
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Benefits Section */}
      <section
        id="why-contact"
        role="region"
        aria-labelledby="why-contact-heading"
        className="py-24 bg-neutral-bg"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            id="why-contact-heading"
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Benefits of Reaching Out
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-neutral-mid backdrop-blur-md p-6 rounded-lg shadow-md border border-accent/30 hover:border-yellow-400/50 hover:shadow-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <benefit.icon className="w-8 h-8 mb-4 text-accent hover:text-yellow-400 transition-colors" aria-hidden="true" />
                <h3 className="text-xl font-semibold text-text-base mb-2">{benefit.title}</h3>
                <p className="text-text-muted">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Contact Form Section */}
      <section
        id="form"
        role="region"
        aria-labelledby="form-heading"
        className="py-24 bg-neutral-bg"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            id="form-heading"
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let’s Collaborate
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-text-base">Ready to Start Your Project?</h2>
              <p className="text-text-muted">
                Share your idea below, and I’ll respond within 24 hours to discuss next steps. Looking forward to creating something amazing together!
              </p>
              <ul className="space-y-2 text-text-muted">
                <li className="flex items-center gap-2">
                  <span className="text-lg">📨</span> Email: <a href="mailto:hello@nyxtrael.com" className="underline hover:text-accent">hello@nyxtrael.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">🌍</span> Based in Poland (CET), working globally
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">📅</span> <a href="https://calendly.com/nyxtrael/consultation" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Schedule a free consultation</a>
                </li>
              </ul>
              <p className="text-sm text-text-muted-secondary">
                Your data is safe—used only to respond to your inquiry. See my <Link href="/privacy" className="underline hover:text-accent">Privacy Policy</Link>.
              </p>
            </motion.div>
            <motion.div
              className="bg-neutral-mid backdrop-blur-md p-6 rounded-lg shadow-md border border-accent/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ContactForm />
            </motion.div>
          </div>
          <motion.p
            className="text-center text-text-muted mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            — Nyxtrael, Front-end Developer
          </motion.p>
        </div>
      </section>

      <div className="section-divider" />

      {/* FAQ Section */}
      <section
        id="faq"
        role="region"
        aria-labelledby="faq-heading"
        className="py-24 bg-neutral-bg"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            id="faq-heading"
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-12"
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
                className="bg-neutral-mid backdrop-blur-md rounded-lg shadow-md border border-accent/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-expanded={faqOpen === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="text-lg font-semibold text-text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent transform transition-transform hover:text-yellow-400 ${
                      faqOpen === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {faqOpen === index && (
                  <div
                    id={`faq-answer-${index}`}
                    className="p-6 pt-0 text-text-muted"
                  >
                    {faq.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}