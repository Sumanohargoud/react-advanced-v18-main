import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [value, setValue] = useState(window.innerWidth);

  const checkSize = () => {
    setValue(window.innerWidth);
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <>
      <h1>Window size</h1>
      <h1>{value} PX</h1>
    </>
  );
};

export default UseEffectCleanup;
