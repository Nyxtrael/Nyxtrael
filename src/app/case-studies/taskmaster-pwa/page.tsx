'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CloudIcon, BellIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

// Niestandardowe style CSS dla efektów tła, separatorów i animacji
const customStyles = `
  @keyframes fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes fade-in-up {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes count-up {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  .animate-fade-in {
    animation: fade-in 1s ease-in-out;
  }
  .animate-fade-in-up {
    animation: fade-in-up 0.8s ease-in-out;
  }
  .animate-count-up {
    animation: count-up 1s ease-in-out;
  }
  .hero-bg {
    background: linear-gradient(135deg, #f9fafb 0%, #d1d5db 100%);
    position: relative;
    overflow: hidden;
  }
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #f9fafb 0%, #1f2937 50%, #f9fafb 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
`;

const features = [
  {
    icon: <CloudIcon className="h-8 w-8 text-[#10b981]" />,
    title: "Offline Mode",
    description: "Access and manage tasks without an internet connection.",
  },
  {
    icon: <BellIcon className="h-8 w-8 text-[#10b981]" />,
    title: "Push Notifications",
    description: "Daily reminders to keep you on track, even when the app is closed.",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-8 w-8 text-[#10b981]" />,
    title: "Cross-Platform",
    description: "Seamless experience on both desktop (Electron) and mobile (PWA).",
  },
];

export default function TaskMasterCaseStudy() {
  return (
    <div className="bg-[#f9fafb]">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section className="hero-bg relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"
            aria-hidden="true"
          >
            <source src="/videos/taskmaster-ui.webm" type="video/webm" />
            <source src="/videos/taskmaster-ui.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#f9fafb]/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/images/taskmaster-mockup.jpg"
              alt="TaskMaster app on mobile device"
              width={300}
              height={600}
              className="rounded-lg shadow-md"
              priority
            />
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-sans font-bold text-[#1f2937] mb-4 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            TaskMaster – Task Management, Anywhere
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#6b7280] mb-8 max-w-3xl mx-auto font-sans leading-relaxed animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building an offline-first to-do app for productivity on the go
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#features"
              className="inline-block bg-[#10b981] text-white px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:bg-[#34d399] hover:shadow-[#10b981]/50 transition-all duration-300"
              aria-label="See how TaskMaster works"
            >
              See How It Works
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Objectives */}
      <section className="py-16 px-4 md:px-8 bg-[#ffffff]">
        <motion.h2
          className="text-3xl font-sans font-bold text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Objectives
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.ul
            className="list-disc list-inside text-[#6b7280] font-sans leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <li>Offline access to tasks for uninterrupted productivity</li>
            <li>Instant performance using the App Shell model</li>
            <li>Installable as a Progressive Web App (PWA)</li>
            <li>Cloud synchronization when online</li>
          </motion.ul>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Key Features */}
      <section id="features" className="py-16 px-4 md:px-8 bg-[#f9fafb] grid-pattern">
        <motion.h2
          className="text-3xl font-sans font-bold text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Key Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#ffffff] p-6 rounded-lg shadow-md border border-[#d1d5db]/30 hover:border-[#10b981]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-xl font-sans font-semibold text-[#1f2937]">{feature.title}</h3>
              </div>
              <p className="text-[#6b7280] font-sans leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Technical Implementation */}
      <section className="py-16 px-4 md:px-8 bg-[#ffffff]">
        <motion.h2
          className="text-3xl font-sans font-bold text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Implementation
        </motion.h2>
        <div className="max-w-3xl mx-auto text-[#6b7280] font-sans leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            TaskMaster was built with a focus on offline-first functionality and performance:
          </motion.p>
          <motion.ul
            className="list-disc list-inside mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>Service Workers for caching resources and data, enabling offline access</li>
            <li>IndexedDB for local storage of tasks, ensuring data persistence</li>
            <li>Background Sync API to sync changes once connectivity is restored</li>
          </motion.ul>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* UI Design */}
      <section className="py-16 px-4 md:px-8 bg-[#f9fafb]">
        <motion.h2
          className="text-3xl font-sans font-bold text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          UI Design
        </motion.h2>
        <div className="max-w-5xl mx-auto">
          <motion.p
            className="text-[#6b7280] font-sans leading-relaxed mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The UI follows Material Design principles with a clean, readable interface, colorful task tags, and support for both light and dark themes.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/images/task-list.jpg", alt: "Task List View", description: "Main task list with colorful tags" },
              { src: "/images/calendar-view.jpg", alt: "Calendar View", description: "Calendar view for scheduling tasks" },
              { src: "/images/add-task.jpg", alt: "Add Task Screen", description: "Simple form to add new tasks" },
            ].map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={300}
                  height={600}
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                />
                <p className="mt-2 text-center text-[#6b7280]">{screen.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Testing */}
      <section className="py-16 px-4 md:px-8 bg-[#ffffff]">
        <motion.h2
          className="text-3xl font-sans font-bold text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Testing
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-center text-[#6b7280] font-sans leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          TaskMaster was rigorously tested across various scenarios, including no network, poor connectivity, and different browsers, ensuring reliability and a seamless user experience.
        </motion.p>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Outcome */}
      <section className="py-16 px-4 md:px-8 bg-[#f9fafb]">
        <motion.h2
          className="text-3xl font-sans font-bold text-center mb-8 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Outcome
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          {[
            { number: "100%", description: "Functionality in offline mode" },
            { number: "100", description: "Google Lighthouse PWA score" },
            { number: "500+", description: "Active users in the first month" },
          ].map((outcome, index) => (
            <motion.div
              key={index}
              className="animate-count-up"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <p className="text-4xl font-mono font-bold text-[#10b981]">{outcome.number}</p>
              <p className="mt-2 text-[#6b7280] font-sans">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-[#ffffff] text-center">
        <motion.h2
          className="text-3xl font-sans font-bold mb-4 text-[#1f2937]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Interested in building a robust PWA?
        </motion.h2>
        <motion.p
          className="mb-8 text-[#6b7280]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let’s discuss your idea.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#10b981] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#34d399] transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>
    </div>
  );
}