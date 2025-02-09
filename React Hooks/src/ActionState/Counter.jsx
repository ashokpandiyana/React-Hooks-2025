"use client";
import { useActionState } from "react";

async function incrementCounter(prevState) {
  console.log("Counter", prevState);

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
  return { count: prevState.count + 1 };
}

export default function Counter() {
  const [state, dispatch] = useActionState(incrementCounter, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch()}>Increment</button>
    </div>
  );
}
