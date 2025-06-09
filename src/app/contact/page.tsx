import ContactForm from './ContactForm';
import { MessageCircle, Clock, CheckCircle, ArrowRight } from 'lucide-react';
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

// Custom CSS for border pulse animation
const customStyles = `
  @keyframes border-pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5); }
    50% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0); }
  }
  .border-pulse {
    animation: border-pulse 2s infinite ease-in-out;
  }
`;

export default function Contact() {
  return (
    <main role="main" className="min-h-screen bg-[#0f172a] font-inter relative overflow-hidden">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section
        role="banner"
        aria-labelledby="hero-heading"
        className="section-spacing flex items-center justify-center relative z-10 min-h-screen grain-overlay"
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
          <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md" />
        </div>
        <div className="container text-center relative z-10">
          <h1 id="hero-heading" className="text-6xl md:text-7xl font-serif font-bold text-[#e2e8f0] mb-4 animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-[#94a3b8] max-w-2xl mx-auto mb-8 font-inter animate-fade-in-delay">
            Have a question or project idea? I’ll get back to you within 24 hours.
          </p>
          <Link
            href="#form"
            scroll={true}
            className="inline-flex items-center gap-2 bg-[#3b82f6] text-[#0f172a] px-8 py-4 rounded-lg font-inter font-semibold text-lg uppercase tracking-wide shadow-[#3b82f6]/50 hover:bg-[#60a5fa] hover:shadow-[#3b82f6]/70 transition-all duration-300 border-pulse focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-[#0f172a] hover:scale-105"
            aria-label="Scroll to contact form"
          >
            Let’s Talk
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-20 bg-gradient-to-b from-[#0f172a] to-[#1f2937] clip-path-[polygon(0_0,100%_20%,100%_80%,0_100%)] shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>

      {/* Why Contact Me Section */}
      <section
        id="why-contact"
        role="region"
        aria-labelledby="why-contact-heading"
        className="section-spacing bg-[#0f172a] relative z-10 grain-overlay"
      >
        <div className="container mx-auto px-4">
          <h2 id="why-contact-heading" className="text-4xl md:text-5xl font-serif font-bold text-[#e2e8f0] text-center mb-16 animate-fade-in">
            Benefits of Working Together
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1f2937] backdrop-blur-md p-6 rounded-lg shadow-md border border-[#3b82f6]/30 hover:border-[#60a5fa]/50 hover:shadow-[#3b82f6]/50 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <benefit.icon className="w-8 h-8 mb-4 text-[#3b82f6] hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
                <h3 className="text-xl font-serif font-semibold text-[#e2e8f0] mb-2">{benefit.title}</h3>
                <p className="text-[#94a3b8] font-inter">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-20 bg-gradient-to-b from-[#0f172a] to-[#1f2937] clip-path-[polygon(0_0,100%_20%,100%_80%,0_100%)] shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>

      {/* Contact Form Section */}
      <section
        id="form"
        role="region"
        aria-labelledby="form-heading"
        className="section-spacing relative z-10 bg-[#0f172a] grain-overlay"
      >
        <div className="container mx-auto px-4">
          <h2 id="form-heading" className="text-4xl md:text-5xl font-serif font-bold text-[#e2e8f0] text-center mb-16 animate-fade-in">
            Let’s Collaborate
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto mt-2"></span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <div className="space-y-6 animate-slide-up">
              <h2 className="text-3xl font-serif font-bold text-[#e2e8f0]">Ready to Start Your Project?</h2>
              <p className="text-[#94a3b8] font-inter">Share your idea, and I’ll respond within 24 hours to discuss next steps.</p>
              <ul className="space-y-2 text-[#94a3b8] font-inter">
                <li className="flex items-center gap-2">
                  <span className="text-lg">📨</span> Email: nyxtrael@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">🌍</span> Based in Europe, working globally
                </li>
              </ul>
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSd7cmuIN4r4OGPT7Z2vdxrPTORrR16HHAz41CanqpfMbPwDWQ/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#3b82f6] text-[#0f172a] px-8 py-4 rounded-lg font-inter font-semibold text-lg uppercase tracking-wide shadow-[#3b82f6]/50 hover:bg-[#60a5fa] hover:shadow-[#3b82f6]/70 transition-all duration-300 border-pulse focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2 focus:ring-offset-[#0f172a] hover:scale-105"
                aria-label="Fill out the project brief form"
              >
                Fill Out Brief
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="bg-[#1f2937] backdrop-blur-md p-6 rounded-lg shadow-md border border-[#3b82f6]/30 animate-slide-up">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative h-20 bg-gradient-to-b from-[#0f172a] to-[#1f2937] clip-path-[polygon(0_0,100%_20%,100%_80%,0_100%)] shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>

      {/* FAQ Section */}
      <section
        id="faq"
        role="region"
        aria-labelledby="faq-heading"
        className="section-spacing bg-[#0f172a] relative z-10 grain-overlay"
      >
        <div className="container mx-auto px-4">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-serif font-bold text-[#e2e8f0] text-center mb-16 animate-fade-in">
            Common Questions
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto mt-2"></span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1f2937] backdrop-blur-md p-4 rounded-lg shadow-md border border-[#3b82f6]/30 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-serif font-semibold text-[#e2e8f0] mb-2">{faq.question}</h3>
                <p className="text-[#94a3b8] font-inter">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}