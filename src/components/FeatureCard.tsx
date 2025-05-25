"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
  index: number;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FeatureCard({ icon, title, description, color = 'border-accent', index }: FeatureCardProps) {
  return (
    <li role="listitem">
      <motion.div
        className={`relative card p-6 rounded-xl shadow-lg border hover:shadow-neon-green/50 transition-all duration-300 ${color}`}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
        role="group"
        aria-labelledby={`feature-title-${index}`}
      >
        <div className="flex justify-center mb-4" aria-hidden="true">
          {icon}
        </div>
        <h3
          id={`feature-title-${index}`}
          className="text-2xl font-semibold text-accent-green mb-4 text-center font-exo"
        >
          {title}
        </h3>
        <p className="text-gray-400 text-center font-roboto">
          {description}
        </p>
      </motion.div>
    </li>
  );
}