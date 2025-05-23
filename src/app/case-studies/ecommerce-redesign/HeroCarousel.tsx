"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useCarousel from "./useCarousel";

export default function HeroCarousel({ caseStudy, products }) {
  const { currentSlide, handleNextSlide, handlePrevSlide, handlePause, handleResume } = useCarousel(products.length, 5000);

  return (
    <section
      id="hero"
      role="region"
      aria-labelledby="hero-heading"
      className="section flex items-center justify-center relative z-10 pt-16 min-h-screen"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
        aria-hidden="true"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for Contrast */}
      <div className="absolute inset-0 bg-shoptrend-bg/70 z-0" />
      <div className="container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <h1
            id="hero-heading"
            className="text-5xl xs:text-6xl md:text-7xl font-playfair font-bold text-shoptrend-text mb-4 heading-underline"
          >
            ShopTrend
          </h1>
          <p className="text-xl xs:text-2xl text-shoptrend-text max-w-2xl mx-auto mb-8 font-lora leading-relaxed">
            Luxury Fashion, Timeless Elegance – Shop Now
          </p>
          <Link
            href="#products"
            className="bg-gradient-to-r from-shoptrend-gold to-shoptrend-brown text-shoptrend-text px-8 py-4 rounded-lg transform transition-transform hover:scale-105 hover:shadow-shoptrend-gold font-lora shadow-md text-lg"
            aria-label="Shop now"
          >
            Shop Now
          </Link>
        </motion.div>
        <div className="relative mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-shoptrend-brown"
              role="region"
              aria-live="polite"
              aria-roledescription="carousel"
              aria-label={`Slide ${currentSlide + 1} of ${products.length}`}
            >
              <Image
                src={products[currentSlide].image}
                alt={`Zdjęcie produktu ${products[currentSlide].name} w cenie ${products[currentSlide].price}`}
                fill
                className="object-cover rounded-lg"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQgJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAA/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFREBAQ:::::::::::::::::::::AAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                priority
              />
              <div className="absolute inset-0 bg-shoptrend-brown/30" />
              <div className="absolute bottom-6 left-6 text-shoptrend-text">
                <h3 className="text-xl xs:text-2xl font-semibold font-playfair">{products[currentSlide].name}</h3>
                <p className="text-base xs:text-lg font-lora">{products[currentSlide].price}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={handlePrevSlide}
            aria-label="Previous slide"
            className="btn-circle absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full shadow-md bg-shoptrend-bg/70 hover:bg-shoptrend-gold hover:text-shoptrend-text"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNextSlide}
            aria-label="Next slide"
            className="btn-circle absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full shadow-md bg-shoptrend-bg/70 hover:bg-shoptrend-gold hover:text-shoptrend-text"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}