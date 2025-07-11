import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const inc = () => setCount(prev => prev + 1);
    const dec = () => {
        if (count > 0) {
            setCount(prev => prev - 1);
        }
    };
    const reset = () => setCount(0);

    const buttonStyle = {
        backgroundColor: "#4CAF50",
        border: "none",
        color: "white",
        padding: "12px 24px",
        margin: "0 10px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "16px",
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ fontSize: "2.5rem", color: "#333" }}>Count: {count}</h1>
            <div>
                <button style={buttonStyle} onClick={inc}>Increment</button>
                <button style={{ ...buttonStyle, backgroundColor: "#f44336" }} onClick={dec}>Decrement</button>
                <button style={{ ...buttonStyle, backgroundColor: "#2196F3" }} onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;
