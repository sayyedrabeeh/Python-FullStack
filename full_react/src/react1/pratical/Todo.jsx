import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [editindex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");
  const count = todo.length;

  const addtodo = () => {
    if (text.trim() === "") return;
    const newtext = {
        text:text,
        time:new Date().toLocaleString()
    }
    setTodo([...todo, newtext]);
    setText("");
  };

  const delete1 = (index) => {
    const todos = todo.filter((_, i) => i !== index);
    setTodo(todos);
  };

  const edit = (index) => {
    setEditIndex(index);
    setEditText(todo[index].text);
  };

  const save = () => {
    const updated = [...todo];
    updated[editindex].text = editText;
    setTodo(updated);
    setEditIndex(null);
    setEditText("");
  };

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "50px auto",
      padding: "30px",
      background: "#f0f2f5",
      boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
      borderRadius: "10px",
      fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    },
    title: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#2c3e50",
    },
    counter: {
      marginBottom: "10px",
      fontSize: "18px",
      color: "#555",
    },
    inputGroup: {
      display: "flex",
      gap: "10px",
      marginBottom: "20px",
    },
    input: {
      flex: 1,
      padding: "12px",
      fontSize: "16px",
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
    button: {
      padding: "12px 20px",
      backgroundColor: "#4CAF50",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    list: {
      listStyle: "none",
      padding: 0,
    },
    item: {
      background: "#fff",
      marginBottom: "12px",
      padding: "15px",
      borderRadius: "8px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    },
    buttonGroup: {
      display: "flex",
      gap: "8px",
    },
    deleteButton: {
      backgroundColor: "#e74c3c",
      color: "white",
      border: "none",
      padding: "8px 16px",
      cursor: "pointer",
      borderRadius: "6px",
      transition: "background 0.3s ease",
    },
    editButton: {
      backgroundColor: "#3498db",
      color: "white",
      border: "none",
      padding: "8px 16px",
      cursor: "pointer",
      borderRadius: "6px",
      transition: "background 0.3s ease",
    },
    saveButton: {
      marginLeft: "8px",
      padding: "8px 16px",
      backgroundColor: "#27ae60",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "6px",
      transition: "background 0.3s ease",
    },
    editInput: {
      padding: "10px",
      fontSize: "16px",
      flex: 1,
      borderRadius: "6px",
      border: "1px solid #ccc",
    },
     time: {
      fontSize: "12px",
      color: "#777",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Todo App</h1>
      <div style={styles.counter}>Total Todos: {count}</div>

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
              <div style={{ display: "flex", alignItems: "center", width: "100%", gap: "10px" }}>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={styles.editInput}
                />
                <button onClick={save} style={styles.saveButton}>Save</button>
              </div>
            ) : (
              <>
                <span>{item.text}</span>
                <div style={styles.buttonGroup}>
                  <button onClick={() => delete1(index)} style={styles.deleteButton}>Delete</button>
                  <button onClick={() => edit(index)} style={styles.editButton}>Edit</button>
                </div>
                <div style={styles.time}>Added on: {item.time}</div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
