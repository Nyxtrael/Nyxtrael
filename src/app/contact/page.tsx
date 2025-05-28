import ContactForm from './ContactForm';
import { MessageCircle, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const benefits = [
  { icon: MessageCircle, title: 'Prompt Reply', desc: 'Expect a response within 24 hours to discuss your project needs.' },
  { icon: Clock, title: 'Streamlined Workflow', desc: 'Efficient collaboration to turn your vision into reality quickly.' },
  { icon: CheckCircle, title: 'Impactful Designs', desc: 'Modern solutions that boost engagement and conversions.' },
];

const faqs = [
  { question: 'What types of projects do you take on?', answer: 'I focus on web development, UI/UX design, and SaaS applications, delivering tailored solutions for each.' },
  { question: 'What’s the typical timeline for a project?', answer: 'Timelines vary by scope, but most projects wrap up within 2-3 weeks with clear milestones.' },
  { question: 'Can I view your previous work?', answer: 'Yes! Explore my case studies to see examples of my projects and results.' },
];

export default function Contact() {
  return (
    <main role="main" className="min-h-screen bg-gradient-to-b from-neutral-dark to-neutral-mid font-body relative overflow-hidden">
      {/* Static Background Gradient and Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-dark via-white/10 to-neutral-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.05)_0%,transparent_70%)] opacity-50" />
      </div>

      {/* Hero Section */}
      <section
        role="banner"
        aria-labelledby="hero-heading"
        className="section-spacing flex items-center justify-center relative z-10 min-h-screen"
      >
        <div className="container text-center">
          <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold font-montserrat mb-4 text-white animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-[#D4AF37] max-w-2xl mx-auto mb-8 animate-fade-in-delay">
            Have a question or project idea? I’ll get back to you within 24 hours.
          </p>
          <Link
            href="#form"
            scroll={true}
            className="btn-primary inline-block bg-gradient-to-r from-shoptrend-gold to-shoptrend-brown text-shoptrend-bg px-8 py-4 rounded-lg transform transition-all hover:scale-105 hover:shadow-shoptrend-gold font-inter uppercase tracking-wide"
            aria-label="Scroll to contact form"
          >
            Let’s Talk
          </Link>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          aria-hidden="true"
        >
          <source src="/videos/abstract-lines-3d.webm" type="video/webm" />
        </video>
      </section>

      {/* Why Contact Me Section */}
      <section
        id="why-contact"
        role="region"
        aria-labelledby="why-contact-heading"
        className="section-spacing bg-neutral-mid relative z-10"
      >
        <div className="container">
          <h2 id="why-contact-heading" className="section-header text-3xl font-bold font-montserrat heading-underline text-white animate-fade-in">
            Benefits of Working Together
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-sectionGray p-6 rounded-lg shadow-card hover:shadow-card-hover hover:bg-shoptrend-gold hover:text-shoptrend-bg transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <benefit.icon className="w-8 h-8 mb-4 text-shoptrend-gold group-hover:text-shoptrend-bg" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-shoptrend-bg">{benefit.title}</h3>
                <p className="text-[#D4AF37] group-hover:text-shoptrend-bg">{benefit.desc}</p>
              </div>
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
          <h2 id="form-heading" className="section-header text-3xl font-bold font-montserrat heading-underline text-white animate-fade-in">
            Let’s Collaborate
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl font-bold text-white">Ready to Start Your Project?</h2>
              <p className="text-[#D4AF37]">Share your idea, and I’ll respond within 24 hours to discuss next steps.</p>
              <ul className="space-y-2 text-[#D4AF37]">
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
          <h2 id="faq-heading" className="section-header text-3xl font-bold font-montserrat heading-underline text-white animate-fade-in">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-sectionGray p-4 rounded-lg shadow-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-2 text-white">{faq.question}</h3>
                <p className="text-[#D4AF37]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}