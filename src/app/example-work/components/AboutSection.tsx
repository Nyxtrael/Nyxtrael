import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-12 bg-white dark:bg-[#1f2937] flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/profile.jpg"
          alt="Luna Sterling Profile"
          width={300}
          height={300}
          className="rounded-full shadow-md"
        />
      </motion.div>
      <motion.div
        className="md:w-1/2 mt-6 md:mt-0 md:pl-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-4 text-[#1f2937] dark:text-[#e5e7eb]">About Me</h2>
        <p className="text-[#4b5563] dark:text-[#bfdbfe]">
          I’m Luna Sterling, a passionate visual artist and designer with over 5 years of experience in creating stunning illustrations, web designs, and animations. My work blends creativity with functionality to bring ideas to life.
        </p>
      </motion.div>
    </section>
  );
}