'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { products } from '../../products';
import { useCart } from '../../componentsshop/CartContext';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find(p => p.slug === slug);
  const { add } = useCart();

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-text-base">
        Product not found. <Link href="/example-work/shoptrend" className="underline">Back to shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-neutral-mid rounded-xl ring-1 ring-white/10 overflow-hidden">
        <Image src={product.image} alt={product.title} width={1000} height={800} className="w-full h-auto object-cover" />
      </div>
      <div>
        <p className="text-sm text-text-muted">
          <Link href="/example-work/shoptrend" className="underline">← Back to shop</Link>
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-text-base mt-2">{product.title}</h1>
        <p className="text-text-muted mt-2">{product.blurb}</p>
        <div className="mt-4 text-2xl font-bold text-text-base">€{product.price.toFixed(2)}</div>
        <div className="mt-2 text-sm text-text-muted">Category: {product.category} • ★ {product.rating}</div>
        <div className="mt-6 flex gap-3">
          <button onClick={()=>add({ id: product.id, title: product.title, price: product.price, image: product.image }, 1)} className="px-6 py-3 bg-gradient-cta text-neutral-900 font-semibold rounded-md hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)]">Add to cart</button>
          <Link href="/example-work/shoptrend/cart" className="px-6 py-3 ring-1 ring-white/10 rounded-md hover:ring-white/20">View cart</Link>
        </div>
      </div>
    </div>
  );
}
