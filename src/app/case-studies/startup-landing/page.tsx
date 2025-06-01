'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChartBarIcon, ShieldCheckIcon, CursorArrowRaysIcon, DocumentChartBarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Niestandardowe style CSS dla efektów tła, separatorów i animacji
const customStyles = `
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes count-up {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-in-out;
  }
  .animate-count-up {
    animation: count-up 1s ease-in-out;
  }
  .hero-bg {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    position: relative;
    overflow: hidden;
  }
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #1e3a8a 0%, #1f2937 50%, #1e3a8a 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

const features = [
  {
    title: 'Intuitive Single-Action Layout',
    description: 'Designed with a clear focus: one section, one action to guide users directly to the demo sign-up.',
    icon: <CursorArrowRaysIcon className="h-8 w-8 text-[#3b82f6] hover:text-[#60a5fa] transition-colors" />,
  },
  {
    title: 'Social Proof Section',
    description: 'Added client testimonials to build trust and credibility with potential users.',
    icon: <ShieldCheckIcon className="h-8 w-8 text-[#3b82f6] hover:text-[#60a5fa] transition-colors" />,
  },
  {
    title: 'Highlighted Success Metrics',
    description: 'Showcased key stats like +25% conversion increase to emphasize results.',
    icon: <ChartBarIcon className="h-8 w-8 text-[#3b82f6] hover:text-[#60a5fa] transition-colors" />,
  },
];

export default function BrightCRMCaseStudy() {
  return (
    <div className="bg-[#1f2937]">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section className="hero-bg relative grain-overlay py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/brightcrm-video-poster.jpg"
            preload="none"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30 blur-sm"
            aria-hidden="true"
          >
            <source src="/videos/brightcrm-dashboard.webm" type="video/webm" />
            <source src="/videos/brightcrm-dashboard.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1e3a8a]/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-sans font-bold text-[#e5e7eb] mb-4 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Boost Your Sales with BrightCRM
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#bfdbfe] mb-8 max-w-3xl mx-auto font-sans leading-relaxed animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Manage customer relationships smarter – try our demo for free.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-[#3b82f6] text-[#e5e7eb] px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:bg-[#60a5fa] hover:shadow-[#3b82f6]/50 transition-all duration-300 animate-pulse-slow"
              aria-label="Request a demo of BrightCRM"
            >
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Problem & Solution Section */}
      <section className="section bg-[#1f2937] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold text-[#e5e7eb] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Problem & Solution
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto mt-2"></span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#3b82f6]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-sans font-semibold text-[#e5e7eb] mb-4">The Challenge</h3>
              <p className="text-[#9ca3af] font-sans leading-relaxed">
                BrightCRM faced a low conversion rate of visitors into demo users due to an outdated and cluttered landing page that failed to engage potential customers effectively.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#3b82f6]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-sans font-semibold text-[#e5e7eb] mb-4">The Solution</h3>
              <p className="text-[#9ca3af] font-sans leading-relaxed">
                I redesigned the landing page to focus on a clear value proposition, a streamlined demo sign-up form, and engaging visuals to capture user interest and drive conversions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Key Features Section */}
      <section className="section bg-[#1f2937] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold text-[#e5e7eb] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Key Features
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto mt-2"></span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#3b82f6]/30 hover:border-[#60a5fa]/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4" aria-hidden="true">{feature.icon}</div>
                <h3 className="text-xl font-sans font-semibold text-[#e5e7eb] mb-2 text-center">{feature.title}</h3>
                <p className="text-[#9ca3af] leading-relaxed text-center font-sans">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Process Section */}
      <section className="section bg-[#1f2937] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold text-[#e5e7eb] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Development Process
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto mt-2"></span>
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#3b82f6]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-sans font-semibold text-[#e5e7eb] mb-2">Analysis</h3>
              <p className="text-[#9ca3af] font-sans leading-relaxed">
                I analyzed the old landing page, identifying high bounce rates and lack of clear CTAs as key issues.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#3b82f6]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-sans font-semibold text-[#e5e7eb] mb-2">Prototyping</h3>
              <p className="text-[#9ca3af] font-sans leading-relaxed">
                Created wireframes in Figma, focusing on a single-action layout and incorporating user feedback.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#3b82f6]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-sans font-semibold text-[#e5e7eb] mb-2">Development</h3>
              <p className="text-[#9ca3af] font-sans leading-relaxed">
                Built the page with Next.js, ensuring fast load times and SEO optimization for better visibility.
              </p>
            </motion.div>
            <motion.div
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#3b82f6]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-sans font-semibold text-[#e5e7eb] mb-2">Testing</h3>
              <p className="text-[#9ca3af] font-sans leading-relaxed">
                Conducted A/B testing to compare the new design against the old, refining based on user behavior.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col md:flex-row gap-8 mt-12 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex-1">
              <h4 className="text-lg font-sans font-semibold text-[#e5e7eb] mb-2 text-center">Wireframe</h4>
              <Image
                src="/images/brightcrm-wireframe.jpg"
                alt="BrightCRM landing page wireframe"
                width={500}
                height={300}
                className="w-full rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-sans font-semibold text-[#e5e7eb] mb-2 text-center">Final Design</h4>
              <Image
                src="/images/brightcrm-final.jpg"
                alt="BrightCRM landing page final design"
                width={500}
                height={300}
                className="w-full rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Results Section */}
      <section className="section bg-[#1f2937] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold text-[#e5e7eb] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Results & Impact
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto mt-2"></span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="text-center animate-count-up"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex justify-center mb-4">
                <DocumentChartBarIcon className="h-12 w-12 text-[#3b82f6] hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
              </div>
              <p className="text-5xl font-sans font-bold text-[#3b82f6] mb-2">+25%</p>
              <p className="text-[#9ca3af] font-sans">Increase in demo sign-ups within 8 weeks of launch.</p>
            </motion.div>
            <motion.div
              className="text-center animate-count-up"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="flex justify-center mb-4">
                <DocumentChartBarIcon className="h-12 w-12 text-[#3b82f6] hover:text-[#60a5fa] transition-colors" aria-hidden="true" />
              </div>
              <p className="text-5xl font-sans font-bold text-[#3b82f6] mb-2">-40%</p>
              <p className="text-[#9ca3af] font-sans">Reduction in bounce rate after the redesign.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Visual Mockups Section */}
      <section className="section bg-[#1f2937] grain-overlay py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold text-[#e5e7eb] text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            See It in Action
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] mx-auto mt-2"></span>
          </motion.h2>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/brightcrm-mockup.jpg"
              alt="BrightCRM landing page on laptop and mobile devices"
              width={800}
              height={400}
              className="rounded-lg shadow-md"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Final CTA */}
      <section className="section bg-[#1f2937] text-center grain-overlay py-24">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-sans font-bold text-[#e5e7eb] mb-4 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Want Similar Results?
          </motion.h2>
          <motion.p
            className="text-lg text-[#9ca3af] mb-8 max-w-2xl mx-auto font-sans animate-fade-in-delay"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let’s talk about upgrading your landing page to drive conversions.
          </motion.p>
          <motion.div
            className="md:sticky bottom-4 z-50 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#3b82f6] text-[#e5e7eb] py-4 px-8 text-lg rounded-lg font-sans font-semibold hover:bg-[#60a5fa] hover:shadow-[#3b82f6]/50 transition-all duration-300 animate-pulse-slow"
              aria-label="Contact us to discuss your project"
            >
              Let’s Talk
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}