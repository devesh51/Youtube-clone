import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import store from "../Utils/store";
import { generateRandomName, MakeRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const [MyMessage, setMyMessage] = useState();
  const dispatch = useDispatch();
  const msg = useSelector((store) => store.chat.messages);
  console.log(msg);
  useEffect(() => {
    const timer = setInterval(() => {
      // Api polling
      // console.log("api polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: MakeRandomMessage(32),
        })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black w-[471px] h-[600px] bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
        <div>
          {msg.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className=" w-[471px] p-2 ml-2 border border-black rounded-lg "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Devesh",
              message: MyMessage,
            })
          );
          setMyMessage("");
        }}
      >
        <input
          className="w-[371px]  px-2 border border-black rounded-lg"
          type="text"
          value={MyMessage}
          onChange={(e) => {
            setMyMessage(e.target.value);
          }}
        />
        <button className="px-3 mx-2 rounded-lg bg-green-100 hover:bg-green-300">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
