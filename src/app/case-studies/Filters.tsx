"use client";

   import Link from 'next/link';
   import Image from 'next/image';
   import { useState } from 'react';

   interface CaseStudy {
     slug: string;
     title: string;
     description: string;
     thumbnail: string;
     path: string;
     category: string;
     context: string;
     goal: string;
     role: string;
     technologies: string[];
     result: string;
     challenges?: string;
     solutions?: string;
     screenshots?: { src: string; alt: string }[];
     feedback?: { quote: string; author: string }[];
     metrics?: Record<string, string | number>;
   }

   interface FiltersProps {
     studies: CaseStudy[];
   }

   const categories = ['All', 'SaaS', 'E-commerce', 'Portfolio', 'PWA', 'Corporate'];

   export default function Filters({ studies }: FiltersProps) {
     const [selectedCategory, setSelectedCategory] = useState('All');

     const filteredStudies = selectedCategory === 'All'
       ? studies
       : studies.filter(study => study.category === selectedCategory);

     return (
       <>
         {/* Categories Filter */}
         <section className="section-spacing container mx-auto">
           <div className="flex flex-wrap gap-4 justify-center mb-12">
             {categories.map((category) => (
               <button
                 key={category}
                 onClick={() => setSelectedCategory(category)}
                 className={`px-6 py-2 rounded-full font-inter text-base border transition-all shadow-md ${
                   selectedCategory === category
                     ? 'bg-gradient-to-br from-purple-500 to-teal-500 text-white border-transparent shadow-lg'
                     : 'bg-gray-800/80 text-gray-300 border-gray-600 hover:bg-gradient-to-br hover:from-purple-500 hover:to-teal-500 hover:text-white hover:border-transparent hover:shadow-lg'
                 } focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 animate-fade-in`}
                 style={{ animationDelay: `${categories.indexOf(category) * 0.1}s` }}
                 aria-label={`Filter by ${category}`}
                 aria-current={selectedCategory === category ? 'true' : 'false'}
               >
                 {category}
               </button>
             ))}
           </div>
         </section>

         {/* Project Grid Section */}
         <section className="section-spacing container mx-auto">
           <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8">
             {filteredStudies.map((study, i) => (
               <div
                 key={study.slug}
                 className="card overflow-hidden rounded-2xl border border-purple-500/30 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 relative group animate-slide-up"
                 style={{ animationDelay: `${i * 0.1}s` }}
               >
                 <Link
                   href={study.path}
                   prefetch={true}
                   className="group block relative h-0 pb-[66.66%] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                   aria-label={study.title}
                 >
                   <Image
                     src={study.thumbnail}
                     alt={study.title}
                     fill
                     className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                     placeholder="blur"
                     blurDataURL="/images/placeholder.png"
                     loading="lazy"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:bg-gray-900/50 transition-opacity duration-300"></div>
                   <div className="absolute bottom-4 left-4 right-4 text-left">
                     <h2 className="text-xl font-semibold text-white mb-1 font-montserrat">
                       {study.title}
                     </h2>
                     <p className="text-gray-400 text-sm font-inter leading-snug">
                       {study.context}
                     </p>
                     {study.metrics && Object.keys(study.metrics).length > 0 && (
                       <p className="text-purple-400 text-sm font-montserrat mt-1">
                         {Object.entries(study.metrics)[0][1]}
                       </p>
                     )}
                   </div>
                   <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                     <span className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-full font-montserrat text-sm font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                       View Case
                     </span>
                   </div>
                 </Link>
                 <div className="p-4 bg-gray-800/50">
                   <div className="grid grid-cols-1 gap-4">
                     <div>
                       <h3 className="text-lg font-semibold text-white mb-1 font-montserrat">Goal</h3>
                       <p className="text-gray-400 text-sm font-inter">{study.goal}</p>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold text-white mb-1 font-montserrat">My Role</h3>
                       <p className="text-gray-400 text-sm font-inter">{study.role}</p>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold text-white mb-1 font-montserrat">Technologies</h3>
                       <p className="text-gray-400 text-sm font-inter">{study.technologies.join(', ')}</p>
                     </div>
                     <div>
                       <h3 className="text-lg font-semibold text-white mb-1 font-montserrat">Result</h3>
                       <p className="text-gray-400 text-sm font-inter">{study.result}</p>
                     </div>
                   </div>
                   <div className="mt-4">
                     <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm font-montserrat">
                       {study.category}
                     </span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         </section>
       </>
     );
   }