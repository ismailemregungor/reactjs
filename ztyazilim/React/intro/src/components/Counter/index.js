import React, { useState } from "react";

import "./index.scss";

const Counter = ({ count: countProp }) => {
  const [count, setCount] = useState(countProp);

  const decreaseCount = () => {
    setCount((prevState) => prevState - 1);
  };

  const increaseCount = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div className="counter">
      <button className="counter-btn" onClick={decreaseCount}>
        -
      </button>
      <div className="counter-number">{count}</div>
      <button className="counter-btn" onClick={increaseCount}>
        +
      </button>
    </div>
  );
};

export default Counter;
