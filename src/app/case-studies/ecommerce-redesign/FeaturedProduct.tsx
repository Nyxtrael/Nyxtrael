"use client";

import { motion, useTransform } from "framer-motion";
import Image from "next/image";

export default function FeaturedProduct({ mockupY }) {
  return (
    <section id="featured" role="region" aria-labelledby="featured-heading" className="section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          id="featured-heading"
          className="text-3xl xs:text-4xl font-playfair font-bold text-shoptrend-text mb-6 text-center heading-underline"
        >
          Featured Product
        </motion.h2>
        <div className="flex flex-col md:flex-row bg-shoptrend-bg rounded-lg shadow-lg overflow-hidden border border-shoptrend-brown">
          <motion.div
            style={{ y: mockupY }}
            className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto"
          >
            <Image
              src="/images/featured.jpg"
              alt="Luksusowa torebka z wysokiej jakości skóry w cenie $199.99"
              fill
              className="object-cover rounded-l-lg"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQE:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              loading="lazy"
            />
          </motion.div>
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-xl xs:text-2xl font-semibold font-playfair text-shoptrend-text mb-2">Luxury Handbag</h3>
            <p className="text-shoptrend-text mb-4 font-lora">$199.99</p>
            <p className="text-shoptrend-text mb-6 font-lora leading-relaxed">A timeless piece crafted from premium leather, perfect for any occasion.</p>
            <button
              className="bg-gradient-to-r from-shoptrend-gold to-shoptrend-brown text-shoptrend-bg px-8 py-4 rounded-lg transform transition-transform hover:scale-105 hover:shadow-shoptrend-gold font-lora shadow-md text-lg"
              aria-label="Add luxury handbag to cart"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}