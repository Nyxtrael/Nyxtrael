"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomerStories({ customerStories }) {
  return (
    <section id="stories" role="region" aria-labelledby="stories-heading" className="section bg-shoptrend-bg">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          id="stories-heading"
          className="text-3xl xs:text-4xl font-playfair font-bold text-shoptrend-text mb-6 text-center heading-underline"
        >
          Customer Stories
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {customerStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)", transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-shoptrend-brown"
            >
              <Image
                src={story.image}
                alt={`Story from ${story.customerName} - ${story.caption}`}
                fill
                className="object-cover rounded-lg"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                loading="lazy"
              />
              <div className="absolute inset-0 bg-shoptrend-brown/20 flex items-end p-4">
                <div className="text-shoptrend-text">
                  <p className="font-lora text-base leading-relaxed">{story.caption}</p>
                  <p className="text-sm font-playfair mt-2 text-shoptrend-gold">— {story.customerName} ({story.initials})</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}