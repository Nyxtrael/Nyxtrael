'use client';

import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'; 
import ProductsGrid from '../../components/shop/ProductsGrid';
import ShopHero from '../../components/shop/ShopHero'; 
import products from '../../data/products.json';
import CartModal from '../../components/shop/CartModal'; 

export default function ShopPage() {
  const { cartItems } = useContext(CartContext);

  return (
    
<main className="relative min-h-screen px-6 py-24 md:px-16 text-white bg-gradient-to-b from-[#1A1A2E] to-[#2A2A3E] overflow-hidden scroll-smooth">
  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
    poster="/images/stars-fallback.jpg"
    aria-hidden="true"
  >
    <source src="/videos/6917331_Motion Graphics_Motion Graphic_1280x720.mp4" type="video/mp4" />
  </video>
      <ShopHero />
      <ProductsGrid products={products} />
      <CartModal items={cartItems} />
    </main>
  );
}
