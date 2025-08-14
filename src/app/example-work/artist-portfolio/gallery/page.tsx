'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryGrid from '../componentsartitst/GalleryGrid';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-base">Gallery</h1>
        <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
        <p className="text-text-muted mt-4 max-w-2xl mx-auto">Browse selected works — portraits and stills.</p>
      </div>
      <GalleryGrid onImageClick={setSelectedImage} />
      <AnimatePresence>
        {selectedImage && (
          <motion.div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}>
            <motion.img src={selectedImage} alt="Artwork" className="max-w-[90%] max-h-[90%] rounded-lg"
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}