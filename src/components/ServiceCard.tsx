import { ReactNode } from 'react';

   interface ServiceCardProps {
     icon: ReactNode;
     title: string;
     description: string;
     benefits: string[];
     examples: string[];
     className?: string;
   }

   export default function ServiceCard({ icon, title, description, benefits, examples, className }: ServiceCardProps) {
     return (
       <div
         className={`bg-neutral-mid p-6 rounded-2xl card border border-accent/50 shadow-card hover:shadow-card-hover hover:bg-opacity-95 hover:scale-105 hover:-rotate-1 transition-all duration-300 group relative ${className || ''}`}
       >
         {/* Light Trace Effect */}
         <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-400 rounded-2xl transition-all duration-300 pointer-events-none"></div>
         <div className="flex justify-center mb-4" aria-hidden="true">{icon}</div>
         <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4 text-center">{title}</h3>
         <p className="text-[#F5F5F5] leading-relaxed text-center mb-6">{description}</p>
         <ul className="list-disc list-inside space-y-2 text-[#F5F5F5] mb-4">
           {benefits.map((benefit, index) => (
             <li key={index}>{benefit}</li>
           ))}
         </ul>
         {/* Tooltip with Examples */}
         <div className="relative inline-block text-center">
           <span className="text-sm text-teal-400 font-inter cursor-pointer underline">See Examples</span>
           <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-lg p-2 shadow-lg">
             <ul className="list-none space-y-1">
               {examples.map((example, index) => (
                 <li key={index}>{example}</li>
               ))}
             </ul>
           </div>
         </div>
       </div>
     );
   }