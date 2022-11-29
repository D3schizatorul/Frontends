import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineCreate, MdOutlineExplore } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { BsMoonFill } from "react-icons/bs";
import {
  FaDiscord,
  FaRedditAlien,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

import chevron from "../assets/chevron-right-solid.svg";

const socials = [
  {
    name: "Twitter",
    image: <FaTwitter />,
  },
  {
    name: "Instagram",
    image: <FaInstagram />,
  },
  {
    name: "Discord",
    image: <FaDiscord />,
  },
  {
    name: "Reddit",
    image: <FaRedditAlien />,
  },
  {
    name: "Youtube",
    image: <FaYoutube />,
  },
  {
    name: "Tiktok",
    image: <FaTiktok />,
  },
];

const Sidebar = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.setHamburgerMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col justify-between top-[77px] sm:top-[81px] w-full sm:w-[22rem] h-screen fixed bg-[#bad6f0]/[75%] z-50 px-6 pt-2 backdrop-blur-lg overflow-scroll right-0"
    >
      <div className="text-black font-semibold">
        <button className="flex justify-between items-center w-full px-4 py-4 hover:shadow-lg hover:rounded-[0.8rem] hover:bg-[#bad6f0]/[35%]">
          <div className="flex items-center">
            <MdOutlineExplore className="text-[36px] w-[36px]" />
            <p className="text-[19px] ml-2">Explore</p>
          </div>
          <Image src={chevron} className="w-[12px]" alt="chevron-right" />
        </button>
        <button className="flex justify-between items-center w-full px-4 py-4 hover:shadow-lg hover:rounded-[0.8rem] hover:bg-[#bad6f0]/[35%]">
          <div className="flex items-center">
            <IoStatsChartSharp className="text-[30px] w-[36px]" />
            <p className="text-[19px] ml-2">Stats</p>
          </div>
          <Image src={chevron} className="w-[12px]" alt="chevron-right" />
        </button>
        <button className="flex justify-between items-center w-full px-4 py-4 hover:shadow-lg hover:rounded-[0.8rem] hover:bg-[#bad6f0]/[35%]">
          <div className="flex items-center">
            <IoIosPaper className="text-[30px] w-[36px]" />
            <p className="text-[19px] ml-2">Resources</p>
          </div>
          <Image src={chevron} className="w-[12px]" alt="chevron-right" />
        </button>
        <button className="flex items-center w-full px-4 py-4 hover:shadow-lg hover:rounded-[0.8rem] hover:bg-[#bad6f0]/[35%]">
          <MdOutlineCreate className="text-[34px] w-[36px]" />
          <p className="text-[19px] ml-2">Create</p>
        </button>
        <button className="flex justify-between items-center w-full px-4 py-4 hover:shadow-lg hover:rounded-[0.8rem] hover:bg-[#bad6f0]/[35%]">
          <div className="flex items-center">
            <GrLanguage className="text-[28px] w-[36px]" />
            <p className="text-[19px] ml-2">Language</p>
          </div>
          <div className="flex items-center">
            <p className="text-medium">en</p>
            <Image
              src={chevron}
              className="w-[12px] ml-2"
              alt="chevron-right"
            />
          </div>
        </button>
        <button className="flex justify-between items-center w-full px-4 py-4 hover:shadow-lg hover:rounded-[0.8rem] hover:bg-[#bad6f0]/[35%]">
          <div className="flex items-center">
            <BsMoonFill className="text-[28px] w-[36px]" />
            <p className="text-[19px] ml-2">Night Mode</p>
          </div>
          <Image src={chevron} className="w-[12px]" alt="chevron-right" />
        </button>
      </div>
      <div className="mb-24 mt-4">
        <button className="bg-blue text-white font-semibold w-full rounded-[0.8rem] py-4 bg-[#2081e2] hover:bg-[#3C92E9]">
          Connect Wallet
        </button>
        <div className="flex flex-wrap justify-center gap-6 border-t border-gray-400 mt-4">
          {socials.map((social) => (
            <button
              className="flex justify-center items-center text-[25px] mt-4 text-gray-500 hover:text-gray-700"
              key={social.name}
            >
              {social.image}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
