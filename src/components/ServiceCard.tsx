import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  className?: string;
}

export default function ServiceCard({ icon, title, description, benefits, className }: ServiceCardProps) {
  return (
    <div
      className={`bg-neutral-mid p-6 rounded-2xl card border border-accent/50 shadow-card hover:shadow-card-hover hover:bg-opacity-95 hover:scale-105 transition-all duration-300 ${className || ''}`}
    >
      <div className="flex justify-center mb-4" aria-hidden="true">{icon}</div>
      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">{title}</h3>
      <p className="text-[#F5F5F5] leading-relaxed text-center mb-6">{description}</p>
      <ul className="list-disc list-inside space-y-2 text-[#F5F5F5]">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
}