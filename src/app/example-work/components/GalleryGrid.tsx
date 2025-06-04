'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the interface for a work item
interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

const mockWorks: WorkItem[] = [
  { id: 1, title: 'Timeless Elegance', category: 'Portraits', image: '/images/portrait-woman.jpg' },
  { id: 2, title: 'Quiet Strength', category: 'Portraits', image: '/images/portrait-man.jpg' },
  { id: 3, title: 'Innocent Joy', category: 'Portraits', image: '/images/portrait-child.jpg' },
  { id: 4, title: 'Love Captured', category: 'Portraits', image: '/images/portrait-couple.jpg' },
  { id: 5, title: 'Studio Serenity', category: 'Stills', image: '/images/studio-still.jpg' },
  { id: 6, title: 'Monochrome Beauty', category: 'Portraits', image: '/images/black-and-white-portrait.jpg' },
];
const categories = ['All', 'Portraits', 'Stills'];

export default function GalleryGrid() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<WorkItem | null>(null);

  const filtered = mockWorks.filter(work => filter === 'All' || work.category === filter);

  const handleImageClick = (work: WorkItem) => {
    setSelectedImage(work);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#e5e7eb]">
        Moments Frozen in Time
      </h2>
      <div className="flex justify-center mb-6 items-center gap-2">
        <label htmlFor="category-filter" className="text-[#e5e7eb] font-medium">
          Filter by Category:
        </label>
        <select
          id="category-filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="px-4 py-2 border rounded text-[#1f2937] dark:text-[#e5e7eb] bg-white dark:bg-gray-700 border-[#e9d5ff] focus:ring-2 focus:ring-[#d8b4fe]"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {filtered.map(work => (
          <motion.div
            key={work.id}
            className="relative transition-transform transform hover:shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleImageClick(work)}
          >
            <Image
              src={work.image}
              alt={work.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover rounded"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity flex items-center justify-center">
              <p className="text-white text-center opacity-0 hover:opacity-100 transition-opacity">{work.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseLightbox}
        >
          <motion.div
            className="relative max-w-4xl mx-auto"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the image
          >
            <Image
              src={selectedImage.image}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl">{selectedImage.title}</p>
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={handleCloseLightbox}
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}