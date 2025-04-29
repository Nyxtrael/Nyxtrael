'use client';

import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { X, Trash2 } from 'lucide-react';
import Image from 'next/image';

export default function CartModal({ open, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const [closing, setClosing] = useState(false);

  if (!open && !closing) return null;

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300); // czas trwania animacji slide-out
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-end z-50" role="dialog" aria-modal="true">
      <div className={`w-full max-w-md bg-[#1e162f] h-full p-6 relative overflow-y-auto ${closing ? 'animate-slide-out-right' : 'animate-slide-in-right'} fade-in`}>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-pink-400 transition"
          aria-label="Close cart"
        >
          <X size={28} />
        </button>

        {/* Cart Title */}
        <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-neutral-400">Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-6">
              {cartItems.map(item => (
                <li key={item.id} className="flex items-center gap-4 border-b border-white/10 pb-4 fade-in-bottom">
                  <div className="relative w-20 h-20 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold leading-snug">{item.title}</h3>
                    <p className="text-sm text-neutral-400">{item.price}€</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                        disabled={item.quantity === 1}
                        className="px-2 bg-neutral-700 hover:bg-pink-500 rounded transition transform hover:scale-110"
                      >
                        -
                      </button>
                      <span className="text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                        className="px-2 bg-neutral-700 hover:bg-pink-500 rounded transition transform hover:scale-110"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center gap-1 text-pink-400 hover:text-pink-500 ml-3 text-sm transition"
                      >
                        <Trash2 size={16} /> Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total */}
            <div className="mt-8">
              <p className="text-lg font-bold">Total: {total.toFixed(2)}€</p>
              <button
                onClick={() => {
                  alert('🛒 Demo only! No real checkout.');
                  clearCart();
                  handleClose();
                }}
                className="mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-semibold rounded-lg transition hover:scale-105"
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
