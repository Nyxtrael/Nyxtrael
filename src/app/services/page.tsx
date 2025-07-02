'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ServiceCard from '../../components/ServiceCard';
import { CodeBracketIcon, PaintBrushIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface QuickQuoteFormData {
  name: string;
  email: string;
  message: string;
}

const services = [
  {
    title: 'Web Development',
    description: 'Fast, responsive websites tailored to your needs.',
    icon: <CodeBracketIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
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
    icon: <PaintBrushIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
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
    icon: <LightBulbIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
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

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, var(--neutral-bg) 0%, var(--neutral-mid) 50%, var(--neutral-bg) 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
  }
`;

export default function Services() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<QuickQuoteFormData>();
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const onSubmit = async (data: QuickQuoteFormData) => {
    setSubmitStatus('loading');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <main className="bg-neutral-bg font-inter overflow-hidden">
      <style>{customStyles}</style>

      {/* Services Hero Section */}
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
            My Services
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-10 leading-relaxed">
            Fast, modern websites for startups, creators, and SaaS—crafted with speed, design, and performance in mind.
            <br />
            (Usługi dostępne w języku polskim i angielskim)
          </p>
        </motion.div>
      </section>

      <div className="section-divider" />

      {/* Services List Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            What I Offer
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  benefits={service.benefits}
                  examples={service.examples}
                  className="bg-neutral-mid border-accent/30 hover:border-yellow-400/50 hover:shadow-accent/50 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* How It Works Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How It Works
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent text-neutral-dark font-bold hover:bg-yellow-400 transition-colors">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-text-base mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Testimonial Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Client Feedback
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <motion.blockquote
            className="text-center text-xl text-text-muted italic max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            “Nyxtrael’s work was worth every penny—our site paid for itself in months.” – Jane Doe, Startup Founder
          </motion.blockquote>
        </div>
      </section>

      <div className="section-divider" />

      {/* Call to Action Section */}
      <section className="py-24 bg-neutral-bg text-center">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-text-base mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let’s Work Together
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-text-muted mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your digital presence? Let’s discuss how I can help.
          </motion.p>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Left Option: Quick Quote Form */}
            <motion.div
              className="flex-1 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-text-base mb-4">
                Prefer a quick quote?
              </h3>
              {submitStatus === 'success' ? (
                <p className="text-accent">
                  Thank you for your message! I’ll get back to you within 24 hours.
                </p>
              ) : (
                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-text-base mb-1">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full p-3 rounded-lg border border-accent/30 bg-neutral-mid text-text-base placeholder-text-muted-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      placeholder="Your name"
                      aria-invalid={errors.name ? 'true' : 'false'}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-text-base mb-1">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                          message: 'Invalid email address',
                        },
                      })}
                      className="w-full p-3 rounded-lg border border-accent/30 bg-neutral-mid text-text-base placeholder-text-muted-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300"
                      placeholder="your.email@example.com"
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-text-base mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      {...register('message', { required: 'Message is required', minLength: { value: 20, message: 'Message should be at least 20 characters' } })}
                      className="w-full p-3 rounded-lg border border-accent/30 bg-neutral-mid text-text-base placeholder-text-muted-secondary focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 resize-none"
                      rows={4}
                      placeholder="Describe your project (e.g., industry, goals, features, timeline, budget)"
                      aria-invalid={errors.message ? 'true' : 'false'}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500" role="alert">
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                  <p className="text-sm text-text-muted-secondary">
                    By submitting, you consent to processing your data for responding to your inquiry. See my <Link href="/privacy" className="underline hover:text-accent">Privacy Policy</Link>.
                  </p>
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full inline-flex items-center justify-center gap-2 bg-gradient-cta text-neutral-dark py-4 px-8 rounded-lg text-xl font-semibold shadow-accent/50 hover:shadow-accent/70 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-bg disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={submitStatus === 'loading' ? 'Submitting form...' : 'Get in touch'}
                  >
                    {submitStatus === 'loading' ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-neutral-dark"
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
                    <p className="mt-4 text-red-500 text-center">
                      Failed to send message. Please try again or email me directly at <a href="mailto:hello@nyxtrael.com" className="underline hover:text-accent">hello@nyxtrael.com</a>.
                    </p>
                  )}
                </form>
              )}
            </motion.div>

            {/* Right Option: Link to a Project */}
            <motion.div
              className="flex-1 max-w-md flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-text-base mb-4">
                Not sure yet?
              </h3>
              <p className="text-text-muted mb-6">
                Explore my Health & Wellness project to see how I’ve brought ideas to life.
              </p>
              <Link
                href="/portfolio/health-wellness"
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-cta text-neutral-dark py-4 px-8 rounded-lg text-xl font-semibold shadow-accent/50 hover:shadow-accent/70 transition-all duration-300 focus-outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-bg"
              >
                See Health Project
                <ArrowRight className="w-5 h-5" />
              </Link>
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
    </main>
  );
}