import { useEffect, useState } from "react";

export default function Fetchdata() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then(res => res.json())
      .then(r => setResult(r.recipes));
  }, []);

  // ------- Inline Styles -------
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    background: "#fafafa",
    minHeight: "100vh",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const listStyle = {
    listStyle: "none",
    padding: 0,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "20px",
  };

  const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    transition: "0.2s ease",
  };

  const ingredientList = {
    paddingLeft: "20px",
    marginTop: "5px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>🍽 Recipes</h1>

      <ul style={listStyle}>
        {result.map((item) => (
          <li
            key={item.id}
            style={cardStyle}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <h2>{item.name}</h2>
            <p>
              <strong>ID:</strong> {item.id}
            </p>

            <div>
              <strong>Ingredients:</strong>
              <ul style={ingredientList}>
                {item.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
