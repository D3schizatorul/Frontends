import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import HamburgerContactMenu from "./HamburgerContactMenu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";

const ChatHeader = (props) => {
  const [isHamburgerContact, setIsHamburgerContact] = useState(false);
  const [searchChat, setSearchChat] = useState(false);
  const reference = useRef(null);

  const handleHamburgerContact = () => {
    setIsHamburgerContact((prevValue) => !prevValue);
  };

  const handleSearchChat = () => {
    setSearchChat((prevValue) => !prevValue);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (reference.current && !reference.current.contains(event.target)) {
        setIsHamburgerContact(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-2 md:pr-2 bg-[#f0f2f5] border-b">
      <div className="flex items-center">
        <div className="w-12">
          <Image
            src={props.img}
            className="object-cover rounded-full max-h-[48px] max-w-[48px] h-[48px] w-[48px]"
            alt={props.name}
          />
        </div>
        <div>
          <p className="ml-4 line-clamp-1">{props.name}</p>
        </div>
      </div>
      <div className="relative flex gap-2">
        <button
          className={`${
            searchChat ? "bg-gray-300" : ""
          } rounded-full p-2 w-[40px] aspect-square`}
          onClick={handleSearchChat}
        >
          <BiSearchAlt2 className="w-[24px] h-[24px] text-gray-600" />
        </button>
        <div ref={reference}>
          <button
            className={`${
              isHamburgerContact ? "bg-gray-300" : ""
            } flex justify-center items-center rounded-full p-2 w-[40px] aspect-square`}
            onClick={handleHamburgerContact}
          >
            <BsThreeDotsVertical className="w-[22px] h-[22px] text-gray-600" />
          </button>

          <CSSTransition
            in={isHamburgerContact}
            appear={true}
            timeout={500}
            classNames="animate-zoom"
            exit={true}
            unmountOnExit
          >
            <HamburgerContactMenu
              setIsHamburgerContact={setIsHamburgerContact}
            />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
