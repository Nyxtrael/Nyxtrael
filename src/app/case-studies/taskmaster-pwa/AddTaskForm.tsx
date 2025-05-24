export default function AddTaskForm() {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-200 mb-4">Add a New Task</h3>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Task name"
          className="flex-1 p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-accent-green transition-all duration-300"
          aria-label="Task name"
          disabled
        />
        <button
          className="bg-gradient-to-br from-accent-green to-accent-purple text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-md hover:shadow-accent-purple/50"
          disabled
        >
          Add Task
        </button>
      </div>
      <p className="text-gray-400 text-sm mt-2">Task addition is disabled in this static demo.</p>
    </div>
  );
}