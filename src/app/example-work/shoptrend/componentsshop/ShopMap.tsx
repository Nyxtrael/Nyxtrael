'use client';
import { motion } from 'framer-motion';

export default function ShopMap() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-text-base">Find Us</h2>
        <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
        <p className="text-text-muted mt-2">Flagship store & pickup point — Warsaw City Center</p>
        <motion.div
          className="mt-6 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="ShopTrend Map (Warsaw Center)"
            width="100%"
            height="360"
            loading="lazy"
            style={{ border: 0 }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=21.000%2C52.225%2C21.025%2C52.242&amp;layer=mapnik&amp;marker=52.236%2C21.012"
          />
          <div className="bg-neutral-mid p-3 text-sm text-text-muted">
            <a
              className="underline hover:opacity-90"
              href="https://www.openstreetmap.org/?mlat=52.236&amp;mlon=21.012#map=15/52.236/21.012"
              target="_blank"
              rel="noreferrer"
            >
              View on OpenStreetMap
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
