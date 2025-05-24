import Link from 'next/link';
import Gallery from './Gallery';
import { Palette, Sparkles, Mail } from 'lucide-react';

const illustrations = [
  { id: 1, path: '/images/illustration1.jpg', alt: 'Neon Ritual - Cyberpunk Cityscape', description: 'A vibrant cyberpunk cityscape with glowing neon lights.' },
  { id: 2, path: '/images/illustration2.jpg', alt: 'Neon Ritual - Futuristic Portrait', description: 'A futuristic portrait with glitch effects.' },
  { id: 3, path: '/images/illustration3.jpg', alt: 'Neon Ritual - Abstract Neon Waves', description: 'Abstract waves in neon hues, pulsing with energy.' },
];

export default function NeonRitual() {
  return (
    <main role="main" className="min-h-screen bg-neon-dark text-gray-200 font-montserrat overflow-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        role="region"
        aria-labelledby="hero-heading"
        className="relative flex items-center justify-center section-spacing container mx-auto min-h-screen overflow-hidden"
      >
        <div className="relative z-10 text-center">
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-bebas text-neon-pink mb-6 tracking-wide font-bold animate-fade-in"
          >
            NeonRitual
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed font-montserrat animate-slide-right"
          >
            An Immersive AI Illustration Art Experience
          </p>
          <div className="animate-scale-in">
            <Link
              href="#explore"
              className="btn-primary"
              aria-label="Explore the art gallery"
            >
              Explore the Art
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        role="region"
        aria-labelledby="about-heading"
        className="section-spacing bg-neon-dark text-center"
      >
        <div className="container mx-auto">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bebas font-bold text-neon-blue heading-underline mb-12 animate-fade-in"
          >
            Welcome to NeonRitual
          </h2>
          <p
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-montserrat animate-slide-up"
          >
            NeonRitual is a celebration of AI-generated art, where technology meets creativity to produce mesmerizing illustrations. Each piece is a fusion of neon aesthetics and digital magic, crafted to evoke wonder and inspire imagination.
          </p>
        </div>
      </section>

      {/* Illustrations Gallery Section */}
      <Gallery illustrations={illustrations} />

      {/* Creation Process Section */}
      <section
        id="creation-process"
        role="region"
        aria-labelledby="creation-heading"
        className="section-spacing bg-neon-dark text-center text-gray-200"
      >
        <div className="container mx-auto">
          <h2
            id="creation-heading"
            className="text-4xl md:text-5xl font-bebas font-bold text-neon-blue heading-underline mb-12 animate-fade-in"
          >
            The Creation Process
          </h2>
          <p
            className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-montserrat animate-slide-up"
          >
            Using advanced AI tools like SDXL and ComfyUI, I craft each illustration with a blend of algorithmic precision and artistic vision. The process involves generating base designs, refining them with neon effects, and animating them to bring the art to life.
          </p>
          <div
            className="flex justify-center gap-8 animate-scale-in"
          >
            <Palette className="h-12 w-12 text-neon-pink animate-pulse" aria-hidden="true" />
            <Sparkles className="h-12 w-12 text-neon-blue animate-pulse" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="cta"
        role="region"
        aria-labelledby="cta-heading"
        className="section-spacing bg-gradient-to-br from-neon-pink to-neon-blue text-center text-neon-dark"
      >
        <div className="container mx-auto">
          <h2
            id="cta-heading"
            className="text-4xl md:text-5xl font-bebas font-bold mb-8 animate-fade-in"
          >
            Commission Your Own NeonRitual
          </h2>
          <p
            className="text-lg md:text-xl text-gray-900 mb-10 leading-relaxed font-montserrat animate-slide-right"
          >
            Want a custom AI illustration? Let’s create a digital masterpiece together.
          </p>
          <div className="animate-scale-in">
            <Link
              href="/contact"
              className="btn-primary bg-neon-dark text-neon-pink"
              aria-label="Contact for custom illustration"
            >
              Contact Me <Mail className="inline-block ml-2 w-6 h-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}