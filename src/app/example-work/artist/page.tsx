'use client';
import HeroArtist from '../components/HeroArtist';
import GalleryGrid from '../components/GalleryGrid';
import AboutSection from '../components/AboutSection';
import ServiceCard from '../components/ServiceCard';
import ContactSection from '../components/ContactSection';

// Custom styles for section dividers
const customStyles = `
  .section-divider {
    height: 60px;
    background: linear-gradient(to right, #e9d5ff, #d8b4fe);
    clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
  }
`;

export default function ArtistPortfolioPage() {
  return (
    <>
      <style>{customStyles}</style>
      <HeroArtist />
      <div className="section-divider" />
      <GalleryGrid />
      <div className="section-divider" />
      <AboutSection />
      <div className="section-divider" />
      <ContactSection />
    </>
  );
}