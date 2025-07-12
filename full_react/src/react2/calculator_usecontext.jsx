import React, { createContext, useContext, useState } from "react";

const calcContext = createContext();

function CalcProvider({ children }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const add = () => setResult(num1 + num2);
  const sub = () => setResult(num1 - num2);
  const mul = () => setResult(num1 * num2);
  const div = () => setResult(num2 !== 0 ? num1 / num2 : "change zero to another number");

  return (
    <calcContext.Provider value={{ num1, num2, result, setNum1, setNum2, add, sub, mul, div }}>
      {children}
    </calcContext.Provider>
  );
}

function Input_output() {
  const { setNum1, setNum2, result } = useContext(calcContext);

  return (
    <div style={styles.inputOutput}>
      <h1 style={styles.heading}>Calculator with context</h1>
      <h2 style={styles.result}>Result: {result}</h2>
      <input
        onChange={(e) => setNum1(Number(e.target.value))}
        type="number"
        placeholder="Enter 1st number"
        style={styles.input}
      />
      <input
        onChange={(e) => setNum2(Number(e.target.value))}
        type="number"
        placeholder="Enter 2nd number"
        style={styles.input}
      />
    </div>
  );
}

function Buttons() {
  const { add, sub, mul, div } = useContext(calcContext);

  return (
    <div style={styles.buttonContainer}>
      <button onClick={add} style={styles.button}>ADD</button>
      <button onClick={sub} style={styles.button}>SUB</button>
      <button onClick={mul} style={styles.button}>MUL</button>
      <button onClick={div} style={styles.button}>DIV</button>
    </div>
  );
}

function Calc() {
  return (
    <div style={styles.calcWrapper}>
      <CalcProvider>
        <Input_output />
        <Buttons />
      </CalcProvider>
    </div>
  );
}

const styles = {
  calcWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "#f0f0f0",
    fontFamily: "Arial, sans-serif",
  },
  inputOutput: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    marginBottom: "20px",
    textAlign: "center",
  },
  heading: {
    margin: "0 0 10px 0",
  },
  result: {
    margin: "10px 0",
    color: "#333",
  },
  input: {
    width: "80%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    background: "#007BFF",
    color: "white",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default Calc;
