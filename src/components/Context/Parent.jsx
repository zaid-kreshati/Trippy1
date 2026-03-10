import React, { useContext, useState } from "react";
import Child from "./Child";
import { createContext } from "react";
export const NameContext = createContext();

const Parent = () => {
  const [name, setName] = useState("");
  console.log("parent updated")
  return (
    <NameContext.Provider value={{ name, setName }}>
      <div>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <Child />
      </div>
    </NameContext.Provider>
  );
};

export default Parent;
