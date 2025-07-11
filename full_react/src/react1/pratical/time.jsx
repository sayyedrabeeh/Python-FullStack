import React, { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f0f2f5",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#333",
    },
    time: {
      fontSize: "4rem",
      fontWeight: "bold",
      color: "#4CAF50",
      background: "#fff",
      padding: "20px 40px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Current Time</h1>
      <h2 style={styles.time}>{time}</h2>
    </div>
  );
}

export default Time;
