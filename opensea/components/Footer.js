import React from "react";

import {
  FaDiscord,
  FaRedditAlien,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

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
  {
    name: "Email",
    image: <AiOutlineMail />,
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col lg:gap-[8rem] lg:flex-row items-center lg:justify-center text-center px-7 sm:px-10 xl:px-20 py-8  bg-[#1868b7] text-white">
      <div className="flex flex-col items-center lg:items-start lg:w-2/5 lg:text-left">
        <p className="font-bold text-[18px] mb-2">Stay in the loop</p>
        <p>
          Join our mailing list to stay in the loop with our newest feature
          releases, NFT drops, and tips and tricks for navigating OpenSea.
        </p>
        <div className="flex mx-4 lg:mx-0 mt-4 w-full space-x-4">
          <input
            type="text"
            placeholder="Your email address"
            className="w-full rounded-[0.7rem] pl-4 py-[0.7rem]"
          ></input>
          <button
            className="w-[12rem] rounded-[0.7rem] bg-[#2081e2] font-medium"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="lg:w-2/5">
        <p className="font-bold text-[18px] mb-4 mt-8">Join the community</p>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((social) => (
            <button
              className="flex justify-center items-center w-[52px] aspect-square text-[25px] rounded-[0.7rem] bg-[#2081e2] hover:bg-[#3C92E9]"
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

export default Footer;
