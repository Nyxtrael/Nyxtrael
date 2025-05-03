'use client';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Image from 'next/image';

export default function CartModal({ open, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);

  if (!open) return null;

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#2A2A3E] p-6 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-pink-400 transition text-2xl"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-neutral-400">Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 mb-4 border-b border-[#3A3A4E] pb-4">
                <Image
                  src={item.image}
                  alt={item.name || 'Cart item image'}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="text-white font-semibold">{item.name}</h3>
                  <p className="text-neutral-400">€{item.price} x {item.quantity}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-pink-400 hover:text-pink-300 px-2"
                    >
                      −
                    </button>
                    <span className="text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-pink-400 hover:text-pink-300 px-2"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
            <div className="text-right mt-6">
              <p className="text-white font-semibold mb-4">Total: €{total.toFixed(2)}</p>
              <button
                onClick={clearCart}
                className="text-red-400 hover:text-red-300 mb-4"
              >
                Clear Cart
              </button>
              <button
                className="w-full bg-pink-600 font-semibold px-4 py-2 rounded-full shadow hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 hover:scale-105 transition-all duration-300"
                onClick={() => alert('Proceeding to checkout...')}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
