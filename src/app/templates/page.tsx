"use client";

   import Link from 'next/link';
   import Image from 'next/image';
   import { useState } from 'react';
   import { X } from 'lucide-react';

   const templates = [
     {
       id: 'startup-landing',
       name: 'Startup Landing Page',
       type: 'Landing Page',
       description: 'A sleek and modern landing page designed for startups to showcase their product and drive conversions.',
       thumbnail: '/images/templates/startup-landing.jpg',
       previewImages: [
         '/images/templates/startup-landing-preview-1.jpg',
         '/images/templates/startup-landing-preview-2.jpg',
       ],
       mockupType: 'desktop',
       ctaLink: '/contact?template=startup-landing',
       ctaText: 'Use this Template',
     },
     {
       id: 'online-store',
       name: 'Online Store UI',
       type: 'E-commerce',
       description: 'A clean and user-friendly e-commerce layout for online stores, optimized for product showcasing and sales.',
       thumbnail: '/images/templates/online-store.jpg',
       previewImages: [
         '/images/templates/online-store-preview-1.jpg',
         '/images/templates/online-store-preview-2.jpg',
       ],
       mockupType: 'desktop',
       ctaLink: '/contact?template=online-store',
       ctaText: 'Use this Template',
     },
     {
       id: 'saas-dashboard',
       name: 'SaaS Dashboard',
       type: 'SaaS',
       description: 'A professional dashboard UI for SaaS applications, focusing on usability and data visualization.',
       thumbnail: '/images/templates/saas-dashboard.jpg',
       previewImages: [
         '/images/templates/saas-dashboard-preview-1.jpg',
         '/images/templates/saas-dashboard-preview-2.jpg',
       ],
       mockupType: 'desktop',
       ctaLink: '/contact?template=saas-dashboard',
       ctaText: 'Use this Template',
     },
     {
       id: 'portfolio-mobile',
       name: 'Portfolio Mobile',
       type: 'Portfolio',
       description: 'A mobile-optimized portfolio template for creatives to showcase their work on the go.',
       thumbnail: '/images/templates/portfolio-mobile.jpg',
       previewImages: [
         '/images/templates/portfolio-mobile-preview-1.jpg',
         '/images/templates/portfolio-mobile-preview-2.jpg',
       ],
       mockupType: 'mobile',
       ctaLink: '/contact?template=portfolio-mobile',
       ctaText: 'Use this Template',
     },
   ];

   export default function TemplatesPage() {
     const [selectedTemplate, setSelectedTemplate] = useState(null);
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

     const openModal = (template) => {
       setSelectedTemplate(template);
       setCurrentImageIndex(0);
     };

     const closeModal = () => {
       setSelectedTemplate(null);
     };

     const nextImage = () => {
       if (selectedTemplate) {
         setCurrentImageIndex((prevIndex) =>
           prevIndex === selectedTemplate.previewImages.length - 1 ? 0 : prevIndex + 1
         );
       }
     };

     const prevImage = () => {
       if (selectedTemplate) {
         setCurrentImageIndex((prevIndex) =>
           prevIndex === 0 ? selectedTemplate.previewImages.length - 1 : prevIndex - 1
         );
       }
     };

     return (
       <main role="main" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
         {/* Background with Parallax */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
           <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-teal-900/30 animate-gradient-x"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,215,0,0.1)_0%,transparent_70%)] opacity-50 animate-pulse-slow parallax-bg"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,255,255,0.1)_0%,transparent_70%)] opacity-50 animate-pulse-slow-delayed parallax-bg"></div>
           <div className="absolute inset-0 bg-[url(/images/tech-pattern.svg)] opacity-10 bg-repeat"></div>
         </div>

         {/* Hero Section */}
         <section className="section-spacing container mx-auto text-center relative z-10">
           <div className="animate-fade-in">
             <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-4 heading-underline bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
               Templates
             </h1>
             <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 font-inter leading-relaxed animate-fade-in-delay">
               Discover our collection of ready-to-use layouts for your next project, designed for speed and impact.
             </p>
           </div>
         </section>

         {/* Templates Gallery */}
         <section className="section-spacing container mx-auto">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
             {templates.map((template) => (
               <div
                 key={template.id}
                 className="card overflow-hidden rounded-2xl border border-purple-500/30 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 relative group cursor-pointer animate-slide-up"
                 onClick={() => openModal(template)}
               >
                 <div className="relative h-0 pb-[66.66%]">
                   <Image
                     src={template.thumbnail}
                     alt={template.name}
                     fill
                     className={`object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300 ${
                       template.mockupType === 'mobile' ? 'p-8' : 'p-4'
                     } ${template.mockupType === 'mobile' ? 'bg-[url(/images/mobile-mockup.png)]' : 'bg-[url(/images/desktop-mockup.png)]'} bg-center bg-no-repeat bg-contain`}
                     placeholder="blur"
                     blurDataURL="/images/placeholder.png"
                     loading="lazy"
                   />
                 </div>
                 <div className="p-4 text-center">
                   <h3 className="text-lg font-semibold text-white mb-1 font-montserrat">{template.name}</h3>
                   <p className="text-gray-400 text-sm font-inter">{template.description}</p>
                   <Link
                     href={template.ctaLink}
                     className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-full font-montserrat text-sm font-semibold hover:bg-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 group-hover:scale-105 transform transition-transform duration-300"
                     onClick={(e) => e.stopPropagation()}
                   >
                     {template.ctaText}
                   </Link>
                 </div>
               </div>
             ))}
           </div>
         </section>

         {/* Modal for Preview */}
         {selectedTemplate && (
           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 animate-fade-in-fast">
             <div className="relative max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg">
               <button
                 onClick={closeModal}
                 className="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300"
               >
                 <X className="h-6 w-6" />
               </button>
               <div className="relative h-0 pb-[56.25%]">
                 <Image
                   src={selectedTemplate.previewImages[currentImageIndex]}
                   alt={`${selectedTemplate.name} preview ${currentImageIndex + 1}`}
                   fill
                   className="object-contain rounded-t-lg"
                   placeholder="blur"
                   blurDataURL="/images/placeholder.png"
                 />
                 {selectedTemplate.previewImages.length > 1 && (
                   <>
                     <button
                       onClick={prevImage}
                       className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900/50 text-white px-3 py-1 rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300"
                     >
                       &lt;
                     </button>
                     <button
                       onClick={nextImage}
                       className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/50 text-white px-3 py-1 rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300"
                     >
                       &gt;
                     </button>
                   </>
                 )}
               </div>
               <div className="p-4 text-center">
                 <h3 className="text-lg font-semibold text-white mb-1 font-montserrat">{selectedTemplate.name}</h3>
                 <p className="text-gray-400 text-sm font-inter">{selectedTemplate.description}</p>
                 <Link
                   href={selectedTemplate.ctaLink}
                   className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white px-4 py-2 rounded-full font-montserrat text-sm font-semibold hover:bg-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105 transition-transform duration-300"
                 >
                   {selectedTemplate.ctaText}
                 </Link>
               </div>
             </div>
           </div>
         )}

         {/* Footer with CTA */}
         <footer className="py-10 bg-gray-800/50 text-gray-400 text-center border-t border-purple-500/20">
           <div className="container mx-auto space-y-4">
             <h3 className="text-lg font-semibold text-white font-montserrat">Ready to Use a Template?</h3>
             <p className="text-sm font-inter">Let’s bring your vision to life with a custom solution.</p>
             <Link
               href="/contact"
               className="inline-block bg-gradient-to-r from-purple-500 to-teal-500 text-white px-6 py-3 rounded-full font-montserrat font-semibold hover:bg-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg transform hover:scale-105 transition-transform duration-300"
             >
               Contact Us
             </Link>
           </div>
         </footer>
       </main>
     );
   }