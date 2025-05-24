import { Task } from '@/types';

export interface TaskListProps {
  tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
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
                className="h-5 w-5 text-accent-green border-gray-600 rounded focus:ring-accent-green"
                aria-label={`Toggle task: ${task.title}`}
                disabled
              />
              <span
                className={`flex-1 text-gray-200 ${task.completed ? 'line-through text-gray-400' : ''}`}
              >
                {task.title}
              </span>
            </li>
          ))}
        </ul>
      )}
      <p className="text-gray-400 text-sm mt-4">Task toggling and removal are disabled in this static demo.</p>
    </div>
  );
}