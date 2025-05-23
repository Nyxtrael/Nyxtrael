"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed top-20 left-4 z-50"
    >
      <Link
        href="/case-studies"
        className="flex items-center bg-shoptrend-bg/90 backdrop-blur-sm text-shoptrend-text px-4 py-2 rounded-lg shadow-md hover:bg-shoptrend-gold hover:text-shoptrend-bg transition-all duration-300"
        aria-label="Back to case studies"
      >
        <ArrowLeft className="w-6 h-6 mr-2" />
        Back to Case Studies
      </Link>
    </motion.div>
  );
}