'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '24/7', label: 'Support & Guidance', description: 'We’re here for you anytime.' },
  { value: '10+', label: 'Years of Experience', description: 'Trusted expertise in health.' },
  { value: '98%', label: 'Client Satisfaction', description: 'Our clients love our services.' },
];

export default function WhyTrustUs() {
  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#1f2937]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Why Trust Us?
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <h3 className="text-4xl font-bold text-[#10b981] mb-2">{stat.value}</h3>
            <p className="text-xl font-semibold text-[#1f2937] mb-2">{stat.label}</p>
            <p className="text-[#4b5563]">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}