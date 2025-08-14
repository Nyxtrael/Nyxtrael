'use client';
import { useMemo } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import ProductGridItem from './ProductGridItem';
import { products } from '../products';

export default function ProductList() {
  const sp = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const q = sp.get('q') ?? '';
  const cat = (sp.get('cat') ?? 'All') as string;
  const sort = (sp.get('sort') ?? 'popular') as 'popular' | 'price_asc' | 'price_desc';

  const cats = ['All', 'Fashion', 'Electronics', 'Home', 'Accessories'] as const;

  const filtered = useMemo(() => {
    let arr = products.filter(p =>
      (cat === 'All' || p.category === cat) &&
      (q.trim() ? (p.title.toLowerCase().includes(q.toLowerCase()) || p.blurb.toLowerCase().includes(q.toLowerCase())) : true)
    );
    if (sort === 'price_asc') arr = [...arr].sort((a,b)=> a.price - b.price);
    if (sort === 'price_desc') arr = [...arr].sort((a,b)=> b.price - a.price);
    if (sort === 'popular') arr = [...arr].sort((a,b)=> b.rating - a.rating);
    return arr;
  }, [q, cat, sort]);

  const updateParam = (key: string, value?: string) => {
    const p = new URLSearchParams(sp);
    if (value && value.length) p.set(key, value); else p.delete(key);
    router.push(pathname + (p.toString() ? `?${p.toString()}` : ''));
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2 flex-1 min-w-[240px]">
            <input
              value={q}
              onChange={(e)=>updateParam('q', e.target.value)}
              placeholder="Search products..."
              className="px-3 py-2 rounded-md bg-neutral-mid text-text-base placeholder:text-text-muted ring-1 ring-white/10 focus:ring-2 focus:ring-accent w-full"
            />
          </div>
          <div className="flex items-center gap-2">
            <select value={cat} onChange={(e)=>updateParam('cat', e.target.value)} className="px-3 py-2 rounded-md bg-neutral-mid text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent">
              {cats.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={sort} onChange={(e)=>updateParam('sort', e.target.value)} className="px-3 py-2 rounded-md bg-neutral-mid text-text-base ring-1 ring-white/10 focus:ring-2 focus:ring-accent">
              <option value="popular">Most Popular</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => <ProductGridItem key={p.id} p={p} />)}
          {filtered.length === 0 && <p className="text-text-muted">No products found.</p>}
        </div>
      </div>
    </section>
  );
}
