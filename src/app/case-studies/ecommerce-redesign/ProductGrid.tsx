"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProductGrid({ products }) {
  return (
    <section id="products" role="region" aria-labelledby="products-heading" className="section bg-shoptrend-bg">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          id="products-heading"
          className="text-3xl xs:text-4xl font-playfair font-bold text-shoptrend-text mb-6 text-center heading-underline"
        >
          Explore Our Collection
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.03, boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)", transition: { duration: 0.2 } }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative w-full aspect-[3/4] rounded-lg overflow-hidden shadow-lg border border-shoptrend-brown"
            >
              <Image
                src={product.image}
                alt={`Zdjęcie produktu ${product.name} w cenie ${product.price}`}
                fill
                className="object-cover rounded-lg"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                loading="lazy"
              />
              <div className="absolute inset-0 bg-shoptrend-brown/20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-center text-shoptrend-text">
                  <h3 className="text-lg xs:text-xl font-semibold font-playfair">{product.name}</h3>
                  <p className="text-base xs:text-lg font-lora">{product.price}</p>
                  <div className="mt-2 flex gap-2 justify-center">
                    <Link
                      href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="bg-shoptrend-gold text-shoptrend-bg px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 font-lora shadow-md"
                      aria-label={`View details of ${product.name}`}
                    >
                      View Details
                    </Link>
                    <button
                      className="bg-gradient-to-r from-shoptrend-gold to-shoptrend-brown text-shoptrend-bg px-4 py-2 rounded-lg hover:scale-105 transition-all duration-300 font-lora shadow-md"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}