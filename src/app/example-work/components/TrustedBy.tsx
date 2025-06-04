import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TrustedBy() {
  return (
    <section className="py-16 px-4 bg-[#1f2937] text-center">
      <motion.h2
        className="text-3xl font-bold mb-8 text-[#e5e7eb]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Trusted by Leading Companies
      </motion.h2>
      <div className="flex justify-center gap-8 mb-12 flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/techtrend-logo.jpg"
            alt="TechTrend Logo"
            width={150}
            height={50}
            className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/images/innovatex-logo.jpg"
            alt="InnovateX Logo"
            width={150}
            height={50}
            className="h-12 object-contain filter grayscale hover:grayscale-0 transition-all"
          />
        </motion.div>
      </div>
      <div className="flex justify-center gap-8 flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Image
            src="/images/gdpr-compliant.jpg"
            alt="GDPR Compliant Badge"
            width={100}
            height={100}
            className="h-16 object-contain"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Image
            src="/images/secure-data.jpg"
            alt="Secure Data Badge"
            width={100}
            height={100}
            className="h-16 object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}