function TaskItem({ id, content, toggleDone, deleteTask, done }) {
  return (
    <li
      className={
        "group flex items-center gap-3 rounded-2xl shadow-sm border border-slate-200 px-4 py-3 transition-colors hover:border-slate-300 hover:scale-105 " +
        (done ? "bg-green-300" : "bg-white")
      }
    >
      <label className="relative flex items-center justify-center w-5 h-5 shrink-0 cursor-pointer">
        <input
          checked={done}
          onChange={() => toggleDone(id)}
          type="checkbox"
          className="peer appearance-none w-5 h-5 rounded-full border-2 border-slate-300 checked:bg-indigo-600 checked:border-indigo-600 transition-colors cursor-pointer focus:outline-none focus:scale-110"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none absolute w-3 h-3 opacity-0 peer-checked:opacity-100 transition-opacity"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </label>

      <span
        className={
          "flex-1 text-slate-700 transition-colors " +
          (done ? "line-through text-slate-400" : "")
        }
      >
        {content}
      </span>

      <button
        onClick={() => {
          deleteTask(id);
        }}
        type="button"
        className="shrink-0 text-red-600 hover:text-red-800 transition-colors focus:outline-none focus:scale-110"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
          <path d="M10 11v6" />
          <path d="M14 11v6" />
        </svg>
      </button>
    </li>
  );
}

export default TaskItem;
