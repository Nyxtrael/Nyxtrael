import Link from 'next/link';
   import Image from 'next/image';
   import { MessageSquare, Clock, Users, Sparkles } from 'lucide-react';

   const AboutSnippet: React.FC = () => {
     const techStack = ['React', 'Next.js', 'Tailwind', 'TypeScript'];
     const stats = [
       { label: 'Completed Projects', value: '12+' },
       { label: 'Years Experience', value: '3' },
       { label: 'On-Time Delivery', value: '100%' },
     ];
     const values = [
       { label: 'Transparent Collaboration 🤝', description: 'Clear communication at every step.', icon: <MessageSquare className="h-6 w-6 text-accent" /> },
       { label: 'Timely Delivery ⏰', description: 'Projects completed on schedule.', icon: <Clock className="h-6 w-6 text-accent" /> },
       { label: 'Client-Centric Approach 👥', description: 'Your goals are my priority.', icon: <Users className="h-6 w-6 text-accent" /> },
     ];

     return (
       <section className="section-spacing bg-neutral-mid">
         <div className="container mx-auto">
           <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16 heading-underline animate-fade-in font-montserrat">
             About Me
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
             {/* Personal Photo */}
             <div className="flex justify-center">
               <Image
                 src="/images/profile-photo.jpg"
                 alt="Nyxtrael - Front-end Developer"
                 width={300}
                 height={300}
                 className="rounded-full border-4 border-accent shadow-card hover:shadow-card-hover transition-shadow max-w-full h-auto"
                 priority
               />
             </div>
             {/* Text Content */}
             <div className="text-center md:text-left space-y-4">
               <p className="text-lg text-[#F5F5F5] leading-relaxed animate-fade-in font-inter">
                 Hi, I’m Nyxtrael—a front-end freelancer specializing in React and Next.js, with a strong portfolio of modern, responsive web applications and clean, maintainable code. I blend creative design with performance-first development to deliver fast, intuitive user experiences ✨.
               </p>
               {/* Values */}
               <div className="space-y-4">
                 {values.map((value, index) => (
                   <div
                     key={index}
                     className="flex items-start gap-3 animate-fade-in"
                     style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                   >
                     {value.icon}
                     <div>
                       <p className="text-lg text-[#F5F5F5] font-semibold font-montserrat">{value.label}</p>
                       <p className="text-sm text-[#F5F5F5] font-inter">{value.description}</p>
                     </div>
                   </div>
                 ))}
               </div>
               {/* Stats */}
               <div className="flex justify-center md:justify-start gap-6 mt-6">
                 {stats.map((stat, index) => (
                   <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                     <p className="text-3xl font-bold text-accent font-montserrat">{stat.value}</p>
                     <p className="text-sm text-[#F5F5F5] font-inter">{stat.label}</p>
                   </div>
                 ))}
               </div>
               {/* Tech Stack */}
               <ul className="flex justify-center md:justify-start gap-3 mb-6 flex-wrap">
                 {techStack.map((tech, index) => (
                   <li
                     key={tech}
                     className="bg-accent text-neutral-dark px-4 py-2 rounded-full text-sm font-medium animate-fade-in"
                     style={{ animationDelay: `${index * 0.1}s` }}
                   >
                     {tech}
                   </li>
                 ))}
               </ul>
               <Link
                 href="/about"
                 className="btn-primary inline-block font-medium text-white hover:scale-105 hover:shadow-teal-500/50 transition-all duration-300"
                 aria-label="View Nyxtrael's full journey"
               >
                 View Full Journey
               </Link>
             </div>
           </div>
         </div>
       </section>
     );
   };

   export default AboutSnippet;