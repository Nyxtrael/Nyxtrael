import Link from 'next/link';
import BackgroundGrid from '../../../components/BackgroundGrid';
import FeatureCard from '../../../components/FeatureCard';
import AddTaskForm from './AddTaskForm';
import TaskList from './TaskList';
import { CheckCircle, Clock, Zap } from 'lucide-react';
import { Task } from '@/types';

const features = [
  {
    title: 'Offline Mode',
    description: 'Work seamlessly without internet—tasks sync automatically when you’re back online.',
    icon: <Clock className="h-12 w-12 text-shoptrend-gold" />,
    color: 'border-shoptrend-gold',
  },
  {
    title: 'Task Management',
    description: 'Create, assign, and track tasks with ease, ensuring nothing slips through the cracks.',
    icon: <CheckCircle className="h-12 w-12 text-shoptrend-brown" />,
    color: 'border-shoptrend-brown',
  },
  {
    title: 'Progress Tracking',
    description: 'Visualize your productivity with real-time progress charts and smart notifications.',
    icon: <Zap className="h-12 w-12 text-shoptrend-gold" />,
    color: 'border-shoptrend-gold',
  },
];

// Static task list for demo purposes
const demoTasks: Task[] = [
  { id: 1, title: 'Complete project proposal', completed: false },
  { id: 2, title: 'Schedule team meeting', completed: true },
  { id: 3, title: 'Review client feedback', completed: false },
];

export default function TaskMaster() {
  return (
    <main role="main" className="taskmaster min-h-screen font-roboto overflow-hidden">
      {/* Hero Section */}
      <section
        role="banner"
        aria-labelledby="hero-heading"
        className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-shoptrend-bg to-gray-900"
      >
        <div className="hidden md:block absolute top-0 left-0 w-full h-full">
          <BackgroundGrid />
        </div>
        <div className="container section-spacing relative z-10 text-center">
          <h1
            id="hero-heading"
            className="text-5xl md:text-7xl font-exo font-bold text-shoptrend-gold mb-6 animate-fade-in"
          >
            TaskMaster
          </h1>
          <p className="text-xl md:text-2xl text-shoptrend-text mb-10 leading-relaxed font-roboto animate-slide-right">
            A Progressive Web App for Task Management
          </p>
          <div className="animate-scale-in">
            <Link
              href="#demo"
              className="inline-block bg-shoptrend-gold text-shoptrend-bg px-8 py-4 rounded-lg transform transition-transform hover:scale-105 hover:shadow-shoptrend-gold font-roboto shadow-md text-lg animate-pulse"
              aria-label="Try TaskMaster now"
            >
              Try It Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        role="region"
        aria-labelledby="features-heading"
        className="section-spacing bg-shoptrend-bg"
      >
        <div className="container">
          <h2
            id="features-heading"
            className="text-4xl md:text-5xl font-exo font-bold text-shoptrend-gold text-center mb-12 animate-fade-in"
          >
            Why TaskMaster?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section
        id="demo"
        role="region"
        aria-labelledby="demo-heading"
        className="section-spacing bg-gradient-to-br from-gray-900 to-shoptrend-bg text-shoptrend-text"
      >
        <div className="container">
          <h2
            id="demo-heading"
            className="text-4xl md:text-5xl font-exo font-bold text-shoptrend-gold text-center mb-12 animate-fade-in"
          >
            Try TaskMaster in Action
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-shoptrend-brown animate-slide-up">
            <AddTaskForm />
            <TaskList tasks={demoTasks} />
          </div>
        </div>
      </section>

      {/* Offline Mode Info Section */}
      <section
        id="offline-info"
        role="region"
        aria-labelledby="offline-heading"
        className="section-spacing bg-shoptrend-bg text-shoptrend-text"
      >
        <div className="container text-center">
          <h2
            id="offline-heading"
            className="text-4xl md:text-5xl font-exo font-bold text-shoptrend-gold mb-12 animate-fade-in"
          >
            Work Offline, Sync Later
          </h2>
          <div
            className="flex items-center justify-center gap-4 p-4 bg-gray-800 rounded-lg shadow-lg border border-shoptrend-brown animate-slide-up"
            role="alert"
            aria-label="Offline mode information"
          >
            <Clock className="h-8 w-8 text-shoptrend-gold" aria-hidden="true" />
            <p className="text-lg md:text-xl text-shoptrend-text leading-relaxed font-roboto">
              TaskMaster uses Service Workers to cache your tasks locally, ensuring you can manage your to-dos even without an internet connection. Once you’re back online, your changes sync automatically.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}