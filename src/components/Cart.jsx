'use client';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-[#1A1A2E] shadow-lg p-6 overflow-y-auto z-50">
      <h2 className="text-2xl font-bold mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-neutral-400">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-neutral-400">€{item.price} × {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => decreaseQuantity(item.id)} className="px-2 text-lg">-</button>
                  <button onClick={() => increaseQuantity(item.id)} className="px-2 text-lg">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 ml-2">✖</button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="font-semibold">Total: €{total}</p>
            <button
              onClick={clearCart}
              className="mt-4 inline-block bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 px-6 py-2 rounded-full"
            >
              Checkout (Demo)
            </button>
          </div>
        </>
      )}
    </div>
  );
}
