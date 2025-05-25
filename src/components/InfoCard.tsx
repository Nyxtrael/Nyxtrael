"use client";

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <motion.li
      role="listitem"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="h-full"
    >
      <div className="bg-gray-100 text-gray-900 p-6 flex flex-col h-full rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4 font-serif text-xl">{title}</h3>
        <div className="flex-grow font-sans text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </motion.li>
  );
}
