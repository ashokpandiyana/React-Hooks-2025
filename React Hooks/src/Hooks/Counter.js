import { useState, useEffect, useDebugValue } from "react";

const CustomCounter = (butonValue) => {
  let [count, setCount] = useState(0);
  const [btnClicked, setBtnClicked] = useState(butonValue);
  useDebugValue(`Current Count: ${count}`);
  useEffect(() => {
    let interval;
    if (btnClicked == "Start") {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    } else if (btnClicked == "Stop") {
      clearInterval(interval);
      setCount(0);
    } else if (btnClicked == "Pause") {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [btnClicked]);
  return [count, setBtnClicked];
};

export { CustomCounter };
