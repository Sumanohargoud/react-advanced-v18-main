import React, { useState } from "react";

const UseStateBasics = () => {
  let [name, setName] = useState("Manohar");
  const handleClick = () => {
    if (name === "Manohar") {
      setName("Rakesh");
    } else {
      setName("Manohar");
    }
  };
  return (
    <>
      <h2>useState basic example</h2>
      <h1>{name}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change My Name
      </button>
    </>
  );
};

export default UseStateBasics;
