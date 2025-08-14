'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../componentsshop/CartContext';

export default function CartPage() {
  const { items, setQty, remove, subtotal, clear } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-text-base">Your Cart</h1>
      <p className="text-text-muted">Review items before checkout.</p>

      {items.length === 0 ? (
        <div className="mt-6">
          <p className="text-text-muted">Your cart is empty.</p>
          <Link href="/example-work/shop" className="underline">← Back to shop</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2 space-y-4">
            {items.map(it => (
              <div key={it.id} className="flex items-center gap-3 ring-1 ring-white/10 rounded p-3">
                <Image src={it.image} alt={it.title} width={80} height={80} className="rounded object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-text-base">{it.title}</p>
                  <p className="text-text-muted text-sm">€{it.price.toFixed(2)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <button onClick={()=>setQty(it.id, Math.max(1, it.qty-1))} className="px-2 ring-1 ring-white/10 rounded">-</button>
                    <input value={it.qty} onChange={(e)=>setQty(it.id, parseInt(e.target.value || '1',10))} className="w-12 text-center ring-1 ring-white/10 rounded bg-neutral-mid" />
                    <button onClick={()=>setQty(it.id, Math.min(99, it.qty+1))} className="px-2 ring-1 ring-white/10 rounded">+</button>
                    <button onClick={()=>remove(it.id)} className="ml-auto text-sm text-accent hover:opacity-90">Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <aside className="ring-1 ring-white/10 rounded p-4 h-fit">
            <h2 className="text-xl font-bold text-text-base">Summary</h2>
            <div className="mt-2 flex items-center justify-between text-text-base">
              <span>Subtotal</span><span>€{subtotal.toFixed(2)}</span>
            </div>
            <p className="text-text-muted text-sm">Taxes and shipping calculated at checkout.</p>
            <Link href="/example-work/shop/checkout" className="mt-4 block text-center px-4 py-3 bg-gradient-cta text-neutral-900 font-semibold rounded">Proceed to Checkout</Link>
            <button onClick={clear} className="mt-2 w-full text-sm text-text-muted hover:text-accent">Clear cart</button>
          </aside>
        </div>
      )}
    </div>
  );
}
