'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const courses = [
  { id: 1, title: 'Beginner’s Fitness', description: 'A 4-week program to kickstart your fitness journey.', image: '/images/beginner-fitness.jpg' },
  { id: 2, title: 'Healthy Weight Loss', description: 'Lose weight sustainably with expert guidance.', image: '/images/healthy-weight-loss.jpg' },
  { id: 3, title: 'Yoga for All', description: 'Improve flexibility and mindfulness with yoga.', image: '/images/yoga-for-all.jpg' },
];

export default function CourseCard() {
  return (
    <section className="py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-[#1f2937]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Online Courses
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-[#1f2937]">{course.title}</h3>
            <p className="text-[#4b5563] mb-4">{course.description}</p>
            <motion.button
              className="px-4 py-2 bg-[#10b981] text-white rounded-lg hover:bg-[#14b8a6] transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}