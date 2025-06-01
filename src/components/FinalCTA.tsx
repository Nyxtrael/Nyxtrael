import Link from 'next/link';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "What's included in a free consultation?",
    answer: "A detailed discussion of your project needs, timeline, and a tailored strategy to achieve your goals.",
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on the scope, but most projects are completed within 2-3 weeks.",
  },
];

const FinalCTA: React.FC = () => {
  return (
    <section className="section bg-[#0d1117] grain-overlay py-24 text-center relative">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Start Your Project?
          <span className="block w-1/4 h-1 bg-gradient-to-r from-[#38bdf8] to-[#facc15] mx-auto mt-2"></span>
        </motion.h2>
        <motion.p
          className="text-xl text-[#9ca3af] mb-10 leading-relaxed font-inter"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let’s collaborate to bring your vision to life.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/contact"
            role="button"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-xl font-semibold font-inter bg-gradient-to-r from-[#38bdf8] to-[#facc15] text-[#0d1117] hover:shadow-[#38bdf8]/50 transition-all duration-300 shadow-md"
            aria-label="Get in touch with Nyxtrael to start your project"
          >
            Get in Touch
            <MessageSquare className="h-5 w-5" />
          </Link>
        </motion.div>
        {/* Mini-FAQ */}
        <div className="mt-12 space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[#1f2937] p-6 rounded-lg shadow-md border border-[#38bdf8]/30 hover:border-[#facc15]/50 hover:shadow-[#38bdf8]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-serif font-semibold text-[#e5e7eb] mb-2">{faq.question}</h3>
              <p className="text-[#9ca3af] font-inter">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Wavy Separator */}
      <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 C300,40 600,0 900,40 1200,80 1200,120 1200,120 L0,120 Z"
            fill="#0d1117"
          />
        </svg>
      </div>
    </section>
  );
};

export default FinalCTA;