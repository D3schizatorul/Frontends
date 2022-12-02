import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import EmojiPicker from "emoji-picker-react";
import Attachments from "./Attachments";
import { BsMicFill, BsEmojiSmile } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";

const ChatFooter = (props) => {
  const [showAttachemts, setShowAttachemts] = useState(false);
  const ref = useRef(null);

  const handleAttachements = () => {
    setShowAttachemts((prevValue) => !prevValue);
  };

  const handleEmoji = () => {
    props.setShowEmoji((prevValue) => !prevValue);
  };

  const previewConfig = {
    showPreview: false,
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
    <div className="relative flex items-center justify-between gap-4 px-4 py-2 md:pr-2 bg-[#f0f2f5]">
      <div className="flex items-center">
        <button
          onClick={handleEmoji}
          className={`${
            props.showEmoji ? "bg-gray-300" : ""
          } flex justify-center items-center rounded-full p-2 w-[40px] aspect-square`}
        >
          <BsEmojiSmile className="w-[24px] h-[24px] text-gray-600" />
        </button>

        <CSSTransition
          in={props.showEmoji}
          timeout={400}
          classNames="animate-emoji"
          exit={true}
          unmountOnExit
        >
          <>
            <div className="absolute bottom-[58px] left-[0px] w-[100%] z-30">
              <EmojiPicker
                height={350}
                width={"width: 100%"}
                previewConfig={previewConfig}
              />
            </div>
          </>
        </CSSTransition>
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
        <Attachments showAttachemts={showAttachemts} />
      </div>
      <input
        type="search"
        placeholder="Type a message"
        className="pr-2 pl-6 py-2 w-full rounded-[0.5rem] outline-none"
      />
      <div className="flex items-center mr-2">
        <button>
          <BsMicFill className="w-[23px] h-[23px] text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
