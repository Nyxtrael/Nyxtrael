'use client';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ShoppingCart, Search } from 'lucide-react';
import { useState } from 'react';
import { useCart } from './CartContext';

export default function NavBarShop() {
  const { count, toggle } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const sp = useSearchParams();
  const [q, setQ] = useState<string>(sp.get('q') ?? '');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = new URLSearchParams(sp);
    if (q) p.set('q', q); else p.delete('q');
    router.push(pathname + (p.toString() ? `?${p.toString()}` : ''));
  };

  const active = (cat: string) => (sp.get('cat') === cat ? 'text-accent' : 'text-text-muted');

  return (
    <header className="sticky top-16 z-30 bg-neutral-bg/90 backdrop-blur border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
        <div className="flex items-center gap-6">
          <Link href="/example-work/shoptrend" className="text-xl font-bold text-text-base hover:text-accent transition-colors">
            ShopTrend
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link href="/example-work/shoptrend?cat=Fashion" className={`hover:text-accent ${active('Fashion')}`}>Fashion</Link>
            <Link href="/example-work/shoptrend?cat=Electronics" className={`hover:text-accent ${active('Electronics')}`}>Electronics</Link>
            <Link href="/example-work/shoptrend?cat=Home" className={`hover:text-accent ${active('Home')}`}>Home</Link>
            <Link href="/example-work/shoptrend?cat=Accessories" className={`hover:text-accent ${active('Accessories')}`}>Accessories</Link>
          </div>
        </div>

        <form onSubmit={onSubmit} className="hidden md:flex items-center gap-2">
          <div className="relative">
            <input
              value={q}
              onChange={(e)=>setQ(e.target.value)}
              placeholder="Search products"
              className="px-3 py-2 rounded-md bg-neutral-mid text-text-base placeholder:text-text-muted ring-1 ring-white/10 focus:ring-2 focus:ring-accent w-64"
            />
            <button aria-label="Search" className="absolute right-1 top-1.5 p-1 rounded hover:bg-neutral-bg/60">
              <Search className="h-4 w-4 text-text-muted" />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-3">
          <Link href="/portfolio" className="text-sm underline text-text-muted hover:text-accent hidden md:inline">← Back to Portfolio</Link>
          <button onClick={toggle} className="relative inline-flex items-center gap-2 bg-gradient-cta text-neutral-900 px-3 py-2 rounded-md font-semibold hover:shadow-[0_12px_28px_rgba(56,189,248,0.35)] focus:outline-none focus:ring-2 focus:ring-accent">
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && <span className="ml-1 inline-flex items-center justify-center min-w-5 h-5 text-xs px-1 rounded bg-neutral-bg text-text-base ring-1 ring-white/10">{count}</span>}
          </button>
        </div>
      </nav>
    </header>
  );
}
