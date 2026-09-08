import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import TaskItem from "../TaskItem/TaskItem.jsx";
import AddTaskForm from "../AddTaskForm/AddTaskForm.jsx";
import Button from "../Button/Button.jsx";

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
  const [selectFilter, setSelectFilter] = useState("all");

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

  // counter of task length and done length
  const doneTodos = todos.filter((task) => task.done !== false).length;
  const totalTodos = todos.length;

  // const for filter tasks
  const activeTask = todos.filter((task) => task.done === false);
  const finishedTask = todos.filter((task) => task.done === true);

  // variable contains selected tasks for return
  function returnSelected() {
    if (selectFilter === "activated") {
      return activeTask;
    } else if (selectFilter === "finished") {
      return finishedTask;
    } else {
      return todos;
    }
  }

  const selectedTasks = returnSelected();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="max-w-xl mx-auto px-4 py-8 flex flex-col gap-6">
        <AddTaskForm submit={addTask} />

        <div className="flex gap-2 justify-center">
          <Button
            type="button"
            cssClass={
              " border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 active:bg-indigo-300 active:scale-95 transition-colors focus:outline-none focus:scale-105 " +
              (selectFilter === "all"
                ? "scale-110 bg-indigo-200"
                : "bg-indigo-50")
            }
            title="Tous"
            onClick={() => setSelectFilter("all")}
          />
          <Button
            type="button"
            cssClass={
              "border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 active:bg-indigo-300 active:scale-95 transition-colors focus:outline-none focus:scale-105 " +
              (selectFilter === "activated"
                ? "scale-110 bg-indigo-200"
                : "bg-indigo-50")
            }
            title="Actives"
            onClick={() => setSelectFilter("activated")}
          />
          <Button
            type="button"
            cssClass={
              "border border-indigo-200 rounded-full px-4 py-1.5 text-sm font-medium text-indigo-700 hover:bg-indigo-100 active:bg-indigo-300 active:scale-95 transition-colors focus:outline-none focus:scale-105 " +
              (selectFilter === "finished"
                ? "scale-110 bg-indigo-200"
                : "bg-indigo-50")
            }
            title="Terminées"
            onClick={() => setSelectFilter("finished")}
          />
        </div>

        <p className="text-center">
          {doneTodos}/{totalTodos} tâches terminées
        </p>

        <ul className="flex flex-col gap-2">
          {selectedTasks.map((task) => (
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
      </main>
    </div>
  );
}

export default App;
