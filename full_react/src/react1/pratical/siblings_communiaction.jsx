import React, { useState } from "react";

// Sibling1: Input field
function Sibling1({ updateText }) {
  return (
    <div style={styles.sibling}>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => updateText(e.target.value)}
        style={styles.input}
      />
    </div>
  );
}

// Sibling2: Display output
function Sibling2({ text }) {
  return (
    <div style={styles.sibling}>
      <h2 style={styles.output}>Output: {text}</h2>
    </div>
  );
}

// Parent: Holds shared state
export default function Parent() {
  const [text, setText] = useState("");

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Sibling Communication Example</h1>
      <Sibling1 updateText={setText} />
      <Sibling2 text={text} />
    </div>
  );
}

// Inline styles
const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
  },
  title: {
    marginBottom: "30px",
    color: "#333",
  },
  sibling: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "80%",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #aaa",
  },
  output: {
    color: "#555",
  },
};
