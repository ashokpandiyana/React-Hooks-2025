import { useRef, useLayoutEffect, useState } from "react";

export default function LayoutEffect() {
  const boxRef = useRef(null);
  const [expanded, setExpanded] = useState(false);

  useLayoutEffect(() => {
    if (expanded) {
      boxRef.current.style.width = "300px";
      boxRef.current.style.backgroundColor = "blue";
    } else {
      boxRef.current.style.width = "100px";
      boxRef.current.style.backgroundColor = "red";
    }
  }, [expanded]);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "red",
          transition: "width 0.3s",
        }}
      />
      <button onClick={() => setExpanded(!expanded)}>Toggle Size</button>
    </div>
  );
}
