import React from "react";
import useStore from "../State/store";

const Hello = () => {
  const { bears, firstName, increasePopulation, updateFirstName } = useStore(
    (state) => ({
      bears: state.bears,
      firstName: state.firstName,
      increasePopulation: state.increasePopulation,
      updateFirstName: state.updateFirstName,
    })
  );

  return (
    <div>
      <p>Hello, we are {bears}</p>
      <p>My name is {firstName}</p>
      <input
        type="text"
        value={firstName}
        onChange={(e) => updateFirstName(e.target.value)}
      />
      <button onClick={() => increasePopulation(2)}>one up</button>
    </div>
  );
};

export default Hello;
