import React from "react";
import Button from "./Button";

const buttonlist = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "News",
  "Soccer",
  "Cooking",
  "Javascript",
  "Watched",
  "New to you",
  "Mutual Funds",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonlist.map((item) => (
        <div key={item}>
          <Button name={item} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
