import React from "react";
import Image from "next/image";

import verifiedIcon from "../assets/verified.png";

const CardNotable = (props) => {
  return (
    <div className="mb-10">
      <Image
        src={props.banner}
        className="object-cover w-full aspect-video rounded-t-[1rem]"
      />

      <div className="flex items-center shadow-md rounded-b-[1rem] pb-[25px] lg:pb-[32px]">
        <div>
          <Image
            src={props.image}
            className="absolute bottom-24 ml-8 w-[56px] aspect-square lg:ml-5 lg:w-[70px] lg:bottom-14 rounded-[0.8rem] border-[4px] border-white"
          />
        </div>
        <div className="flex items-end pr-[10px]">
          <p className="ml-8 lg:ml-24 pt-[25px] lg:pt-[18px] font-semibold text-[14px] md:text-[16px] line-clamp-1 break-all">
            {props.title}
            
          </p>{eval(props.verified) ? (
              <Image
                src={verifiedIcon}
                className="w-[17px] aspect-square ml-1 mb-[4px]"
                alt="verified"
              />
            ) : (
              ""
            )}
        </div>
      </div>
    </div>
  );
};

export default CardNotable;
