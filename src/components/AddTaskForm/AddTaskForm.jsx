import { useState } from "react";
import Button from "../Button/Button";

function AddTaskForm({ submit }) {
  const [inputTask, setInputTask] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(inputTask);
      }}
      className="bg-white rounded-2xl shadow-sm border border-slate-200 p-2 flex items-center gap-2"
    >
      <label htmlFor="addTask" className="sr-only">
        Ajouter une tâche
      </label>
      <input
        onChange={(e) => setInputTask(e.target.value)}
        value={inputTask}
        type="text"
        id="addTask"
        placeholder="Qu'est-ce qu'il y a à faire ?"
        className="flex-1 min-w-0 px-3 py-2.5 text-slate-700 placeholder:text-slate-400 focus:outline-none focus:scale-105"
      />
      <Button
        type="submit"
        cssClass="shrink-0 bg-indigo-600 text-white rounded-xl px-4 py-2.5 font-medium hover:bg-indigo-700 active:bg-indigo-800 transition-colors focus:outline-none focus:scale-105"
        title="Ajouter"
      />
    </form>
  );
}

export default AddTaskForm;
