import React from "react";

function Child({ userName }) {
  return (
    <div style={{ border: "2px solid red", padding: "15px", margin: "10px" }}>
      <h4>Child Component</h4>
      <p>Hello, {userName}! 👋</p>
    </div>
  );
}

export default Child;
