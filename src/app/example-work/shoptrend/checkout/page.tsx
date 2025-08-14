'use client';
import Link from 'next/link';
import { useCart } from '../componentsshop/CartContext';

export default function CheckoutPage() {
  const { subtotal } = useCart();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-text-base">Checkout</h1>
      <p className="text-text-muted">Demo checkout — no payment connected.</p>

      <form className="mt-6 space-y-3">
        <input className="w-full px-3 py-2 rounded bg-neutral-mid text-text-base ring-1 ring-white/10" placeholder="Full name" />
        <input className="w-full px-3 py-2 rounded bg-neutral-mid text-text-base ring-1 ring-white/10" placeholder="Email" />
        <input className="w-full px-3 py-2 rounded bg-neutral-mid text-text-base ring-1 ring-white/10" placeholder="Address" />
        <div className="flex gap-3">
          <input className="flex-1 px-3 py-2 rounded bg-neutral-mid text-text-base ring-1 ring-white/10" placeholder="City" />
          <input className="w-32 px-3 py-2 rounded bg-neutral-mid text-text-base ring-1 ring-white/10" placeholder="ZIP" />
        </div>

        <div className="mt-4 flex items-center justify-between text-text-base">
          <span>Subtotal</span><strong>€{subtotal.toFixed(2)}</strong>
        </div>

        <button type="button" className="mt-4 px-6 py-3 bg-gradient-cta text-neutral-900 font-semibold rounded">
          Place order (demo)
        </button>
      </form>

      <p className="mt-4 text-sm">
        <Link href="/example-work/shoptrend" className="underline">← Back to shop</Link>
      </p>
    </div>
  );
}
