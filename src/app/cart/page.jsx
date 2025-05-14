'use client';

import { useCart } from '../../context/CartContext';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import Link from 'next/link';

export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useCart();

  const increment = item => addToCart({ id: item.id, quantity: 1, price: item.price });
  const decrement = item => removeFromCart(item.id);

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <ShoppingCart className="mx-auto mb-4 w-16 h-16 text-gray-400" />
        <h1 className="text-2xl font-semibold mb-2">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-6">Looks like you haven’t added anything yet.</p>
        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cart.length} item{cart.length>1?'s':''})</h1>
      <div className="space-y-6">
        {cart.map(item => (
          <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
            <div className="flex-1">
              <Link href={`/product/${item.id}`} className="text-lg font-semibold hover:underline">
                {item.name}
              </Link>
              <p className="text-gray-500">${item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => decrement(item)} className="p-1 hover:bg-gray-200 rounded">
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-2">{item.quantity}</span>
              <button onClick={() => increment(item)} className="p-1 hover:bg-gray-200 rounded">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <div className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
            <button onClick={() => removeFromCart(item.id)} className="p-2 hover:bg-red-100 rounded">
              <Trash2 className="w-5 h-5 text-red-500" />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}
