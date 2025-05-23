import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  desc: string;
  index: number;
}

export default function FeatureCard({ icon, title, desc, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="card p-6 hover:shadow-card-hover hover:border-accent border-2 border-transparent transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent"
      tabIndex={0}
    >
      {icon}
      <h3 className="text-xl font-semibold text-primary font-montserrat">{title}</h3>
      <p className="text-secondary font-inter">{desc}</p>
    </motion.div>
  );
}