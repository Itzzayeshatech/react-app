import { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app-container">
      <div className="glass-card">
        <Header />
        <TodoInput addTodo={handleAddTodo} />
        <TodoList todos={todos} deleteTodo={handleDeleteTodo} />
      </div>
    </div>
  );
}

export default App;
