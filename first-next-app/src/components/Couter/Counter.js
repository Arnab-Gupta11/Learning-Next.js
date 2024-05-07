"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="my-5">Counter : {count}</h2>
      <button className="btn bg-teal-200 mr-10 text-black rounded-md px-3 py-1" onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button className="btn bg-teal-200 text-black rounded-md px-3 py-1" onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
