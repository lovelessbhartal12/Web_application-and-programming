import React from "react";

function Card({ children }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        margin: "10px 0",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      {children}
    </div>
  );
}

export default Card;
