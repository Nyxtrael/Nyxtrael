import Link from 'next/link';

const FinalCTA: React.FC = () => {
  return (
    <section className="section-spacing text-center bg-gradient-to-b from-neutral-dark to-neutral-mid">
      <div className="container mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-8 heading-underline font-montserrat transition-colors duration-300 hover:text-accent animate-fade-in"
        >
          Ready to Start Your Project?
        </h2>
        <p
          className="text-xl text-[#F5F5F5] mb-10 leading-relaxed font-inter transition-transform duration-300 hover:scale-105 animate-fade-in-delay"
        >
          Let’s collaborate to bring your vision to life.
        </p>
        <Link
          href="/contact"
          role="button"
          className="btn-primary text-white inline-block px-8 py-4 rounded-full text-xl font-semibold font-montserrat shadow-lg hover:shadow-accent/50 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-brand hover:to-accent focus:scale-95 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-dark"
          aria-label="Contact Nyxtrael to start your project"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default FinalCTA;