'use client';

import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function EcommerceProject() {
  return (
    <>
      <Head>
        <title>E-Commerce Demo Shop by Nyxtrael</title>
        <meta name="description" content="E-Commerce Demo Shop by Nyxtrael - Custom Next.js development with cart functionality and SEO optimization." />
        <meta name="keywords" content="ecommerce, web development, next.js, nyxtrael" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://nyxtrael.com/portfolio/ecommerce" />
      </Head>
      <main className="min-h-screen text-white px-6 py-12 md:px-16 bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to_bottom,#1a0e2a,#0c0f1e)]">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold font-playfair mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            E-Commerce Demo Shop
          </h1>
          <p className="text-neutral-300 mb-6">
            A fully functional e-commerce demo built with Next.js, featuring a cart system, responsive design, and SEO optimization.
          </p>
          <div className="mb-6">
            <img
              src="/images/ecommerce-preview.jpg"
              alt="E-Commerce Demo Shop Preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-white">Technologies Used</h2>
          <ul className="list-disc list-inside text-neutral-400 mb-6">
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>React Context for Cart</li>
          </ul>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-full font-semibold"
            >
              Start Your Project
            </Link>
          </motion.div>
        </section>
      </main>
    </>
  );
}