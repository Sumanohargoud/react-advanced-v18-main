import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexIncrement = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section>
        <h1>Counter</h1>
        <h1>{value}</h1>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value + 1)}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setValue(value - 1)}
        >
          Decrement
        </button>
        <button type="button" className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </section>
      <section>
        <h1>Complex Counter</h1>
        <h1>{value}</h1>

        <button type="button" className="btn" onClick={complexIncrement}>
          Complex Increment
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
