import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [editindex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const addtodo = () => {
    if (text.trim() === "") return;
    setTodo([...todo, text]);
    setText("");
  };

  const delete1 = (index) => {
    const todos = todo.filter((_, i) => i !== index);
    setTodo(todos);
  };

  const edit = (index) => {
    setEditIndex(index);
    setEditText(todo[index]);
  };

  const save = () => {
    const updated = [...todo];
    updated[editindex] = editText;
    setTodo(updated);
    setEditIndex(null);
    setEditText("");
  };

  // Inline styles as objects
  const styles = {
    container: {
      maxWidth: "500px",
      margin: "40px auto",
      padding: "20px",
      background: "#ffffff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      borderRadius: "8px",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      textAlign: "center",
      color: "#333",
    },
    inputGroup: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "10px",
      fontSize: "16px",
    },
    button: {
      padding: "10px 20px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    item: {
      background: "#f9f9f9",
      marginBottom: "10px",
      padding: "12px",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    buttonGroup: {
      display: "flex",
      gap: "8px",
    },
    deleteButton: {
      backgroundColor: "#e74c3c",
      color: "white",
      border: "none",
      padding: "5px 12px",
      cursor: "pointer",
      borderRadius: "4px",
    },
    editButton: {
      backgroundColor: "#3498db",
      color: "white",
      border: "none",
      padding: "5px 12px",
      cursor: "pointer",
      borderRadius: "4px",
    },
    saveButton: {
      marginLeft: "8px",
      padding: "8px 14px",
      backgroundColor: "#27ae60",
      color: "white",
      border: "none",
      cursor: "pointer",
    },
    editInput: {
      padding: "8px",
      fontSize: "16px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo App</h1>
      <div style={styles.inputGroup}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write next todo item"
          style={styles.input}
        />
        <button onClick={addtodo} style={styles.button}>Add</button>
      </div>

      <ul style={styles.list}>
        {todo.map((item, index) => (
          <li key={index} style={styles.item}>
            {editindex === index ? (
              <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={styles.editInput}
                />
                <button onClick={save} style={styles.saveButton}>Save</button>
              </div>
            ) : (
              <>
                <span>{item}</span>
                <div style={styles.buttonGroup}>
                  <button onClick={() => delete1(index)} style={styles.deleteButton}>Delete</button>
                  <button onClick={() => edit(index)} style={styles.editButton}>Edit</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
