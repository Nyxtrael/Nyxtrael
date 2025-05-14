'use client';

import { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Updated import
import { useTheme } from '../../../context/ThemeContext';
import { useCart } from '../../../context/CartContext';
import { useWishlist } from '../../../context/WishlistContext';

export default function Shop() {
  const { darkMode, toggleDarkMode } = useTheme();
  const { cart = [], addToCart } = useCart() || {};
  const { wishlist = [], addToWishlist } = useWishlist() || {};
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('price-asc');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterPriceRange, setFilterPriceRange] = useState([0, 200]);
  const heroRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const products = [
    { id: 1, name: 'Cinematic Intro Video', price: 30, description: 'A professional intro video.', category: 'video', image: '/images/shop/cinematic-intro.jpg', reviews: [{ rating: 4.5, text: 'Great quality!' }] },
    { id: 2, name: 'Portfolio Website Template', price: 50, description: 'Next.js template.', category: 'template', image: '/images/shop/portfolio-template.jpg', reviews: [{ rating: 4.8, text: 'Easy to customize!' }] },
    { id: 3, name: 'Animated Logo Template', price: 25, description: 'Dynamic logo animation.', category: 'video', image: '/images/shop/animated-logo.jpg', reviews: [{ rating: 4.2, text: 'Smooth animations!' }] },
    { id: 4, name: 'E-commerce Template', price: 75, description: 'Shop-ready Next.js template.', category: 'template', image: '/images/shop/ecommerce-template.jpg', reviews: [{ rating: 4.7, text: 'Perfect for stores!' }] },
    { id: 5, name: 'Motion Graphics Pack', price: 40, description: 'Set of 5 motion graphics.', category: 'video', image: '/images/shop/motion-graphics.jpg', reviews: [{ rating: 4.6, text: 'Versatile pack!' }] },
    { id: 6, name: 'Landing Page Template', price: 35, description: 'Single-page marketing template.', category: 'template', image: '/images/shop/landing-template.jpg', reviews: [{ rating: 4.4, text: 'Clean design!' }] },
    { id: 7, name: 'Custom Video Ad', price: 60, description: 'Tailored video advertisement.', category: 'video', image: '/images/shop/video-ad.jpg', reviews: [{ rating: 4.9, text: 'Highly effective!' }] },
    { id: 8, name: 'Blog Theme', price: 45, description: 'Elegant blog template.', category: 'template', image: '/images/shop/blog-theme.jpg', reviews: [{ rating: 4.3, text: 'Great for writers!' }] },
  ];

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterCategory === 'all' || product.category === filterCategory) &&
      product.price >= filterPriceRange[0] &&
      product.price <= filterPriceRange[1]
    )
    .sort((a, b) => {
      if (sortOption === 'price-asc') return a.price - b.price;
      if (sortOption === 'price-desc') return b.price - a.price;
      return 0;
    });
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${-window.pageYOffset * 0.3}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const resetFilters = () => {
    setSearchTerm('');
    setSortOption('price-asc');
    setFilterCategory('all');
    setFilterPriceRange([0, 200]);
    setCurrentPage(1);
  };

  return (
    <>
      <Head>
        <title>Shop - Demo Store by Nyxtrael</title>
        <meta
          name="description"
          content="Explore a demo store by Nyxtrael featuring website templates and video assets. This is a showcase only, not for real purchases."
        />
        <meta name="keywords" content="demo shop, templates, video assets, nyxtrael" />
        <meta name="robots" content="noindex, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Shop - Demo Store by Nyxtrael" />
        <meta
          property="og:description"
          content="Explore a demo store by Nyxtrael featuring website templates and video assets. This is a showcase only, not for real purchases."
        />
        <meta property="og:image" content="https://nyxtrael.netlify.app/images/og-image-shop.jpg" />
        <meta property="og:url" content="https://nyxtrael.netlify.app/portfolio/shop" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nyxtrael.netlify.app/portfolio/shop" />
      </Head>

      <section
        ref={heroRef}
        className={`relative flex flex-col items-center justify-center text-center min-h-[50vh] p-6 md:p-12 transition-colors duration-300 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
        }`}
        style={{
          backgroundImage: "url('/images/shop-hero-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold drop-shadow-lg"
        >
          Demo Store by Nyxtrael
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg mt-4 max-w-2xl drop-shadow-md"
        >
          This is a demo showcase of products. Purchases are not available—explore the design and features!
        </motion.p>
        <motion.a
          href="#main-content"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-8 text-teal-400"
          aria-label="Scroll to main content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.a>
      </section>

      <main
        id="main-content"
        className={`container mx-auto px-4 py-12 transition-colors duration-300 ${
          darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'
        }`}
      >
        <motion.button
          onClick={toggleDarkMode}
          className="fixed top-4 right-4 p-3 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? '🌞' : '🌙'}
        </motion.button>

        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="w-full md:w-1/3">
            <label htmlFor="search" className="sr-only">
              Search products
            </label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className={`p-3 border rounded-lg w-full shadow-sm focus:ring-2 focus:ring-teal-400 transition-colors ${
                darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
              }`}
            />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <div>
              <label htmlFor="sort" className="sr-only">
                Sort by
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className={`p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 transition-colors ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                }`}
              >
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
            <div>
              <label htmlFor="category" className="sr-only">
                Filter by category
              </label>
              <select
                id="category"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className={`p-3 border rounded-lg shadow-sm focus:ring-2 focus:ring-teal-400 transition-colors ${
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'
                }`}
              >
                <option value="all">All Categories</option>
                <option value="video">Videos</option>
                <option value="template">Templates</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="price-range" className="text-sm">
                Price Range: €{filterPriceRange[0]} - €{filterPriceRange[1]}
              </label>
              <input
                id="price-range"
                type="range"
                min="0"
                max="200"
                value={filterPriceRange[1]}
                onChange={(e) => setFilterPriceRange([0, parseInt(e.target.value)])}
                className="w-full accent-teal-500"
              />
            </div>
            <button
              onClick={resetFilters}
              className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-sm"
            >
              Clear Filters
            </button>
          </div>
        </div>

        <div className="mb-8 flex gap-4 justify-center">
          <motion.div
            className={`p-3 rounded-lg shadow-md transition-colors ${
              darkMode ? 'bg-teal-700 text-white' : 'bg-teal-100 text-teal-800'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Cart: {(cart || []).length} item(s)
          </motion.div>
          <motion.div
            className={`p-3 rounded-lg shadow-md transition-colors ${
              darkMode ? 'bg-green-700 text-white' : 'bg-green-100 text-green-800'
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Wishlist: {(wishlist || []).length} item(s)
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product) => (
            <motion.div
              key={product.id}
              className={`border rounded-lg p-6 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full h-48">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
              <p className={`text-sm mt-2 line-clamp-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {product.description}
              </p>
              <div className="flex items-center mt-3">
                <span className="text-yellow-400">{'★'.repeat(Math.floor(product.reviews[0].rating))}</span>
                <span className="text-gray-400">{'★'.repeat(5 - Math.floor(product.reviews[0].rating))}</span>
                <span className={`text-sm ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  ({product.reviews[0].rating})
                </span>
              </div>
              <p className="text-teal-500 font-bold text-lg mt-2">€{product.price}</p>
              <div className="mt-4 flex gap-3 items-center">
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className={`p-2 border rounded-lg focus:ring-2 focus:ring-teal-400 transition-colors ${
                    darkMode ? 'bg-gray-600 border-gray-500 text-white' : 'bg-white border-gray-300 text-gray-800'
                  }`}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                <motion.button
                  onClick={() => addToCart({ ...product, quantity })}
                  className="flex-1 bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-colors shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
                <motion.button
                  onClick={() => addToWishlist(product)}
                  className="bg-green-500 text-white py-2 px-3 rounded-lg hover:bg-green-600 transition-colors shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ♥
                </motion.button>
              </div>
              <motion.button
                onClick={() => setSelectedProduct(product)}
                className={`mt-3 w-full py-2 rounded-lg transition-colors shadow-md ${
                  darkMode ? 'bg-gray-600 hover:bg-gray-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Details
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {Array.from({ length: totalPages }, (_, i) => (
            <motion.button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded-lg shadow-md transition-colors ${
                currentPage === i + 1
                  ? 'bg-teal-500 text-white'
                  : darkMode
                  ? 'bg-gray-600 text-white hover:bg-gray-500'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>

        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              className={`p-8 rounded-xl max-w-lg w-full shadow-2xl ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              }`}
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl font-bold mb-4">{selectedProduct.name}</h3>
              <div className="relative w-full h-64">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.jpg"
                />
              </div>
              <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedProduct.description}
              </p>
              <div className="mt-4">
                <span className="text-yellow-400">{'★'.repeat(Math.floor(selectedProduct.reviews[0].rating))}</span>
                <span className="text-gray-400">{'★'.repeat(5 - Math.floor(selectedProduct.reviews[0].rating))}</span>
                <span className={`text-sm ml-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  ({selectedProduct.reviews[0].rating})
                </span>
                <p className={`italic mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  "{selectedProduct.reviews[0].text}"
                </p>
              </div>
              <p className="text-teal-500 font-bold text-lg mt-4">€{selectedProduct.price}</p>
              <button
                onClick={() => setSelectedProduct(null)}
                className="mt-6 w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition-colors shadow-md"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </main>
    </>
  );
}