import { motion } from 'framer-motion';

const INTEGRATIONS = [
  { name:'PostgreSQL', icon:'/images/integrations/postgres.png' },
  { name:'MySQL', icon:'/images/integrations/mysql.png' },
  { name:'Stripe', icon:'/images/integrations/stripe.png' },
  { name:'Google Analytics', icon:'/images/integrations/ga.png' },
  { name:'Shopify', icon:'/images/integrations/shopify.png' },
  { name:'CSV/Parquet', icon:'/images/integrations/csv.png' },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-16 px-4 bg-neutral-bg">
      <h2 className="text-3xl font-bold text-center text-text-base">Integrations</h2>
      <p className="text-center text-text-muted mt-2">Connect databases, SaaS tools and files in minutes.</p>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {INTEGRATIONS.map((it, i) => (
          <motion.div key={it.name}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y:0 }} viewport={{ once:true }}
            transition={{ duration: 0.4, delay: i*0.05 }}
            className="h-20 rounded-lg bg-neutral-mid ring-1 ring-white/10 flex items-center justify-center text-sm text-text-base"
            title={it.name}
          >
            <span className="opacity-90">{it.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
