import { useState, useCallback } from "react";

function CounterCallBack() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increment = useCallback(() => {
    setCount((prev) => prev + step);
  }, [step]);

  return (
    <div>
      <p>Count callback: {count}</p>
      <button onClick={increment}>Increment by {step}</button>
      <button onClick={() => setStep(step + 1)}>Increase Step</button>
    </div>
  );
}

export default CounterCallBack;
