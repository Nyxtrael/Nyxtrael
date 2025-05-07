'use client';

import { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import products from '../../data/products.json';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ShopPage() {
  const { cartItems, addToCart } = useContext(CartContext);

  // ⭐ Background stars
  const [stars, setStars] = useState([]);
  useEffect(() => {
    setStars(
      Array.from({ length: 7 }, () => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  // 🎉 Promo banner
  const [showBanner, setShowBanner] = useState(true);

  // 🔔 Toast feedback
  const [toast, setToast] = useState('');
  const showToast = msg => {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  };

  // 🏷️ Dynamic categories + sort
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const [selectedCat, setSelectedCat] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');
  const filtered = products
    .filter(p => selectedCat === 'All' || p.category === selectedCat)
    .sort((a, b) => {
      if (sortOrder === 'price-asc') return a.price - b.price;
      if (sortOrder === 'price-desc') return b.price - a.price;
      return b.id - a.id;
    });

  // 🎠 Hero carousel
  const heroProducts = products.slice(0, 6);
  const [heroIndex, setHeroIndex] = useState(0);
  useEffect(() => {
    const iv = setInterval(
      () => setHeroIndex(i => (i + 1) % heroProducts.length),
      5000
    );
    return () => clearInterval(iv);
  }, [heroProducts.length]);

  // 💬 Testimonials carousel
  const testimonials = [
    { quote: 'Amazing prints – vibrant and high-quality!', author: 'Maria, PixelWitch' },
    { quote: 'Templates saved me hours of work. Highly recommend!', author: 'John, Freelancer' },
    { quote: 'Video assets are top-notch, increased my engagement.', author: 'Alex, Content Creator' },
  ];
  const [testIndex, setTestIndex] = useState(0);
  useEffect(() => {
    const iv = setInterval(
      () => setTestIndex(i => (i + 1) % testimonials.length),
      6000
    );
    return () => clearInterval(iv);
  }, [testimonials.length]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle,rgba(255,105,180,0.1),transparent),linear-gradient(to-b,#1A1A2E,#2A2A3E)] text-white px-6 py-24 md:px-16 scroll-smooth">
      {/* Background video */}
      <video
        autoPlay muted loop playsInline
        poster="/images/stars-fallback.jpg"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
      </video>

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((s, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500"
            style={{ top: s.top, left: s.left }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: s.delay }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Promo Banner */}
        <AnimatePresence>
          {showBanner && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-pink-600 text-white p-3 rounded-md mb-6 flex items-center justify-between"
            >
              <span>🎉 20% off your first purchase!</span>
              <button onClick={() => setShowBanner(false)} className="font-bold">
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Carousel */}
        <section className="relative mb-12 overflow-hidden rounded-xl">
          <img
            src={heroProducts[heroIndex].image}
            alt={heroProducts[heroIndex].name}
            className="w-full h-64 object-cover rounded-xl transition-transform duration-700 ease-in-out"
          />
          <div className="absolute inset-0 bg-black/30 rounded-xl flex flex-col justify-end p-6">
            <h2 className="text-2xl font-bold">
              {heroProducts[heroIndex].name}
            </h2>
            <p className="text-sm">{heroProducts[heroIndex].description}</p>
            <Link
              href="#products"
              className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 rounded-full text-white transition-transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
          <button
            onClick={() => setHeroIndex(i => (i - 1 + heroProducts.length) % heroProducts.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
            aria-label="Previous slide"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() => setHeroIndex(i => (i + 1) % heroProducts.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
            aria-label="Next slide"
          >
            <ArrowRight />
          </button>
        </section>

        {/* Hero Title */}
        <section className="text-center mb-12" id="products">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-2"
          >
            Welcome to Nyxtrael’s Shop
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto mb-4"
          >
            Craft your vision with unique art prints, website templates & cinematic video assets.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 text-pink-400"
            aria-label={`${cartItems.length} items in cart`}
          >
            <ShoppingCart className="w-6 h-6" />
            <span className="font-semibold">{cartItems.length}</span>
          </motion.div>
        </section>

        {/* Filters & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap gap-3 bg-white/5 backdrop-blur-md p-4 rounded-full">
            {categories.map((cat, idx) => {
              const active = selectedCat === cat;
              return (
                <button
                  key={`${cat}-${idx}`}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-transform ${
                    active
                      ? 'bg-pink-600 text-white scale-105 shadow-lg'
                      : 'text-neutral-300 hover:bg-white/20'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="bg-neutral-800 text-white px-4 py-2 rounded-full focus:outline-none"
          >
            <option value="newest">Newest</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
          </select>
        </div>

        {/* Products Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {filtered.map(prod => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{prod.name}</h3>
                <p className="text-sm text-neutral-300 flex-1 mb-4">{prod.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-pink-400 font-semibold">€{prod.price}</span>
                  <button
                    onClick={() => {
                      addToCart(prod);
                      showToast(`${prod.name} added to cart`);
                    }}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-2 rounded-full text-white font-medium shadow hover:scale-105 transition-all"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Testimonials Carousel */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            What Customers Say
          </h2>
          <div className="relative max-w-xl mx-auto">
            <AnimatePresence initial={false} mode="wait">
              <motion.blockquote
                key={testIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white/10 p-6 rounded-2xl backdrop-blur-md text-neutral-200"
              >
                “{testimonials[testIndex].quote}”
                <footer className="mt-4 text-right text-sm text-neutral-400">
                  — {testimonials[testIndex].author}
                </footer>
              </motion.blockquote>
            </AnimatePresence>
            <button
              onClick={() => setTestIndex(i => (i - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="text-white" />
            </button>
            <button
              onClick={() => setTestIndex(i => (i + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full"
              aria-label="Next testimonial"
            >
              <ArrowRight className="text-white" />
            </button>
          </div>
        </section>

        {/* Toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Newsletter & Footer */}
        <footer className="mt-16 text-center text-neutral-400 space-y-8">
          <div>
            <h3 className="mb-2">Join our Newsletter</h3>
            <form
              onSubmit={e => {
                e.preventDefault();
                showToast('Thanks for subscribing!');
              }}
              className="inline-flex"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="px-4 py-2 rounded-l-full bg-neutral-800 text-white focus:outline-none"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-r-full text-white hover:scale-105 transition-all">
                Subscribe
              </button>
            </form>
          </div>
         
        <div className="flex justify-center space-x-6 mb-4">
              <a
                href="mailto:nyxtrael@example.com"
                aria-label="Email Nyxtrael"
                className="p-2 rounded-full hover:scale-110 transition-transform"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white hover:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12.713l-11.5-7.5V19h23V5.213L12 12.713zM23 4H1v1.213l11 7.287 11-7.287V4z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/nyxtrael"
                target="_blank"
                rel="noreferrer"
                aria-label="Nyxtrael on Instagram"
                className="p-2 rounded-full hover:scale-110 transition-transform"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white hover:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zm9.25 2.25a1 1 0 110 2 1 1 0 010-2zm-5 1.5a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 1.5a3 3 0 100 6 3 3 0 000-6z"/>
                </svg>
              </a>
              <a
                href="https://x.com/nyxtrael"
                target="_blank"
                rel="noreferrer"
                aria-label="Nyxtrael on X"
                className="p-2 rounded-full hover:scale-110 transition-transform"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-white hover:text-pink-400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M18.9 2h3.6l-7.9 9.2 9.3 12.3h-7.2l-5.6-7.4-6.4 7.4H2l8.5-9.9L1.5 2h7.4l5.1 6.8L18.9 2zM16.8 19.5h2L7.2 4.5H5.1l11.7 15z"/>
                </svg>
              </a>
            </div>
          <p>© 2025 Nyxtrael</p>
        </footer>
      </div>
    </main>
  );
}
