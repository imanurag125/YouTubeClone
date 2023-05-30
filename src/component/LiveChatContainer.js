import React, { useEffect, useState } from "react";
import LiveChatMessage from "./LiveChatMessage";
import { addMessage, clearMessage } from "../utils/slice/chatSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { generateRandomName } from "../config";

const LiveChatContainer = () => {
  const [chatMessage, setChatMessage] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // let name = generateRandomName();
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: "Lorom Ipsum Dolor Site Amit",
        })
      );
    }, 2000);
    return () => {
      clearInterval(intervalId);
      dispatch(clearMessage());
    };
  }, []);

  return (
    <div className="w-full bg-slate-200 h-[580px]  border-black border p-2 ">
      <div className=" h-[500px] overflow-y-auto flex flex-col-reverse">
        {messages.map((msg, id) => (
          <LiveChatMessage key={id} name={msg.name} message={msg.message} />
        ))}
      </div>

      {/* User Chat Box */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full p-2 ml-2  flex justify-between"
      >
        <input
          onChange={(e) => setChatMessage(e.target.value)}
          value={chatMessage}
          className="grow px-2 py-2 font-medium rounded-md"
          type="text"
        />
        <button
          onClick={() => {
            dispatch(addMessage({ name: "Anurag", message: chatMessage }));
            setChatMessage("");
          }}
          className="px-6 rounded-lg mx-2 font-bold bg-green-100"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChatContainer;
