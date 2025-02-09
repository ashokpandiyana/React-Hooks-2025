import { useInsertionEffect } from "react";

export default function DynamicStyles() {
  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        background-color: lightblue;
      }
      h1 {
        color: darkblue;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Cleanup on unmount
    };
  }, []);

  return <h1>Hello, Styled World!</h1>;
}
