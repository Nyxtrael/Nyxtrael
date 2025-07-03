import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-12 flex flex-col md:flex-row items-center max-w-5xl mx-auto px-4">
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/profile-male.jpg"
          alt="Ethan Carter Profile"
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
        <h2 className="text-3xl font-bold mb-4 text-[#e5e7eb]">The Artist Behind the Lens</h2>
        <p className="text-[#bfdbfe]">
          I’m Ethan Carter, a passionate photographer with over a decade of experience capturing the beauty of human moments. With works featured in international exhibitions and collaborations worldwide, I strive to create art that resonates and inspires. Let’s craft your story together.
        </p>
      </motion.div>
    </section>
  );
}