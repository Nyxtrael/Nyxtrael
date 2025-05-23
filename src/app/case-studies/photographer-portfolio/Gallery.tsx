"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery({ photos, onImageClick }) {
  return (
    <>
      {/* First Row: First 3 Photos (400x600) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {photos.slice(0, 3).map((photo, index) => (
          <motion.div
            key={photo.src}
            className="relative cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            onClick={() => onImageClick(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={400}
              height={600}
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md hover:shadow-gold/50 transition-shadow duration-300"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              loading={index < 3 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-cinzel">View Fullscreen</p>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Second Row: Next 3 Photos (600x400) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {photos.slice(3, 6).map((photo, index) => (
          <motion.div
            key={photo.src}
            className="relative cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            onClick={() => onImageClick(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={600}
              height={400}
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg shadow-md hover:shadow-gold/50 transition-shadow duration-300"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              loading={index + 3 < 3 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-cinzel">View Fullscreen</p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}