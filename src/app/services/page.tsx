'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import ServiceCard from '../../components/ServiceCard';
import { CodeBracketIcon, PaintBrushIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { ArrowRight } from 'lucide-react';

// Define form data type
type QuickQuoteFormData = {
  name: string;
  email: string;
  message: string;
};

const services = [
  {
    title: 'Web Development',
    description: 'Fast, responsive websites tailored to your needs.',
    icon: <CodeBracketIcon className="h-12 w-12 text-[#4f46e5] hover:text-[#22d3ee] transition-colors" />,
    benefits: [
      'Optimized for speed and SEO',
      'Mobile-first responsive design',
      'Custom functionality with Next.js',
    ],
    examples: ['SaaS Dashboard', 'E-commerce Platform', 'Portfolio Website'],
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive and aesthetic designs that boost user engagement.',
    icon: <PaintBrushIcon className="h-12 w-12 text-[#4f46e5] hover:text-[#22d3ee] transition-colors" />,
    benefits: [
      'User-centered design process',
      'Interactive prototypes',
      'Consistent brand visuals',
    ],
    examples: ['Landing Page Design', 'App Interface', 'Design System'],
  },
  {
    title: 'Consulting',
    description: 'Expert guidance on digital strategy and project optimization.',
    icon: <LightBulbIcon className="h-12 w-12 text-[#4f46e5] hover:text-[#22d3ee] transition-colors" />,
    benefits: [
      'Technical audits and recommendations',
      'Performance optimization strategies',
      'Scalable architecture planning',
    ],
    examples: ['SEO Audit', 'Performance Optimization', 'Tech Strategy'],
  },
];

const processSteps = [
  {
    title: 'Free Consultation',
    description: 'We discuss your goals and requirements.',
  },
  {
    title: 'Proposal & Timeline',
    description: 'You receive a detailed project outline.',
  },
  {
    title: 'Design & Build',
    description: 'I create your custom website step by step.',
  },
  {
    title: 'Launch & Support',
    description: 'Your site goes live and stays in good hands.',
  },
];

// Custom CSS for section dividers and background effects
const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #111827 0%, #1f2937 50%, #111827 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(79, 70, 229, 0.3);
  }
  .hero-bg {
    background: linear-gradient(135deg, #111827 0%, #1f2937 100%);
    position: relative;
    overflow: hidden;
  }
  .hero-bg::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 20%, rgba(79, 70, 229, 0.3) 0%, transparent 70%);
    animation: pulse-slow 10s ease-in-out infinite;
  }
  .hero-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 80%, rgba(34, 211, 238, 0.2) 0%, transparent 70%);
    animation: pulse-slow 12s ease-in-out infinite;
  }
