import React from "react";
import { createSlice, combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { useDispatch, useSelector } from "react-redux";

 
const counterSlice = createSlice({
  name: "Counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

const { increment, decrement, reset } = counterSlice.actions;

const rootReducer = combineReducers({
  Counter: counterSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

 
function CounterDisplay() {
  const value = useSelector((state) => state.Counter.value);
  const dispatch = useDispatch();

  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    marginBottom: "10px",
    fontSize: "28px",
    color: "#333",
  };

  const countStyle = {
    fontSize: "24px",
    margin: "20px 0",
  };

  const buttonStyle = {
    padding: "12px 20px",
    margin: "5px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  };

  const incrementButton = {
    ...buttonStyle,
    background: "linear-gradient(to right, #4CAF50, #45A049)",
  };

  const decrementButton = {
    ...buttonStyle,
    background: "linear-gradient(to right, #f39c12, #e67e22)",
  };

  const resetButton = {
    ...buttonStyle,
    background: "linear-gradient(to right, #e74c3c, #c0392b)",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Counter App</h1>
      <h2 style={countStyle}>Count: {value}</h2>

      <button style={incrementButton} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <button style={decrementButton} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button style={resetButton} onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export { persistor, store };
export default CounterDisplay;
