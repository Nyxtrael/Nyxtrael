'use client';
import HeroHealth from '../components/HeroHealth';
import CourseCard from '../components/CourseCard';
import BlogPreview from '../components/BlogPreview';
import AuthorNewsletter from '../components/AuthorNewsletter';
import ProductCard from '../components/ProductCard';
import CTASection from '../components/CTASectionHeath';

// Custom styles for section dividers
const customStyles = `
  .section-divider {
    height: 60px;
    background: linear-gradient(to right, #10b981, #f97316);
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  }
`;

export default function HealthPage() {
  return (
    <>
      <style>{customStyles}</style>
      <HeroHealth />
      <div className="section-divider" />
      <CourseCard />
      <div className="section-divider" />
      <BlogPreview />
      <div className="section-divider" />
      <AuthorNewsletter />
      <div className="section-divider" />
      <ProductCard />
      <div className="section-divider" />
      <CTASection />
    </>
  );
}