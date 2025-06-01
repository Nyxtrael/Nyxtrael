'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDownIcon, ArrowRightIcon, ClockIcon, ComputerDesktopIcon, DocumentPlusIcon } from '@heroicons/react/24/outline';

// Niestandardowe style CSS dla efektów tła, separatorów i animacji
const customStyles = `
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes zoom-in {
    0% { transform: scale(1); }
    100% { transform: scale(1.1); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }
  .animate-zoom-in {
    animation: zoom-in 10s ease-in-out infinite;
  }
  .hero-bg {
    background: #1f2937;
    position: relative;
    overflow: hidden;
  }
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #1f2937 0%, #111827 50%, #1f2937 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
`;

const features = [
  {
    icon: <ClockIcon className="h-8 w-8 text-[#f3f4f6]" />,
    title: "Lazy-Loading for Speed",
    description: "Images load progressively, ensuring fast initial page rendering.",
  },
  {
    icon: <ComputerDesktopIcon className="h-8 w-8 text-[#f3f4f6]" />,
    title: "Interactive Fullscreen Gallery",
    description: "Keyboard navigation and pinch-to-zoom on mobile for an immersive experience.",
  },
  {
    icon: <DocumentPlusIcon className="h-8 w-8 text-[#f3f4f6]" />,
    title: "CMS for Easy Updates",
    description: "Photographer can add new photos and categories effortlessly.",
  },
];

const galleryItems = [
  { src: "/images/portrait-studio.jpg", alt: "Studio Portraits" },
  { src: "/images/portrait-outdoor.jpg", alt: "Outdoor Portraits" },
  { src: "/images/portrait-bw.jpg", alt: "Black & White Portraits" },
];

export default function PortraitProCaseStudy() {
  return (
    <div className="bg-[#1f2937]">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section className="hero-bg relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/images/hero-portrait-1.jpg"
              alt="Featured portrait by John Doe"
              layout="fill"
              objectFit="cover"
              className="animate-zoom-in"
              priority
            />
          </motion.div>
        </div>
        <div className="relative z-10 text-center text-[#f3f4f6]">
          <motion.h1
            className="text-2xl md:text-3xl font-serif mb-4 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Portfolio: John Doe Photography – PortraitPro
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a
              href="#about"
              className="inline-block text-[#f3f4f6] hover:text-[#d1d5db] transition-colors"
              aria-label="Scroll down to learn more"
            >
              <ArrowDownIcon className="h-8 w-8 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* About the Photographer */}
      <section id="about" className="py-16 px-4 md:px-8 bg-[#111827]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/photographer.jpg"
              alt="John Doe, Photographer"
              width={200}
              height={200}
              className="rounded-full shadow-md"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-3xl font-serif mb-4 text-[#f3f4f6]">About the Photographer</h2>
            <p className="text-[#d1d5db] font-sans leading-relaxed">
              John Doe has specialized in artistic portrait photography for over 10 years, capturing the essence of his subjects through a unique blend of light, composition, and emotion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Gallery/Thumbnails */}
      <section className="py-16 px-4 md:px-8 bg-[#1f2937]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#f3f4f6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Gallery
        </motion.h2>
        <div className="gallery-grid max-w-5xl mx-auto">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Link href="#fullscreen">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={200}
                  className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                  loading="lazy"
                />
              </Link>
              <p className="mt-2 text-center text-[#d1d5db]">{item.alt}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Fullscreen Lightbox */}
      <section className="py-16 px-4 md:px-8 bg-[#111827]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#f3f4f6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Fullscreen Lightbox
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-center text-[#d1d5db] font-sans leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          The portfolio features a fullscreen lightbox mode, allowing users to view photos in high resolution with smooth navigation using arrow keys or swipe gestures on mobile. Preloading ensures seamless transitions without quality loss.
        </motion.p>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Features */}
      <section className="py-16 px-4 md:px-8 bg-[#1f2937]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#f3f4f6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#4b5563]/30 hover:border-[#6b7280]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-xl font-sans font-semibold text-[#f3f4f6]">{feature.title}</h3>
              </div>
              <p className="text-[#d1d5db] font-sans leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Technical Challenges */}
      <section className="py-16 px-4 md:px-8 bg-[#111827]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#f3f4f6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Challenges
        </motion.h2>
        <div className="max-w-3xl mx-auto text-[#d1d5db] font-sans leading-relaxed">
          <motion.ul
            className="list-disc list-inside"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <li>Optimized large image collections using WebP compression and CDN delivery.</li>
            <li>Enhanced SEO with proper alt texts and image metadata for better discoverability.</li>
            <li>Ensured accessibility with alt descriptions and keyboard-navigable galleries.</li>
          </motion.ul>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Outcome */}
      <section className="py-16 px-4 md:px-8 bg-[#1f2937]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#f3f4f6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Outcome
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
          {[
            { number: "< 2s", description: "Gallery load time for 50 images" },
            { number: "+100%", description: "More visitors spending >1 min on the site" },
          ].map((outcome, index) => (
            <motion.div
              key={index}
              className="animate-count-up"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <p className="text-4xl font-mono font-bold text-[#f3f4f6]">{outcome.number}</p>
              <p className="mt-2 text-[#d1d5db] font-sans">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="mt-8 max-w-3xl mx-auto text-center text-[#d1d5db] font-sans italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          "The portfolio became a professional showcase, attracting 3 client inquiries in the first week." – John Doe
        </motion.p>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-[#111827] text-center">
        <motion.h2
          className="text-3xl font-serif mb-4 text-[#f3f4f6]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Want a stunning portfolio like this?
        </motion.h2>
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#f3f4f6] text-[#1f2937] px-6 py-3 rounded-lg font-semibold hover:bg-[#d1d5db] transition-colors"
          >
            Contact Me
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/case-studies/datasync"
            className="inline-flex items-center gap-2 bg-[#1f2937] text-[#f3f4f6] px-6 py-3 rounded-lg font-semibold hover:bg-[#374151] transition-colors"
          >
            See Another Project
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}