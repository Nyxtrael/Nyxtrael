'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter, Mail } from 'lucide-react';
import Gallery from './Gallery';
import FullscreenModal from './FullscreenModal';
import { Photo } from '@/types';

const photos: Photo[] = [
  { src: '/images/portraitpro/photo1.jpg', alt: 'Portrait of a woman in sunlight', width: 400, height: 600 },
  { src: '/images/portraitpro/photo2.jpg', alt: 'Black and white portrait of a man', width: 400, height: 600 },
  { src: '/images/portraitpro/photo3.jpg', alt: 'Child laughing in a park', width: 400, height: 600 },
  { src: '/images/portraitpro/photo4.jpg', alt: 'Couple in a forest', width: 600, height: 400 },
  { src: '/images/portraitpro/photo5.jpg', alt: 'Elderly woman smiling', width: 600, height: 400 },
  { src: '/images/portraitpro/photo6.jpg', alt: 'Man with a guitar', width: 600, height: 400 },
];

export default function PortraitPro() {
  const [fullscreenImage, setFullscreenImage] = useState<Photo | null>(null);

  const openFullscreen = useCallback((photo: Photo) => {
    setFullscreenImage(photo);
  }, []);

  const closeFullscreen = useCallback(() => {
    setFullscreenImage(null);
  }, []);

  const handleNextImage = useCallback(() => {
    if (!fullscreenImage) return;
    const currentIndex = photos.findIndex((p) => p.src === fullscreenImage.src);
    const nextIndex = (currentIndex + 1) % photos.length;
    setFullscreenImage(photos[nextIndex]);
  }, [fullscreenImage]);

  const handlePrevImage = useCallback(() => {
    if (!fullscreenImage) return;
    const currentIndex = photos.findIndex((p) => p.src === fullscreenImage.src);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setFullscreenImage(photos[prevIndex]);
  }, [fullscreenImage]);

  return (
    <main role="main" className="portraitpro font-lora overflow-hidden">
      {/* Hero Section */}
      <section role="banner" aria-labelledby="hero-title" className="relative section min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/portraitpro/hero-photo.jpg"
            alt="A moment captured in eternal light"
            fill
            className="opacity-80 object-cover"
            priority
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
        </div>
        <div className="relative z-10 text-center">
          <h1
            id="hero-title"
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-cinzel animate-fade-in"
          >
            PortraitPro
          </h1>
          <p className="text-xl md:text-2xl text-[#F5F5F5] mb-10 leading-relaxed animate-fade-in-delay">
            Where Every Frame Tells a Story
          </p>
        </div>
      </section>

      {/* About Section */}
      <section role="region" aria-labelledby="about-title" className="section bg-beige">
        <div className="container">
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-bold text-portraitText text-center mb-12 font-cinzel animate-fade-in"
          >
            The Artist Behind the Lens
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3 flex justify-center animate-slide-left">
              <Image
                src="/images/portraitpro/photographer.jpg"
                alt="Photographer portrait"
                width={300}
                height={300}
                className="rounded-full border-4 border-gold shadow-lg hover:shadow-xl transition-shadow duration-300"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-2/3 text-center md:text-left animate-slide-up">
              <p className="text-lg md:text-xl text-[#4B4B4B] leading-relaxed mb-6">
                I am a seeker of light and shadow, weaving emotions into every frame. With a decade of capturing fleeting moments, my lens tells stories of joy, love, and quiet reflection.
              </p>
              <p className="text-lg md:text-xl text-[#4B4B4B] leading-relaxed">
                PortraitPro is my canvas—a gallery where each portrait breathes life, inviting you to see the world through my eyes. Let us craft a visual poem together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section role="region" aria-labelledby="gallery-title" className="section bg-gray-900">
        <div className="container">
          <h2
            id="gallery-title"
            className="text-4xl md:text-5xl font-bold text-gold text-center mb-12 font-cinzel animate-fade-in"
          >
            Moments Frozen in Time
          </h2>
          <Gallery photos={photos} onImageClick={openFullscreen} />
        </div>
      </section>

      {/* Fullscreen Modal */}
      {fullscreenImage && (
        <FullscreenModal
          image={fullscreenImage}
          onClose={closeFullscreen}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
        />
      )}

      {/* Contact Section */}
      <section role="region" aria-labelledby="contact-title" className="section bg-beige text-center">
        <div className="container">
          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-bold text-portraitText mb-8 font-cinzel animate-fade-in"
          >
            Let’s Capture Your Story
          </h2>
          <p className="text-lg md:text-xl text-[#4B4B4B] mb-10 leading-relaxed animate-fade-in-delay">
            Every portrait is a chapter in the book of life. Contact me to weave yours into art.
          </p>
          <div className="max-w-md mx-auto animate-slide-up">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="vision" className="sr-only">Your Vision</label>
                <textarea
                  id="vision"
                  placeholder="Your Vision"
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 resize-none"
                />
              </div>
              <button className="bg-gold text-portraitText px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-gold/50">
                Begin the Journey
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer role="contentinfo" className="py-8 bg-gray-900 text-center text-gold">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://instagram.com" className="hover:text-white transition-colors" aria-label="Visit Instagram">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://twitter.com" className="hover:text-white transition-colors" aria-label="Visit Twitter">
            <Twitter className="h-6 w-6" />
          </Link>
          <Link href="mailto:contact@portraitpro.com" className="hover:text-white transition-colors" aria-label="Send email">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm text-[#F5F5F5]">© 2025 PortraitPro. All rights reserved.</p>
      </footer>
    </main>
  );
}