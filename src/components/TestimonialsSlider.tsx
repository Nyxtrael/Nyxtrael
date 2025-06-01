import Image from 'next/image';
import { motion } from 'framer-motion';

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
    <section className="section bg-[#0d1117] grain-overlay py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Clients Say
          <span className="block w-1/4 h-1 bg-gradient-to-r from-[#38bdf8] to-[#facc15] mx-auto mt-2"></span>
        </motion.h2>
        <div className="max-w-2xl mx-auto space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#1f2937] p-6 rounded-lg shadow-md border border-[#38bdf8]/30 hover:border-[#facc15]/50 hover:shadow-[#38bdf8]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.author} avatar`}
                  width={50}
                  height={50}
                  className="rounded-full mr-4 border-2 border-[#38bdf8]/50"
                />
                <div>
                  <p className="text-lg font-serif font-semibold text-[#e5e7eb]">{testimonial.author}</p>
                </div>
              </div>
              <p className="text-[#9ca3af] font-inter italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;