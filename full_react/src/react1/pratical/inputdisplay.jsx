import React, { useState } from "react";

function InputDisplay() {
    const [inputValue, setInputValue] = useState('');

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        fontFamily: "Arial, sans-serif",
        color: "#fff",
    };

    const inputStyle = {
        padding: "12px",
        width: "300px",
        borderRadius: "8px",
        border: "none",
        fontSize: "16px",
        marginTop: "20px",
    };

    const boxStyle = {
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
    };

    return (
        <div style={containerStyle}>
            <div style={boxStyle}>
                {inputValue ? (
                    <h1>You entered: {inputValue}</h1>
                ) : (
                    <h1>Please enter something below</h1>
                )}
                <input
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter your script..."
                    style={inputStyle}
                    value={inputValue}
                />
            </div>
        </div>
    );
}

export default InputDisplay;
