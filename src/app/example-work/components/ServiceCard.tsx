import { motion } from 'framer-motion';
import { PaintBrushIcon, GlobeAltIcon, FilmIcon } from '@heroicons/react/24/outline';

const services = [
  { title: 'Illustrations', description: 'Custom digital and traditional illustrations tailored to your vision.', icon: PaintBrushIcon },
  { title: 'Web Design', description: 'Modern, responsive websites that showcase your brand.', icon: GlobeAltIcon },
  { title: 'Animations', description: 'Engaging motion graphics and animations for your projects.', icon: FilmIcon },
];

export default function ServiceCard() {
  return (
    <section className="py-12 bg-[#f5f5f5] dark:bg-[#2d3748]">
      <h2 className="text-3xl font-bold text-center mb-12 text-[#1f2937] dark:text-[#e5e7eb]">
        Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md"
          >
            <service.icon className="h-12 w-12 text-[#f3e8ff] mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#1f2937] dark:text-[#e5e7eb]">{service.title}</h3>
            <p className="text-[#6b7280] dark:text-[#bfdbfe]">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}