import { motion } from 'framer-motion';
import { ChartBarIcon, ClockIcon, CogIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 bg-neutral-bg">
      <motion.h2
        className="text-3xl font-bold text-center mb-12 text-text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Key Features of DataSync
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          { Icon: ChartBarIcon, title: 'Real-Time Analytics', text:'Instant updates on your KPIs.' },
          { Icon: ClockIcon, title: 'Time Filtering', text:'Switch between daily, weekly, monthly views.' },
          { Icon: CogIcon, title: 'Customizable Widgets', text:'Compose your dashboard with drag & drop.' },
        ].map(({Icon, title, text}, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center p-6 bg-neutral-mid rounded-lg ring-1 ring-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
          >
            <Icon className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-text-base">{title}</h3>
            <p className="text-text-muted">{text}</p>
          </motion.div>
        ))}
      </div>
      {/* Dashboard Mockup */}
      <motion.div
        className="mt-12 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Image
          src="/images/datasync-dashboard-mockup.jpg"
          alt="DataSync Dashboard Mockup"
          width={1000}
          height={560}
          className="w-full h-auto rounded-lg shadow-lg ring-1 ring-white/10"
        />
      </motion.div>
    </section>
  );
}
