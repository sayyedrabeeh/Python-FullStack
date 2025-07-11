import React, { useState } from "react";

function Match() {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const matching = text1 === text2;

  const styles = {
    container: {
      maxWidth: "400px",
      margin: "50px auto",
      padding: "20px",
      background: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      fontSize: "16px",
    },
    message: {
      padding: "10px",
      marginBottom: "20px",
      borderRadius: "5px",
      color: matching ? "#27ae60" : "#e74c3c",
      background: matching ? "#eafaf1" : "#fdecea",
      border: `1px solid ${matching ? "#27ae60" : "#e74c3c"}`,
    },
  };

  return (
    <div style={styles.container}>
      {text1 && text2 && (
        <div style={styles.message}>
          <h2>{matching ? "Both are matched" : "Not matched"}</h2>
        </div>
      )}
      <input
        placeholder="Enter first text"
        onChange={(e) => setText1(e.target.value)}
        value={text1}
        style={styles.input}
      />
      <input
        placeholder="Enter second text"
        onChange={(e) => setText2(e.target.value)}
        value={text2}
        style={styles.input}
      />
    </div>
  );
}

export default Match;
