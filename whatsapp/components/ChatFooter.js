import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Attachments from "./Attachments";
import { BsEmojiSmile, BsMicFill } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";

const ChatFooter = () => {
  const [showAttachemts, setShowAttachemts] = useState(false);
  const ref = useRef(null);

  const handleAttachements = () => {
    setShowAttachemts((prevValue) => !prevValue);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShowAttachemts(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2 md:pr-2 bg-[#f0f2f5] border-b">
      <div className="flex items-center">
        <button>
          <BsEmojiSmile className="w-[24px] h-[24px] text-gray-600" />
        </button>
      </div>
      <div className="relative flex items-center">
        <button
          ref={ref}
          onClick={handleAttachements}
          className={`${
            showAttachemts ? "bg-gray-300" : ""
          } flex justify-center items-center rounded-full p-2 w-[40px] aspect-square`}
        >
          <AiOutlinePaperClip className="w-[26px] h-[26px] text-gray-600" />
        </button>
        <CSSTransition
          in={showAttachemts}
          timeout={400}
          classNames="animate-attach"
          exit={true}
          unmountOnExit
        >
          <Attachments />
        </CSSTransition>
      </div>
      <input
        type="search"
        placeholder="Type a message"
        className="pr-2 pl-6 py-2 w-full rounded-[0.5rem] outline-none"
      />
      <div className="flex items-center mr-2">
        <button>
          <BsMicFill className="w-[24px] h-[24px] text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
