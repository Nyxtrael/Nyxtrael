import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustedBy() {
  return (
    <section className="py-16 px-4 bg-neutral-bg text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Trusted by teams
      </motion.h2>
      <div className="flex justify-center gap-8 mb-12 flex-wrap">
        {['/images/techtrend-logo.jpg','/images/innovatex-logo.jpg'].map((src,i)=>(
          <motion.div key={src} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.1 }}>
            <Image src={src} alt="Logo" width={150} height={50} className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all" />
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        {['/images/gdpr-compliant.jpg','/images/secure-data.jpg'].map((src,i)=>(
          <motion.div key={src} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 + i*0.1 }}>
            <Image src={src} alt="Badge" width={100} height={100} className="h-16 object-contain" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
