import React from "react";
import Image from "next/image";

const WhatCard = (props) => {
  return (
    <div className="mb-10">
      <Image
        src={props.banner}
        alt={props.title}
        className="object-cover w-full aspect-video rounded-t-[1rem]"
      />
      <div className="flex items-center shadow-md rounded-b-[1rem] pb-[25px]">
        <div>
          <p className="ml-8 pt-[25px] font-semibold text-[14px] md:text-[16px] lg:text-[18px] line-clamp-1 break-all">
            {props.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatCard;
