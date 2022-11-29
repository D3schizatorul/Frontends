import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";
import HamburgerMenu from "./HamburgerMenu";
import profile from "../assets/profile.jpg";
import { BiMessageDetail } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

const Navbar = () => {
  const [isHamburger, setIsHamburger] = useState(false);
  const [newChat, setNewChat] = useState(false);
  const ref = useRef(null);

  const handleHamburger = () => {
    setIsHamburger((prevValue) => !prevValue);
  };

  const handleNewChat = () => {
    setNewChat((prevValue) => !prevValue);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsHamburger(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="flex items-center justify-between px-4 py-2 md:pr-2 bg-[#f0f2f5] border-r border-gray-300">
      <div className="w-12">
        <Image
          src={profile}
          className="object-cover rounded-full max-h-[48px] max-w-[48px] h-[48px] w-[48px]"
          alt="profile"
        />
      </div>
      <div className="relative flex gap-3">
        <button
          className={`${
            newChat ? "bg-gray-300" : ""
          } rounded-full p-2 w-[40px] aspect-square`}
          onClick={handleNewChat}
        >
          <BiMessageDetail className="w-[26px] h-[26px] text-gray-600" />
        </button>
        <div ref={ref}>
          <button
            className={`${
              isHamburger ? "bg-gray-300" : ""
            } flex justify-center items-center rounded-full p-2 w-[40px] aspect-square`}
            onClick={handleHamburger}
          >
            <BsThreeDotsVertical className="w-[22px] h-[22px] text-gray-600" />
          </button>

          <CSSTransition
            in={isHamburger}
            timeout={500}
            classNames="animate-zoom"
            exit={true}
            unmountOnExit
          >
            <HamburgerMenu setIsHamburger={setIsHamburger} />
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
