'use client';

import HeroShopTrend from '../components/HeroShopTrend';
import ProductList from '../components/ProductList';
import Features from '../components/Features';
import Results from '../components/Results';
import FeaturedCollections from '../components/FeaturedCollections'; // Renamed from BeforeAfterComparison
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';

// Custom styles for section dividers
const customStyles = `
  .section-divider {
    height: 60px;
    background: linear-gradient(to right, #ff6b6b, #ff8e53);
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  }
`;

export default function ShopTrendPage() {
  return (
    <>
      <style>{customStyles}</style>
      <HeroShopTrend />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <Results />
      <div className="section-divider" />
      <ProductList />
      <div className="section-divider" />
      <FeaturedCollections /> {/* Updated section */}
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <CTASection />
    </>
  );
}