'use client';
import HeroDataSync from '../components/HeroDataSync';
import Features from '../components/FeaturesData';
import Dashboard from '../components/Dashboard';
import BeforeAfterLink from '../components/BeforeAfterLinkData';
import Testimonials from '../components/TestimonialsData';
import CTASection from '../components/CTASectionData';

// Custom styles for section dividers
const customStyles = `
  .section-divider {
    height: 60px;
    background: linear-gradient(to right, #ff6b6b, #ff8e53);
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
      <BeforeAfterLink />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <CTASection />
    </>
  );
}