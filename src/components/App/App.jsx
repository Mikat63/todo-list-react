import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import TaskItem from "../TaskItem/TaskItem.jsx";
import AddTaskForm from "../AddTaskForm/AddTaskForm.jsx";

function App() {
  // load localstorage during first loading
  function parseLocalStorage() {
    if (localStorage.getItem("ma-todo-list")) {
      return JSON.parse(localStorage.getItem("ma-todo-list"));
    } else {
      return [];
    }
  }

  const [todos, setTodos] = useState(() => parseLocalStorage());

  // update localstorage if todos change
  useEffect(() => {
    localStorage.setItem("ma-todo-list", JSON.stringify(todos));
  }, [todos]);

  // function to add a new todo in the list
  function addTask(inputValue) {
    return setTodos([
      ...todos,
      { id: Date.now(), content: inputValue, done: false },
    ]);
  }

  // function to chek when a task is done
  function toggleDone(id) {
    const newTodos = todos.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      } else {
        return task;
      }
    });
    setTodos(newTodos);
  }

  // function to delete a task
  function deleteTask(id) {
    const newTodoList = todos.filter((task) => task.id !== id);

    setTodos(newTodoList);
  }

  const doneCount = todos.filter((task) => task.done).length;

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
        <AddTaskForm submit={addTask} />

        {todos.length > 0 && (
          <p className="text-sm text-slate-500 px-1">
            {doneCount} / {todos.length} tâche{todos.length > 1 ? "s" : ""}{" "}
            terminée{doneCount > 1 ? "s" : ""}
          </p>
        )}

        <ul className="flex flex-col gap-2">
          {todos.map((task) => (
            <TaskItem
              key={task.id}
              id={task.id}
              content={task.content}
              toggleDone={toggleDone}
              deleteTask={deleteTask}
              done={task.done}
            />
          ))}
        </ul>

        {todos.length === 0 && (
          <p className="text-center text-slate-400 text-sm py-10">
            Aucune tâche pour l'instant — ajoute-en une ci-dessus.
          </p>
        )}
      </main>
    </div>
  );
}

export default App;
