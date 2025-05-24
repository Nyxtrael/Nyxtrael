'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks: initialTasks }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleToggle = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleRemove = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Task List</h3>
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks available.</p>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-gray-600"
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="h-5 w-5 text-accent-green border-gray-600 rounded focus:ring-accent-green cursor-pointer"
                aria-label={`Toggle task: ${task.title}`}
              />
              <span
                className={`flex-1 text-gray-200 ${task.completed ? 'line-through text-gray-400' : ''}`}
              >
                {task.title}
              </span>
              <button
                onClick={() => handleRemove(task.id)}
                className="text-gray-400 hover:text-red-500 transition-colors"
                aria-label={`Remove task: ${task.title}`}
              >
                <X className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}