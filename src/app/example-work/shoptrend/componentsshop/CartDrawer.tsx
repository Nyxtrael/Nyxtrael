'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext';

export default function CartDrawer() {
  const { isOpen, close, items, setQty, remove, subtotal, clear } = useCart();

  return (
    <div className={`fixed inset-0 z-40 ${isOpen ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={close} />
      <aside className={`absolute right-0 top-0 h-full w-[360px] max-w-[90%] bg-neutral-bg border-l border-white/10 shadow-2xl transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h3 className="text-lg font-bold text-text-base">Your Cart</h3>
          <button onClick={close} className="text-text-muted hover:text-accent">Close</button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-180px)]">
          {items.length === 0 && <p className="text-text-muted">Your cart is empty.</p>}
          {items.map(it => (
            <div key={it.id} className="flex items-center gap-3 ring-1 ring-white/10 rounded p-2">
              <Image src={it.image} alt={it.title} width={64} height={64} className="rounded object-cover" />
              <div className="flex-1 text-text-base">
                <p className="font-semibold leading-tight">{it.title}</p>
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

        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between text-text-base">
            <span>Subtotal</span>
            <strong>€{subtotal.toFixed(2)}</strong>
          </div>
          <div className="mt-3 flex gap-2">
            <Link href="/example-work/shoptrend/cart" onClick={close} className="flex-1 inline-flex justify-center items-center px-3 py-2 ring-1 ring-white/10 rounded hover:ring-white/20">View Cart</Link>
            <Link href="/example-work/shoptrend/checkout" onClick={close} className="flex-1 inline-flex justify-center items-center px-3 py-2 bg-gradient-cta text-neutral-900 rounded font-semibold">Checkout</Link>
          </div>
          <button onClick={clear} className="mt-2 w-full text-sm text-text-muted hover:text-accent">Clear cart</button>
        </div>
      </aside>
    </div>
  );
}
