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
        'section-spacing relative',
        bgClass,
        pattern && 'bg-grid-white/[0.04]',
      )}
    >
      {pattern && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-dot-pattern opacity-10 mix-blend-soft-light" />
        </div>
      )}

      <div className="container relative z-10 px-4">
        {title && (
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#e5e7eb] text-center mb-10">
            {title}
            <span className="block w-1/4 h-1 bg-gradient-to-r from-[#a855f7] to-[#c084fc] mx-auto mt-2"></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}