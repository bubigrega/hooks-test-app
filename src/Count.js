import React, { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>Add 1</button>
    </div>
  );
};

export default Count;
