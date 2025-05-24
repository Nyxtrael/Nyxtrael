'use client';

import { useState } from 'react';

interface Task {
  id: number;
  title: string;
}

export default function AddTaskForm() {
  const [taskName, setTaskName] = useState('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskName.trim()) return; // Prevent adding empty tasks

    const newTask: Task = {
      id: tasks.length + 1,
      title: taskName.trim(),
    };
    setTasks([...tasks, newTask]);
    setTaskName(''); // Clear the input
  };

  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Add a New Task</h3>
      <form onSubmit={handleAddTask} className="flex gap-4">
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="flex-1 p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-accent-green transition-all duration-300"
          aria-label="Task name"
        />
        <button
          type="submit"
          className="bg-gradient-to-br from-accent-green to-accent-purple text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-accent-purple/50"
        >
          Add Task
        </button>
      </form>
      {tasks.length > 0 && (
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-200 mb-2">Added Tasks</h4>
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="p-2 bg-gray-800 rounded-lg border border-gray-600 text-gray-200">
                {task.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}