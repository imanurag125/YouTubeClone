import React from "react";

const Button = ({ name }) => {
  // console.log(name);
  return (
    <button className="px-2 py-2  whitespace-nowrap rounded-md font-semibold bg-gray-300">
      {name}
    </button>
  );
};

export default Button;
