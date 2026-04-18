import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  // Load todos from localStorage
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("premium-todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [filter, setFilter] = useState("all");

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("premium-todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text, priority) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      priority: priority || "medium",
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="app-wrapper animate-fade">
      <div className="glass-container">
        <Header 
          total={todos.length} 
          completed={todos.filter(t => t.completed).length} 
        />
        
        <TodoInput addTodo={handleAddTodo} />
        
        <div className="filter-bar">
          <button 
            className={filter === "all" ? "active" : ""} 
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button 
            className={filter === "active" ? "active" : ""} 
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button 
            className={filter === "completed" ? "active" : ""} 
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          {todos.some(t => t.completed) && (
            <button className="clear-btn" onClick={clearCompleted}>
              Clear Completed
            </button>
          )}
        </div>

        <TodoList 
          todos={filteredTodos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      </div>
    </div>
  );
}

export default App;
