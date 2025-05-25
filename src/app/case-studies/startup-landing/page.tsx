"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { caseStudies } from '../data';
import InfoCard from '../../../components/InfoCard';
import FeatureCard from '../../../components/FeatureCard';
import StatCard from '../../../components/StatCard';
import MockupParallax from '../../../components/MockupParallax';
import { LayoutDashboard, Code, Eye, Clock, CheckCircle, ArrowLeft, Users, Zap, Check } from 'lucide-react';

const caseStudy = caseStudies.find((cs) => cs.slug === "startup-landing");

const overviewData = [
  { title: "Industry", content: "SaaS" },
  { title: "Style", content: "Modern, Minimalist" },
  { title: "Results", content: "Increased demo sign-ups by 25%" },
];

const features = [
  { title: "Animated Hero", description: "Engaging intro with smooth animations.", icon: <LayoutDashboard className="w-6 h-6 mb-3 text-indigo-600" />, index: 0 },
  { title: "Responsive Design", description: "Optimized for all devices with Tailwind CSS.", icon: <Code className="w-6 h-6 mb-3 text-indigo-600" />, index: 1 },
  { title: "Clear CTA", description: "Prominent demo sign-up button for conversions.", icon: <Eye className="w-6 h-6 mb-3 text-indigo-600" />, index: 2 },
];

const processSteps = [
  { step: "Discovery", description: "Analyzed client needs and defined goals.", icon: Clock },
  { step: "Design", description: "Created wireframes and a modern UI prototype.", icon: LayoutDashboard },
  { step: "Development", description: "Built with Next.js and optimized for performance.", icon: Code },
  { step: "Testing", description: "Ensured responsiveness and UX quality.", icon: CheckCircle },
];

const stats = [
  { label: "Demo Sign-Ups", value: 25, suffix: "%", icon: <Users className="w-6 h-6 mx-auto mb-3 text-indigo-600" />, index: 0 },
  { label: "User Engagement", value: 40, suffix: "%", icon: <Zap className="w-6 h-6 mx-auto mb-3 text-indigo-600" />, index: 1 },
  { label: "Success Rate", value: 95, suffix: "%", icon: <Check className="w-6 h-6 mx-auto mb-3 text-indigo-600" />, index: 2 },
];

export default function StartupLandingCaseStudy() {
  const pathname = usePathname();

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center font-sans">
        Case study not found
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto py-5 flex justify-between items-center">
          <h3 className="text-lg font-semibold text-indigo-600 font-serif">BrightCRM</h3>
          <div className="space-x-8">
            {['overview','process','features','mockup','stats'].map(id => (
              <Link
                key={id}
                href={`#${id}`}
                className={`relative font-sans hover:text-indigo-700 transition-colors ${pathname.endsWith(id) ? 'text-indigo-700 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-green-500 animate-scale-x' : 'text-gray-600'}`}
                aria-label={`Go to ${id}`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      {/* Back to Case Studies Button */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, delay: 0.3 }}
        className="fixed top-20 left-4 z-50"
      >
        <Link
          href="/case-studies"
          role="button"
          className="btn-outline flex items-center font-sans"
          aria-label="Back to case studies"
        >
          <ArrowLeft className="w-5 h-5 mr-2 text-indigo-600" />
          Back to Case Studies
        </Link>
      </motion.div>

      {/* Main Content */}
      <main className="pt-20 space-y-20">
        {/* Overview Section */}
                {/* Overview Section */}
        <section id="overview" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8 font-serif">Project Overview</h2>
            <hr className="border-gray-200 mb-8" />
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-16 font-sans">{caseStudy.description}</p>
            <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {overviewData.map((item, i) => (
                <InfoCard key={i} title={item.title}>
                  {item.content}
                </InfoCard>
              ))}
            </ul>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 font-serif text-center">Key Features</h2>
            <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map(f => (
                <FeatureCard
                  key={f.index}
                  icon={f.icon}
                  title={f.title}
                  description={f.description}
                  index={f.index}
                />
              ))}
            </ul>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 font-serif text-center">Development Process</h2>
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
              {processSteps.map((step, i) => (
                <motion.div
                  key={i}
                  className={`pl-6 ${i % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="absolute top-0 left-0 -ml-3 bg-gradient-to-br from-indigo-400 to-green-400 w-6 h-6 rounded-full" />
                  <h3 className="flex items-center text-xl font-serif text-gray-900 mb-2">
                    <step.icon className="w-6 h-6 text-indigo-600 mr-2" />{step.step}
                  </h3>
                  <p className="text-gray-600 font-sans leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mockup Section */}
        <section id="mockup" className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 font-serif">See It in Action</h2>
            <MockupParallax />
            <div className="mt-8">
              <Link href="#contact" className="inline-block border border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-sans hover:bg-indigo-50 transition-colors">
                Request a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900 mb-12 font-serif text-center">Our Impact</h2>
            <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map(s => (
                <StatCard
                  key={s.index}
                  icon={s.icon}
                  label={s.label}
                  value={s.value}
                  suffix={s.suffix}
                  index={s.index}
                />
              ))}
            </ul>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-200 py-10 border-t">
          <div className="container mx-auto text-center font-sans">
            <p className="text-gray-600 mb-4">© 2025 BrightCRM. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
              {/* Social icons could go here */}
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
