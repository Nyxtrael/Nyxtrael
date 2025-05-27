import Link from 'next/link';
   import Image from 'next/image';
   import { caseStudies } from "./data";

   const featuredStudy = caseStudies.find(study => study.isFeatured);
   const otherStudies = caseStudies.filter(study => !study.isFeatured);

   export default function CaseStudiesPage() {
     return (
       <main role="main" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-teal-900/30 animate-gradient-x"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.1)_0%,transparent_70%)] opacity-50 animate-pulse-slow"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.1)_0%,transparent_70%)] opacity-50 animate-pulse-slow-delayed"></div>
         </div>

         {/* Hero Section */}
         <section className="section-spacing container mx-auto text-center relative z-10">
           <div className="animate-fade-in">
             <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4 heading-underline bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
               Case Studies
             </h1>
             <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-inter leading-relaxed animate-fade-in-delay">
               Explore my portfolio of projects, showcasing my expertise in web development, design, and consulting.
             </p>
           </div>
         </section>

         {/* Featured Project (Hero Case Study) */}
         {featuredStudy && (
           <section className="section-spacing container mx-auto">
             <div className="card overflow-hidden rounded-2xl border border-purple-500/30 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
               <Link
                 href={featuredStudy.path}
                 className="group block relative h-0 pb-[50%] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                 aria-label={featuredStudy.title}
               >
                 <Image
                   src={featuredStudy.thumbnail}
                   alt={featuredStudy.title}
                   fill
                   className="object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                   placeholder="blur"
                   blurDataURL="/images/placeholder.png"
                   loading="eager"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:bg-gray-900/50 transition-opacity duration-300"></div>
                 <div className="absolute bottom-4 left-4 right-4 text-left">
                   <h2 className="text-3xl font-semibold text-white mb-1 font-montserrat">
                     {featuredStudy.title}
                   </h2>
                   <p className="text-gray-400 text-base font-inter leading-snug">
                     {featuredStudy.context}
                   </p>
                 </div>
                 <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                   <span className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-full font-montserrat text-sm font-semibold hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                     View Case
                   </span>
                 </div>
               </Link>
             </div>
             <div className="mt-8 bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">Goal</h3>
                   <p className="text-gray-400 font-inter">{featuredStudy.goal}</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">My Role</h3>
                   <p className="text-gray-400 font-inter">{featuredStudy.role}</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">Technologies</h3>
                   <p className="text-gray-400 font-inter">{featuredStudy.technologies.join(', ')}</p>
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold text-white mb-2 font-montserrat">Result</h3>
                   <p className="text-gray-400 font-inter">{featuredStudy.result}</p>
                 </div>
               </div>
               <div className="mt-4">
                 <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 text-white text-sm font-montserrat">
                   {featuredStudy.category}
                 </span>
               </div>
             </div>
           </section>
         )}

         {/* Project Grid Section */}
         <section className="section-spacing container mx-auto">
           <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-8">
             {otherStudies.map((study, i) => (
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

         {/* Footer with CTA */}
         <footer className="py-10 bg-gray-800/50 text-gray-400 text-center border-t border-purple-500/20">
           <div className="container mx-auto space-y-4">
             <h3 className="text-lg font-semibold text-white font-montserrat">Want Something Like These?</h3>
             <p className="text-sm font-inter">Let’s collaborate to bring your vision to life.</p>
             <Link
               href="/contact"
               className="inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white px-6 py-3 rounded-full font-montserrat font-semibold hover:bg-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg"
             >
               Let’s Talk
             </Link>
           </div>
         </footer>
       </main>
     );
   }