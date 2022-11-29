import React, { useState } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

const Contact = (props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering((prevValue) => !prevValue);
  };

  const handleContact = () => {
    props.setActiveChat(props.id);
  };

  return (
    <div
      className={`flex items-center h-[72px] cursor-pointer ${
        props.activeChat == props.id ? "bg-[#e9ebf0]" : "hover:bg-[#f0f2f5]"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      onClick={handleContact}
    >
      <div className="flex items-center w-[56px] h-[72px] mr-4 ml-3">
        <Image
          src={props.img}
          className="object-cover rounded-full max-h-[56px] max-w-[56px] h-[56px] w-[56px]"
          alt={props.name}
        />
      </div>
      <div className="flex flex-col justify-center h-[72px] border-b w-full">
        <div className="flex pr-4">
          <p className="w-full line-clamp-1">{props.name}</p>
          <p className="text-[#667781] text-[13px] whitespace-nowrap">
            {props.time}
          </p>
        </div>
        <div className="flex pr-4">
          <p className="text-[#667781] text-[13px] w-full line-clamp-1">
            {props.lastMessage}
          </p>
          <p>{isHovering && <FiChevronDown className="w-[20px] h-[20px]" />}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
