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
    <div
      className={`relative card p-6 rounded-xl shadow-lg border hover:shadow-neon-green/50 transition-all duration-300 ${color} animate-slide-up`}
      style={{ animationDelay: `${index * 0.2}s` }}
      role="listitem"
    >
      <div className="flex justify-center mb-4" aria-hidden="true">{icon}</div>
      <h3 className="text-2xl font-semibold text-accent-green mb-4 text-center font-exo">{title}</h3>
      <p className="text-gray-400 text-center font-roboto">{description}</p>
    </div>
  );
}