import TodoItem from "./TodoItem";

function TodoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <div className="todo-list-container">
      {todos.length > 0 ? (
        <div className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </div>
          <h3>No Missions Found</h3>
          <p>Your orbit is clear. Start by adding a new task above.</p>
        </div>
      )}

      <style jsx>{`
        .todo-list-container {
          width: 100%;
          min-height: 200px;
        }

        .todo-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-dim);
          background: rgba(255, 255, 255, 0.02);
          border-radius: 20px;
          border: 1px dashed var(--border);
        }

        .empty-icon {
          margin-bottom: 1.5rem;
          opacity: 0.3;
          color: var(--primary);
        }

        .empty-state h3 {
          color: var(--text-main);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .empty-state p {
          font-size: 0.875rem;
          max-width: 250px;
        }
      `}</style>
    </div>
  );
}

export default TodoList;
