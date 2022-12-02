import React from "react";
import Contact from "./Contact";
import ibrahimovic from "../assets/ibrahimovic.jpg";
import mbappe from "../assets/mbappe.jpg";
import kaka from "../assets/kaka.jpg";
import kdb from "../assets/kdb.jpg";
import lewandowski from "../assets/lewandowski.jpg";
import salah from "../assets/salah.jpg";
import torres from "../assets/torres.jpg";
import benzema from "../assets/benzema.jpg";

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

const Contacts = ({ setActiveChat, activeChat, setShowEmoji }) => {
  return (
    <div className="overflow-scroll overflow-x-hidden h-[calc(100vh-122px)] min-h-[422px]">
      {profiles.map((contact) => (
        <Contact
          img={contact.img}
          name={contact.name}
          lastMessage={contact.lastMessage}
          time={contact.time}
          id={contact.id}
          key={contact.id}
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          setShowEmoji={setShowEmoji}
        />
      ))}
    </div>
  );
};

export default Contacts;
