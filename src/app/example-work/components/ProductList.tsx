'use client';

import { useState } from 'react';
import Image from 'next/image';

const mockProducts = [
  { id: 1, name: 'Wireless Headphones', price: 11.95, category: 'Electronics', image: '/images/headphones.jpg' },
  { id: 2, name: 'Cozy Blanket', price: 6.99, category: 'Home & Garden', image: '/images/blanket.jpg' },
  { id: 3, name: 'Leather Jacket', price: 24.95, category: 'Fashion', image: '/images/jacket.jpg' },
  { id: 4, name: 'Smart Watch', price: 29.99, category: 'Accessories', image: '/images/smart-watch.jpg' }, // Moved to Accessories
  { id: 5, name: 'Running Shoes', price: 19.95, category: 'Fashion', image: '/images/shoes.jpg' },
  { id: 6, name: 'Decorative Plant', price: 4.99, category: 'Home & Garden', image: '/images/plant.jpg' },
  { id: 7, name: 'USB-C Charger', price: 9.99, category: 'Electronics', image: '/images/usb-charger.jpg' }, // New Electronics product
  { id: 8, name: 'Sunglasses', price: 14.95, category: 'Accessories', image: '/images/sunglasses.jpg' }, // New Accessories product
];
const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden', 'Accessories'];

export default function ProductList() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by category and search query
  const filtered = mockProducts.filter(p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#1f2937] dark:text-[#e5e7eb]">
        Products
      </h2>
      <div className="flex flex-col sm:flex-row justify-center mb-6 items-center gap-4 px-4 max-w-6xl mx-auto">
        {/* Search Bar */}
        <div className="w-full sm:w-auto flex items-center gap-2">
          <label htmlFor="search" className="text-[#1f2937] dark:text-[#e5e7eb] font-medium">
            Search Products:
          </label>
          <input
            id="search"
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search by name..."
            className="px-4 py-2 border rounded text-[#1f2937] dark:text-[#e5e7eb] bg-white dark:bg-gray-700 border-[#ff6b6b] focus:ring-2 focus:ring-[#ff8e53] w-full sm:w-64"
          />
        </div>
        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <label htmlFor="category-filter" className="text-[#1f2937] dark:text-[#e5e7eb] font-medium">
            Filter by Category:
          </label>
          <select
            id="category-filter"
            value={filter}
            onChange={e => setFilter(e.target.value)}
            className="px-4 py-2 border rounded text-[#1f2937] dark:text-[#e5e7eb] bg-white dark:bg-gray-700 border-[#ff6b6b] focus:ring-2 focus:ring-[#ff8e53]"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        {filtered.length > 0 ? (
          filtered.map(prod => (
            <div
              key={prod.id}
              className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="overflow-hidden rounded mb-4">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  width={160}
                  height={160}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110 filter brightness-90"
                />
              </div>
              <h3 className="font-semibold text-[#1f2937] dark:text-[#e5e7eb]">{prod.name}</h3>
              <p className="mt-2 text-gray-600 dark:text-[#bfdbfe]">{prod.price} EUR</p>
              <button className="mt-3 px-3 py-1 bg-[#ff6b6b] text-white rounded hover:bg-[#ff8e53] transition">
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-[#1f2937] dark:text-[#e5e7eb]">
            No products found matching your search.
          </p>
        )}
      </div>
    </section>
  );
}