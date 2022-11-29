import React from "react";
import { BsFilter } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Search = () => {
  return (
    <div className="relative flex items-center px-4 py-2 border">
      <div className="absolute left-7">
        <BiSearch className="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="search"
        placeholder="Search or start new chat"
        className="pr-2 pl-14 py-2 w-full rounded-[0.7rem] bg-[#f0f2f5] outline-none"
      />
      <BsFilter className="w-7 h-7 ml-3 text-gray-600" />
    </div>
  );
};

export default Search;
