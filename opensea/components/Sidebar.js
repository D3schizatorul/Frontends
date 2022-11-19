import React, { useEffect, useRef } from "react";
import { IoStatsChartSharp } from "react-icons/io5";
import { IoIosPaper } from "react-icons/io";
import { MdOutlineCreate, MdOutlineExplore } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { BsMoonFill } from "react-icons/bs";

const buttons = [
  {
    title: "Explore",
    logo: <MdOutlineExplore className="text-[30px] w-[28px]" />,
  },
  {
    title: "Stats",
    logo: <IoStatsChartSharp className="text-[24px] w-[28px]" />,
  },
  { title: "Resources", logo: <IoIosPaper className="text-[26px] w-[28px]" /> },
  {
    title: "Create",
    logo: <MdOutlineCreate className="text-[28px] w-[28px]" />,
  },
  { title: "Language", logo: <GrLanguage className="text-[24px] w-[28px]" /> },
  {
    title: "Night Mode",
    logo: <BsMoonFill className="text-[24px] w-[28px]" />,
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
      className="top-[77px] sm:top-[80px] right-[0px] w-[20rem] h-screen fixed bg-[#bad6f0]/[75%] z-50 px-6 pt-2 backdrop-blur-lg"
    >
      <div className="   text-black ">
        {buttons.map((button) => (
          <button className="flex items-center w-full px-4 py-4 text-[20px] space-x-4 font-semibold hover:shadow-lg hover:rounded-[0.8rem]">
            {button.logo}
            <p className="">{button.title}</p>
          </button>
        ))}
      </div>
      <div className="mr-6">
        <button className="bg-blue text-white font-semibold w-full rounded-[0.8rem] py-4 bg-blue-500 hover:bg-blue-400 mt-10 ">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
