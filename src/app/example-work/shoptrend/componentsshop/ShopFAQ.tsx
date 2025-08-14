'use client';
import { useState } from 'react';

const QA = [
  { q: 'How long does shipping take?', a: 'Typically 1–3 business days. Free shipping on orders over €50.' },
  { q: 'What is the return policy?', a: '30-day free returns — use the prepaid label available in your order page.' },
  { q: 'Are the products genuine?', a: 'Yes. We work only with official brands and distributors.' },
];

export default function ShopFAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text-base">FAQ</h2>
        <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
        <div className="mt-6 space-y-3">
          {QA.map((item, i) => (
            <details key={i} open={open === i} onClick={(e)=>{ e.preventDefault(); setOpen(open===i?null:i); }} className="group bg-neutral-mid ring-1 ring-white/10 rounded-lg p-4">
              <summary className="cursor-pointer text-text-base font-semibold flex items-center justify-between">
                {item.q}
                <span className="ml-3 text-accent group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-2 text-text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
