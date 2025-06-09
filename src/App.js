import React, { useState } from "react";
import axios from "axios";

function App() {
  const [email, setEmail] = useState("");
  const [threshold, setThreshold] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8769/users/register", {
        email,
        tempThreshold: parseFloat(threshold)
      });
      setMessage("🌤️ Alert registered successfully!");
    } catch (err) {
      setMessage("❌ Error: " + (err.response?.data || "Something went wrong."));
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1950&q=80')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        borderRadius: "15px",
        padding: "30px",
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
        width: "100%",
        maxWidth: "400px"
      }}>
        <h2 style={{ textAlign: "center", color: "#2c3e50" }}>🌦️ Set Weather Alert</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#34495e" }}>📧 Email:</label><br />
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "#34495e" }}>🌡️ Temperature Threshold (°C):</label><br />
            <input
              type="number"
              value={threshold}
              required
              onChange={(e) => setThreshold(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc"
              }}
            />
          </div>
          <button type="submit" style={{
            padding: "10px 20px",
            width: "100%",
            background: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}>
            🚨 Set Alert
          </button>
        </form>
        {message && (
          <p style={{
            marginTop: "20px",
            textAlign: "center",
            color: "#2c3e50",
            fontWeight: "bold"
          }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
