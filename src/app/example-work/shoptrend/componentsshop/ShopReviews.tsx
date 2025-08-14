'use client';
import { motion } from 'framer-motion';

const REVIEWS = [
  { name: 'Maggie', text: 'Fast delivery and great quality. The jacket looks amazing!', rating: 5 },
  { name: 'Alex', text: 'Headphones sound better than I expected — highly recommend.', rating: 5 },
  { name: 'Olivia', text: 'Easy contact and returns. Five stars.', rating: 4 },
];

export default function ShopReviews() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-text-base">Customers love ShopTrend</h2>
        <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="p-5 bg-neutral-mid rounded-xl ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            >
              <div className="text-accent">{'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}</div>
              <p className="mt-3 text-text-base">{r.text}</p>
              <p className="mt-2 text-sm text-text-muted">— {r.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
