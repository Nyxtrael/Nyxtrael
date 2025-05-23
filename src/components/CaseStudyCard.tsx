import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { motion } from 'framer-motion';

interface CaseStudyCardProps {
  title: string;
  description: string;
  slug: string;
  thumbnail: string;
  className?: string;
}

export default function CaseStudyCard({ title, description, slug, thumbnail, className }: CaseStudyCardProps) {
  return (
    <motion.div
      tabIndex={0}
      role="group"
      className={`flex flex-col h-full group relative overflow-hidden rounded-lg ${className || ''}`}
    >
      {/* Ikona widoczna przy hoverze */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Eye className="w-6 h-6 text-accent" />
      </div>
      {/* Miniatura z efektem paralaksy */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={thumbnail}
          alt={`${title} thumbnail`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow border-t-2 border-accent group-hover:border-opacity-100 border-opacity-50 transition-all duration-300">
        <h3 className="text-xl font-semibold text-white mb-2 font-heading">{title}</h3>
        <p className="text-sm text-[#F5F5F5] flex-grow font-body">{description}</p>
        <motion.a
          href={`/case-studies/${slug}`}
          className="btn-secondary mt-4 inline-block text-white"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          aria-label={`View case study: ${title}`}
        >
          See More
        </motion.a>
      </div>
    </motion.div>
  );
}