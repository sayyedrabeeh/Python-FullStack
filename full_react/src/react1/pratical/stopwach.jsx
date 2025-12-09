import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const reset = () => {
    setSeconds(0);
    setIsRunning(false);
  };

  const formatTime = (s) => {
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;

    const pad = (n) => n.toString().padStart(2, "0");

    return `${pad(h)}:${pad(m)}:${pad(sec)}`;
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "#f4f4f4",
      fontFamily: "Arial, sans-serif",
    },
    timeDisplay: {
      fontSize: "4rem",
      fontWeight: "bold",
      color: "#333",
      background: "#fff",
      padding: "20px 40px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      marginBottom: "20px",
    },
    buttonGroup: {
      display: "flex",
      gap: "10px",
    },
    button: {
      padding: "12px 24px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      cursor: "pointer",
      transition: "background 0.3s ease",
      color: "#fff",
    },
    start: {
      backgroundColor: "#4CAF50",
    },
    stop: {
      backgroundColor: "#e74c3c",
    },
    reset: {
      backgroundColor: "#3498db",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.timeDisplay}>{formatTime(seconds)}</div>

      <div style={styles.buttonGroup}>
        {isRunning ? (
          <>
            <button
              onClick={() => setIsRunning(false)}
              style={{ ...styles.button, ...styles.stop }}
            >
              Stop
            </button>
            <button
              onClick={reset}
              style={{ ...styles.button, ...styles.reset }}
            >
              Reset
            </button>
          </>
        ) : (
        <>
          <button
            onClick={() => setIsRunning(true)}
            style={{ ...styles.button, ...styles.start }}
          >
            Start
          </button>
          {seconds > 0 && (<button
              onClick={reset}
              style={{ ...styles.button, ...styles.reset }}
            >
              Reset
            </button>)}
        </>)}
      </div>
    </div>
  );
}

export default Timer;
