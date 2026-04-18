import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && editText.trim() !== todo.text) {
      editTodo(todo.id, editText);
    }
    setIsEditing(!isEditing);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleEdit();
    if (e.key === "Escape") {
      setIsEditing(false);
      setEditText(todo.text);
    }
  };

  return (
    <div className={`todo-item-card ${todo.completed ? "completed" : ""} ${todo.priority}`}>
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className="checkmark"></span>
      </label>

      <div className="content">
        {isEditing ? (
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        ) : (
          <span className="todo-text">{todo.text}</span>
        )}
        <div className="meta">
          <span className={`priority-tag ${todo.priority}`}>{todo.priority}</span>
          <span className="dot">•</span>
          <span className="time">{new Date(todo.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
      </div>

      <div className="actions">
        <button className="action-btn edit" onClick={handleEdit} title="Edit Task">
          {isEditing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          )}
        </button>
        <button className="action-btn delete" onClick={() => deleteTodo(todo.id)} title="Delete Task">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      </div>

      <style jsx>{`
        .todo-item-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border);
          padding: 1rem 1.25rem;
          border-radius: 18px;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }

        .todo-item-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          transition: var(--transition);
        }

        .todo-item-card.high::before { background: var(--danger); box-shadow: 2px 0 10px rgba(248, 113, 113, 0.4); }
        .todo-item-card.medium::before { background: var(--secondary); box-shadow: 2px 0 10px rgba(34, 211, 238, 0.4); }
        .todo-item-card.low::before { background: var(--success); box-shadow: 2px 0 10px rgba(74, 222, 128, 0.4); }

        .todo-item-card:hover {
          transform: translateX(4px);
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .todo-item-card.completed {
          opacity: 0.6;
        }

        .todo-item-card.completed .todo-text {
          text-decoration: line-through;
          color: var(--text-dim);
        }

        /* Custom Checkbox */
        .checkbox-container {
          display: block;
          position: relative;
          width: 24px;
          height: 24px;
          cursor: pointer;
          user-select: none;
        }

        .checkbox-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .checkmark {
          position: absolute;
          top: 0;
          left: 0;
          height: 24px;
          width: 24px;
          background-color: rgba(255, 255, 255, 0.05);
          border: 2px solid var(--border);
          border-radius: 8px;
          transition: var(--transition);
        }

        .checkbox-container:hover input ~ .checkmark {
          border-color: var(--primary);
        }

        .checkbox-container input:checked ~ .checkmark {
          background-color: var(--primary);
          border-color: var(--primary);
          box-shadow: 0 0 10px var(--primary-glow);
        }

        .checkmark:after {
          content: "";
          position: absolute;
          display: none;
        }

        .checkbox-container input:checked ~ .checkmark:after {
          display: block;
        }

        .checkbox-container .checkmark:after {
          left: 8px;
          top: 4px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .content {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .todo-text {
          font-weight: 500;
          color: var(--text-main);
          font-size: 1rem;
        }

        .edit-input {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid var(--primary);
          border-radius: 6px;
          color: var(--text-main);
          padding: 0.25rem 0.5rem;
          font-size: 1rem;
          outline: none;
          width: 100%;
        }

        .meta {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
        }

        .priority-tag {
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .priority-tag.high { color: var(--danger); }
        .priority-tag.medium { color: var(--secondary); }
        .priority-tag.low { color: var(--success); }

        .time { color: var(--text-dim); }
        .dot { color: var(--border); }

        .actions {
          display: flex;
          gap: 0.5rem;
          opacity: 0;
          transition: var(--transition);
        }

        .todo-item-card:hover .actions {
          opacity: 1;
        }

        .action-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          color: var(--text-dim);
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: var(--transition);
        }

        .action-btn:hover {
          color: var(--text-main);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .action-btn.edit:hover { background: var(--secondary-glow); color: var(--secondary); }
        .action-btn.delete:hover { background: rgba(248, 113, 113, 0.1); color: var(--danger); }

        @media (max-width: 500px) {
          .actions { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default TodoItem;