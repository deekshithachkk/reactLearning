import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [items, setItem] = useState([]);
  const [text, setText] = useState(" ");
  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      <button
        onClick={() => setCount((count) => count - 1)}
        disabled={count < 0}
      >
        Decrement
      </button>
      <h2 data-testid="counter">{count}</h2>
      <h4 data-testid="item-title">Add Item to the List</h4>
      <input
        placeholder="Enter the Item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setItem([...items, text]);
          setText(" ");
        }}
      >
        add item
      </button>
      <ul>
        {items.map((obj) => (
          <li key={obj}>{obj}</li>
        ))}
      </ul>
    </div>
  );
}

export default Counter;
