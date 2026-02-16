import React from "react";
import Child from "./Child";

function Parent({ userName }) {
  return (
    <div style={{ border: "2px solid green", padding: "15px", margin: "10px" }}>
      <h3>Parent Component</h3>
      <p>Received from Grandparent: {userName}</p>

      <Child userName={userName} />
    </div>
  );
}

export default Parent;
