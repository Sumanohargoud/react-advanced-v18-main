import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call useEffect");
    document.title = `New messages(${value})`;
  }, [value]);
  useEffect(() => {
    console.log("usEffect 2");
  }, []);
  console.log("call component");
  return (
    <>
      <h1>Counter</h1>
      <h1>{value}</h1>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click
      </button>
    </>
  );
};

export default UseEffectBasics;
