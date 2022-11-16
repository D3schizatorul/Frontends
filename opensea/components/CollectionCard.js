import React from "react";
import Image from "next/image";

import verifiedIcon from "../assets/verified.png";

const CollectionCard = (props) => {
  return (
    <div className="flex justify-between items-center mb-7">
      <div className="flex items-center">
        <div className="w-3 font-semibold text-[20px] text-gray-400">
          {props.rank}
        </div>
        <div>
          <Image
            src={props.image}
            className="w-[52px] aspect-square 2xl:w-[62px] rounded-[0.5rem] ml-5 mr-3"
            alt={`${props.title}-logo`}
          />
        </div>
        <div>
          <div className="flex items-center">
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
          <div className="flex xl:hidden text-[12px] md:text-[14px] text-gray-400">
            <p>Floor:</p>
            <p className="font-semibold pl-1">{`${props.price} ${props.currency}`}</p>
          </div>
        </div>
      </div>
      <div className="xl:w-2/5 xl:flex">
        <p className="hidden xl:block w-full ml-10 font-semibold">{`${props.price} ${props.currency}`}</p>
        <p className="font-semibold xl:w-full xl:flex xl:justify-end">{`${props.volume} ${props.currency}`}</p>
      </div>
    </div>
  );
};

export default CollectionCard;
