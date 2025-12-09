import React, { useState, createContext, useContext } from "react";

const TextContext = createContext();

// --------------------- Sibling 1 ---------------------
function Sibling1() {
  const { text, setText } = useContext(TextContext);

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>Enter Text</h2>

      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Write something..."
        style={styles.input}
      />
    </div>
  );
}

// --------------------- Sibling 2 ---------------------
function Sibling2() {
  const { text } = useContext(TextContext);

  return (
    <div style={styles.card}>
      <h2 style={styles.heading}>Output</h2>
      <p style={styles.output}>{text || "Nothing typed yet..."}</p>
    </div>
  );
}

// --------------------- Parent ---------------------
export default function Parent() {
  const [text, setText] = useState("");

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>React Context – Sibling Communication</h1>

      <TextContext.Provider value={{ text, setText }}>
        <Sibling1 />
        <Sibling2 />
      </TextContext.Provider>
    </div>
  );
}

// --------------------- Styles ---------------------
const styles = {
  wrapper: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },

  title: {
    marginBottom: "20px",
    color: "#2c3e50",
  },

  card: {
    padding: "20px",
    margin: "15px 0",
    backgroundColor: "#f8f9fa",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },

  heading: {
    marginBottom: "10px",
    color: "#333",
  },

  input: {
    padding: "10px 14px",
    width: "90%",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    marginTop: "10px",
    transition: "0.2s",
  },

  output: {
    fontSize: "18px",
    color: "#555",
    marginTop: "10px",
  },
};
