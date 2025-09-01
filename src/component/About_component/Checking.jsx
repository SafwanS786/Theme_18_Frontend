  import React, { useState } from "react";

export default function Checking() {
  const [showSlider, setShowSlider] = useState(false);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Show Slider State Test</h2>

      {/* Button to toggle state */}
      <button
        onClick={() => setShowSlider(!showSlider)}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          background: showSlider ? "tomato" : "green",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        {showSlider ? "Hide Slider" : "Show Slider"}
      </button>

      {/* Display current state */}
      <p style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
        Current state: <b>{showSlider.toString()}</b>
      </p>

      {/* Conditionally render slider */}
      {showSlider && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "2px dashed #333",
            borderRadius: "10px",
          }}
        >
          <h3>This is the Slider Component</h3>
          <p>It only shows when showSlider = true</p>
        </div>
      )}
    </div>
  );
}
