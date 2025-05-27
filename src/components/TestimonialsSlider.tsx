import Image from 'next/image';

   interface Testimonial {
     quote: string;
     author: string;
     avatar: string;
   }

   interface TestimonialsSliderProps {
     testimonials: Testimonial[];
   }

   const TestimonialsSlider: React.FC<TestimonialsSliderProps> = ({ testimonials }) => {
     return (
       <section className="section-spacing bg-neutral-mid pattern-grid">
         <div className="container mx-auto">
           <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 animate-fade-in heading-underline">
             What Clients Say
           </h2>
           <div className="max-w-2xl mx-auto space-y-6">
             {testimonials.map((testimonial, index) => (
               <div
                 key={index}
                 className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-purple-500/20 animate-slide-up"
                 style={{ animationDelay: `${index * 0.1}s` }}
               >
                 <div className="flex items-center mb-4">
                   <Image
                     src={testimonial.avatar}
                     alt={`${testimonial.author} avatar`}
                     width={50}
                     height={50}
                     className="rounded-full mr-4"
                   />
                   <div>
                     <p className="text-lg font-semibold text-white font-montserrat">{testimonial.author}</p>
                   </div>
                 </div>
                 <p className="text-gray-400 font-inter italic">"{testimonial.quote}"</p>
               </div>
             ))}
           </div>
         </div>
       </section>
     );
   };

   export default TestimonialsSlider;