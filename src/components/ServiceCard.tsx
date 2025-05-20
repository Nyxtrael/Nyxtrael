// src/components/ServiceCard.tsx
import React from 'react';

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  benefits,
}) => {
  return (
    <div className="relative bg-surface p-8 rounded-xl border border-gray-800 card overflow-hidden">
      {/* Gradient Border Overlay */}
      <div className="absolute inset-0 border-2 border-transparent rounded-xl bg-gradient-to-r from-transparent via-accent to-transparent opacity-20" />
      <div className="relative flex flex-col items-center text-center">
        {/* Ikona */}
        <div className="mb-4">
          {icon}
        </div>
        <h3 className="text-2xl md:text-3xl font-semibold text-text-primary mb-2">
          {title}
        </h3>
        <p className="text-text-secondary leading-relaxed mb-4">
          {description}
        </p>
        {/* Lista korzyści */}
        <ul className="list-disc list-inside text-text-secondary space-y-1">
          {benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
