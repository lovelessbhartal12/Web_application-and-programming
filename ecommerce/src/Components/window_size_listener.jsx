import { useState, useEffect } from "react";

function WindowResizeListener() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>Window Resize Listener</h2>
      <p>Current Window Width: {width}px</p>
    </div>
  );
}

export default WindowResizeListener;
