// src/components/AnimatedSection.tsx
   "use client";

   import { motion } from 'framer-motion';

   export default function AnimatedSection({ children, ...props }) {
     return (
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
         {...props}
       >
         {children}
       </motion.div>
     );
   }