import type { ReactNode } from 'react';
import { Suspense } from 'react';

// UWAGA: CartContext w folderze componentsshop
import { CartProvider } from './componentsshop/CartContext';
import NavBarShop from './componentsshop/NavBarShop';
import CartDrawer from './componentsshop/CartDrawer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {/* Nav z useSearchParams musi być w Suspense */}
      <Suspense fallback={<div className="h-16" />}>
        <NavBarShop />
      </Suspense>

      <CartDrawer />
      <main className="min-h-[60vh]">{children}</main>

      <footer className="mt-16 border-t border-white/10 py-8 text-center text-text-muted">
        © {new Date().getFullYear()} ShopTrend — Demo store.
      </footer>
    </CartProvider>
  );
}
