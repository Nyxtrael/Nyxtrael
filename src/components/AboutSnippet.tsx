import Link from 'next/link';
import Image from 'next/image';
import { MessageSquare, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSnippet: React.FC = () => {
  const techStack = ['React', 'Next.js', 'Tailwind', 'TypeScript'];
  const stats = [
    { label: 'Completed Projects', value: '12+' },
    { label: 'Years Experience', value: '3' },
    { label: 'On-Time Delivery', value: '100%' },
  ];
  const values = [
    { label: 'Transparent Collaboration', description: 'Clear communication at every step.', icon: <MessageSquare className="h-6 w-6 text-[#38bdf8] hover:text-[#facc15] transition-colors" /> },
    { label: 'Timely Delivery', description: 'Projects completed on schedule.', icon: <Clock className="h-6 w-6 text-[#38bdf8] hover:text-[#facc15] transition-colors" /> },
    { label: 'Client-Centric Approach', description: 'Your goals are my priority.', icon: <Users className="h-6 w-6 text-[#38bdf8] hover:text-[#facc15] transition-colors" /> },
  ];

  return (
    <section className="section bg-[#0d1117] grain-overlay py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-6xl font-serif font-bold text-[#e5e7eb] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About Me
          <span className="block w-1/4 h-1 bg-gradient-to-r from-[#38bdf8] to-[#facc15] mx-auto mt-2"></span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Personal Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/profile-photo.jpg"
              alt="Nyxtrael - Front-end Developer"
              width={300}
              height={300}
              className="rounded-full border-4 border-[#38bdf8]/50 hover:border-[#facc15]/50 shadow-md hover:shadow-[#38bdf8]/50 transition-all max-w-full h-auto"
              priority
            />
          </motion.div>
          {/* Text Content */}
          <motion.div
            className="text-center md:text-left space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-[#9ca3af] leading-relaxed font-inter">
              Hi, I’m Nyxtrael—a front-end freelancer specializing in React and Next.js, with a strong portfolio of modern, responsive web applications and clean, maintainable code. I blend creative design with performance-first development to deliver fast, intuitive user experiences.
            </p>
            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                >
                  {value.icon}
                  <div>
                    <p className="text-lg text-[#e5e7eb] font-serif font-semibold">{value.label}</p>
                    <p className="text-sm text-[#9ca3af] font-inter">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Stats */}
            <div className="flex justify-center md:justify-start gap-6 mt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <p className="text-3xl font-bold text-[#38bdf8] font-serif">{stat.value}</p>
                  <p className="text-sm text-[#9ca3af] font-inter">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            {/* Tech Stack */}
            <ul className="flex justify-center md:justify-start gap-3 mb-6 flex-wrap">
              {techStack.map((tech, index) => (
                <motion.li
                  key={tech}
                  className="bg-[#38bdf8] text-[#0d1117] px-4 py-2 rounded-full text-sm font-medium font-inter"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {tech}
                </motion.li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link
                href="/about"
                className="inline-block bg-gradient-to-r from-[#38bdf8] to-[#facc15] text-[#0d1117] px-6 py-3 rounded-lg font-inter font-semibold hover:shadow-[#38bdf8]/50 transition-all duration-300"
                aria-label="View Nyxtrael's full journey"
              >
                View Full Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnippet;