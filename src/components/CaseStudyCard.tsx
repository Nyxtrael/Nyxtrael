import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import { CaseStudy } from '../types/CaseStudy';
import { motion } from 'framer-motion';

interface CaseStudyCardProps extends CaseStudy {
  className?: string;
}

export default function CaseStudyCard({ title, description, slug, thumbnail, category, year, className }: CaseStudyCardProps) {
  return (
    <motion.div
      tabIndex={0}
      role="group"
      className={`flex flex-col h-full relative overflow-hidden rounded-lg bg-[#1f2937] border border-[#38bdf8]/30 hover:border-[#facc15]/50 hover:shadow-[#38bdf8]/50 transition-all duration-300 ${className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Category Tag */}
      <div className="absolute top-4 left-4 bg-[#38bdf8] text-[#0d1117] text-xs font-inter px-2 py-1 rounded-full">
        {category}
      </div>
      {/* Year Tag */}
      <div className="absolute top-4 right-4 bg-[#facc15] text-[#0d1117] text-xs font-inter px-2 py-1 rounded-full">
        {year}
      </div>
      {/* Ikona widoczna przy hoverze */}
      <div className="absolute top-4 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Eye className="w-6 h-6 text-[#facc15]" />
      </div>
      {/* Miniatura z efektem paralaksy */}
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={thumbnail}
          alt={`${title} thumbnail`}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow border-t-2 border-[#38bdf8] group-hover:border-[#facc15] transition-all duration-300">
        <h3 className="text-xl font-serif font-semibold text-[#e5e7eb] mb-2">{title}</h3>
        <p className="text-sm text-[#9ca3af] flex-grow font-inter">{description}</p>
        <Link
          href={`/case-studies/${slug}`}
          className="mt-4 inline-block bg-gradient-to-r from-[#38bdf8] to-[#facc15] text-[#0d1117] px-4 py-2 rounded-lg font-inter font-semibold hover:shadow-[#38bdf8]/50 transition-all duration-300"
          aria-label={`View case study: ${title}`}
        >
          See More
        </Link>
      </div>
    </motion.div>
  );
}