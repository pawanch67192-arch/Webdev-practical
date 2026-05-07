import React from "react";
import "./App.css";

import Counter from "./components/Counter";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="container">
      <h1>Question-1</h1>

      <Counter />

      <Parent />
    </div>
  );
}

export default App;