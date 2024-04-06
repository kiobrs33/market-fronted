import { useState } from "react";
import { Counter } from "../components/Counter";

export const CounterApp = () => {
  const [value, setValue] = useState(0);

  const handleAddValue = () => {
    setValue(value + 1);
  };

  const handleRestValue = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <Counter value={value} />
      <button onClick={handleAddValue}>Add</button>
      <button onClick={handleRestValue}>Rest</button>
    </div>
  );
};
