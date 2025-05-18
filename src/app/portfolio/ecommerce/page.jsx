'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ShoppingBag, Star, Filter, Instagram, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

const products = [
  { id: 1, name: 'Cosmic Canvas Print', category: 'Decor', price: 49.99, image: '/images/product1.jpg', rating: 4.5 },
  { id: 2, name: 'Nebula T-Shirt', category: 'Apparel', price: 29.99, image: '/images/product2.jpg', rating: 4.7 },
  { id: 3, name: 'Stellar Mug', category: 'Decor', price: 19.99, image: '/images/product3.jpg', rating: 4.2 },
  { id: 4, name: 'Galaxy Cushion', category: 'Decor', price: 34.99, image: '/images/product4.jpg', rating: 4.6 },
  { id: 5, name: 'Starlight Hoodie', category: 'Apparel', price: 59.99, image: '/images/product5.jpg', rating: 4.8 },
  { id: 6, name: 'Lunar Lamp', category: 'Decor', price: 79.99, image: '/images/product6.jpg', rating: 4.4 },
  { id: 7, name: 'Cosmo Cap', category: 'Apparel', price: 24.99, image: '/images/product7.jpg', rating: 4.3 },
  { id: 8, name: 'Astral Wall Art', category: 'Decor', price: 69.99, image: '/images/product8.jpg', rating: 4.7 },
  { id: 9, name: 'Celestial Scarf', category: 'Apparel', price: 39.99, image: '/images/product9.jpg', rating: 4.5 },
];

