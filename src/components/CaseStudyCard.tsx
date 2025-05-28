import Image from 'next/image';
   import Link from 'next/link';
   import { Eye } from 'lucide-react';
   import { CaseStudy } from '../types/CaseStudy';

   interface CaseStudyCardProps extends CaseStudy {
     className?: string;
   }

   export default function CaseStudyCard({ title, description, slug, thumbnail, category, year, className }: CaseStudyCardProps) {
     return (
       <div
         tabIndex={0}
         role="group"
         className={`flex flex-col h-full group relative overflow-hidden rounded-lg bg-gray-800/50 transition-all duration-300 hover:bg-gradient-to-b hover:from-gray-800/80 hover:to-gray-900/80 ${className || ''}`}
       >
         {/* Category Tag */}
         <div className="absolute top-4 left-4 bg-teal-500 text-white text-xs font-montserrat px-2 py-1 rounded-full">
           {category}
         </div>
         {/* Year Tag */}
         <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-montserrat px-2 py-1 rounded-full">
           {year}
         </div>
         {/* Ikona widoczna przy hoverze */}
         <div className="absolute top-4 right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <Eye className="w-6 h-6 text-accent" />
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
         <div className="p-4 flex flex-col flex-grow border-t-2 border-accent group-hover:border-opacity-100 border-opacity-50 transition-all duration-300">
           <h3 className="text-xl font-semibold text-white mb-2 font-heading">{title}</h3>
           <p className="text-sm text-[#F5F5F5] flex-grow font-body">{description}</p>
           <Link
             href={`/case-studies/${slug}`}
             className="btn-secondary mt-4 inline-block text-white hover:scale-105 transition-transform duration-300"
             aria-label={`View case study: ${title}`}
           >
             See More
           </Link>
         </div>
       </div>
     );
   }