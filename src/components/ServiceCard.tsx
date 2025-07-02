import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  examples: string[];
  className?: string;
}

export default function ServiceCard({ title, description, icon, benefits, examples, className }: ServiceCardProps) {
  return (
    <motion.div
      className={`bg-neutral-mid p-6 rounded-lg border border-accent/30 hover:border-yellow-400/50 transition-all duration-300 ${className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-text-base mb-2 text-center font-inter">{title}</h3>
      <p className="text-text-muted text-center mb-4 font-inter">{description}</p>
      <ul className="text-text-muted text-sm mb-4 text-center font-inter">
        {benefits.map((benefit, index) => (
          <li key={index} className="mb-2">{benefit}</li>
        ))}
      </ul>
      <p className="text-text-muted-secondary text-sm mb-4 text-center font-inter">
        Examples: {examples.join(', ')}
      </p>
      <Link href="/pricing" className="text-accent hover:text-yellow-400 text-center block font-inter">
        Explore Pricing
      </Link>
    </motion.div>
  );
}