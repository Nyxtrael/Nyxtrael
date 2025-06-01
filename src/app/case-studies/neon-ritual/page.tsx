'use client';

import Link from 'next/link';
import Image from 'next/image'; // Added missing import
import { motion } from 'framer-motion';
import { CodeBracketIcon, PaintBrushIcon, LightBulbIcon } from '@heroicons/react/24/outline';

// Niestandardowe style CSS dla efektów tła, separatorów i animacji
const customStyles = `
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes glitch {
    0% { transform: translate(0); }
    20% { transform: translate(-2px, 2px); }
    40% { transform: translate(2px, -2px); }
    60% { transform: translate(-2px, 0); }
    80% { transform: translate(2px, 2px); }
    100% { transform: translate(0); }
  }
  @keyframes neon-glow {
    0%, 100% { text-shadow: 0 0 10px #22d3ee, 0 0 20px #22d3ee, 0 0 30px #22d3ee; }
    50% { text-shadow: 0 0 5px #22d3ee, 0 0 10px #22d3ee, 0 0 15px #22d3ee; }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }
  .animate-glitch {
    animation: glitch 0.5s infinite;
  }
  .animate-neon-glow {
    animation: neon-glow 2s ease-in-out infinite;
  }
  .hero-bg {
    background: linear-gradient(135deg, #1e3a8a 0%, #111827 100%);
    position: relative;
    overflow: hidden;
  }
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #111827 0%, #1e3a8a 50%, #111827 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(34, 211, 238, 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
`;

const features = [
  {
    icon: <CodeBracketIcon className="h-8 w-8 text-[#22d3ee]" />,
    title: "WebGL-Powered Animations",
    description: "Three.js used for smooth, immersive visual effects.",
  },
  {
    icon: <PaintBrushIcon className="h-8 w-8 text-[#22d3ee]" />,
    title: "AI Generative Model",
    description: "Running in-browser for dynamic art generation.",
  },
  {
    icon: <LightBulbIcon className="h-8 w-8 text-[#22d3ee]" />,
    title: "Custom Neon Shaders",
    description: "Glow effects to enhance the cyberpunk aesthetic.",
  },
];

const galleryItems = [
  { src: "/images/neon-art-1.jpg", alt: "Neon Fractal 1", description: "Interactive fractal with color shifts on mouse movement." },
  { src: "/images/neon-art-2.jpg", alt: "Neon Fractal 2", description: "Pulsating neon shapes reacting to user hover." },
  { src: "/images/neon-art-3.jpg", alt: "Neon Fractal 3", description: "Dynamic particle system with glow effects." },
];

export default function NeonRitualCaseStudy() {
  return (
    <div className="bg-[#111827]">
      <style>{customStyles}</style>

      {/* Intro Section */}
      <section className="hero-bg relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            aria-hidden="true"
          >
            <source src="/videos/neonritual-animation.webm" type="video/webm" />
            <source src="/videos/neonritual-animation.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#111827]/40 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 text-[#22d3ee] p-4">
          <motion.h1
            className="text-4xl md:text-5xl font-mono font-bold animate-neon-glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            NeonRitual
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl font-mono animate-glitch"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            An AI Art Experience
          </motion.p>
          <motion.p
            className="mt-4 text-[#d1d5db] font-mono animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Scroll or move your mouse to explore
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* About the Project */}
      <section className="py-16 px-4 md:px-8 bg-[#1e3a8a]">
        <motion.h2
          className="text-3xl font-mono text-center mb-8 text-[#22d3ee] animate-neon-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About the Project
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-center text-[#d1d5db] font-mono leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          NeonRitual is an experimental online gallery where AI algorithms meet generative art. The project was created to immersively engage viewers, using Three.js and TensorFlow.js for real-time generation and rendering of visuals.
        </motion.p>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Interactive Gallery */}
      <section className="py-16 px-4 md:px-8 bg-[#111827] grid-pattern">
        <motion.h2
          className="text-3xl font-mono text-center mb-8 text-[#22d3ee] animate-neon-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Interactive Gallery
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-center text-[#d1d5db] font-mono leading-relaxed mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Each illustration reacts to user interactions, such as mouse movement changing colors and shapes.
        </motion.p>
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
                  className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300 border border-[#22d3ee]/50"
                  loading="lazy"
                />
              </Link>
              <p className="mt-2 text-center text-[#d1d5db] font-mono">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Technical Highlights */}
      <section className="py-16 px-4 md:px-8 bg-[#1e3a8a]">
        <motion.h2
          className="text-3xl font-mono text-center mb-8 text-[#22d3ee] animate-neon-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Highlights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#22d3ee]/30 hover:border-[#67e8f9]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-xl font-mono font-semibold text-[#22d3ee]">{feature.title}</h3>
              </div>
              <p className="text-[#d1d5db] font-mono leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 md:px-8 bg-[#111827]">
        <motion.h2
          className="text-3xl font-mono text-center mb-8 text-[#22d3ee] animate-neon-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Challenges & Solutions
        </motion.h2>
        <div className="max-w-3xl mx-auto text-[#d1d5db] font-mono leading-relaxed">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-[#22d3ee] mb-2">Challenge: Smooth Performance of Heavy Animations</h3>
            <p>Solution: Optimized at the shader level, implemented adaptive detail reduction for low-end devices.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-[#22d3ee] mb-2">Challenge: AI Model Integration</h3>
            <p>Solution: Pre-trained and optimized model, used Web Workers for non-blocking computation.</p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* User Reaction/Impact */}
      <section className="py-16 px-4 md:px-8 bg-[#1e3a8a] grid-pattern">
        <motion.h2
          className="text-3xl font-mono text-center mb-8 text-[#22d3ee] animate-neon-glow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          User Reaction & Impact
        </motion.h2>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg shadow-md border border-[#22d3ee]/50"
            >
              <source src="/videos/neonritual-interaction.webm" type="video/webm" />
              <source src="/videos/neonritual-interaction.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
            <motion.div
              className="animate-count-up"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <p className="text-4xl font-mono font-bold text-[#22d3ee]">5K</p>
              <p className="mt-2 text-[#d1d5db] font-mono">Visitors in the first week at ArtTech Festival 2024</p>
            </motion.div>
            <motion.div
              className="animate-count-up"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-4xl font-mono font-bold text-[#22d3ee]">3 min</p>
              <p className="mt-2 text-[#d1d5db] font-mono">Average time spent exploring interactions</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-[#111827] text-center">
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/case-studies"
            className="inline-block bg-[#22d3ee] text-[#1f2937] px-6 py-3 rounded-lg font-mono font-semibold hover:bg-[#67e8f9] transition-colors"
          >
            Back to Portfolio
          </Link>
        </motion.div>
      </section>
    </div>
  );
}