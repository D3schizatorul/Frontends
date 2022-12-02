import React from "react";
import Image from "next/image";
import chatBackgroundLarge from "../assets/chat-background.jpg";
import Message from "./Message";

const messages = [
  {
    name: "Mbappe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    timestamp: "10:35",
  },
  {
    name: "",
    message: "Morbi condimentum",
    timestamp: "10:35",
  },
  {
    name: "Mbappe",
    message: "True",
    timestamp: "10:35",
  },
  {
    name: "",
    message:
      "Nunc metus sem, imperdiet ut felis et, rhoncus varius metus. Sed et pharetra dui. Vivamus maximus mi at purus finibus cursus.",
    timestamp: "10:36",
  },
  {
    name: "Mbappe",
    message: "Proin sem eros, imperdiet vel blandit quis?",
    timestamp: "10:36",
  },
  {
    name: "",
    message: "final will be France-Brazil",
    timestamp: "10:37",
  },
  {
    name: "Mbappe",
    message:
      "Suspendisse vel elit porttitor, sollicitudin ligula sed, porta turpis.",
    timestamp: "10:38",
  },
  {
    name: "",
    message: "Pellentesque in velit enim.",
    timestamp: "10:38",
  },
  {
    name: "Mbappe",
    message: "Aenean et iaculis libero.",
    timestamp: "10:38",
  },
  {
    name: "Mbappe",
    message: "Ut gravida tempor purus, non posuere quam ullamcorper sit amet.",
    timestamp: "10:38",
  },
  {
    name: "",
    message: "Phasellus bibendum varius lorem non porta.",
    timestamp: "10:38",
  },
  {
    name: "",
    message: "Vivamus justo elit, blandit non mattis eget, feugiat sed eros.",
    timestamp: "10:38",
  },
  {
    name: "",
    message: "Fusce venenatis maximus ante quis vestibulum.",
    timestamp: "10:38",
  },
  {
    name: "Mbappe",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    timestamp: "10:35",
  },
  {
    name: "Mbappe",
    message: "Morbi condimentum",
    timestamp: "10:35",
  },
];

const ChatBody = (props) => {

  return (
    <div  className="relative">
      <Image
        src={chatBackgroundLarge}
        className="object-cover w-full max-h-[calc(100vh-124px)] h-[calc(100vh-124px)] min-h-[420px]"
        alt="whatsapp-background"
      />

      <div className="absolute top-[0px] left-[15px] w-full pr-[25px] z-20 max-h-[calc(100vh-124px)] h-[calc(100vh-124px)] min-h-[420px] overflow-scroll overflow-x-hidden">
        {messages.map((message) => (
          <Message
            message={message.message}
            name={message.name}
            timestamp={message.timestamp}
          />
        ))}
        <div ref={props.bottomRef}></div>
      </div>
    </div>
  );
};

export default ChatBody;
