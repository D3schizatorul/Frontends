import React from "react";

const HamburgerMenu = () => {
  return (
    <div className="absolute flex flex-col justify-center top-[46px] md:right-[20px] right-[10px] w-[208px] h-[344px] bg-white shadow-lg rounded-[0.7rem] z-50">
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Contact info
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Select messages
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Close chat
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Mute notifications
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Disappearing messages
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Delete chat
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Report
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Block
      </button>
    </div>
  );
};

export default HamburgerMenu;