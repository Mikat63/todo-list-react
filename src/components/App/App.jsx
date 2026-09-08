import { Routes, Route } from "react-router-dom";
import TodoList from "../ToDoList/TodoList.jsx";
import QuoteGenerator from "../QuoteGenerator/QuoteGenerator.jsx";
import Home from "../Home/Home.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/todoList" element={<TodoList />}></Route>
      <Route path="/QuoteGenerator" element={<QuoteGenerator />}></Route>
    </Routes>
  );
}
export default App;
