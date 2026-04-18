import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos = [], deleteTodo }) {
    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
            ))}
            {todos.length === 0 && <p className="empty-state">No todos yet. Add one above!</p>}
        </div>
    );
}

export default TodoList;
