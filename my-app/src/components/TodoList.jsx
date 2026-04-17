import { useState } from "react";

function TodoList() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);

    function addTodo() {
        if (input.trim() === "") return;

        const newTodo = {
            id: crypto.randomUUID(),
            text: input
        };

        setTodos([...todos, newTodo]);
        setInput("");
    }

    function deleteTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div style={{ textAlign: "center" }}>
           

            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add todo"
            />

            <button onClick={addTodo}>Add</button>

            <ul style={{ listStyle: "none" }}>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.text}
                        <button onClick={() => deleteTodo(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;