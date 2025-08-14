'use client';
import AboutSection from '../componentsartitst/AboutSection';

export default function AboutPage() {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-base">About</h1>
        <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
        <p className="text-text-muted mt-4 max-w-2xl mx-auto">
          A short story about my craft, process, and what drives my visuals.
        </p>
      </div>
      <AboutSection />
    </div>
  );
}
