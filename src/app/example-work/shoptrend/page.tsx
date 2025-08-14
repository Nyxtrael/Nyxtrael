import HeroShopTrend from './componentsshop/HeroShopTrend';
import ShopMap from './componentsshop/ShopMap';
import ShopReviews from './componentsshop/ShopReviews';
import ShopFAQ from './componentsshop/ShopFAQ';
import ProductListClient from './componentsshop/ProductListClient';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <>
      {/* HERO */}
      <HeroShopTrend />

      {/* PRODUCTS (useSearchParams -> client + Suspense) */}
      <section id="products">
        <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-12 text-text-muted">Loading products…</div>}>
          <ProductListClient />
        </Suspense>
      </section>

      {/* VALUE PROPS */}
      <section className="py-16 subtle-gradient">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { t: 'Free Shipping', s: 'On orders over €50' },
            { t: '30-Day Returns', s: 'Shop with confidence' },
            { t: 'Secure Checkout', s: '256-bit encryption' },
          ].map(v => (
            <div key={v.t} className="p-4 rounded-lg bg-neutral-mid ring-1 ring-white/10">
              <p className="text-lg font-semibold text-text-base">{v.t}</p>
              <p className="text-sm text-text-muted">{v.s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS (EN) */}
      <ShopReviews />

      {/* MAP */}
      <ShopMap />

      {/* FAQ (EN) */}
      <ShopFAQ />
    </>
  );
}
