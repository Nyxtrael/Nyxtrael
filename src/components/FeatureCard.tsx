"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.li
      role="listitem"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="h-full"
    >
      <div className="bg-gray-100 text-gray-900 p-6 flex flex-col h-full rounded-lg shadow-sm">
        <div className="flex justify-center mb-4" aria-hidden="true">{icon}</div>
        <h3 className="font-semibold mb-3 font-serif text-xl">{title}</h3>
        <p className="flex-grow font-sans text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.li>
  );
}
