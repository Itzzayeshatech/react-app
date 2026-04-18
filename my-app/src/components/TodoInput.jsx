import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text.trim(), priority);
      setText("");
    }
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <div className="input-main">
        <input
          type="text"
          className="main-input"
          placeholder="New Mission..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <select 
          className={`priority-select ${priority}`}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        
        <button type="submit" className="add-button" disabled={!text.trim()}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>

      <style jsx>{`
        .input-form {
          width: 100%;
        }

        .input-main {
          display: flex;
          gap: 0.75rem;
          background: rgba(15, 23, 42, 0.4);
          padding: 0.5rem;
          border-radius: 16px;
          border: 1px solid var(--border);
          transition: var(--transition);
        }

        .input-main:focus-within {
          border-color: var(--primary);
          box-shadow: 0 0 15px var(--primary-glow);
          background: rgba(15, 23, 42, 0.6);
        }

        .main-input {
          flex: 1;
          background: transparent;
          border: none;
          outline: none;
          color: var(--text-main);
          padding: 0.75rem 1rem;
          font-size: 1rem;
          font-weight: 500;
        }

        .main-input::placeholder {
          color: var(--text-dim);
          opacity: 0.5;
        }

        .priority-select {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border);
          color: var(--text-main);
          border-radius: 10px;
          padding: 0 1rem;
          outline: none;
          font-size: 0.825rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition);
        }

        .priority-select.high { color: var(--danger); border-color: rgba(248, 113, 113, 0.3); }
        .priority-select.medium { color: var(--secondary); border-color: rgba(34, 211, 238, 0.3); }
        .priority-select.low { color: var(--success); border-color: rgba(74, 222, 128, 0.3); }

        .add-button {
          background: var(--primary);
          color: white;
          border: none;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: var(--transition);
          flex-shrink: 0;
        }

        .add-button:hover:not(:disabled) {
          transform: scale(1.05);
          filter: brightness(1.1);
          box-shadow: 0 4px 15px var(--primary-glow);
        }

        .add-button:disabled {
          background: var(--text-dim);
          opacity: 0.3;
          cursor: not-allowed;
        }

        @media (max-width: 500px) {
          .input-main {
            flex-wrap: wrap;
          }
          .main-input {
            width: 100%;
            flex: none;
          }
          .priority-select {
            flex: 1;
          }
        }
      `}</style>
    </form>
  );
}

export default TodoInput;