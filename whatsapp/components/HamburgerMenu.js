import React from "react";

const HamburgerMenu = () => {
  return (
    <div className="absolute flex flex-col justify-center top-[46px] md:right-[20px] right-[10px] w-[178px] h-[184px] bg-white shadow-lg rounded-[0.7rem] z-50">
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        New group
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Starred messages
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Settings
      </button>
      <button className="flex px-4 py-2 hover:bg-[#f2f5f8] w-full">
        Log out
      </button>
    </div>
  );
};

export default HamburgerMenu;
