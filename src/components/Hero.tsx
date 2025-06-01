import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/video-poster.jpg"
        preload="none"
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/abstract-lines-3d.webm" type="video/webm" />
        <source src="/videos/abstract-lines-3d.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0d1117]/80 backdrop-blur-sm" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6 container mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-serif font-bold text-[#e5e7eb] mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Building Modern Web Experiences
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-1/2 h-1 bg-gradient-to-r from-[#38bdf8] to-[#facc15]"></span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl text-[#9ca3af] mb-10 font-inter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          Front-end developer specializing in sleek, high-performance web applications.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <Link
            href="/case-studies"
            className="bg-gradient-to-r from-[#38bdf8] to-[#facc15] text-[#0d1117] px-6 py-3 rounded-lg font-inter font-semibold hover:shadow-[#38bdf8]/50 transition-all duration-300"
          >
            View Case Studies
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-[#38bdf8] text-[#e5e7eb] px-6 py-3 rounded-lg font-inter font-semibold hover:bg-[#38bdf8] hover:text-[#0d1117] hover:shadow-[#38bdf8]/50 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;