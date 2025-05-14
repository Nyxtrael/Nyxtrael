'use client';

import { useWishlist } from '../../context/WishlistContext';
import { Heart, Trash2 } from 'lucide-react';
import Link from 'next/link';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <Heart className="mx-auto mb-4 w-16 h-16 text-gray-400" />
        <h1 className="text-2xl font-semibold mb-2">Your Wishlist is Empty</h1>
        <p className="text-gray-500 mb-6">Save items here to purchase later.</p>
        <Link href="/" className="inline-block bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist ({wishlist.length} item{wishlist.length>1?'s':''})</h1>
      <div className="space-y-6">
        {wishlist.map(item => (
          <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
            <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <Link href={`/product/${item.id}`} className="text-lg font-semibold hover:underline">
                {item.name}
              </Link>
              <p className="text-gray-500">${item.price.toFixed(2)}</p>
            </div>
            <button onClick={() => removeFromWishlist(item.id)} className="p-2 hover:bg-red-100 rounded">
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link href="/cart" className="inline-block bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700">
          View Cart
        </Link>
      </div>
    </div>
  );
}
