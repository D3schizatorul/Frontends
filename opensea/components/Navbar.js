import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import {
  MdOutlineShoppingCart,
  MdOutlineAccountBalanceWallet,
  MdClose,
} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

import openseaLogo from "../assets/opensea.svg";
import openseaLogoText from "../assets/textLogo.png";

const Navbar = (props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isSearching, setIsSearching] = useState(true);

  const handleSearch = () => {
    setIsSearching((prevValue) => !prevValue);
  };

  const handleCart = () => {
    props.setCartModal((prevValue) => !prevValue);
  };

  const handleHamburger = () => {
    props.setHamburgerMenu((prevValue) => !prevValue);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 flex justify-between p-4 xl:px-14 items-center z-50 w-full ${
        scrollPosition == 0 ? "" : "bg-white/90 border-b"
      } ${!props.hamburgerMenu ? "" : "duration-1000 bg-white/90 border-b"}`}
    >
      {/* Left */}
      <Link href="/" className="flex items-center shrink-0 mr-7 lg:mr-12">
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
      </Link>
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
          <button className="sm:hidden">
            <AiOutlineSearch className="w-[2.2rem] h-[2.2rem]" />
          </button>
          <button className="hidden lg:flex">
            <CgProfile className="w-[2rem] h-[2rem]" />
          </button>
          <button className="hidden lg:flex">
            <MdOutlineAccountBalanceWallet className="w-[2rem] h-[2rem]" />
          </button>
          <button>
            <MdOutlineShoppingCart
              className="w-[2.2rem] h-[2.2rem]"
              onClick={handleCart}
            />
          </button>
          <button className="xl:hidden lg:ml-8">
            {props.hamburgerMenu ? (
              <MdClose
                className="w-[2rem] h-[2rem]"
                onClick={handleHamburger}
              />
            ) : (
              <FiMenu className="w-[2rem] h-[2rem]" onClick={handleHamburger} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
