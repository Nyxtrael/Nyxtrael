'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  qty: number;
};

type CartContextType = {
  items: CartItem[];
  count: number;
  subtotal: number;
  add: (item: Omit<CartItem, 'qty'>, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // hydrate from localStorage (once)
  useEffect(() => {
    try {
      const raw = localStorage.getItem('shoptrend_cart');
      if (raw) setItems(JSON.parse(raw));
    } catch {}
  }, []);

  // persist
  useEffect(() => {
    try {
      localStorage.setItem('shoptrend_cart', JSON.stringify(items));
    } catch {}
  }, [items]);

  const add: CartContextType['add'] = (item, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === item.id);
      if (i >= 0) {
        const next = [...prev];
        next[i] = { ...next[i], qty: Math.min(99, next[i].qty + qty) };
        return next;
      }
      return [...prev, { ...item, qty: Math.max(1, Math.min(99, qty)) }];
    });
    setIsOpen(true);
  };

  const remove = (id: string) => setItems(prev => prev.filter(p => p.id !== id));
  const setQty = (id: string, qty: number) =>
    setItems(prev => prev.map(p => (p.id === id ? { ...p, qty: Math.max(1, Math.min(99, qty)) } : p)));
  const clear = () => setItems([]);

  const count = useMemo(() => items.reduce((a, b) => a + b.qty, 0), [items]);
  const subtotal = useMemo(() => items.reduce((a, b) => a + b.qty * b.price, 0), [items]);

  const open  = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(s => !s);

  const value: CartContextType = { items, count, subtotal, add, remove, setQty, clear, isOpen, open, close, toggle };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
