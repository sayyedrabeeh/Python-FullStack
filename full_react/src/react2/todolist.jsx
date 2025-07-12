import React, { useState, useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [
          ...state.todos,
          { text: action.payload, id: Date.now(), completed: false },
        ],
      };
    case "delete":
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "edit":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.newtext }
            : todo
        ),
      };
    default:
      return state;
  }
}

const initialState = {
  todos: [],
};

function Todo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (text.trim()) {
      dispatch({ type: "addTodo", payload: text });
      setText("");
    }
  };

  const edit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const save = (id) => {
    dispatch({ type: "edit", payload: { id, newtext: editText } });
    setEditId(null);
    setEditText("");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Todo List with useReducer</h2>
      <div style={styles.inputSection}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter something"
          style={styles.input}
        />
        <button onClick={addTodo} style={styles.addButton}>ADD</button>
      </div>

      <ul style={styles.list}>
        {state.todos.map((item) => (
          <li key={item.id} style={styles.listItem}>
            {editId !== item.id ? (
              <>
                <span
                  style={{
                    ...styles.todoText,
                    textDecoration: item.completed ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
                <div style={styles.buttonGroup}>
                  <button
                    onClick={() => dispatch({ type: "toggle", payload: item.id })}
                    style={styles.smallButton}
                  >
                    Done
                  </button>
                  <button onClick={() => edit(item)} style={styles.smallButton}>
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch({ type: "delete", payload: item.id })}
                    style={styles.smallButton}
                  >
                    Delete
                  </button>
                </div>
              </>
            ) : (
              <>
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  style={styles.input}
                />
                <button onClick={() => save(item.id)} style={styles.smallButton}>
                  Save
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "500px",
    margin: "0 auto",
    padding: "20px",
    background: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputSection: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px 20px",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#fff",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  todoText: {
    flex: 1,
    marginRight: "10px",
  },
  buttonGroup: {
    display: "flex",
    gap: "5px",
  },
  smallButton: {
    padding: "5px 10px",
    background: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "12px",
    cursor: "pointer",
  },
};

export default Todo;
