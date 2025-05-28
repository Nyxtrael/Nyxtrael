import React from 'react';
import { Icon } from '@heroicons/react/24/outline';

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
    <div className={`bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20 ${className || ''}`}>
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">{title}</h3>
      <p className="text-gray-400 font-inter mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-white mb-2 font-montserrat">Benefits</h4>
        <ul className="list-disc list-inside text-gray-400 font-inter">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      {examples && examples.length > 0 && (
        <div className="bg-gray-800 text-white text-sm rounded-lg p-2 shadow-lg">
          <h4 className="text-lg font-semibold text-white mb-2 font-montserrat">Examples</h4>
          <ul className="list-none space-y-1">
            {examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}