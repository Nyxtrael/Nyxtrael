'use client';
import ProductList from './ProductList';

export default function ProductListClient() {
  // Cienki wrapper-klient, żeby bezpiecznie użyć useSearchParams w Suspense
  return <ProductList />;
}
