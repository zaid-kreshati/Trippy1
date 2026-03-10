import React, { useEffect, useRef, useState } from "react";

const Test = () => {
  const paragraph = useRef(null)
  const[counter, setCounter] = useState(0)
  const increment= () => {
    setCounter(counter+1)
    console.log("useState" + counter)
    console.log(  paragraph.current.style)

  }

  useEffect (() => {
    console.log("useEffect")
  },[counter])

  return (
    <div>
      <p ref={paragraph}>{counter}</p>
      <button onClick={() => increment()}>incre</button>
    </div>
  );
};

export default Test;
