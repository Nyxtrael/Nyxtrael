import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  examples?: string[];
  className?: string;
}

export default function ServiceCard({ title, description, icon, benefits, examples, className }: ServiceCardProps) {
  return (
    <motion.div
      className={`bg-[#1f2937] p-6 rounded-lg shadow-md border border-[#38bdf8]/30 hover:border-[#facc15]/50 hover:shadow-[#38bdf8]/50 transition-all duration-300 ${className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">{title}</h3>
      <p className="text-[#9ca3af] font-inter mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-lg font-serif font-semibold text-[#e5e7eb] mb-2">Benefits</h4>
        <ul className="list-disc list-inside text-[#9ca3af] font-inter">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      {examples && examples.length > 0 && (
        <div className="bg-[#0d1117] text-[#e5e7eb] text-sm rounded-lg p-2 shadow-lg">
          <h4 className="text-lg font-serif font-semibold text-[#e5e7eb] mb-2">Examples</h4>
          <ul className="list-none space-y-1">
            {examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}