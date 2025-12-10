import React, { useState } from "react";

export default function Addtwo() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => {
    setResult(Number(num1) + Number(num2));
  };

  const containerStyle = {
    maxWidth: "320px",
    margin: "40px auto",
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0px 4px 14px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#4a90e2",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.25s",
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>
        Result: {result}
      </h1>

      <input
        style={inputStyle}
        onChange={(e) => setNum1(e.target.value)}
        value={num1}
        placeholder="Write num1"
      />

      <input
        style={inputStyle}
        onChange={(e) => setNum2(e.target.value)}
        value={num2}
        placeholder="Write num2"
      />

      <button style={buttonStyle} onClick={add}>
        Add
      </button>
    </div>
  );
}
