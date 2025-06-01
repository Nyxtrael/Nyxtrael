'use client';

import Head from 'next/head';
import Link from 'next/link';
import ServiceCard from '../../components/ServiceCard';
import { CodeBracketIcon, PaintBrushIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { ArrowRight } from 'lucide-react';

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
              <form className="space-y-4">
                <div>
                  <label htmlFor="name-quick" className="sr-only">Your Name</label>
                  <input
                    id="name-quick"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-[#4f46e5]/30 bg-[#1f2937] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all duration-300"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="email-quick" className="sr-only">Your Email</label>
                  <input
                    id="email-quick"
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-[#4f46e5]/30 bg-[#1f2937] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all duration-300"
                    disabled
                  />
                </div>
                <div>
                  <label htmlFor="message-quick" className="sr-only">Your Message</label>
                  <textarea
                    id="message-quick"
                    placeholder="Tell me about your project"
                    rows={4}
                    className="w-full p-3 rounded-lg border border-[#4f46e5]/30 bg-[#1f2937] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4f46e5] transition-all duration-300 resize-none"
                    disabled
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#4f46e5] text-[#e5e7eb] py-4 px-8 rounded-lg text-xl font-semibold font-inter shadow-[#4f46e5]/50 hover:bg-[#22d3ee] hover:shadow-[#22d3ee]/70 transition-all duration-300 animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:ring-offset-2 focus:ring-offset-[#111827]"
                  disabled
                >
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Right Option: Link to Case Studies */}
            <div className="flex-1 max-w-md flex flex-col items-center">
              <h3 className="text-lg font-serif font-semibold text-[#e5e7eb] mb-4 animate-slide-up">
                Not sure yet?
              </h3>
              <p className="text-[#9ca3af] mb-6 font-inter">
                Explore my portfolio to see how I’ve helped others bring their ideas to life.
              </p>
              <Link
                href="/case-studies"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#4f46e5] text-[#e5e7eb] py-4 px-8 rounded-lg text-xl font-semibold font-inter shadow-[#4f46e5]/50 hover:bg-[#22d3ee] hover:shadow-[#22d3ee]/70 transition-all duration-300 animate-pulse-slow focus:outline-none focus:ring-2 focus:ring-[#22d3ee] focus:ring-offset-2 focus:ring-offset-[#111827]"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}