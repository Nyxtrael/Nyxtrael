import Link from 'next/link';
import { caseStudies } from '../data';
import InfoCard from '../../../components/InfoCard';
import FeatureCard from '../../../components/FeatureCard';
import StatCard from '../../../components/StatCard';
import MockupParallax from '../../../components/MockupParallax';
import { LayoutDashboard, Code, Eye, Clock, CheckCircle, ArrowLeft, Users, Zap, Check } from "lucide-react";

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
    icon: <LayoutDashboard className="w-8 h-8 mb-4 text-dark-accent" />,
    color: 'border-dark-accent',
  },
  {
    title: "Responsive Design",
    description: "Optimized for all devices with Tailwind CSS.",
    icon: <Code className="w-8 h-8 mb-4 text-dark-accent" />,
    color: 'border-dark-accent',
  },
  {
    title: "Clear CTA",
    description: "Prominent demo sign-up button for conversions.",
    icon: <Eye className="w-8 h-8 mb-4 text-dark-accent" />,
    color: 'border-dark-accent',
  },
];

const process = [
  { step: "Discovery", description: "Analyzed client needs and defined goals.", icon: Clock },
  { step: "Design", description: "Created wireframes and a modern UI prototype.", icon: LayoutDashboard },
  { step: "Development", description: "Built with Next.js and optimized for performance.", icon: Code },
  { step: "Testing", description: "Ensured responsiveness and UX quality.", icon: CheckCircle },
];

const stats = [
  { label: "Demo Sign-Ups", value: 25, suffix: "% Increase", icon: <Users className="w-8 h-8 mx-auto mb-4 text-dark-accent" /> },
  { label: "User Engagement", value: 40, suffix: "% Boost", icon: <Zap className="w-8 h-8 mx-auto mb-4 text-dark-accent" /> },
  { label: "Success Rate", value: 95, suffix: "% Satisfaction", icon: <Check className="w-8 h-8 mx-auto mb-4 text-dark-accent" /> },
];

export default function StartupLandingCaseStudy() {
  if (!caseStudy) {
    return <div className="min-h-screen bg-surface-light text-primary flex items-center justify-center font-body">Case study not found</div>;
  }

  return (
    <main role="main" className="min-h-screen bg-surface-light text-primary font-body relative overflow-hidden">
      {/* Static Geometric Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="10%"
            y="20%"
            width="100"
            height="100"
            fill="none"
            stroke="currentColor"
            className="text-dark-accent/20"
            strokeWidth="2"
          />
          <circle
            cx="80%"
            cy="70%"
            r="50"
            fill="none"
            stroke="currentColor"
            className="text-hoverAccent/20"
            strokeWidth="2"
          />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#148F77_0%,transparent_70%)] opacity-10" />
      </div>

      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h3 className="text-xl font-bold font-montserrat text-dark-accent">BrightCRM</h3>
          <div className="space-x-6">
            <Link href="#overview" aria-label="Go to project overview" className="hover:text-dark-accent transition-colors font-inter">
              Overview
            </Link>
            <Link href="#process" aria-label="Go to development process" className="hover:text-dark-accent transition-colors font-inter">
              Process
            </Link>
            <Link href="#features" aria-label="Go to key features" className="hover:text-dark-accent transition-colors font-inter">
              Features
            </Link>
            <Link href="#mockup" aria-label="Go to mockup section" className="hover:text-dark-accent transition-colors font-inter">
              Mockup
            </Link>
            <Link href="#stats" aria-label="Go to stats section" className="hover:text-dark-accent transition-colors font-inter">
              Stats
            </Link>
          </div>
        </div>
      </nav>

      {/* Back to Case Studies Button */}
      <div className="fixed top-20 left-4 z-50 animate-slide-right">
        <Link
          href="/case-studies"
          role="button"
          className="btn-outline flex items-center"
          aria-label="Back to case studies"
        >
          <ArrowLeft className="w-5 h-5 mr-2" /> Back to Case Studies
        </Link>
      </div>

      {/* Hero Section */}
      <section id="hero" aria-labelledby="hero-heading" className="section-spacing flex items-center justify-center relative z-10 pt-16">
        <div className="text-center">
          <h1 id="hero-heading" className="text-5xl md:text-6xl font-montserrat font-bold text-primary mb-4 heading-underline animate-fade-in">
            {caseStudy.title}
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto mb-8 font-inter animate-slide-right">
            {caseStudy.description}
          </p>
          <Link href="#overview" className="btn-primary font-inter animate-pulse">
            Explore Project
          </Link>
        </div>
      </section>

      {/* Project Overview */}
      <section id="overview" aria-labelledby="overview-heading" className="section-spacing container mx-auto">
        <h2 id="overview-heading" className="text-3xl font-bold font-montserrat mb-6 heading-underline text-primary animate-fade-in">
          Project Overview
        </h2>
        <p className="text-secondary mb-6 font-inter animate-slide-up">
          BrightCRM needed a landing page to drive demo sign-ups for their innovative CRM application. We delivered a sleek, modern design with a focus on user experience, resulting in a 25% increase in conversions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {overviewData.map((item, index) => (
            <InfoCard key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section id="process" aria-labelledby="process-heading" className="section-spacing container mx-auto bg-surface-light">
        <h2 id="process-heading" className="text-3xl font-bold font-montserrat mb-6 text-center heading-underline text-primary animate-fade-in">
          Development Process
        </h2>
        <ol role="list" className="relative border-l-2 border-dark-accent/20 ml-4 space-y-8">
          {process.map((step, index) => (
            <li
              key={index}
              className={`pl-6 ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <span className="absolute -left-1.5 bg-dark-accent w-3 h-3 rounded-full"></span>
              <h3 className="flex items-center text-xl font-semibold text-primary font-montserrat">
                <step.icon className="w-5 h-5 text-dark-accent mr-2" /> {step.step}
              </h3>
              <p className="text-secondary font-inter">{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Features Showcase */}
      <section id="features" aria-labelledby="features-heading" className="section-spacing container mx-auto">
        <h2 id="features-heading" className="text-3xl font-bold font-montserrat mb-6 text-center heading-underline text-primary animate-fade-in">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Mockup Section */}
      <section id="mockup" aria-labelledby="mockup-heading" className="section-spacing container mx-auto">
        <h2 id="mockup-heading" className="text-3xl font-bold font-montserrat mb-6 text-center heading-underline text-primary animate-fade-in">
          See It in Action
        </h2>
        <MockupParallax />
      </section>

      {/* Stats Section */}
      <section id="stats" aria-labelledby="stats-heading" className="section-spacing container mx-auto">
        <h2 id="stats-heading" className="text-3xl font-bold font-montserrat mb-6 text-center heading-underline text-primary animate-fade-in">
          Our Impact
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} icon={stat.icon} label={stat.label} index={index}>
              <StatCard.AnimatedCounter end={stat.value} suffix={stat.suffix} />
            </StatCard>
          ))}
        </div>
      </section>
    </main>
  );
}