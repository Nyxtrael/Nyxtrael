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

const counterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StatCard({ icon, label, value, suffix = '', index }: StatCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const startTime = Date.now();

    const tick = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        const progress = elapsed / duration;
        setCount(Math.floor(progress * value));
        requestAnimationFrame(tick);
      } else {
        setCount(value);
      }
    };

    tick();
  }, [value]);

  return (
    <li role="listitem">
      <motion.div
        className="card p-6 text-center focus:outline-none focus:ring-2 focus:ring-accent hover:shadow-lg rounded-xl"
        variants={counterVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: index * 0.2 }}
      >
        <div className="flex justify-center mb-4" aria-hidden="true">
          {icon}
        </div>
        <h3 className="text-3xl font-bold text-primary font-montserrat mb-2">
          {count}{suffix}
        </h3>
        <p className="text-secondary font-inter">{label}</p>
      </motion.div>
    </li>
  );
}