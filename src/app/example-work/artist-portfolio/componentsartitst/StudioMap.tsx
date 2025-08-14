'use client';
import { motion } from 'framer-motion';

export default function StudioMap() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-text-base">Studio Location</h2>
        <span className="block w-24 h-0.5 bg-accent/60 mx-auto mt-3" />
        <p className="text-text-muted mt-2">Warsaw, Poland — meeting point near the Old Town</p>
        <motion.div
          className="mt-6 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <iframe
            title="Studio Map (Warsaw)"
            width="100%"
            height="360"
            loading="lazy"
            style={{ border: 0 }}
            src="https://www.openstreetmap.org/export/embed.html?bbox=21.005%2C52.226%2C21.026%2C52.235&amp;layer=mapnik&amp;marker=52.231%2C21.015"
          />
          <div className="bg-neutral-mid p-3 text-sm text-text-muted">
            <a className="underline hover:opacity-90" href="https://www.openstreetmap.org/?mlat=52.231&amp;mlon=21.015#map=16/52.231/21.015" target="_blank" rel="noreferrer">
              View on OpenStreetMap
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
