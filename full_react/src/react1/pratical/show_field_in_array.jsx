const users = [
  { id: 1, name: "Rabeeh", age: 20 },
  { id: 2, name: "Alex", age: 25 },
  { id: 3, name: "Sam", age: 22 }
];

export default function Arr() {
  return (
    <div style={{
      maxWidth: "450px",
      margin: "40px auto",
      fontFamily: "Inter, sans-serif",
    }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map((item) => (
          <li
            key={item.id}
            style={{
              padding: "18px 24px",
              marginBottom: "14px",
              borderRadius: "12px",
              background: "#ffffff",
              border: "1px solid #e5e5e5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ fontSize: "14px", color: "#888" }}>USER #{item.id}</div>
            <div style={{ fontSize: "20px", fontWeight: 600 }}>{item.name}</div>
            <div style={{ color: "#555" }}>Age: {item.age}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
