import React from "react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

import arbitrum from "../assets/arbitrum.png";
import avalanche from "../assets/avalanche.png";
import eth from "../assets/eth.png";
import klaytn from "../assets/klaytn.png";
import optimism from "../assets/optimism.png";
import polygon from "../assets/polygon.png";
import solana from "../assets/solana.png";

const blockchains = [
  {
    title: "arbitrum",
    img: arbitrum,
  },
  {
    title: "avalanche",
    img: avalanche,
  },
  {
    title: "ethereum",
    img: eth,
  },
  {
    title: "klaytn",
    img: klaytn,
  },
  {
    title: "optimism",
    img: optimism,
  },
  {
    title: "polygon",
    img: polygon,
  },
  {
    title: "solana",
    img: solana,
  },
];

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

const Trending = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b pb-2 mx-6 lg:mx-12 mt-2">
        <div className="flex text-[24px] lg:text-[26px] text-gray-600 font-semibold space-x-4">
          <button className="focus:border-b-[3px] focus:border-black focus:text-black">
            Trending
          </button>
          <button className="focus:border-b-[3px] focus:border-black focus:text-black">
            Top
          </button>
        </div>
        <div className="flex space-x-4">
          <div className="flex space-x-4">
            <div className="hidden sm:flex border lg:border-2 px-3 py-1 lg:py-2 lg:px-4 rounded-[0.7rem] font-medium">
              <button className="flex items-center text-gray-400 lg:text-[18px] ml-1">
                24h <MdKeyboardArrowDown className="ml-2" />
              </button>
            </div>

            <div className="hidden sm:flex lg:hidden border px-3 py-1 rounded-[0.7rem] font-medium ">
              <button className="flex items-center">
                All chains <MdKeyboardArrowDown className="ml-2" />
              </button>
            </div>

            <div className="hidden lg:flex items-center border-2 rounded-[0.7rem]">
              <button className="text-[18px] py-2 px-4 mt-0 rounded-l-[0.7rem] focus:bg-[#f2f3f5] font-medium">
                All chains
              </button>
              {blockchains.map((chain) => (
                <button className="group flex justify-center items-center hover:shadow hover:translate-y-[-0.1rem] focus:bg-[#f2f3f5] h-[43px] w-[40px]">
                  <Image src={chain.img} alt={`${chain.title}-logo`} />
                  <div className="opacity-0 w-fit bg-black text-[14px] font-medium text-white text-center rounded-lg py-2.5 absolute z-10 group-hover:opacity-100 bottom-[45px] px-3 pointer-events-none">
                    {capitalize(chain.title)}
                    <svg
                      class="absolute text-black h-2 w-full left-0 top-full"
                      x="0px"
                      y="0px"
                      viewBox="0 0 255 255"
                    >
                      <polygon
                        class="fill-current"
                        points="0,0 127.5,127.5 255,0"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="border lg:border-2 px-3 py-1 lg:py-2 lg:px-4 rounded-[0.7rem] font-medium">
            <button className="lg:text-[18px]">View All</button>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex space-x-3 mx-6 lg:mx-12 mt-3">
        <div className="flex items-center justify-between w-full border px-3 py-1 rounded-[0.7rem] font-medium ">
          <button>All chains</button>
          <MdKeyboardArrowDown className="ml-2" />
        </div>
        <div className="flex items-center justify-between w-full border px-3 py-1 rounded-[0.7rem] font-medium">
          <button className="text-gray-400 ml-1">24h</button>
          <MdKeyboardArrowDown className="ml-2" />
        </div>
      </div>
    </>
  );
};

export default Trending;
