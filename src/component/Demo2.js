import React, { useState, useRef } from "react";

const Demo2 = () => {
  const [isdark, setdark] = useState(false);
  const refVar = useRef(0);
  let x = 10;
  console.log(x);
  return (
    <div
      className={
        "m-4 p-2  border-black w-96 h-96 " +
        (isdark ? "bg-black text-white" : "bg-slate-100 text-black")
      }
    >
      <h1 className="font-bold text-xl">Let val: {x}</h1>
      <h1 className="font-bold text-xl">UseRef val: {refVar.current}</h1>
      <button
        className="px-4 py-5 bg-red-500"
        onClick={() => {
          ++x;
          refVar.current++;
          console.log(x);
        }}
      >
        Inc
      </button>

      <button
        onClick={() => setdark(!isdark)}
        className="px-4 py-3 border-2 border-red-600"
      >
        {isdark ? "Day Mode" : "Night Mode"}
      </button>
    </div>
  );
};

export default Demo2;
