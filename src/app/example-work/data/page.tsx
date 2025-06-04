'use client';

import HeroDataSync from '../components/HeroDataSync';
import Features from '../components/FeaturesData';
import Dashboard from '../components/Dashboard';
import HowItWorks from '../components/HowItWorks'; // Renamed from BeforeAfterLink
import Testimonials from '../components/TestimonialsData';
import TrustedBy from '../components/TrustedBy'; // New section
import CTASection from '../components/CTASectionData';

// Custom styles for section dividers with new colors
const customStyles = `
  .section-divider {
    height: 60px;
    background: linear-gradient(to right, #3b82f6, #a855f7);
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  }
`;

export default function DataSyncPage() {
  return (
    <>
      <style>{customStyles}</style>
      <HeroDataSync />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <Dashboard />
      <div className="section-divider" />
      <HowItWorks /> {/* Updated section */}
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <TrustedBy /> {/* New section */}
      <div className="section-divider" />
      <CTASection />
    </>
  );
}