import React, { useState, useEffect } from "react";

export default function Fetchdata() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://dummyjson.com/todos");
      const data = await res.json();
      setResult(data.todos);
      setLoading(false);
    };
    fetchdata();
  }, []);

  const filteredTodos = result.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "active") return !todo.completed;
    return true;
  });

  const stats = {
    total: result.length,
    completed: result.filter((t) => t.completed).length,
    active: result.filter((t) => !t.completed).length,
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Task Management Dashboard</h1>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>Monitor and track your team's progress</p>
        </header>

        {loading ? (
          <div style={styles.loading}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Loading tasks...</p>
          </div>
        ) : (
          <>
            <div style={styles.statsContainer}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{stats.total}</div>
                <div style={styles.statLabel}>Total Tasks</div>
              </div>
              <div style={styles.statCard}>
                <div style={{...styles.statValue, color: "#16a34a"}}>{stats.completed}</div>
                <div style={styles.statLabel}>Completed</div>
              </div>
              <div style={styles.statCard}>
                <div style={{...styles.statValue, color: "#dc2626"}}>{stats.active}</div>
                <div style={styles.statLabel}>Active</div>
              </div>
            </div>

            <div style={styles.filterBar}>
              <button
                onClick={() => setFilter("all")}
                style={{
                  ...styles.filterButton,
                  ...(filter === "all" ? styles.filterButtonActive : {}),
                }}
              >
                All Tasks
              </button>
              <button
                onClick={() => setFilter("active")}
                style={{
                  ...styles.filterButton,
                  ...(filter === "active" ? styles.filterButtonActive : {}),
                }}
              >
                Active
              </button>
              <button
                onClick={() => setFilter("completed")}
                style={{
                  ...styles.filterButton,
                  ...(filter === "completed" ? styles.filterButtonActive : {}),
                }}
              >
                Completed
              </button>
            </div>

            <div style={styles.tableContainer}>
              <table style={styles.table}>
                <thead>
                  <tr style={styles.tableHeader}>
                    <th style={{...styles.th, width: "60px"}}>ID</th>
                    <th style={styles.th}>Task Description</th>
                    <th style={{...styles.th, width: "120px"}}>User ID</th>
                    <th style={{...styles.th, width: "120px"}}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTodos.map((todo) => (
                    <tr key={todo.id} style={styles.tableRow}>
                      <td style={styles.td}>{todo.id}</td>
                      <td style={styles.td}>{todo.todo}</td>
                      <td style={styles.td}>User {todo.userId}</td>
                      <td style={styles.td}>
                        <span
                          style={{
                            ...styles.badge,
                            ...(todo.completed ? styles.badgeCompleted : styles.badgeActive),
                          }}
                        >
                          {todo.completed ? "Completed" : "In Progress"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={styles.footer}>
              Showing {filteredTodos.length} of {stats.total} tasks
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "40px 20px",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "48px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "600",
    color: "#1a202c",
    margin: "0 0 16px 0",
    letterSpacing: "-0.5px",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  divider: {
    width: "60px",
    height: "3px",
    background: "#3182ce",
    margin: "0 auto 16px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#64748b",
    margin: 0,
    fontWeight: "400",
  },
  loading: {
    textAlign: "center",
    padding: "80px 20px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "3px solid #e2e8f0",
    borderTop: "3px solid #3182ce",
    borderRadius: "50%",
    margin: "0 auto 20px",
    animation: "spin 0.8s linear infinite",
  },
  loadingText: {
    color: "#64748b",
    fontSize: "15px",
    margin: 0,
  },
  statsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "32px",
  },
  statCard: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "24px",
    textAlign: "center",
  },
  statValue: {
    fontSize: "36px",
    fontWeight: "600",
    color: "#1a202c",
    marginBottom: "8px",
  },
  statLabel: {
    fontSize: "14px",
    color: "#64748b",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  filterBar: {
    display: "flex",
    gap: "12px",
    marginBottom: "24px",
    flexWrap: "wrap",
  },
  filterButton: {
    padding: "10px 20px",
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "6px",
    color: "#64748b",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
  filterButtonActive: {
    background: "#3182ce",
    color: "#ffffff",
    borderColor: "#3182ce",
  },
  tableContainer: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    background: "#f8fafc",
    borderBottom: "2px solid #e2e8f0",
  },
  th: {
    padding: "16px 20px",
    textAlign: "left",
    fontSize: "13px",
    fontWeight: "600",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  tableRow: {
    borderBottom: "1px solid #f1f5f9",
    transition: "background 0.15s ease",
  },
  td: {
    padding: "16px 20px",
    fontSize: "14px",
    color: "#334155",
  },
  badge: {
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
    display: "inline-block",
  },
  badgeCompleted: {
    background: "#dcfce7",
    color: "#16a34a",
  },
  badgeActive: {
    background: "#fee2e2",
    color: "#dc2626",
  },
  footer: {
    textAlign: "center",
    marginTop: "24px",
    fontSize: "14px",
    color: "#64748b",
  },
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  tr:hover {
    background: #f8fafc !important;
  }
  
  button:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1) !important;
  }
`;
document.head.appendChild(styleSheet);