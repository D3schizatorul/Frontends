import React from "react";
import { CSSTransition } from "react-transition-group";
import { BsFillImageFill, BsFillStickyFill } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { HiDocument } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

const Attachments = (props) => {
  return (
    <div className="absolute flex flex-col justify-center gap-4 bottom-[60px] right-[-5px] z-50">
      <CSSTransition
        in={props.showAttachemts}
        timeout={400}
        classNames="animate-attach"
        exit={true}
        unmountOnExit
      >
        <button className="flex items-center justify-center w-[53px] h-[53px] green-button rounded-full ">
          <IoStatsChart className="w-[22px] h-[22px] text-white" />
        </button>
      </CSSTransition>

      <CSSTransition
        in={props.showAttachemts}
        timeout={500}
        classNames="animate-attach"
        exit={true}
        unmountOnExit
      >
        <button className="flex items-center justify-center w-[53px] h-[53px] light-blue-button rounded-full ">
          <FaUserAlt className="w-[22px] h-[22px] text-white" />
        </button>
      </CSSTransition>
      <CSSTransition
        in={props.showAttachemts}
        timeout={500}
        classNames="animate-attach"
        exit={true}
        unmountOnExit
      >
        <button className="flex items-center justify-center w-[53px] h-[53px] dark-blue-button rounded-full ">
          <HiDocument className="w-[28px] h-[28px] text-white" />
        </button>
      </CSSTransition>
      <CSSTransition
        in={props.showAttachemts}
        timeout={500}
        classNames="animate-attach"
        exit={true}
        unmountOnExit
      >
        <button className="flex items-center justify-center w-[53px] h-[53px] red-button rounded-full">
          <AiFillCamera className="w-[28px] h-[28px] text-white" />
        </button>
      </CSSTransition>
      <CSSTransition
        in={props.showAttachemts}
        timeout={500}
        classNames="animate-attach"
        exit={true}
        unmountOnExit
      >
        <button className="flex items-center justify-center w-[53px] h-[53px] blue-button rounded-full ">
          <BsFillStickyFill className="w-[22px] h-[22px] text-white" />
        </button>
      </CSSTransition>
      <CSSTransition
        in={props.showAttachemts}
        timeout={500}
        classNames="animate-attach"
        exit={true}
        unmountOnExit
      >
        <button className="flex items-center justify-center w-[53px] h-[53px] purple-button rounded-full ">
          <BsFillImageFill className="w-[22px] h-[22px] text-white" />
        </button>
      </CSSTransition>
    </div>
  );
};

export default Attachments;
