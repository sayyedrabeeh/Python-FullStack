import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "setnum1":
      return { ...state, num1: action.payload };
    case "setnum2":
      return { ...state, num2: action.payload };
    case "add":
      return { ...state, result: state.num1 + state.num2 };
    case "sub":
      return { ...state, result: state.num1 - state.num2 };
    case "mul":
      return { ...state, result: state.num1 * state.num2 };
    case "div":
      return { ...state, result: state.num2 !== 0 ? state.num1 / state.num2 : "Error" };
    default:
      return state;
  }
}

function Calc() {
  const [state, dispatch] = useReducer(reducer, { num1: 0, num2: 0, result: 0 });

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Calculator With UseReducer</h3>
      <h2 style={styles.result}>Result: {state.result}</h2>

      <input
        onChange={(e) => dispatch({ type: "setnum1", payload: Number(e.target.value) })}
        type="number"
        placeholder="Enter 1st number"
        style={styles.input}
      />

      <input
        onChange={(e) => dispatch({ type: "setnum2", payload: Number(e.target.value) })}
        type="number"
        placeholder="Enter 2nd number"
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button onClick={() => dispatch({ type: "add" })} style={styles.button}>ADD</button>
        <button onClick={() => dispatch({ type: "sub" })} style={styles.button}>SUB</button>
        <button onClick={() => dispatch({ type: "mul" })} style={styles.button}>MUL</button>
        <button onClick={() => dispatch({ type: "div" })} style={styles.button}>DIV</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    marginTop: "50px",
  },
  heading: {
    marginBottom: "10px",
  },
  result: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "10px",
  },
  button: {
    flex: "1 1 45%",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default Calc;
