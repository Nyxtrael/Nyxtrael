"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

export default function MockupParallax() {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <div
      ref={ref}
      className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-sm"
    >
      <motion.div style={{ y: mockupY }} className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="BrightCRM Mockup"
          fill
          className="object-cover rounded-2xl"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSk"  // truncated for brevity
          onLoadingComplete={() => setLoaded(true)}
        />
        {!loaded && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        )}
      </motion.div>
    </div>
  );
}
