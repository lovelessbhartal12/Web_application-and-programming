import { useState, useRef } from "react";

function FocusInput() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Focus Input Example</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={inputRef}
      />

      <br />
      <br />

      <button onClick={handleFocus}>Focus Input</button>

      <h3 style={{ marginTop: "20px" }}>Name: {name}</h3>
    </div>
  );
}

export default FocusInput;
