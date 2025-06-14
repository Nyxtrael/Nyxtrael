'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { ArrowRight, ChevronDown, Clock, Globe, ShoppingCart } from 'lucide-react';

// Definiowanie typu Scope
type Scope = 'Large' | 'Medium' | 'Small';

// Niestandardowe style CSS dla efektów tła i separatorów
const customStyles = `
  .hero-bg {
    background: linear-gradient(135deg, #1f2937 0%, #2d3748 100%);
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
    background: radial-gradient(circle at 30% 20%, rgba(96, 165, 250, 0.3) 0%, transparent 70%);
    animation: pulse-slow 10s ease-in-out infinite;
  }
  .hero-bg::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 80%, rgba(96, 165, 250, 0.2) 0%, transparent 70%);
    animation: pulse-slow 12s ease-in-out infinite;
  }
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #1f2937 0%, #2d3748 50%, #1f2937 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(96, 165, 250, 0.3);
  }
  .case-studies-bg {
    background: linear-gradient(135deg, #1f2937 0%, #2d3748 100%);
    position: relative;
    overflow: hidden;
  }
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  @media (max-width: 768px) {
    .masonry-grid {
      columns: 1 !important;
    }
  }
`;

// Dane studiów przypadku (zaktualizowane z caseStudies)
const caseStudiesData = [
  {
    id: 1,
    title: "BrightCRM – Landing Page for CRM Application",
    description: "A responsive landing page encouraging demo sign-ups.",
    industry: "SaaS",
    type: "SaaS",
    plan: "Standard",
    tech: ["Next.js", "Tailwind CSS", "Netlify"],
    features: ["SEO"],
    timeline: "2 weeks",
    image: "/images/startup-landing.jpg",
    impact: 22,
    scope: "Medium" as Scope,
    date: "2024-01-15",
    results: ["Achieved a page load time of 1.4s", "Increased demo sign-ups by 22%"],
    link: "/case-studies/startup-landing",
  },
  {
    id: 2,
    title: "ShopTrend – E-commerce Store Redesign",
    description: "Redesign of an e-commerce store with enhanced UX.",
    industry: "E-commerce",
    type: "E-commerce",
    plan: "Premium",
    tech: ["Next.js", "Tailwind CSS", "Netlify"],
    features: ["CMS", "Stripe", "SEO"],
    timeline: "3 weeks",
    image: "/images/ecommerce-redesign.jpg",
    impact: 15,
    scope: "Large" as Scope,
    date: "2023-06-01",
    results: ["Improved checkout conversion by 15%", "Delivered in 3 weeks"],
    link: "/case-studies/ecommerce-redesign",
  },
  {
    id: 3,
    title: "DataSync – SaaS Analytics Dashboard",
    description: "An intuitive analytics dashboard for a SaaS application.",
    industry: "SaaS",
    type: "SaaS",
    plan: "Standard",
    tech: ["Next.js", "Tailwind CSS"],
    features: ["CMS"],
    timeline: "4 weeks",
    image: "/images/saas-dashboard.jpg",
    impact: 0,
    scope: "Medium" as Scope,
    date: "2024-02-01",
    results: ["Successfully showcased as a portfolio piece"],
    link: "/case-studies/saas-dashboard",
  },
  {
    id: 4,
    title: "PortraitPro – Photographer Portfolio Website",
    description: "A photo gallery with fast loading and fullscreen mode.",
    industry: "Portfolio",
    type: "Portfolio",
    plan: "Basic",
    tech: ["Next.js", "Tailwind CSS", "Netlify"],
    features: ["SEO"],
    timeline: "4 weeks",
    image: "/images/photographer-portfolio.jpg",
    impact: 30,
    scope: "Small" as Scope,
    date: "2023-08-01",
    results: ["Increased client bookings by 30%", "Delivered in 4 weeks"],
    link: "/case-studies/photographer-portfolio",
  },
  {
    id: 5,
    title: "TaskMaster – Task Management PWA",
    description: "A progressive web app for task management, working offline.",
    industry: "PWA",
    type: "PWA",
    plan: "Standard",
    tech: ["Next.js", "Tailwind CSS", "PWA APIs"],
    features: ["PWA"],
    timeline: "6 weeks",
    image: "/images/taskmaster-pwa.jpg",
    impact: 0,
    scope: "Medium" as Scope,
    date: "2024-04-01",
    results: ["Created a fully offline-capable app"],
    link: "/case-studies/taskmaster-pwa",
  },
  {
    id: 6,
    title: "NeonRitual – AI Illustration Art Website",
    description: "An immersive website featuring animated AI illustrations.",
    industry: "Portfolio",
    type: "Portfolio",
    plan: "Basic",
    tech: ["Next.js", "SDXL", "ComfyUI"],
    features: ["AI"],
    timeline: "3 weeks",
    image: "/images/neon-ritual.jpg",
    impact: 0,
    scope: "Small" as Scope,
    date: "2024-05-01",
    results: ["Highlighted my creativity", "Received positive community feedback"],
    link: "/case-studies/neon-ritual",
  },
];

