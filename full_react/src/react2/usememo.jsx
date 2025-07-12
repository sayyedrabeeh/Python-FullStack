import React, { useMemo, useState } from "react";

function Addtwonum() {
  const [num1, setNum1] = useState(0);

  const result = useMemo(() => {
    return num1 * num1;
  }, [num1]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Square Calculator</h1>
      <h2 style={styles.result}>Result: {result}</h2>
      <input
        onChange={(e) => setNum1(Number(e.target.value))}
        type="number"
        placeholder="Enter a number"
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    background: "#fff",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    marginBottom: "10px",
    color: "#333",
  },
  result: {
    margin: "20px 0",
    fontSize: "20px",
    color: "#007BFF",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
};

export default Addtwonum;
