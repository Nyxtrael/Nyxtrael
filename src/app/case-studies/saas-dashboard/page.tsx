'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChartBarIcon, ClockIcon, DevicePhoneMobileIcon, MoonIcon } from '@heroicons/react/24/outline';

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
    background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
    position: relative;
    overflow: hidden;
  }
  .section-divider {
    position: relative;
    height: 80px;
    background: linear-gradient(to bottom, #1e3a8a 0%, #1f2937 50%, #1e3a8a 100%);
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);
    box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
  }
  .grid-pattern {
    background-image: linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  .tooltip {
    position: relative;
  }
  .tooltip:hover .tooltip-text {
    visibility: visible;
    opacity: 1;
  }
  .tooltip-text {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.3s;
    position: absolute;
    z-index: 10;
    background-color: #1e40af;
    color: #e5e7eb;
    padding: 8px;
    border-radius: 4px;
    font-size: 14px;
    width: 200px;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const challenges = [
  {
    title: "Large Volume of Data",
    description: "How to present complex data in a clear, digestible way without overwhelming the user.",
  },
  {
    title: "Complex Filters and Options",
    description: "Risk of user overload due to intricate filtering and customization options.",
  },
  {
    title: "Real-Time Updates",
    description: "Ensuring seamless real-time data updates without performance bottlenecks.",
  },
];

const features = [
  {
    icon: <ChartBarIcon className="h-8 w-8 text-[#22d3ee]" />,
    title: "Modular Widget Layout",
    description: "Users can personalize their dashboard by rearranging widgets to suit their needs.",
  },
  {
    icon: <ClockIcon className="h-8 w-8 text-[#22d3ee]" />,
    title: "Real-Time Charts",
    description: "Smoothly animated charts that update in real-time for up-to-date insights.",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-8 w-8 text-[#22d3ee]" />,
    title: "Responsive Design",
    description: "Fully functional on both desktop and tablet devices.",
  },
  {
    icon: <MoonIcon className="h-8 w-8 text-[#22d3ee]" />,
    title: "Dark and Light Modes",
    description: "Toggle between themes for comfortable viewing in any lighting condition.",
  },
];

export default function DataSyncCaseStudy() {
  return (
    <div className="bg-[#1f2937]">
      <style>{customStyles}</style>

      {/* Hero Section */}
      <section className="hero-bg relative grain-overlay py-24 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm"
            aria-hidden="true"
          >
            <source src="/videos/data-flow.webm" type="video/webm" />
            <source src="/videos/data-flow.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-[#1e3a8a]/80 backdrop-blur-sm" />
        </div>
        <div className="relative z-10">
          <motion.h1
            className="text-5xl md:text-6xl font-sans font-bold text-[#e5e7eb] mb-4 animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Data at a Glance – DataSync Analytics
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#bfdbfe] mb-4 max-w-3xl mx-auto font-sans leading-relaxed animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Designing an intuitive dashboard for real-time insights
          </motion.p>
          <motion.p
            className="text-[#9ca3af] mb-8 max-w-3xl mx-auto font-sans leading-relaxed animate-fade-in"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            DataSync needed a clear dashboard to help users interpret complex data from multiple sources effortlessly.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#preview"
              className="inline-block bg-[#22d3ee] text-[#1f2937] px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:bg-[#67e8f9] hover:shadow-[#22d3ee]/50 transition-all duration-300"
              aria-label="Watch demo of DataSync dashboard"
            >
              Watch Demo
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Key Challenges */}
      <section className="py-16 px-4 md:px-8">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#e5e7eb]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Key Challenges
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#3b82f6]/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-sans font-semibold text-[#e5e7eb] mb-2">{challenge.title}</h3>
              <p className="text-[#9ca3af] font-sans leading-relaxed">{challenge.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Solutions/Features */}
      <section className="py-16 px-4 md:px-8 bg-[#1f2937] grid-pattern">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#e5e7eb]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Solutions & Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#2d3748] p-6 rounded-lg shadow-md border border-[#3b82f6]/30 hover:border-[#22d3ee]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="ml-3 text-xl font-sans font-semibold text-[#e5e7eb]">{feature.title}</h3>
              </div>
              <p className="text-[#9ca3af] font-sans leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Tech Stack/Architecture */}
      <section className="py-16 px-4 md:px-8">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#e5e7eb]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack & Architecture
        </motion.h2>
        <div className="max-w-3xl mx-auto text-[#9ca3af] font-sans leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The dashboard was built using modern technologies to ensure performance and scalability:
          </motion.p>
          <motion.ul
            className="list-disc list-inside mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>Chart.js for interactive, animated charts</li>
            <li>WebSockets for real-time data updates</li>
            <li>Next.js with React's virtual DOM for optimized rendering</li>
          </motion.ul>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/images/architecture-diagram.jpg"
              alt="DataSync architecture diagram"
              width={600}
              height={300}
              className="rounded-lg shadow-md"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* UI/UX Design Process */}
      <section className="py-16 px-4 md:px-8 bg-[#1f2937]">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#e5e7eb]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          UI/UX Design Process
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-[#9ca3af] font-sans leading-relaxed mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            The design process focused on simplifying complex data visualization:
          </motion.p>
          <motion.ul
            className="list-disc list-inside text-[#9ca3af] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <li>Used bar charts for time-series data to highlight trends</li>
            <li>Introduced tabs to manage information overload</li>
            <li>Designed modular widgets for user customization</li>
          </motion.ul>
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Image
              src="/images/figma-design.jpg"
              alt="DataSync widget design in Figma"
              width={800}
              height={400}
              className="rounded-lg shadow-md"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Final Dashboard Preview */}
      <section id="preview" className="py-16 px-4 md:px-8 bg-[#1f2937] grid-pattern">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#e5e7eb]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Final Dashboard Preview
        </motion.h2>
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg shadow-md"
            >
              <source src="/videos/dashboard-demo.webm" type="video/webm" />
              <source src="/videos/dashboard-demo.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: "/images/widget-1.jpg", alt: "Sales Trends Widget", tooltip: "Bar chart showing sales trends over time." },
              { src: "/images/widget-2.jpg", alt: "User Activity Widget", tooltip: "Pie chart displaying user activity distribution." },
              { src: "/images/widget-3.jpg", alt: "Real-Time Sync Widget", tooltip: "Line chart with real-time data sync updates." },
            ].map((widget, index) => (
              <motion.div
                key={index}
                className="tooltip"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Image
                  src={widget.src}
                  alt={widget.alt}
                  width={300}
                  height={200}
                  className="w-full rounded-lg shadow-md"
                  loading="lazy"
                />
                <p className="mt-2 text-center text-[#9ca3af]">{widget.alt}</p>
                <span className="tooltip-text">{widget.tooltip}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* Impact */}
      <section className="py-16 px-4 md:px-8">
        <motion.h2
          className="text-3xl font-serif text-center mb-8 text-[#e5e7eb]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-center">
          {[
            { number: "-50%", description: "Reduction in time to find key information (A/B tests)" },
            { number: "2x", description: "Increase in time spent analyzing data" },
          ].map((impact, index) => (
            <motion.div
              key={index}
              className="animate-count-up"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <p className="text-4xl font-mono font-bold text-[#22d3ee]">{impact.number}</p>
              <p className="mt-2 text-[#9ca3af] font-sans">{impact.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="mt-8 max-w-3xl mx-auto text-center text-[#9ca3af] font-sans italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          "The dashboard is clear and fast – a game-changer for our team!" – DataSync User
        </motion.p>
      </section>

      {/* Divider */}
      <div className="section-divider"></div>

      {/* CTA */}
      <section className="py-16 px-4 md:px-8 bg-[#1f2937] text-center">
        <motion.h2
          className="text-3xl font-serif mb-4 text-[#e5e7eb]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Need a powerful dashboard for your data?
        </motion.h2>
        <motion.p
          className="mb-8 text-[#bfdbfe]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let’s build it.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-[#22d3ee] text-[#1f2937] px-6 py-3 rounded-lg font-semibold hover:bg-[#67e8f9] transition-colors"
          >
            Contact Me
          </Link>
        </motion.div>
      </section>
    </div>
  );
}