// Główny komponent strony
export default function CaseStudiesPage() {
  // Stan dla sortowania i filtrowania
  const [sortBy, setSortBy] = useState('Newest');
  const [filterType, setFilterType] = useState('All');
  const [filterPlan, setFilterPlan] = useState('All');

  // Ref do elementu wideo
  const videoRef = useRef<HTMLVideoElement>(null);

  // Użycie useEffect do ręcznego wyzwolenia odtwarzania
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  // Opcje sortowania i filtrowania
  const sortOptions = ['Newest', 'Impact', 'Scope'];
  const typeOptions = ['All', 'E-commerce', 'Portfolio', 'Landing', 'SaaS', 'PWA', 'Corporate'];
  const planOptions = ['All', 'Basic', 'Standard', 'Premium'];

  // Filtrowanie i sortowanie danych
  const filteredStudies = caseStudiesData
    .filter((study) => filterType === 'All' || study.type === filterType)
    .filter((study) => filterPlan === 'All' || study.plan === filterPlan)
    .sort((a, b) => {
      if (sortBy === 'Newest') return new Date(b.date).getTime() - new Date(a.date).getTime();
      if (sortBy === 'Impact') return b.impact - a.impact;
      if (sortBy === 'Scope') {
        const scopeOrder: Record<Scope, number> = { Large: 3, Medium: 2, Small: 1 };
        return scopeOrder[b.scope] - scopeOrder[a.scope];
      }
      return 0;
    });

  // Funkcje do debugowania odtwarzania wideo
  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('Video playback error:', e);
  };

  const handleVideoCanPlay = () => {
    console.log('Video can play successfully');
  };

  const handleVideoLoadedData = () => {
    console.log('Video data loaded');
  };

  const handleVideoPlay = () => {
    console.log('Video is playing');
  };

  return (
    <div className="min-h-screen bg-[#1f2937]">
      <style>{customStyles}</style>

      {/* Sekcja Hero */}
      <section className="hero-bg relative grain-overlay py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1f2937] opacity-70 -z-5"></div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] mb-4 animate-fade-in">
          Our Success Stories
        </h1>
        <p className="text-lg text-[#9ca3af] mb-12 max-w-3xl mx-auto font-inter animate-fade-in-delay">
          Discover how I solve real business challenges with clean code and intuitive design.
        </p>
        <div className="gradient-separator w-1/4 mx-auto mb-12 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
      </section>

      {/* Separator */}
      <div className="section-divider"></div>

      {/* Sekcja Filtrowania i Sortowania z tłem wideo */}
      <section className="case-studies-bg relative py-24">
        <div className="video-container">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/case-studies-poster.jpg"
            preload="auto"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
            aria-hidden="true"
            onError={handleVideoError}
            onCanPlay={handleVideoCanPlay}
            onLoadedData={handleVideoLoadedData}
            onPlay={handleVideoPlay}
          >
            <source src="/videos/case-studies-background.webm" type="video/webm" />
            <source src="/videos/case-studies-background.mp4" type="video/mp4" />
          </video>
          {/* <div className="absolute inset-0 bg-[#1f2937]/60 backdrop-blur-sm" /> */}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex flex-wrap gap-4">
              {/* Filtr typu */}
              <div className="relative">
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="appearance-none bg-[#2d3748] text-[#e5e7eb] font-inter py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60a5fa] md:py-3 md:px-6"
                  aria-label="Filter by type"
                >
                  {typeOptions.map((option) => (
                    <option key={option} value={option}>
                      Type: {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" />
              </div>
              {/* Filtr planu */}
              <div className="relative">
                <select
                  value={filterPlan}
                  onChange={(e) => setFilterPlan(e.target.value)}
                  className="appearance-none bg-[#2d3748] text-[#e5e7eb] font-inter py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60a5fa] md:py-3 md:px-6"
                  aria-label="Filter by plan"
                >
                  {planOptions.map((option) => (
                    <option key={option} value={option}>
                      Plan: {option}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" />
              </div>
            </div>
            {/* Sortowanie */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-[#2d3748] text-[#e5e7eb] font-inter py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60a5fa] md:py-3 md:px-6"
                aria-label="Sort by"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    Sort by: {option}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" />
            </div>
          </div>

          {/* Siatka studiów przypadku (układ Masonry) */}
          <div className="masonry-grid columns-1 md:columns-2 lg:columns-3 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="relative overflow-hidden rounded-xl bg-[#2d3748] shadow-md border border-[#60a5fa]/30 mb-8 break-inside-avoid animate-fade-in"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d3748] to-transparent opacity-80 hover:opacity-90 transition-opacity duration-300"></div>
                  <span className="absolute bottom-4 left-4 text-sm font-medium text-[#e5e7eb] font-inter bg-[#1f2937]/50 px-3 py-1 rounded-full">
                    Plan: {study.plan}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-[#e5e7eb] mb-3">{study.title}</h3>
                  <p className="text-[#9ca3af] text-base mb-4 font-inter">{study.description}</p>
                  <div className="flex items-center space-x-3 mb-4">
                    {study.features.includes('CMS') && <ShoppingCart className="w-5 h-5 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" />}
                    {study.features.includes('Stripe') && <ShoppingCart className="w-5 h-5 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" />}
                    {study.features.includes('SEO') && <Globe className="w-5 h-5 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" />}
                    {study.features.includes('Timeline') && <Clock className="w-5 h-5 text-[#9ca3af] hover:text-[#60a5fa] transition-colors" />}
                  </div>
                  <Link
                    href={study.link}
                    className="inline-flex items-center bg-[#60a5fa] text-[#0d1117] py-2 px-5 rounded-lg font-inter font-semibold hover:shadow-[#60a5fa]/50 transition-all duration-300 md:py-3 md:px-6"
                    aria-label={`View case study for ${study.title}`}
                  >
                    Read Full Case
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="section-divider"></div>

      {/* Sekcja CTA */}
      <section className="section bg-[#1f2937] text-center grain-overlay py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#e5e7eb] mb-4 animate-fade-in">
            Let’s Create Your Success Story
          </h2>
          <p className="text-lg text-[#9ca3af] mb-8 max-w-2xl mx-auto font-inter animate-fade-in-delay">
            Ready to transform your business? Contact us to discuss your project and see how we can help.
          </p>
          <div className="md:sticky bottom-4 z-50 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#60a5fa] text-[#0d1117] py-4 px-8 text-lg rounded-lg font-inter font-semibold hover:shadow-[#60a5fa]/50 transition-all duration-300 md:py-5 md:px-10"
              aria-label="Contact us to start your project"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}