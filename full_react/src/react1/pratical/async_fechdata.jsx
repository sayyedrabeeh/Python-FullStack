import React, { useState, useEffect } from "react";

export default function Fetchdata() {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await fetch("https://dummyjson.com/quotes");
      const data = await res.json();
      setResult(data.quotes);
      setLoading(false);
    };
    fetchdata();
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Quote Collection</h1>
          <div style={styles.divider}></div>
          <p style={styles.subtitle}>Professional Insights & Wisdom</p>
        </header>

        {loading ? (
          <div style={styles.loading}>
            <div style={styles.spinner}></div>
            <p style={styles.loadingText}>Loading content...</p>
          </div>
        ) : (
          <div style={styles.grid}>
            {result.map((quote) => (
              <article key={quote.id} style={styles.card}>
                <div style={styles.cardContent}>
                  <svg style={styles.quoteIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 8.5C10 6.567 8.433 5 6.5 5S3 6.567 3 8.5c0 1.288.698 2.41 1.736 3.025C4.276 12.36 4 13.377 4 14.5c0 2.485 2.015 4.5 4.5 4.5h.5v-2h-.5c-1.379 0-2.5-1.121-2.5-2.5 0-1.125.75-2.158 1.824-2.473C9.283 11.59 10 10.188 10 8.5zM21 8.5C21 6.567 19.433 5 17.5 5S14 6.567 14 8.5c0 1.288.698 2.41 1.736 3.025-.46.835-.736 1.852-.736 2.975 0 2.485 2.015 4.5 4.5 4.5h.5v-2h-.5c-1.379 0-2.5-1.121-2.5-2.5 0-1.125.75-2.158 1.824-2.473C20.283 11.59 21 10.188 21 8.5z" fill="#1a365d"/>
                  </svg>
                  <blockquote style={styles.quote}>
                    <p style={styles.text}>{quote.quote}</p>
                  </blockquote>
                  <footer style={styles.footer}>
                    <cite style={styles.author}>{quote.author}</cite>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#f8fafc",
    padding: "60px 20px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "60px",
  },
  title: {
    fontSize: "36px",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
    gap: "24px",
  },
  card: {
    background: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: "8px",
    padding: "32px",
    transition: "all 0.2s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
  },
  cardContent: {
    position: "relative",
  },
  quoteIcon: {
    width: "32px",
    height: "32px",
    marginBottom: "16px",
    opacity: 0.4,
  },
  quote: {
    margin: "0 0 24px 0",
  },
  text: {
    fontSize: "17px",
    lineHeight: "1.7",
    color: "#334155",
    margin: 0,
    fontWeight: "400",
  },
  footer: {
    borderTop: "1px solid #f1f5f9",
    paddingTop: "16px",
  },
  author: {
    fontSize: "14px",
    color: "#3182ce",
    fontStyle: "normal",
    fontWeight: "500",
    display: "block",
  },
};

const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
  
  article:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.08) !important;
    border-color: #cbd5e1 !important;
  }
`;
document.head.appendChild(styleSheet);