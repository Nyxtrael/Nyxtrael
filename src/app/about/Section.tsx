'use client';

import React from 'react';
import clsx from 'clsx';

type SectionProps = {
  title?: string;
  children: React.ReactNode;
  bgClass?: string;
  pattern?: boolean;
};

export default function Section({ title, children, bgClass = '', pattern = false }: SectionProps) {
  return (
    <section
      className={clsx(
        'py-16 md:py-24 relative',
        bgClass,
        pattern && 'grid-pattern',
      )}
      aria-labelledby={title ? `section-${title.replace(/\s+/g, '-')}` : undefined}
    >
      <div className="container relative z-10 mx-auto px-4">
        {title && (
          <h2
            id={`section-${title.replace(/\s+/g, '-')}`}
            className="text-4xl md:text-5xl font-bold text-text-base text-center mb-10"
          >
            {title}
            <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}