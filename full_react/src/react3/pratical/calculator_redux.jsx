import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

 const calcSlice = createSlice({
  name: "Calc",
  initialState: {
    result: 0,
    num1: 0,
    num2: 0,
  },
  reducers: {
    add: (state) => {
      state.result = state.num1 + state.num2;
    },
    sub: (state) => {
      state.result = state.num1 - state.num2;
    },
    mul: (state) => {
      state.result = state.num1 * state.num2;
    },
    div: (state) => {
      state.result = state.num2 !== 0 ? state.num1 / state.num2 : "Error";
    },
    setNum1: (state, action) => {
      state.num1 = Number(action.payload);
    },
    setNum2: (state, action) => {
      state.num2 = Number(action.payload);
    },
  },
});

const { add, sub, mul, div, setNum1, setNum2 } = calcSlice.actions;

const store = configureStore({
  reducer: {
    Calc: calcSlice.reducer,
  },
});

export { store }

function Calculator() {
  const { num1, num2, result } = useSelector((state) => state.Calc);
  const dispatch = useDispatch();

  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    textAlign: "center",
    background: "#ffffff",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
    width: "80%",
    border: "1px solid #ccc",
    borderRadius: "8px",
    outline: "none",
  };

  const buttonGroupStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px",
    marginTop: "20px",
  };

  const buttonStyle = {
    padding: "12px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    background: "linear-gradient(to right, #4CAF50, #45A049)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const buttonSecondary = {
    ...buttonStyle,
    background: "linear-gradient(to right, #2196F3, #1976D2)",
  };

  const buttonDanger = {
    ...buttonStyle,
    background: "linear-gradient(to right, #f44336, #e53935)",
  };

  return (
    <div style={containerStyle}>
      <h2>Redux Calculator</h2>

      <input
        style={inputStyle}
        type="number"
        
        onChange={(e) => dispatch(setNum1(e.target.value))}
        placeholder="Enter num1"
      />

      <input
        style={inputStyle}
        type="number"
        
        onChange={(e) => dispatch(setNum2(e.target.value))}
        placeholder="Enter num2"
      />

      <div style={buttonGroupStyle}>
        <button style={buttonStyle} onClick={() => dispatch(add())}>
          ➕ Add
        </button>
        <button style={buttonSecondary} onClick={() => dispatch(sub())}>
          ➖ Subtract
        </button>
        <button style={buttonStyle} onClick={() => dispatch(mul())}>
          ✖️ Multiply
        </button>
        <button style={buttonDanger} onClick={() => dispatch(div())}>
          ➗ Divide
        </button>
      </div>

      <h3 style={{ marginTop: "20px", color: "#333" }}>Result: {result}</h3>
    </div>
  );
}
export default Calculator