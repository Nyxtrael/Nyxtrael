import Link from 'next/link';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 pattern-grid text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 heading-underline">
          Ready to Start Your Project?
        </h2>
        <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed">
          Let’s collaborate to bring your vision to life.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-accent text-white px-10 py-5 rounded-lg text-xl font-semibold glow-hover transition-colors duration-300 shadow-xl"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;