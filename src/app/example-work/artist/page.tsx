'use client';

import HeroArtist from '../components/HeroArtist';
import GalleryGrid from '../components/GalleryGrid';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';

// Custom styles for section dividers and subtle gradient overlay
const customStyles = `
  .section-divider {
    height: 60px;
    background: linear-gradient(to right, #e9d5ff, #d8b4fe);
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  }
  .subtle-gradient {
    background: linear-gradient(to bottom, rgba(31, 41, 55, 0.95), rgba(31, 41, 55, 1));
  }
`;

export default function ArtistPortfolioPage() {
  return (
    <>
      <style>{customStyles}</style>
      <HeroArtist />
      <div className="section-divider" />
      <div className="subtle-gradient">
        <GalleryGrid />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <AboutSection />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <Testimonials />
      </div>
      <div className="section-divider" />
      <div className="subtle-gradient">
        <ContactSection />
      </div>
    </>
  );
}