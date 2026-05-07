import React from "react";
import UserContext from "../context/UserContext";
import Child from "./Child";

function Parent() {
  const user = "Pawan Chauhan";

  return (
    <div className="box">
      <h2>Context API Example</h2>

      {/* Providing Data */}
      <UserContext.Provider value={user}>
        <Child />
      </UserContext.Provider>
    </div>
  );
}

export default Parent;