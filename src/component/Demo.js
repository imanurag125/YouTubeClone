import React, { useMemo, useState } from "react";
import { findPrime } from "../config";
const Demo = () => {
  const [text, setText] = useState(0);
  const [isdark, setdark] = useState(false);
  const prime = useMemo(() => findPrime(text), [text]);
  console.log("Rendering..");
  return (
    <div
      className={
        "w-96 h-96  border-2 border-red-500 m-4 p-2 " +
        (isdark && "bg-black text-white")
      }
    >
      <div>
        <input
          className={"p-2 border border-b-black w-72 text-black"}
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <h1 className="font-bold">{prime}</h1>
        <button
          onClick={() => setdark(!isdark)}
          className="px-4 py-3 border-2 border-red-600"
        >
          {isdark ? "Day Mode" : "Night Mode"}
        </button>
      </div>
    </div>
  );
};

export default Demo;
