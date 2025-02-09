import { useRef, useImperativeHandle, forwardRef, useState } from "react";

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [value, setValue] = useState(""); // State to manage the input value

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus(); // Focus the input field
    },
    clear: () => {
      setValue(""); // Clear the input value using state
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      value={value} // Bind the input value to the state
      onChange={(e) => setValue(e.target.value)} // Update state on change
      {...props}
    />
  );
});

// Set the displayName explicitly
CustomInput.displayName = "CustomInput";

export default CustomInput;
