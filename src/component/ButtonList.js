import React from "react";
import Button from "./Button";
const allItem = [
  "All",
  "Music",
  "Thrillers",
  "Kapil Sharma",
  "Bollywood Music",
  "Live",
  "Dramedy",
  "News",
  "Indian pop music",
  "Bhajan music",
  "Computer programming",
];
const ButtonList = () => {
  return (
    <div className="flex justify-evenly  mt-4 w-full">
      {allItem.map((item, idx) => {
        return <Button key={idx} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;
