'use client';

import { useState } from 'react';
import Image from 'next/image';

const mockProducts = [
  { id: 1, name: 'Wireless Headphones', price: 11.50, category: 'Electronics', image: 'https://via.placeholder.com/160x160?text=Headphones' },
  { id: 2, name: 'Cozy Blanket', price: 6.90, category: 'Home & Garden', image: 'https://via.placeholder.com/160x160?text=Blanket' },
  { id: 3, name: 'Leather Jacket', price: 23.00, category: 'Fashion', image: 'https://via.placeholder.com/160x160?text=Jacket' },
  { id: 4, name: 'Smart Watch', price: 29.90, category: 'Electronics', image: 'https://via.placeholder.com/160x160?text=Smart+Watch' },
  { id: 5, name: 'Running Shoes', price: 18.40, category: 'Fashion', image: 'https://via.placeholder.com/160x160?text=Shoes' },
  { id: 6, name: 'Decorative Plant', price: 4.60, category: 'Home & Garden', image: 'https://via.placeholder.com/160x160?text=Plant' },
];
const categories = ['All', 'Electronics', 'Fashion', 'Home & Garden'];

export default function ProductList() {
  const [filter, setFilter] = useState('All');
  const filtered = mockProducts.filter(p => filter === 'All' || p.category === filter);

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-6 text-[#1f2937] dark:text-[#e5e7eb]">
        Products
      </h2>
      <div className="flex justify-center mb-6 items-center gap-2">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        {filtered.map(prod => (
          <div
            key={prod.id}
            className="p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            <Image
              src={prod.image}
              alt={prod.name}
              width={160}
              height={160}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="font-semibold text-[#1f2937] dark:text-[#e5e7eb]">{prod.name}</h3>
            <p className="mt-2 text-gray-600 dark:text-[#bfdbfe]">{prod.price} EUR</p>
            <button className="mt-3 px-3 py-1 bg-[#ff6b6b] text-white rounded hover:bg-[#ff8e53] transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}