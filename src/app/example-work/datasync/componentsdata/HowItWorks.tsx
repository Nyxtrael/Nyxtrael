import { motion } from 'framer-motion';
import { CloudArrowUpIcon, ChartBarIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 px-4 bg-neutral-bg text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        How DataSync Works
      </motion.h2>
      <motion.p
        className="max-w-3xl mx-auto text-text-muted mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Transform your data into actionable insights in three simple steps.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { Icon: CloudArrowUpIcon, title: '1. Connect your data', text:'Integrate databases, SaaS and files.' },
          { Icon: ChartBarIcon, title: '2. See live insights', text:'Dashboards update in seconds.' },
          { Icon: LightBulbIcon, title: '3. Decide & act', text:'Share alerts and embed charts.' },
        ].map(({Icon, title, text}, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 bg-neutral-mid rounded-lg ring-1 ring-white/10 shadow-md"
          >
            <div className="flex justify-center mb-4"><Icon className="h-12 w-12 text-accent" /></div>
            <h3 className="text-xl font-semibold mb-2 text-text-base">{title}</h3>
            <p className="text-text-muted">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
