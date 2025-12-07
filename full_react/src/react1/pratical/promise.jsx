import React, { useState, useEffect } from "react";

export default function PromiseExample() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    setLoading(true);
    setStatus("processing");

    const mypromise = new Promise((resolve, reject) => {
      const success = false;

      setTimeout(() => {
        if (success) {
          resolve("Operation completed successfully");
        } else {
          reject("Operation failed - Please try again");
        }
      }, 1500);
    });

    mypromise
      .then((msg) => {
        setMessage(msg);
        setStatus("success");
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setStatus("error");
        setLoading(false);
      });
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>Promise Status Monitor</h1>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>Asynchronous Operation Tracking System</p>
        </header>

        {/* Main Status Panel */}
        <div style={styles.panel}>
          <div style={styles.panelHeader}>
            <h2 style={styles.panelTitle}>Current Operation Status</h2>
            <div
              style={{
                ...styles.badge,
                ...(loading
                  ? styles.badgeProcessing
                  : status === "success"
                  ? styles.badgeSuccess
                  : styles.badgeError),
              }}
            >
              {loading ? "PROCESSING" : status === "success" ? "RESOLVED" : "REJECTED"}
            </div>
          </div>

          <div style={styles.panelBody}>
            {loading ? (
              <div style={styles.statusSection}>
                <div style={styles.spinner}></div>
                <p style={styles.statusText}>
                  Executing asynchronous operation. Please wait...
                </p>
              </div>
            ) : message ? (
              <div style={styles.statusSection}>
                <div style={styles.iconSuccess}>✓</div>
                <div>
                  <h3 style={styles.resultTitle}>Success</h3>
                  <p style={styles.resultMessage}>{message}</p>
                </div>
              </div>
            ) : error ? (
              <div style={styles.statusSection}>
                <div style={styles.iconError}>✕</div>
                <div>
                  <h3 style={styles.resultTitleError}>Error</h3>
                  <p style={styles.resultMessage}>{error}</p>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Information Grid */}
        <div style={styles.infoGrid}>
          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Promise Type</div>
            <div style={styles.infoValue}>Custom Implementation</div>
          </div>
          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Execution Pattern</div>
            <div style={styles.infoValue}>Then/Catch Chain</div>
          </div>
          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Current State</div>
            <div style={styles.infoValue}>
              {loading ? "Pending" : status === "success" ? "Fulfilled" : "Rejected"}
            </div>
          </div>
          <div style={styles.infoCard}>
            <div style={styles.infoLabel}>Duration</div>
            <div style={styles.infoValue}>1500ms</div>
          </div>
        </div>

        {/* Details Table */}
        <div style={styles.tableContainer}>
          <h3 style={styles.tableTitle}>Operation Details</h3>
          <table style={styles.table}>
            <thead>
              <tr style={styles.tableHeaderRow}>
                <th style={styles.th}>Property</th>
                <th style={styles.th}>Value</th>
                <th style={styles.th}>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style={styles.tableRow}>
                <td style={styles.td}>Status</td>
                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.tableBadge,
                      ...(loading
                        ? { background: "#dbeafe", color: "#1e40af" }
                        : status === "success"
                        ? { background: "#dcfce7", color: "#166534" }
                        : { background: "#fee2e2", color: "#991b1b" }),
                    }}
                  >
                    {loading ? "Processing" : status === "success" ? "Success" : "Failed"}
                  </span>
                </td>
                <td style={styles.td}>Current execution state</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.td}>Async Handler</td>
                <td style={styles.td}>Promise Constructor</td>
                <td style={styles.td}>JavaScript native promise</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.td}>Success Condition</td>
                <td style={styles.td}>false</td>
                <td style={styles.td}>Determines resolve/reject path</td>
              </tr>
              <tr style={styles.tableRow}>
                <td style={styles.td}>Timeout</td>
                <td style={styles.td}>1500ms</td>
                <td style={styles.td}>Simulated async delay</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "40px 20px",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  container: {
    maxWidth: "1000px",
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
  panel: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    marginBottom: "32px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  panelHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 24px",
    borderBottom: "1px solid #e2e8f0",
    background: "#f8fafc",
  },
  panelTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e293b",
    margin: 0,
  },
  badge: {
    padding: "6px 12px",
    borderRadius: "4px",
    fontSize: "11px",
    fontWeight: "600",
    letterSpacing: "0.5px",
  },
  badgeProcessing: {
    background: "#dbeafe",
    color: "#1e40af",
  },
  badgeSuccess: {
    background: "#dcfce7",
    color: "#166534",
  },
  badgeError: {
    background: "#fee2e2",
    color: "#991b1b",
  },
  panelBody: {
    padding: "48px 24px",
  },
  statusSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "24px",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "3px solid #e2e8f0",
    borderTop: "3px solid #3182ce",
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
  },
  statusText: {
    fontSize: "15px",
    color: "#64748b",
    margin: 0,
  },
  iconSuccess: {
    width: "56px",
    height: "56px",
    background: "#dcfce7",
    color: "#16a34a",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "bold",
    flexShrink: 0,
  },
  iconError: {
    width: "56px",
    height: "56px",
    background: "#fee2e2",
    color: "#dc2626",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "bold",
    flexShrink: 0,
  },
  resultTitle: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#16a34a",
    margin: "0 0 8px 0",
  },
  resultTitleError: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#dc2626",
    margin: "0 0 8px 0",
  },
  resultMessage: {
    fontSize: "15px",
    color: "#334155",
    margin: 0,
    lineHeight: "1.6",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "16px",
    marginBottom: "32px",
  },
  infoCard: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "20px",
  },
  infoLabel: {
    fontSize: "12px",
    color: "#64748b",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "8px",
  },
  infoValue: {
    fontSize: "16px",
    color: "#1e293b",
    fontWeight: "600",
  },
  tableContainer: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "24px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  tableTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#1e293b",
    margin: "0 0 20px 0",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeaderRow: {
    background: "#f8fafc",
    borderBottom: "2px solid #e2e8f0",
  },
  th: {
    padding: "12px 16px",
    textAlign: "left",
    fontSize: "12px",
    fontWeight: "600",
    color: "#475569",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  tableRow: {
    borderBottom: "1px solid #f1f5f9",
  },
  td: {
    padding: "16px",
    fontSize: "14px",
    color: "#334155",
  },
  tableBadge: {
    padding: "4px 10px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "500",
    display: "inline-block",
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
`;
document.head.appendChild(styleSheet);