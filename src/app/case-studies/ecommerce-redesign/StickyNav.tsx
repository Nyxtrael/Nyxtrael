import Link from "next/link";

export default function StickyNav() {
  return (
    <nav
      className="fixed top-0 w-full bg-shoptrend-bg/90 backdrop-blur-sm z-50 shadow-md border-b border-shoptrend-brown"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container flex items-center justify-between py-4">
        <h3 className="text-2xl font-bold font-playfair text-shoptrend-text">ShopTrend</h3>
        <div className="space-x-6">
          <Link href="#overview" aria-label="Scroll to Overview" className="hover:text-shoptrend-gold transition-colors font-lora text-lg">
            Overview
          </Link>
          <Link href="#products" aria-label="Scroll to Products" className="hover:text-shoptrend-gold transition-colors font-lora text-lg">
            Products
          </Link>
          <Link href="#promo" aria-label="Scroll to Promo" className="hover:text-shoptrend-gold transition-colors font-lora text-lg">
            Promo
          </Link>
          <Link href="#categories" aria-label="Scroll to Categories" className="hover:text-shoptrend-gold transition-colors font-lora text-lg">
            Categories
          </Link>
          <Link href="#featured" aria-label="Scroll to Featured Product" className="hover:text-shoptrend-gold transition-colors font-lora text-lg">
            Featured
          </Link>
          <Link href="#stories" aria-label="Scroll to Customer Stories" className="hover:text-shoptrend-gold transition-colors font-lora text-lg">
            Stories
          </Link>
        </div>
      </div>
    </nav>
  );
}