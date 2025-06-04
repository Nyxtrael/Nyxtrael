'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Personalized Fitness Plans',
    description: 'Tailored workout routines to fit your goals and lifestyle.',
    icon: '/icons/fitness-plan.svg',
  },
  {
    title: 'Nutrition Guidance',
    description: 'Expert advice to create a balanced, healthy diet.',
    icon: '/icons/nutrition-guidance.svg',
  },
  {
    title: 'Online Consultations',
    description: 'Connect with professionals for personalized health advice.',
    icon: '/icons/online-consultations.svg',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#1f2937]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Our Services
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center p-6 bg-white rounded-lg shadow-md"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">{service.title}</h3>
            <p className="text-[#4b5563]">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}