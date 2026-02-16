import React, { useState } from "react";
import Parent from "./Parent";

function Grandparent() {
  const [userName] = useState("John Doe");

  return (
    <div style={{ border: "2px solid blue", padding: "15px", margin: "10px" }}>
      <h2>Grandparent Component</h2>
      <p>State userName: {userName}</p>

      <Parent userName={userName} />
    </div>
  );
}

export default Grandparent;
