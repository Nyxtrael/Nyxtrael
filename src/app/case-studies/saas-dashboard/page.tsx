import Link from 'next/link';
import Image from 'next/image';
import { BarChart, Users, Zap, Star } from 'lucide-react';

const features = [
  {
    title: 'Real-Time Analytics',
    description: 'Monitor your SaaS metrics in real time with live data updates and dynamic charts.',
    icon: <BarChart className="h-12 w-12 text-cyan-400" />,
  },
  {
    title: 'Predictive Insights',
    description: 'Leverage AI to forecast trends and make data-driven decisions with confidence.',
    icon: <Zap className="h-12 w-12 text-pink-500" />,
  },
  {
    title: 'User-Friendly Interface',
    description: 'An intuitive dashboard designed for all users, from beginners to experts.',
    icon: <Users className="h-12 w-12 text-cyan-400" />,
  },
];

const testimonials = [
  {
    quote: 'DataSync transformed how we analyze our SaaS metrics—intuitive and powerful!',
    author: 'Jane Doe, CEO of TechTrend',
  },
  {
    quote: 'The predictive insights gave us a competitive edge. Highly recommend!',
    author: 'John Smith, CTO of InnovateX',
  },
];

export default function DataSync() {
  return (
    <main className="bg-gray-100 text-gray-900 font-poppins overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-gray-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-pink-500/20 opacity-20" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-orbitron bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            DataSync – SaaS Analytics Dashboard
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed animate-slide-right">
            Empower your business with intuitive, real-time analytics and predictive insights.
          </p>
          <div className="animate-scale-in">
            <Link
              href="#get-started"
              className="inline-block bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-400/50 animate-pulse"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 text-center mb-12 font-orbitron animate-fade-in">
            Why Choose DataSync?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md bg-opacity-80 border border-gray-200 hover:scale-[1.05] animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-indigo-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-900 to-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 font-orbitron animate-fade-in">
            See DataSync in Action
          </h2>
          <div className="relative bg-surface p-6 rounded-xl shadow-2xl animate-scale-in">
            {/* Simplified Static SVG Chart for Demo */}
            <svg className="w-full h-64" viewBox="0 0 300 150">
              <rect x="30" y="100" width="30" height="50" fill="#00D4FF" />
              <rect x="90" y="70" width="30" height="80" fill="#FF4081" />
              <rect x="150" y="50" width="30" height="100" fill="#00D4FF" />
              <rect x="210" y="90" width="30" height="60" fill="#FF4081" />
            </svg>
            <p className="mt-4 text-gray-300 animate-slide-left">
              Interactive dashboard with real-time data visualization.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-12 font-orbitron animate-fade-in">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-lg backdrop-blur-md bg-opacity-80 border border-gray-200 ${index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-4">
                  <Star className="h-8 w-8 text-yellow-400" />
                </div>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="text-indigo-900 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="get-started" className="py-16 bg-gradient-to-br from-cyan-400 to-pink-500 text-white text-center">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-orbitron animate-fade-in">
            Unlock the Power of DataSync
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 leading-relaxed animate-slide-right">
            Start transforming your SaaS analytics today with a 14-day free trial.
          </p>
          <div className="animate-scale-in">
            <Link
              href="/signup"
              className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-white/50 animate-pulse"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}