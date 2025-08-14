'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from './CartContext';
import { Product } from '../products';

export default function ProductGridItem({ p }: { p: Product }) {
  const { add } = useCart();

  return (
    <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 hover:ring-white/20 transition shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.35)]">
      <Link href={`/example-work/shoptrend/products/${p.slug}`} className="block relative">
        <Image src={p.image} alt={p.title} width={600} height={400} className="w-full h-56 object-cover rounded-t-xl" />
      </Link>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link href={`/example-work/shoptrend/products/${p.slug}`} className="font-semibold text-text-base hover:text-accent">{p.title}</Link>
            <p className="text-text-muted text-sm">{p.blurb}</p>
          </div>
          <div className="text-right">
            <div className="text-text-base font-bold">€{p.price.toFixed(2)}</div>
            <div className="text-xs text-text-muted">★ {p.rating}</div>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button onClick={()=>add({ id: p.id, title: p.title, price: p.price, image: p.image }, 1)} className="flex-1 bg-gradient-cta text-neutral-900 py-2 rounded-md font-semibold hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)]">Add to cart</button>
          <Link href={`/example-work/shoptrend/products/${p.slug}`} className="px-3 py-2 ring-1 ring-white/10 rounded hover:ring-white/20">View</Link>
        </div>
      </div>
    </div>
  );
}
