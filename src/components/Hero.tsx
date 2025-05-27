import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/video-poster.jpg"
        preload="none"
        className="absolute top-0 left-0 w-full h-full object-cover parallax-bg"
      >
        <source src="/videos/background-video.webm" type="video/webm" />
        <source src="/videos/background-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-neutral-mid/80 backdrop-blur-sm" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 container mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in heading-underline font-montserrat relative">
          Building Modern Web Experiences
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-0 h-1 bg-gradient-to-r from-purple-500 to-teal-500 animate-glow-line"></span>
        </h1>
        <p className="text-lg md:text-2xl text-[#F5F5F5] mb-10 animate-fade-in-delay font-inter">
          Front-end developer specializing in sleek, high-performance web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/case-studies"
            className="btn-primary hover:scale-105 transition-transform duration-300"
          >
            View Case Studies
          </Link>
          <Link
            href="/contact"
            className="btn-outline hover:scale-105 transition-transform duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;