import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  title: string;
  thumbnail: string;
  description: string;
  slug: string;
}

export default function CaseStudyCard({
  title,
  thumbnail,
  description,
  slug,
}: CaseStudyCardProps) {
  return (
    <Link href={`/case-studies/${slug}`} className="block">
      <div className="bg-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        {thumbnail ? (
          <div className="relative w-full h-48">
            <Image
              src={thumbnail}
              alt={`${title} thumbnail`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ) : (
          <div className="w-full h-48 bg-gray-500 flex items-center justify-center text-text-secondary">
            No Image Available
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
          <p className="text-text-secondary text-sm">{description}</p>
        </div>
      </div>
    </Link>
  );
}