"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shirt, Watch, Gift } from "lucide-react";

export default function CategoryGrid({ categories }) {
  const iconMap = {
    Shirt: Shirt,
    Watch: Watch,
    Gift: Gift,
  };

  return (
    <section id="categories" role="region" aria-labelledby="categories-heading" className="section bg-shoptrend-bg">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          id="categories-heading"
          className="text-3xl xs:text-4xl font-playfair font-bold text-shoptrend-text mb-6 text-center heading-underline"
        >
          Shop by Category
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            return (
              <Link
                href={`/categories/${category.name.toLowerCase()}`}
                key={index}
                aria-label={`View ${category.name} category`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)" }}
                  transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg border border-shoptrend-brown"
                >
                  <Image
                    src={category.image}
                    alt={`Kategoria ${category.name}`}
                    fill
                    className="object-cover rounded-lg"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-shoptrend-brown/40 flex items-center justify-center">
                    <div className="text-center text-shoptrend-text">
                      <IconComponent className="w-10 h-10 mx-auto mb-3" />
                      <h3 className="text-xl xs:text-2xl font-semibold font-playfair">{category.name}</h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}