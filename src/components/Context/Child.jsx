import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { NameContext } from "./Parent";

const Child = () => {
  const { name } = useContext(NameContext);

  console.log("child updated");
  return (
    <div>
      <h1>{name}</h1>
      <Card />
    </div>
  );
};

export default Child;