const Page = () => {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const heroRef = useRef(null);

  // Handle filters with URL sync
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialPriceRange = searchParams.get('priceRange') || 'All';
  const [filters, setFilters] = useState({
    category: initialCategory,
    priceRange: initialPriceRange,
  });

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set('category', filters.category);
    params.set('priceRange', filters.priceRange);
    router.push(`/portfolio/ecommerce?${params.toString()}`, { scroll: false });
  }, [filters, router, searchParams]);

  // Particle animation with reduced motion and mobile optimization
  useEffect(() => {
    const particleCount = isMobile ? 10 : prefersReducedMotion ? 15 : 25;
    setParticles(
      Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        size: `${Math.random() * 6 + 2}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 4,
      }))
    );
  }, [isMobile, prefersReducedMotion]);

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = filters.category === 'All' || product.category === filters.category;
    const price = product.price;
    const matchesPrice =
      filters.priceRange === 'All' ||
      (filters.priceRange === 'Under $30' && price < 30) ||
      (filters.priceRange === '$30-$60' && price >= 30 && price <= 60) ||
      (filters.priceRange === 'Over $60' && price > 60);
    return matchesCategory && matchesPrice;
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(30,10,50,0.4),transparent),linear-gradient(to_bottom,#0a0e1a,#1a2233)] text-gray-100 font-sans relative overflow-hidden">
      {/* Particles */}
      {!prefersReducedMotion &&
        particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-br from-cyan-300 to-fuchsia-400"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.left,
              top: particle.top,
            }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.7, 1.1, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, delay: particle.delay }}
          />
        ))}

      {/* Sticky Header */}
      <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-20 shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold font-playfair text-white accent-gradient">
            Nyxtrael Store
          </Link>
          <nav className="space-x-6">
            <Link href="#products" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Products
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main ref={heroRef} className="pt-24 relative z-10">
        {/* Hero Section */}
        <section className="text-center py-32 section-bg" role="region" aria-labelledby="hero-title">
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.5 : 1.2, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold font-playfair accent-gradient leading-tight"
          >
            Discover Cosmic Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.5 : 1.2, delay: 0.3, ease: 'easeOut' }}
            className="mt-6 text-lg md:text-xl text-gray-300 font-inter max-w-4xl mx-auto"
          >
            Explore our curated collection of cosmic-inspired home decor and apparel. This is a non-functional prototype designed for portfolio showcase only.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.5 : 1.2, delay: 0.6, ease: 'easeOut' }}
            className="mt-10"
          >
            <Link
              href="#products"
              className="inline-flex items-center px-8 py-3 text-white font-semibold font-inter rounded-lg bg-gradient-to-br from-fuchsia-600 to-purple-600 hover:brightness-110 transition-all duration-300 shadow-md"
              aria-label="Scroll to products section"
            >
              Shop Now <ShoppingBag className="ml-3 w-5 h-5" />
            </Link>
          </motion.div>
        </section>

        {/* Products Section */}
        <section
          id="products"
          className="container mx-auto px-6 py-16 relative z-10"
          role="region"
          aria-labelledby="products-title"
        >
          <div className="md:flex gap-8">
            {/* Filters (Hidden on Mobile, Shown as Dropdown) */}
            {isMobile ? (
              <div className="mb-6">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center px-4 py-2 bg-gray-800/50 border border-gray-600 text-gray-100 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label="Toggle filters"
                >
                  <Filter className="w-5 h-5 mr-2" /> Filters
                </button>
                {showFilters && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 space-y-4"
                  >
                    <div>
                      <label htmlFor="category-mobile" className="block text-gray-400 font-inter mb-2">
                        Category
                      </label>
                      <select
                        id="category-mobile"
                        value={filters.category}
                        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                        className="w-full p-2 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
                        aria-label="Filter by category"
                      >
                        <option value="All">All</option>
                        <option value="Decor">Decor</option>
                        <option value="Apparel">Apparel</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="price-mobile" className="block text-gray-400 font-inter mb-2">
                        Price Range
                      </label>
                      <select
                        id="price-mobile"
                        value={filters.priceRange}
                        onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                        className="w-full p-2 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
                        aria-label="Filter by price range"
                      >
                        <option value="All">All</option>
                        <option value="Under $30">Under $30</option>
                        <option value="$30-$60">$30 - $60</option>
                        <option value="Over $60">Over $60</option>
                      </select>
                    </div>
                  </motion.div>
                )}
              </div>
            ) : (
              <aside className="w-64 space-y-6">
                <h3 className="text-xl font-semibold font-playfair text-white">Filters</h3>
                <div>
                  <label htmlFor="category" className="block text-gray-400 font-inter mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="w-full p-2 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
                    aria-label="Filter by category"
                  >
                    <option value="All">All</option>
                    <option value="Decor">Decor</option>
                    <option value="Apparel">Apparel</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="price" className="block text-gray-400 font-inter mb-2">
                    Price Range
                  </label>
                  <select
                    id="price"
                    value={filters.priceRange}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="w-full p-2 rounded-lg bg-gray-800/50 border border-gray-600 text-gray-100 focus:outline-none focus:border-cyan-400"
                    aria-label="Filter by price range"
                  >
                    <option value="All">All</option>
                    <option value="Under $30">Under $30</option>
                    <option value="$30-$60">$30 - $60</option>
                    <option value="Over $60">Over $60</option>
                  </select>
                </div>
              </aside>
            )}

            {/* Product Grid */}
            <div className="flex-1">
              <h2 id="products-title" className="text-4xl font-extrabold font-playfair text-center text-white mb-12 accent-gradient">
                Featured Collection
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="glass-card p-6 rounded-xl overflow-hidden group"
                    initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: prefersReducedMotion ? 0.3 : 0.6, delay: (product.id - 1) * 0.1 }}
                  >
                    <div className="relative w-full h-60 overflow-hidden rounded-lg">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                        priority={product.id <= 3}
                        placeholder="blur"
                        blurDataURL="/images/placeholder.jpg"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold font-playfair text-white">{product.name}</h3>
                      <p className="text-gray-400 font-inter mt-2">{formatPrice(product.price)}</p>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: 5 }, (_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-600'}`}
                            aria-hidden="true"
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-400">{product.rating}/5</span>
                      </div>
                      <motion.button
                        className="mt-4 w-full py-2 bg-gradient-to-br from-fuchsia-600 to-purple-600 text-white font-inter rounded-lg hover:brightness-110 transition-all duration-300"
                        whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                        whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                        disabled
                        aria-label={`Add ${product.name} to cart (disabled)`}
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center mt-8 text-gray-400 font-inter italic">
                * This is a non-functional demo created for portfolio purposes. No purchases can be made.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 text-center bg-gray-900/90 backdrop-blur-md relative z-10 border-t border-gray-800">
        <p className="text-gray-400 text-sm font-inter mb-4">
          © 2025 Nyxtrael. All rights reserved. |{' '}
          <Link href="/contact" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Contact Us
          </Link>{' '}
          |{' '}
          <Link href="/portfolio" className="text-cyan-400 hover:text-cyan-300 font-medium">
            Portfolio
          </Link>
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Visit our Instagram page"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
            aria-label="Visit our X page"
          >
            <X className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Page;