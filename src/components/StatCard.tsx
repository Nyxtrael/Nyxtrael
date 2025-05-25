"use client";

import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  value: number;
  suffix?: string;
  index: number;
}

export default function StatCard({ icon, label, value, suffix = '', index }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        setCount(Math.floor((elapsed / duration) * value));
        requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };
    tick();
  }, [value]);

  return (
    <motion.li
      role="listitem"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="h-full"
    >
      <div className="bg-gray-100 text-gray-900 p-6 flex flex-col items-center h-full rounded-lg shadow-sm">
        <div className="mb-3" aria-hidden="true">{icon}</div>
        <h3 className="text-2xl font-semibold mb-2 font-serif">{count}{suffix}</h3>
        <p className="text-gray-600 font-sans leading-relaxed text-center">{label}</p>
      </div>
    </motion.li>
  );
}
