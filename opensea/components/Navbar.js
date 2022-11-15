import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import {
  MdOutlineShoppingCart,
  MdOutlineAccountBalanceWallet,
} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import openseaLogo from "../assets/opensea.svg";
import openseaLogoText from "../assets/textLogo.png";

const Navbar = () => {
  const [isSearching, setIsSearching] = useState(true);
  const handleSearch = (e) => {
    setIsSearching((prevValue) => !prevValue);
  };
  return (
    <div className="flex justify-between p-4 xl:px-14 items-center">
      {/* Left */}
      <div className="flex items-center shrink-0 mr-7 lg:mr-12">
        <div>
          <Image
            src={openseaLogo}
            className="w-[2.5rem] mr-2 pb-1"
            alt="opensea"
          />
        </div>
        <div>
          <Image
            src={openseaLogoText}
            className="h-[1.2rem] w-[6.5rem]"
            alt="logo-text"
          />
        </div>
      </div>
      {/* Middle */}
      <div className="hidden sm:flex relative items-center w-full">
        <input
          type="text"
          placeholder="Search items, collections, and accounts"
          className="bg-[#e3f0fc] p-2 rounded-[0.6rem] w-full py-3 pl-[2.4rem] pr-11"
          onFocus={handleSearch}
          onBlur={handleSearch}
        />
        <AiOutlineSearch
          className={`absolute text-[23px] left-[0.7rem] ${
            isSearching ? "text-gray-400" : "text-gray-700"
          }`}
        />
        <div
          className={
            isSearching
              ? "absolute right-[0.8rem] bg-gray-300 px-2.5 py-1 rounded-[0.5rem] text-gray-500 text-[13px]"
              : "hidden"
          }
        >
          /
        </div>
      </div>
      {/* Right */}
      <div className="xl:flex">
        <div className="hidden xl:inline-flex space-x-[1.75rem] ml-12">
          <button className="font-semibold">Explore</button>
          <button className="font-semibold">Stats</button>
          <button className="font-semibold">Resources</button>
          <button className="font-semibold">Create</button>
        </div>
        <div className="flex ml-2 lg:ml-5 xl:ml-0 space-x-[1.25rem] lg:space-x-[1.75rem]">
          <AiOutlineSearch className="w-[2.2rem] h-[2.2rem] sm:hidden" />
          <CgProfile className="w-[2rem] h-[2rem] hidden lg:flex" />
          <MdOutlineAccountBalanceWallet className="w-[2rem] h-[2rem] hidden lg:flex" />
          <MdOutlineShoppingCart className="w-[2.2rem] h-[2.2rem]" />
          <FiMenu className="w-[2rem] h-[2rem] lg:ml-8 xl:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
