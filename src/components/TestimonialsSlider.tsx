import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
    <section className="py-24 bg-neutral-bg">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-text-base text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What Clients Say
          <span className="block w-1/4 h-1 bg-gradient-cta mx-auto mt-2" />
        </motion.h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={1}
          className="max-w-2xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-neutral-mid p-6 rounded-lg border border-accent/30 hover:border-yellow-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={`${testimonial.author} avatar`}
                    width={50}
                    height={50}
                    className="rounded-full mr-4 border-2 border-accent/50"
                  />
                  <div>
                    <p className="text-lg font-semibold text-text-base">{testimonial.author}</p>
                  </div>
                </div>
                <p className="text-text-muted italic">"{testimonial.quote}"</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;