'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function CaseStudyCard({ study, index }) {
  return (
    <motion.article
      key={study.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative rounded-xl overflow-hidden shadow-lg group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-gray-700/50"
    >
      <Image
        src={study.image}
        alt={study.title}
        width={400}
        height={256}
        className="w-full h-64 object-cover"
        loading="lazy"
        onError={(e) => {
          e.target.src = '/images/fallback.jpg';
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:bg-black/90"
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
      >
        <h3 className="text-xl font-bold font-playfair text-white mb-2">{study.title}</h3>
        <p className="text-base font-inter text-gray-300 mb-4 line-clamp-3">{study.desc}</p>
        <Link
          href={`/case-studies/${study.slug}`}
          className="px-5 py-2 bg-gradient-to-br from-fuchsia-500 to-purple-500 text-white rounded-lg font-inter text-sm shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition-all"
          aria-label={`View ${study.title} case study`}
        >
          View Case Study
        </Link>
      </motion.div>
    </motion.article>
  );
}