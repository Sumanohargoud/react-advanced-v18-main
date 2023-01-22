import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setpeople] = useState({
    name: "Manohar",
    number: 384,
    message: "Fuck you All",
  });
  const handleClick = () => {
    setpeople({ ...people, message: "Some of them Only!" });
  };
  return (
    <>
      <h1>{people.name}</h1>
      <h1>{people.number}</h1>
      <h1>{people.message}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
