import { useState } from "react";

function TodoInput({ addTodo }) {
    const [todo, setTodo] = useState("");

    const handleAdd = () => {
        if (todo.trim() !== "") {
            addTodo(todo);
            setTodo("");
        }
    };

    return (
        <div className="input-group">
            <input
                type="text"
                placeholder="What needs to be done?"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button className="add-btn" onClick={handleAdd}>Add Task</button>
        </div>
    );
}

export default TodoInput;