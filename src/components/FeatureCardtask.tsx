"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color?: string;
  index: number;
}

export default function FeatureCard({ icon, title, description, color = "border-gray-700", index }: FeatureCardProps) {
  return (
    <motion.div
      className={`relative card hover:shadow-neon-green/50 transition-all duration-300 ${color}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      whileHover={{ scale: 1.05 }}
      role="listitem"
    >
      <div className="flex justify-center mb-4" aria-hidden="true">{icon}</div>
      <h3 className="text-2xl font-semibold text-accent-green mb-4 text-center font-exo">{title}</h3>
      <p className="text-gray-400 text-center font-roboto">{description}</p>
    </motion.div>
  );
}