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
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-card"
      role="group"
    >
      <motion.div style={{ y: mockupY }} className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="BrightCRM Mockup"
          fill
          className="object-cover rounded-2xl"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          onLoadingComplete={() => setLoaded(true)}
        />
        {!loaded && (
          <div
            className="absolute inset-0 bg-gray-200 animate-shimmer-effect rounded-2xl"
            style={{
              backgroundImage: 'linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%)',
              backgroundSize: '200% 100%',
            }}
          />
        )}
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.a
          href="#contact"
          role="button"
          aria-label="Request a demo"
          whileHover={{ scale: 1.05 }}
          className="btn-primary"
        >
          Request a Demo
        </motion.a>
      </div>
    </div>
  );
}
