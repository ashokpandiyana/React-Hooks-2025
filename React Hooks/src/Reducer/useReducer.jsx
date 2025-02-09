import { useReducer } from "react";

// Reducer function to manage form state
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return { name: "", email: "" };
    default:
      return state;
  }
};

export default function Form() {
  const [formState, dispatch] = useReducer(formReducer, {
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <input
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
