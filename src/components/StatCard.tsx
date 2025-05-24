import { ReactNode } from 'react';

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

const AnimatedCounter = ({ end, suffix }: AnimatedCounterProps) => {
  return <span>{end}{suffix}</span>;
};

function StatCard({ icon, label, children, index }: StatCardProps) {
  return (
    <div
      className="card p-6 text-center animate-slide-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {icon}
      <h3 className="text-2xl font-bold text-primary font-montserrat">{children}</h3>
      <p className="text-secondary font-inter">{label}</p>
    </div>
  );
}

// Attach AnimatedCounter as a property of StatCard
StatCard.AnimatedCounter = AnimatedCounter;

export default StatCard;