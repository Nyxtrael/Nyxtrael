import Link from 'next/link';

const faqs = [
  {
    question: "What's included in a free consultation?",
    answer: "A detailed discussion of your project needs, timeline, and a tailored strategy to achieve your goals.",
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on the scope, but most projects are completed within 4-8 weeks.",
  },
];

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
          className="btn-primary text-white inline-block px-8 py-4 rounded-full text-xl font-semibold font-montserrat shadow-lg animate-glow-pulse hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-teal-500 focus:scale-95 focus:outline-none focus:ring-4 focus:ring-accent focus:ring-offset-2 focus:ring-offset-neutral-dark"
          aria-label="Contact Nyxtrael to start your project"
        >
          Contact Me
        </Link>
        {/* Mini-FAQ */}
        <div className="mt-12 space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-white mb-2 font-montserrat">{faq.question}</h3>
              <p className="text-gray-400 font-inter">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;