function Header({ total, completed }) {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <header className="header">
      <div className="title-group">
        <h1 className="gradient-text">Task Orbit</h1>
        <p className="subtitle">Manage your missions with precision</p>
      </div>
      
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-value">{total}</span>
          <span className="stat-label">Total</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-value">{completed}</span>
          <span className="stat-label">Done</span>
        </div>
        
        <div className="progress-ring">
          <svg viewBox="0 0 36 36" className="circular-chart">
            <path className="circle-bg"
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path className="circle"
              strokeDasharray={`${percentage}, 100`}
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="percentage">{percentage}%</text>
          </svg>
        </div>
      </div>

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 2.5rem;
          font-weight: 800;
          letter-spacing: -0.05em;
        }

        .subtitle {
          color: var(--text-dim);
          font-size: 0.875rem;
          margin-top: -0.25rem;
        }

        .stats-container {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.75rem 1.25rem;
          border-radius: 16px;
          border: 1px solid var(--border);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-value {
          font-weight: 700;
          font-size: 1.125rem;
          color: var(--text-main);
        }

        .stat-label {
          font-size: 0.625rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-dim);
        }

        .stat-divider {
          width: 1px;
          height: 24px;
          background: var(--border);
        }

        .progress-ring {
          width: 48px;
          height: 48px;
        }

        .circular-chart {
          display: block;
          max-width: 100%;
        }

        .circle-bg {
          fill: none;
          stroke: rgba(255, 255, 255, 0.05);
          stroke-width: 3;
        }

        .circle {
          fill: none;
          stroke: var(--primary);
          stroke-width: 3;
          stroke-linecap: round;
          transition: var(--transition);
        }

        .percentage {
          fill: var(--text-main);
          font-size: 0.5rem;
          font-weight: 700;
          text-anchor: middle;
        }

        @media (max-width: 500px) {
          .header {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }
          .stats-container {
            width: 100%;
            justify-content: space-between;
          }
        }
      `}</style>
    </header>
  );
}

export default Header;