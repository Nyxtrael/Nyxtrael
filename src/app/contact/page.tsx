"use client";

import ContactForm from "../../components/ContactForm";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function Contact() {
  const benefits = [
    { icon: MessageCircle, title: "Prompt Reply", desc: "Expect a response within 24 hours to discuss your project needs." },
    { icon: Clock, title: "Streamlined Workflow", desc: "Efficient collaboration to turn your vision into reality quickly." },
    { icon: CheckCircle, title: "Impactful Designs", desc: "Modern solutions that boost engagement and conversions." },
  ];

  const faqs = [
    { question: "What types of projects do you take on?", answer: "I focus on web development, UI/UX design, and SaaS applications, delivering tailored solutions for each." },
    { question: "What’s the typical timeline for a project?", answer: "Timelines vary by scope, but most projects wrap up within 4-6 weeks with clear milestones." },
    { question: "Can I view your previous work?", answer: "Yes! Explore my case studies to see examples of my projects and results." },
  ];

  const handleScrollToForm = () => {
    const formSection = document.getElementById("form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parallax effect for the background video
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <main role="main" className="min-h-screen bg-gradient-to-b from-neutral-dark to-neutral-mid font-body relative overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="#1ABC9C" strokeWidth="0.5" opacity="0.15">
            <animate attributeName="x2" from="100%" to="0%" dur="20s" repeatCount="indefinite" />
            <animate attributeName="y2" from="100%" to="0%" dur="20s" repeatCount="indefinite" />
          </line>
          <line x1="100%" y1="0" x2="0%" y2="100%" stroke="#1ABC9C" strokeWidth="0.5" opacity="0.15">
            <animate attributeName="x2" from="0%" to="100%" dur="25s" repeatCount="indefinite" />
            <animate attributeName="y2" from="100%" to="0%" dur="25s" repeatCount="indefinite" />
          </line>
        </svg>
      </div>
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(26,188,156,0.05)_0%,transparent_70%)] opacity-50 pointer-events-none" aria-hidden="true" />

      {/* Hero Section */}
      <section
        role="banner"
        aria-labelledby="hero-heading"
        className="section-spacing flex items-center justify-center relative z-10 min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container text-center"
        >
          <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold font-montserrat mb-4 text-white">Get in Touch</h1>
          <p className="text-xl text-[#F5F5F5] max-w-2xl mx-auto mb-8">
            Have a question or project idea? I’ll get back to you within 24 hours.
          </p>
          <button
            onClick={handleScrollToForm}
            className="btn-primary"
            aria-label="Scroll to contact form"
          >
            Let’s Talk
          </button>
        </motion.div>
        <motion.video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          style={{ y }}
        >
          <source src="/videos/abstract-lines-3d.webm" type="video/webm" />
        </motion.video>
      </section>

      {/* Why Contact Me Section */}
      <section
        id="why-contact"
        role="region"
        aria-labelledby="why-contact-heading"
        className="section-spacing bg-neutral-mid relative z-10"
      >
        <div className="container">
          <h2 id="why-contact-heading" className="section-header text-3xl font-bold font-montserrat heading-underline text-white">Benefits of Working Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-sectionGray p-6 rounded-lg shadow-card hover:shadow-card-hover hover:bg-accent hover:text-neutral-dark transition-all duration-300 group"
              >
                <benefit.icon className="w-8 h-8 mb-4 text-accent group-hover:text-neutral-dark" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-neutral-dark">{benefit.title}</h3>
                <p className="text-[#F5F5F5] group-hover:text-neutral-dark">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="form"
        role="region"
        aria-labelledby="form-heading"
        className="section-spacing relative z-10"
      >
        <div className="container">
          <h2 id="form-heading" className="section-header text-3xl font-bold font-montserrat heading-underline text-white">Let’s Collaborate</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
              <p className="text-[#F5F5F5]">Share your idea, and I’ll respond within 24 hours to discuss next steps.</p>
              <ul className="space-y-2 text-[#F5F5F5]">
                <li className="flex items-center gap-2">
                  <span className="text-lg">📨</span> Email: hello@nyxtrael.com
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">🌍</span> Based in Europe, working globally
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        role="region"
        aria-labelledby="faq-heading"
        className="section-spacing bg-neutral-mid relative z-10"
      >
        <div className="container">
          <h2 id="faq-heading" className="section-header text-3xl font-bold font-montserrat heading-underline text-white">Common Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-sectionGray p-4 rounded-lg shadow-card"
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{faq.question}</h3>
                <p className="text-[#F5F5F5]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}