import { ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface StatCardProps {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  index: number;
}

interface AnimatedCounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix, duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.round(start));
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

function StatCard({ icon, label, children, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="card p-6 text-center"
    >
      {icon}
      <h3 className="text-2xl font-bold text-primary font-montserrat">{children}</h3>
      <p className="text-secondary font-inter">{label}</p>
    </motion.div>
  );
}

// Attach AnimatedCounter as a property of StatCard
StatCard.AnimatedCounter = AnimatedCounter;

export default StatCard;