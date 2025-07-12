import React from "react";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";

const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incremet: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

const { incremet, decrement, reset } = counterSlice.actions;

const store = configureStore({
  reducer: {
    Counter: counterSlice.reducer,
  },
});
export { store }

function Display() {
  const count = useSelector((state) => state.Counter.count);
  const dispatch = useDispatch();

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
  };

  const countStyle = {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  };

  const buttonGroupStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    color: "white",
    background: "linear-gradient(to right, #4CAF50, #45A049)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const resetButtonStyle = {
    ...buttonStyle,
    background: "linear-gradient(to right, #f44336, #e53935)",
  };

  return (
    <div style={containerStyle}>
      <h2 style={countStyle}>Count: {count}</h2>

      <div style={buttonGroupStyle}>
        <button
          style={buttonStyle}
          onClick={() => dispatch(incremet())}
        >
          Increment
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          style={resetButtonStyle}
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Display
