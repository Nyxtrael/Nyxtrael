import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
}

export default function CaseStudyCard({ title, description, slug, thumbnail }: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="block bg-surface rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      {thumbnail && (
        <div className="relative w-full h-48 mb-4">
          <Image src={thumbnail} alt={`${title} thumbnail`} fill style={{ objectFit: "cover" }} className="rounded-t-lg" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </Link>
  );
}