import React from "react";

const ErrorExample = () => {
  let title = "Hello Mano";
  const handleClick = () => {
    title = "Hello World!";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>useState error example</h2>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
