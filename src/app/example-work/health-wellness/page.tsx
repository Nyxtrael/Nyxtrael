'use client';

import HeroHealth from '../components/HeroHealth';
import CourseCard from '../components/CourseCard';
import ServicesSection from '../components/ServicesSection';
import WhyTrustUs from '../components/WhyTrustUs';
import BlogPreview from '../components/BlogPreview';
import TestimonialsHealth from '../components/TestimonialsHealth';
import AuthorNewsletter from '../components/AuthorNewsletter'; // Added missing import
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASectionHeath';

// Custom styles for section dividers and subtle gradient overlay
const customStyles = `
  .section-divider {
    height: 60px;
    background: linear-gradient(to right, #10b981, #f97316);
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  }
  .subtle-gradient {
    background: linear-gradient(to bottom, rgba(245, 245, 245, 0.95), rgba(255, 255, 255, 1));
  }
`;

export default function HealthPage() {
  return (
    <>
      <style>{customStyles}</style>
      <HeroHealth />
      <div className="section-divider" />
      <div className="subtle-gradient">
        <CourseCard />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <ServicesSection />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <WhyTrustUs />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <BlogPreview />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <TestimonialsHealth />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <AuthorNewsletter />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <ProductCard />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <CTASection />
      </div>
    </>
  );
}