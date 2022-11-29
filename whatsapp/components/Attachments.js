import React from "react";
import { BsFillImageFill, BsFillStickyFill } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { HiDocument } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

const Attachments = () => {
  return (
    <div className="absolute flex flex-col justify-center gap-4 bottom-[60px] right-[-5px] z-50">
      <button className="flex items-center justify-center w-[53px] h-[53px] green-button rounded-full ">
        <IoStatsChart className="w-[22px] h-[22px] text-white" />
      </button>
      <button className="flex items-center justify-center w-[53px] h-[53px] light-blue-button rounded-full ">
        <FaUserAlt className="w-[22px] h-[22px] text-white" />
      </button>
      <button className="flex items-center justify-center w-[53px] h-[53px] dark-blue-button rounded-full ">
        <HiDocument className="w-[28px] h-[28px] text-white" />
      </button>
      <button className="flex items-center justify-center w-[53px] h-[53px] red-button rounded-full ">
        <AiFillCamera className="w-[28px] h-[28px] text-white" />
      </button>
      <button className="flex items-center justify-center w-[53px] h-[53px] blue-button rounded-full ">
        <BsFillStickyFill className="w-[22px] h-[22px] text-white" />
      </button>
      <button className="flex items-center justify-center w-[53px] h-[53px] purple-button rounded-full ">
        <BsFillImageFill className="w-[22px] h-[22px] text-white" />
      </button>
    </div>
  );
};

export default Attachments;
