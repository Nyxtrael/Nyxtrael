import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <li role="listitem">
      <div className="card space-y-2">
        <h3 className="font-semibold text-primary font-montserrat">{title}</h3>
        <div className="text-secondary font-inter">
          {children}
        </div>
      </div>
    </li>
  );
}