`;

export default function Services() {
  // State for form data
  const [formData, setFormData] = useState<QuickQuoteFormData>({
    name: '',
    email: '',
    message: '',
  });

  // State for submission status
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // State for form errors
  const [errors, setErrors] = useState<Partial<QuickQuoteFormData>>({});

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error for the field when user starts typing
    setErrors((prev) => ({
      ...prev,
      [id]: '',
    }));
  };

  // Validate form data
  const validateForm = () => {
    const newErrors: Partial<QuickQuoteFormData> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <main className="bg-[#111827] overflow-hidden">
      <Head>
        <title>Services – Nyxtrael</title>
        <meta
          name="description"
          content="Nyxtrael offers professional web development, UI/UX design, and consulting services. Discover fast, responsive, and SEO-optimized solutions."
        />
      </Head>

      <style>{customStyles}</style>

      {/* Services Hero Section with Video Background */}
      <section className="hero-bg relative min-h-[60vh] flex items-center py-20">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
            preload="none"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
          >
            <source src="/videos/background-video.webm" type="video/webm" />
            <source src="/videos/background-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#111827]/80 backdrop-blur-sm" />
        </div>
        <div className="container mx-auto text-center z-10 relative">
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-[#e5e7eb] mb-6 animate-fade-in">
            My Services
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#4f46e5] to-[#22d3ee] mx-auto mt-2"></span>
          </h1>
          <p className="text-xl md:text-2xl text-[#9ca3af] mb-10 leading-relaxed font-inter animate-fade-in-delay">
            Fast, modern websites for startups, creators, and SaaS — crafted with speed, design, and performance in mind.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Services List Section */}
      <section className="section-spacing bg-[#111827] py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] text-center mb-16 animate-fade-in">
            What I Offer
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#4f46e5] to-[#22d3ee] mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                  examples={service.examples}
                  className="bg-[#1f2937] border-[#4f46e5]/30 hover:border-[#22d3ee]/50 hover:shadow-[#4f46e5]/50 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* How It Works Section */}
      <section className="section-spacing bg-[#111827] py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] text-center mb-16 animate-fade-in">
            How It Works
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#4f46e5] to-[#22d3ee] mx-auto mt-2"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-[#4f46e5] text-[#e5e7eb] font-serif font-bold hover:bg-[#22d3ee] transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#9ca3af] font-inter">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Call to Action Section */}
      <section className="section-spacing bg-[#111827] text-center py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] mb-8 animate-fade-in">
            Let’s Work Together
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#4f46e5] to-[#22d3ee] mx-auto mt-2"></span>
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] mb-10 leading-relaxed font-inter animate-fade-in-delay">
            Ready to transform your digital presence? Let’s discuss how I can help.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Left Option: Quick Quote Form */}
            <div className="flex-1 max-w-md">
              <h3 className="text-lg font-serif font-semibold text-[#e5e7eb] mb-4 animate-slide-up">
                Prefer a quick quote?
              </h3>
              {submitStatus === 'success' ? (
                <p className="text-[#10b981] font-inter">
                  Thank you for your message! I’ll get back to you within 24 hours.
                </p>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="sr-only">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-[#4f46e5]/30 bg-[#1f2937] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all duration-300"
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-[#ef4444] font-inter" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Your Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-[#4f46e5]/30 bg-[#1f2937] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all duration-300"
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-[#ef4444] font-inter" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="sr-only">Your Message</label>
                    <textarea
                      id="message"
                      placeholder="Tell me about your project"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded-lg border border-[#4f46e5]/30 bg-[#1f2937] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all duration-300 resize-none"
                      aria-invalid={errors.message ? 'true' : 'false'}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-[#ef4444] font-inter" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#4f46e5] text-[#e5e7eb] py-4 px-8 rounded-lg text-xl font-semibold font-inter shadow-[#4f46e5]/50 hover:bg-[#22d3ee] hover:shadow-[#22d3ee]/70 transition-all duration-300 animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:ring-offset-2 focus:ring-offset-[#111827] disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={submitStatus === 'loading' ? 'Submitting form...' : 'Get in touch'}
                  >
                    {submitStatus === 'loading' ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-[#e5e7eb]"
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
                        Sending...
                      </span>
                    ) : (
                      <>
                        Get in Touch
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  {submitStatus === 'error' && (
                    <p className="mt-4 text-[#ef4444] font-inter text-center">
                      Failed to send message. Please try again or email me directly at hello@nyxtrael.com.
                    </p>
                  )}
                </form>
              )}
            </div>

            {/* Right Option: Link to a Project */}
            <div className="flex-1 max-w-md flex flex-col items-center">
              <h3 className="text-lg font-serif font-semibold text-[#e5e7eb] mb-4 animate-slide-up">
                Not sure yet?
              </h3>
              <p className="text-[#9ca3af] mb-6 font-inter">
                Explore my Health & Wellness project to see how I’ve brought ideas to life.
              </p>
              <Link
                href="/example-work/health"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#4f46e5] text-[#e5e7eb] py-4 px-8 rounded-lg text-xl font-semibold font-inter shadow-[#4f46e5]/50 hover:bg-[#22d3ee] hover:shadow-[#22d3ee]/70 transition-all duration-300 animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:ring-offset-2 focus:ring-offset-[#111827]"
              >
                See Health Project
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}