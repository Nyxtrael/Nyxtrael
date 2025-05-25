"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
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
  {
    title: "Animated Hero",
    description: "Engaging intro with smooth animations.",
    icon: <LayoutDashboard className="w-8 h-8 mb-4 text-indigo-600" />, 
    color: 'border-indigo-600',
    index: 0,
  },
  {
    title: "Responsive Design",
    description: "Optimized for all devices with Tailwind CSS.",
    icon: <Code className="w-8 h-8 mb-4 text-indigo-600" />, 
    color: 'border-indigo-600',
    index: 1,
  },
  {
    title: "Clear CTA",
    description: "Prominent demo sign-up button for conversions.",
    icon: <Eye className="w-8 h-8 mb-4 text-indigo-600" />, 
    color: 'border-indigo-600',
    index: 2,
  },
];

const process = [
  { step: "Discovery", description: "Analyzed client needs and defined goals.", icon: Clock },
  { step: "Design", description: "Created wireframes and a modern UI prototype.", icon: LayoutDashboard },
  { step: "Development", description: "Built with Next.js and optimized for performance.", icon: Code },
  { step: "Testing", description: "Ensured responsiveness and UX quality.", icon: CheckCircle },
];

const stats = [
  { label: "Demo Sign-Ups", value: 25, suffix: "%", icon: <Users className="w-8 h-8 mx-auto mb-4 text-indigo-600" />, index: 0 },
  { label: "User Engagement", value: 40, suffix: "%", icon: <Zap className="w-8 h-8 mx-auto mb-4 text-indigo-600" />, index: 1 },
  { label: "Success Rate", value: 95, suffix: "%", icon: <Check className="w-8 h-8 mx-auto mb-4 text-indigo-600" />, index: 2 },
];

export default function StartupLandingCaseStudy() {
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 text-gray-900 flex items-center justify-center font-sans">
        Case study not found
      </div>
    );
  }

  return (
    <main role="main" className="min-h-screen bg-gray-50 text-gray-900 font-sans relative overflow-hidden">
      {/* Static Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block" aria-hidden="true">
        {/* ...SVG shapes */}
      </div>

      {/* Sticky Nav */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h3 className="text-xl font-serif text-indigo-600">BrightCRM</h3>
          <div className="space-x-6">
            {['overview', 'process', 'features', 'mockup', 'stats'].map((id) => (
              <Link
                key={id}
                href={`#${id}`}
                aria-label={`Go to ${id}`}
                className="hover:text-indigo-600 transition-colors font-sans"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="fixed top-20 left-4 z-50 animate-slide-right">
        <Link href="/case-studies" role="button" className="btn-outline flex items-center font-sans" aria-label="Back to case studies">
          <ArrowLeft className="w-5 h-5 mr-2 text-indigo-600" /> Back
        </Link>
      </div>

      {/* Hero */}
      <section id="hero" aria-labelledby="hero-heading" className="section-spacing flex items-center justify-center relative z-10 pt-16">
        <div className="text-center">
          <h1 id="hero-heading" className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4 heading-underline animate-fade-in">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-sans animate-slide-right">
            {caseStudy.description}
          </p>
          <Link href="#overview" className="btn-primary font-sans animate-pulse">
            Explore Project
          </Link>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" aria-labelledby="overview-heading" className="section-spacing container mx-auto">
        <h2 id="overview-heading" className="text-3xl font-serif mb-6 heading-underline text-gray-900 animate-fade-in">
          Project Overview
        </h2>
        <p className="text-gray-600 mb-6 font-sans animate-slide-up">
          BrightCRM needed a landing page to drive demo sign-ups for their innovative CRM application. We delivered a sleek, modern design with a focus on user experience, resulting in a 25% increase in conversions.
        </p>
        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {overviewData.map((item, idx) => (
            <InfoCard key={idx} title={item.title}>
              {item.content}
            </InfoCard>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section id="process" aria-labelledby="process-heading" className="section-spacing container mx-auto bg-gray-50">
        <h2 id="process-heading" className="text-3xl font-serif mb-6 text-center heading-underline text-gray-900 animate-fade-in">
          Development Process
        </h2>
        <ol role="list" className="relative border-l-2 border-indigo-600/20 ml-4 space-y-8">
          {process.map((step, idx) => (
            <motion.li
              key={idx}
              className="pl-6"
              variants={{ hidden: { opacity: 0, x: idx % 2 === 0 ? -20 : 20 }, visible: { opacity: 1, x: 0 } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <span className="absolute -left-1.5 bg-indigo-600 w-3 h-3 rounded-full"></span>
              <h3 className="flex items-center text-xl font-serif text-gray-900">
                <step.icon className="w-5 h-5 text-indigo-600 mr-2" /> {step.step}
              </h3>
              <p className="text-gray-600 font-sans">{step.description}</p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* Features */}
      <section id="features" aria-labelledby="features-heading" className="section-spacing container mx-auto">
        <h2 id="features-heading" className="text-3xl font-serif mb-6 text-center heading-underline text-gray-900 animate-fade-in">
          Key Features
        </h2>
        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={feature.index}
            />
          ))}
        </ul>
      </section>

      {/* Mockup */}
      <section id="mockup" aria-labelledby="mockup-heading" className="section-spacing container mx-auto">
        <h2 id="mockup-heading" className="text-3xl font-serif mb-6 text-center heading-underline text-gray-900 animate-fade-in">
          See It in Action
        </h2>
        <MockupParallax />
      </section>

      {/* Stats */}
      <section id="stats" aria-labelledby="stats-heading" className="section-spacing container mx-auto">
        <h2 id="stats-heading" className="text-3xl font-serif mb-6 text-center heading-underline text-gray-900 animate-fade-in">
          Our Impact
        </h2>
        <ul role="list" className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <StatCard
              key={stat.index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              index={stat.index}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
