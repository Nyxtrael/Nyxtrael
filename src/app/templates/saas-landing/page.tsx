'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FeatureCard from '../../components/FeatureCard';

const customStyles = `
  .hero {
    background: linear-gradient(to right, #a8b5f5, #6b48ff);
    clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
  }
  .mockup {
    position: relative;
    overflow: hidden;
    border: 2px solid #e0e7ff;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  .mockup img {
    transform: translateY(-10%);
  }
  .frosted {
    backdrop-filter: blur(6px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .feature-card {
    transition: all 0.3s ease;
    border-radius: 10px;
    overflow: hidden;
  }
  .feature-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`;

export default function SaaSLanding() {
  return (
    <div className="bg-neutral-bg text-text-base font-inter min-h-screen">
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center py-24 hero overflow-hidden">
        <div className="container mx-auto text-center z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            SaaS Landing Template
          </motion.h1>
          <p className="text-2xl md:text-3xl text-white mb-8">
            A custom template designed for speed, style, and seamless integration.
          </p>
          <div className="flex justify-center gap-6">
            <Link
              href="#features"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-md"
              aria-label="Learn more about SaaS Landing"
            >
              Learn More
            </Link>
            <Link
              href="https://github.com/nyxtrael/saas-landing"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md"
              aria-label="Download SaaS Landing template"
            >
              Download
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/video-poster.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
            aria-hidden="true"
          >
            <source src="/videos/templates.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard title="Responsive Design" description="Adapts to all devices with a custom structure." />
            <FeatureCard title="SEO Optimized" description="Built for search engines with fast load times." />
            <FeatureCard title="Easy Customization" description="Tailor it to your unique design needs." />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-neutral-bg frosted rounded-lg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">About This Template</h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            This SaaS landing page is a one-pager built with Next.js and Tailwind CSS, designed for startups. It includes a pricing section, FAQ, and subscription form to engage users effectively.
          </p>
          <div className="mt-8">
            <div className="mockup">
              <img src="/images/templates/saas-landing.webp" alt="SaaS Landing Preview" className="w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-6 text-white">Ready to Launch?</h2>
          <p className="text-base text-gray-300 mb-8">Subscribe for updates or download this custom template now.</p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-300 to-indigo-400 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md"
              aria-label="Contact for custom template"
            >
              Let's Talk
            </Link>
            <Link
              href="https://github.com/nyxtrael/saas-landing"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md"
              aria-label="Download SaaS Landing"
            >
              Download Now
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-2">
            <input
              type="email"
              placeholder="Subscribe for updates..."
              className="px-4 py-2 border rounded-l bg-white text-gray-800 focus:ring-2 focus:ring-indigo-400"
              aria-label="Newsletter email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
            <button
              className="bg-gradient-to-r from-purple-300 to-indigo-400 text-white px-4 py-2 rounded-r font-semibold hover:opacity-90 transition-all duration-300"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}