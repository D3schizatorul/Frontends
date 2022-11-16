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
      <div className="flex items-center shadow-md rounded-b-[1rem] pb-[50px]">
        <p className="font-semibold text-[14px] md:text-[16px]">
          {props.title}
        </p>
        {eval(props.verified) ? (
          <Image
            src={verifiedIcon}
            className="w-[17px] aspect-square ml-1"
            alt="verified"
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CardNotable;
