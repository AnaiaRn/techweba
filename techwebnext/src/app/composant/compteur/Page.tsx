"use client";

import { useState } from "react";

export default function Compteur() {
  const [count, setCount] = useState(1);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="flex  space-x-8">
      <button onClick={decrement} className="text-2xl cursor-pointer">
        -
      </button>
      <p className="text-lg">{count}</p>
      <button onClick={increment} className="text-xl cursor-pointer">
        +
      </button>
    </div>
  );
}
