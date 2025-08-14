'use client';
import HeroDataSync from './componentsdata/HeroDataSync';
import Features from './componentsdata/FeaturesData';
import Dashboard from './componentsdata/Dashboard';
import HowItWorks from './componentsdata/HowItWorks';
import Integrations from './componentsdata/Integrations';
import Security from './componentsdata/Security';
import Testimonials from './componentsdata/TestimonialsData';
import TrustedBy from './componentsdata/TrustedBy';
import Pricing from './componentsdata/Pricing';
import CTASection from './componentsdata/CTASectionData';

const customStyles = `
  .section-divider { height: 48px; background: linear-gradient(90deg, rgba(34,211,238,0.15), rgba(255,255,255,0)); }
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
      <HowItWorks />
      <div className="section-divider" />
      {/* >>> The three sections you asked to include explicitly <<< */}
      <Integrations />
      <div className="section-divider" />
      <Security />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <TrustedBy />
      <div className="section-divider" />
      <Pricing />
      <div className="section-divider" />
      <CTASection />
    </>
  );
}
