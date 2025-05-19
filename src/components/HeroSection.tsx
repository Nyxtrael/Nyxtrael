"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection({ caseStudy }: { caseStudy: any }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <motion.section
      className="relative min-h-[90vh] flex items-center bg-background pattern-grid overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={caseStudy.image}
          alt={`${caseStudy.title} project image`}
          fill
          style={{ objectFit: "cover" }}
          className="opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
      </motion.div>
      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-text-primary to-accent mb-6 leading-tight"
        >
          {caseStudy.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl md:text-3xl text-text-secondary mb-8 max-w-2xl"
        >
          {caseStudy.description}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-text-secondary text-lg"
        >
          {caseStudy.date}
        </motion.p>
      </div>
    </motion.section>
  );
}