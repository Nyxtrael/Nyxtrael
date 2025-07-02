'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Hero from '../components/Hero';
import AboutSnippet from '../components/AboutSnippet';
import ServiceCard from '../components/ServiceCard';
import TestimonialsSlider from '../components/TestimonialsSlider';
import FinalCTA from '../components/FinalCTA';
import { CodeBracketIcon, PaintBrushIcon, LightBulbIcon, UserIcon, ClockIcon, RocketLaunchIcon, WalletIcon } from '@heroicons/react/24/outline';

// Define the ExampleWork type
interface ExampleWork {
  title: string;
  description: string;
  thumbnail: string;
  href: string;
  metric: string;
}

// Example work data with success metrics
const exampleWorkSubpages: ExampleWork[] = [
  {
    title: 'ShopTrend – E-commerce Redesign',
    description: 'Modern e-commerce store with enhanced UX.',
    thumbnail: '/images/shoptrend.jpg',
    href: '/example-work/shop',
    metric: '+25% conversion increase',
  },
  {
    title: 'DataSync – SaaS Analytics Dashboard',
    description: 'Intuitive analytics for a SaaS app.',
    thumbnail: '/images/datasync.jpg',
    href: '/example-work/data',
    metric: '40% faster load time',
  },
  {
    title: 'Health & Wellness – Diet Plans',
    description: 'Vibrant one-pager for health courses.',
    thumbnail: '/images/health-wellness.jpg',
    href: '/example-work/health',
    metric: '90+ PageSpeed score',
  },
  {
    title: 'Artist Portfolio – Creative Showcase',
    description: 'Elegant portfolio for a visual artist.',
    thumbnail: '/images/artist-portfolio.jpg',
    href: '/example-work/artist',
    metric: '50% more engagement',
  },
];

const services = [
  {
    title: 'Web Development',
    description: 'Fast, responsive websites tailored to your goals.',
    icon: <CodeBracketIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive designs that engage your users.',
    icon: <PaintBrushIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
  {
    title: 'Consulting',
    description: 'Expert guidance to optimize your digital strategy.',
    icon: <LightBulbIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
];

const benefits = [
  {
    title: 'Direct Communication',
    description: 'Clear updates throughout your project.',
    icon: <UserIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
  {
    title: 'Reliability',
    description: 'Projects delivered on time, every time.',
    icon: <ClockIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
  {
    title: 'Cutting-edge Tech',
    description: 'Built with Next.js, Tailwind, and AI tools.',
    icon: <RocketLaunchIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
  {
    title: 'Flexible Approach',
    description: 'Tailored billing to suit your needs.',
    icon: <WalletIcon className="h-12 w-12 text-accent hover:text-yellow-400 transition-colors" />,
  },
];

const testimonials = [
  {
    quote: 'Delivered our project 3 days ahead of schedule!',
    author: 'Alex, Startup Founder',
    avatar: '/images/avatar-alex.jpg',
  },
  {
    quote: 'Site speed improved by 50% – a game changer!',
    author: 'Sarah, E-commerce Owner',
    avatar: '/images/avatar-sarah.jpg',
  },
  {
    quote: 'Professional and highly skilled. Highly recommend!',
    author: 'Mark, SaaS CEO',
    avatar: '/images/avatar-mark.jpg',
  },
];

const smartTools = [
  { name: 'AI Content Generation', description: 'Streamlined content creation with AI.', icon: '🤖' },
  { name: 'Rapid Prototyping', description: 'Quick, interactive prototypes.', icon: '⚡' },
  { name: 'Automated Testing', description: 'Efficient, reliable testing.', icon: '✅' },
];

const customStyles = `
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #0d1117 0%, #1f2937 50%, #0d1117 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

export default function Home() {
  return (
    <div className="bg-neutral-bg font-inter">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <Hero />

      <div className="section-divider" />

      {/* About Snippet */}
      <AboutSnippet />

      <div className="section-divider" />

      {/* Services Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            My Services
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-neutral-mid p-6 rounded-lg border border-accent/30 hover:border-yellow-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-text-base mb-2 text-center">{service.title}</h3>
                <p className="text-text-muted text-center mb-4">{service.description}</p>
                <Link href="/services" className="text-accent hover:text-yellow-400 text-center block">
                  Learn More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Why Work With Me Section */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Why Work With Me
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-neutral-mid p-6 rounded-lg border border-accent/30 hover:border-yellow-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-text-base mb-2 text-center">{benefit.title}</h3>
                <p className="text-text-muted text-center">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Testimonials Slider */}
      <TestimonialsSlider testimonials={testimonials} />

      <div className="section-divider" />

      {/* Smart Tools Section */}
      <section className="py-24 bg-neutral-bg grid-pattern">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Smart Tools I Use
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {smartTools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-neutral-mid p-6 rounded-lg border border-accent/30 hover:border-yellow-400/50 transition-all duration-300 text-center group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="text-4xl mb-4 block">{tool.icon}</span>
                <p className="text-text-base font-semibold">{tool.name}</p>
                <p className="text-text-muted text-sm absolute bg-neutral-mid p-2 rounded mt-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Example Work Highlights */}
      <section className="py-24 bg-neutral-bg">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-5xl font-bold text-text-base text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Example Work Highlights
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exampleWorkSubpages.map((subpage, index) => (
              <motion.div
                key={index}
                className="bg-neutral-mid rounded-lg overflow-hidden border border-accent/30 hover:border-yellow-400/50 hover:shadow-accent/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img src={subpage.thumbnail} alt={subpage.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-text-base mb-2">{subpage.title}</h3>
                  <p className="text-text-muted mb-2">{subpage.description}</p>
                  <p className="text-accent text-sm mb-4">{subpage.metric}</p>
                  <Link
                    href={subpage.href}
                    className="inline-block bg-gradient-cta text-neutral-dark px-4 py-2 rounded-lg font-semibold hover:shadow-accent/50 transition-all duration-300"
                  >
                    View Project
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/portfolio" className="text-accent hover:text-yellow-400">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <div className="section-divider" />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}