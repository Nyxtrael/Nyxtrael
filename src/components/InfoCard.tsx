import { ReactNode } from 'react';

interface InfoCardProps {
  title: string;
  content: string;
}

export default function InfoCard({ title, content }: InfoCardProps) {
  return (
    <div className="card p-4">
      <h3 className="font-semibold text-primary font-montserrat">{title}</h3>
      <p className="text-secondary font-inter">{content}</p>
    </div>
  );
}