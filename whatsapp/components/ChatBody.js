import React from "react";
import Image from "next/image";
import chatBackgroundLarge from "../assets/chat-background.jpg";

const messages = [
  {
    name: "Joe Doe",
    message: "Hi i'm Joe Doe",
    css1: "bg-white/80 ",
    css2: "justify-start",
    timestamp: "10:35",
  },
  {
    message: "Nice to meet you Joe Doe!",
    css1: "bg-black/90 text-white",
    css2: "justify-end",
    timestamp: "10:36",
  },
  {
    name: "Joe Doe",
    message: "Are you subscribed yet?",
    css1: "bg-white/80 ",
    css2: "justify-start",
    timestamp: "10:35",
  },
  {
    message: "Actually i will subscribe to Goose Dev!",
    css1: "bg-black/90 text-white",
    css2: "justify-end",
    timestamp: "10:36",
  },
  {
    name: "Joe Doe",
    message: "Have you joined the discord as well?",
    css1: "bg-white/80 ",
    css2: "justify-start",
    timestamp: "10:35",
  },
  {
    message: "No but i will join.",
    css1: "bg-black/90 text-white",
    css2: "justify-end",
    timestamp: "10:36",
  },
];

const ChatBody = () => {
  return (
    <div className="">
      <Image src={chatBackgroundLarge} className="object-cover w-full max-h-[calc(100vh-122px)] h-[calc(100vh-122px)]" alt="whatsapp-background" />
    </div>
  );
};

export default ChatBody;
