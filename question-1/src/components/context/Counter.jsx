import React, { useState } from "react";

function Counter() {
  // State Variable
  const [count, setCount] = useState(0);

  // Increment Function
  const increment = () => {
    setCount(count + 1);
  };

  // Decrement Function
  const decrement = () => {
    setCount(count - 1);
  };

  // Reset Function
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="box">
      <h2>Counter Application</h2>

      <h1>{count}</h1>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;