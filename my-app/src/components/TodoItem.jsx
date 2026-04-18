import React from "react";

function TodoItem({ todo, index, deleteTodo }) {
    return (
        <div className="todo-item">
            <span className="todo-text">{todo}</span>
            <button className="delete-btn" onClick={() => deleteTodo(index)}>
                <span className="delete-icon">×</span>
            </button>
        </div>
    );
}

export default TodoItem;