import React, { useEffect } from "react";

const LiveChatMessage = ({ name, message }) => {
  useEffect(() => {}, []);
  return (
    <div className=" px-3 py-2 flex  ">
      <i className=" text-3xl fa-solid fa-user"></i>
      <h2 className="ml-2 whitespace-nowrap font-bold">{name}</h2>
      <span className="ml-2 text-gray-900">{message}</span>
    </div>
  );
};

export default LiveChatMessage;
