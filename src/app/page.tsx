import Link from 'next/link';
   import Image from 'next/image';
   import Hero from '../components/Hero';
   import AboutSnippet from '../components/AboutSnippet';
   import ServiceCard from '../components/ServiceCard';
   import CaseStudyCard from '../components/CaseStudyCard';
   import FinalCTA from '../components/FinalCTA';
   import CaseStudyFilters from '../components/CaseStudyFilters';
   import TestimonialsSlider from '../components/TestimonialsSlider';
   import { caseStudies } from './case-studies/data';
   import { CodeBracketIcon, PaintBrushIcon, LightBulbIcon, CheckCircleIcon, UserIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

   const services = [
     {
       title: 'Web Development',
       description: 'Fast, responsive websites tailored to your needs.',
       icon: <CodeBracketIcon className="h-12 w-12 text-accent" />,
       benefits: [
         'Optimized for speed and SEO',
         'Mobile-first responsive design',
         'Custom functionality with Next.js',
       ],
       examples: ['SaaS Dashboard', 'E-commerce Platform', 'Portfolio Website'],
     },
     {
       title: 'UI/UX Design',
       description: 'Intuitive and aesthetic designs that boost user engagement.',
       icon: <PaintBrushIcon className="h-12 w-12 text-accent" />,
       benefits: [
         'User-centered design process',
         'Interactive prototypes',
         'Consistent brand visuals',
       ],
       examples: ['Landing Page Design', 'App Interface', 'Design System'],
     },
     {
       title: 'Consulting',
       description: 'Expert guidance on digital strategy and project optimization.',
       icon: <LightBulbIcon className="h-12 w-12 text-accent" />,
       benefits: [
         'Technical audits and recommendations',
         'Performance optimization strategies',
         'Scalable architecture planning',
       ],
       examples: ['SEO Audit', 'Performance Optimization', 'Tech Strategy'],
     },
   ];

   const serviceFAQs = [
     {
       question: 'Can I hire you for design without development?',
       answer: 'Yes! I offer standalone UI/UX design services, including interactive prototypes and design systems.',
     },
     {
       question: 'What technologies do you use for web development?',
       answer: 'I specialize in React, Next.js, and Tailwind CSS to build modern, high-performance web applications.',
     },
     {
       question: 'Do you provide ongoing support after project completion?',
       answer: 'Yes, I offer support packages tailored to your needs, from one-month to ongoing maintenance.',
     },
   ];

   const benefits = [
     {
       title: 'Transparency & Communication',
       description: 'Clear updates and open dialogue throughout your project.',
       icon: <UserIcon className="h-12 w-12 text-accent" />,
     },
     {
       title: 'On-Time Delivery',
       description: 'Projects delivered on schedule, every time.',
       icon: <CheckCircleIcon className="h-12 w-12 text-accent" />,
     },
     {
       title: 'Modern Tech Stack',
       description: 'Built with Next.js, Tailwind CSS, and AI-driven tools.',
       icon: <RocketLaunchIcon className="h-12 w-12 text-accent" />,
     },
     {
       title: 'Flexible Billing',
       description: 'Choose between subscription or one-time payment.',
       icon: <CheckCircleIcon className="h-12 w-12 text-accent" />,
     },
   ];

   const testimonials = [
     {
       quote: 'Super fast delivery, amazing design. Will hire again!',
       author: 'Alex, Startup Founder',
       avatar: '/images/avatar-alex.jpg',
     },
     {
       quote: 'Nyxtrael transformed our website into a modern masterpiece!',
       author: 'Sarah, E-commerce Owner',
       avatar: '/images/avatar-sarah.jpg',
     },
     {
       quote: 'Professional, communicative, and highly skilled. Highly recommend!',
       author: 'Mark, SaaS CEO',
       avatar: '/images/avatar-mark.jpg',
     },
   ];

   export default function Home() {
     const featuredCaseStudies = caseStudies.slice(0, 3);

     return (
       <div className="bg-neutral-dark">
         {/* Hero Section */}
         <Hero />

         {/* About Snippet */}
         <AboutSnippet />

         {/* Services Section */}
         <section className="section-spacing">
           <div className="container mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in heading-underline">
               My Services
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {services.map((service, index) => (
                 <ServiceCard
                   key={index}
                   title={service.title}
                   description={service.description}
                   icon={service.icon}
                   benefits={service.benefits}
                   examples={service.examples}
                   className="animate-fade-in-up"
                 />
               ))}
             </div>
             {/* FAQ Section */}
             <div className="mt-12">
               <h3 className="text-2xl font-semibold text-white text-center mb-8 font-montserrat">Frequently Asked Questions</h3>
               <div className="space-y-6 max-w-3xl mx-auto">
                 {serviceFAQs.map((faq, index) => (
                   <div
                     key={index}
                     className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20 animate-slide-up"
                     style={{ animationDelay: `${index * 0.1}s` }}
                   >
                     <h4 className="text-lg font-semibold text-white mb-2 font-montserrat">{faq.question}</h4>
                     <p className="text-gray-400 font-inter">{faq.answer}</p>
                   </div>
                 ))}
               </div>
             </div>
           </div>
         </section>

         {/* Why Work With Me Section */}
         <section className="section-spacing bg-neutral-dark">
           <div className="container mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in heading-underline">
               Why Work With Me
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
               {benefits.map((benefit, index) => (
                 <div
                   key={index}
                   className="bg-neutral-mid p-6 rounded-2xl card border border-accent/50 shadow-card hover:shadow-card-hover hover:bg-opacity-95 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                   style={{ animationDelay: `${index * 0.1}s` }}
                 >
                   <div className="flex justify-center mb-4" aria-hidden="true">{benefit.icon}</div>
                   <h3 className="text-xl font-semibold text-white mb-2 text-center font-montserrat">{benefit.title}</h3>
                   <p className="text-[#F5F5F5] leading-relaxed text-center">{benefit.description}</p>
                 </div>
               ))}
             </div>
           </div>
         </section>

         {/* Testimonials Section */}
         <TestimonialsSlider testimonials={testimonials} />

         {/* Smart Tools Section */}
         <section className="section-spacing bg-neutral-dark">
           <div className="container mx-auto">
             <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in heading-underline">
               Smart Tools for Modern Development
             </h2>
             <div className="text-center max-w-3xl mx-auto">
               <p className="text-lg text-[#F5F5F5] leading-relaxed animate-fade-in font-inter">
                 I leverage cutting-edge AI tools and automation to streamline development, enabling faster iterations and smarter prototyping.
               </p>
               <div className="flex justify-center gap-4 mt-6">
                 <span className="bg-accent text-neutral-dark px-4 py-2 rounded-full text-sm font-medium animate-fade-in">AI Content Generation</span>
                 <span className="bg-accent text-neutral-dark px-4 py-2 rounded-full text-sm font-medium animate-fade-in">Rapid Prototyping</span>
                 <span className="bg-accent text-neutral-dark px-4 py-2 rounded-full text-sm font-medium animate-fade-in">Automated Testing</span>
               </div>
             </div>
           </div>
         </section>

         {/* Case Studies Section */}
         <section className="section-spacing bg-neutral-mid pattern-grid">
           <div className="container mx-auto">
             <h2 className="section-header text-white animate-fade-in">Featured Projects</h2>
             <CaseStudyFilters />
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {featuredCaseStudies.map((caseStudy, index) => (
                 <CaseStudyCard
                   key={caseStudy.slug}
                   title={caseStudy.title}
                   description={caseStudy.description}
                   slug={caseStudy.slug}
                   thumbnail={caseStudy.thumbnail}
                   category={caseStudy.category}
                   year={caseStudy.year}
                   className="animate-fade-in-up"
                 />
               ))}
             </div>
             <div className="text-center mt-12">
               <Link
                 href="/case-studies"
                 className="inline-block text-accent font-medium hover:text-[#F5F5F5] glow-hover transition-colors"
                 aria-label="View all case studies"
               >
                 View All Projects
               </Link>
             </div>
           </div>
         </section>

         {/* Final CTA */}
         <FinalCTA />
       </div>
     );
   }