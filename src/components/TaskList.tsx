"use client";

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

export default function TaskList({ tasks, onToggle, onRemove }: TaskListProps) {
  return (
    <ul className="space-y-4" role="list">
      {tasks.map((task) => (
        <motion.li
          key={task.id}
          className="flex items-center justify-between p-4 bg-gray-700 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          tabIndex={0}
          aria-label={`Task: ${task.text}, status: ${task.completed ? 'completed' : 'not completed'}`}
        >
          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggle(task.id)}
              className={`w-6 h-6 rounded-full border-2 ${task.completed ? 'bg-accent-green border-accent-green' : 'border-gray-500'}`}
              aria-label={`Toggle completion of task: ${task.text}`}
            >
              {task.completed && <CheckCircle className="w-4 h-4 text-black mx-auto" />}
            </button>
            <span className={`text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-200'}`}>
              {task.text}
            </span>
          </div>
          <button
            onClick={() => onRemove(task.id)}
            className="text-red-500 hover:text-red-400 transition-colors"
            aria-label={`Delete task: ${task.text}`}
          >
            Delete
          </button>
        </motion.li>
      ))}
    </ul>
  );
}