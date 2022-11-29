import React from "react";
import Image from "next/image";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import ibrahimovic from "../assets/ibrahimovic.jpg";
import mbappe from "../assets/mbappe.jpg";
import kaka from "../assets/kaka.jpg";
import kdb from "../assets/kdb.jpg";
import lewandowski from "../assets/lewandowski.jpg";
import salah from "../assets/salah.jpg";
import torres from "../assets/torres.jpg";
import benzema from "../assets/benzema.jpg";
import background from "../assets/whatsapp-background.png";

const profiles = [
  {
    id: "01",
    img: ibrahimovic,
    name: "Ibrahimovic",
    lastMessage: "Etiam hendrerit eleifend nunc, ac euismod risus rhoncus sed.",
    time: "18:55",
  },
  {
    id: "02",
    img: mbappe,
    name: "Mbappe",
    lastMessage: "Nam at pharetra felis.",
    time: "yesterday",
  },
  {
    id: "03",
    img: kaka,
    name: "Kaka",
    lastMessage: "Vestibulum faucibus accumsan lacus,",
    time: "11/18/2022",
  },
  {
    id: "04",
    img: lewandowski,
    name: "Lewandowski",
    lastMessage: "Sed imperdiet, odio sed hendrerit hendrerit,",
    time: "today",
  },
  {
    id: "05",
    img: kdb,
    name: "KDB",
    lastMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    time: "11/19/2022",
  },
  {
    id: "06",
    img: salah,
    name: "Salah",
    lastMessage: "Pellentesque tempus auctor lorem, nec pellentesque risus",
    time: "11/22/2022",
  },
  {
    id: "07",
    img: torres,
    name: "Torres",
    lastMessage: "Mauris posuere erat eu viverra rhoncus.",
    time: "11/24/2022",
  },
  {
    id: "08",
    img: benzema,
    name: "Benzema",
    lastMessage: "Pellentesque viverra tempuser at eu viverra rhoncus.",
    time: "11/22/2022",
  },
];

const Chat = (props) => {
  const contact = profiles.find((elem) => elem.id == props.activeChat);

  return props.activeChat ? (
    <div className="w-full">
      <ChatHeader name={contact.name} img={contact.img} />
      <ChatBody />
      <ChatFooter />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-5 w-full bg-[#f0f2f5]">
      <Image src={background} alt="whatsapp-background" />
      <p className="text-[26px] text-gray-400">Whatsapp Web
      </p>
    </div>
  );
};

export default Chat;
