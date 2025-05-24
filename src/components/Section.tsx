import { ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  bgClass?: string;
  pattern?: boolean;
}

export default function Section({ title, children, bgClass = 'bg-neutral-mid', pattern = false }: SectionProps) {
  return (
    <section className={`section-spacing ${bgClass} ${pattern ? 'pattern-grid' : ''}`}>
      <div className="container">
        <h2
          className="section-header text-4xl md:text-5xl font-bold text-white heading-underline animate-fade-in"
        >
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}