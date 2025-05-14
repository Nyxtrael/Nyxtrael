'use client';

import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      // Avoid duplicates
      if (prev.some((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}