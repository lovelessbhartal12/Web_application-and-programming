import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Counter: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={{ margin: "5px", padding: "8px 15px" }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: "5px", padding: "8px 15px" }}
      >
        Decrement
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: "5px", padding: "8px 15px" }}
      >
        Reset
      </button>
      <h2>loblesh bhatal</h2>
    </div>
  );
}

export default Counter;
