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
            className="w-[52px] aspect-square rounded-[0.5rem] mx-5"
            alt={`${props.title}-logo`}
          />
        </div>
        <div>
          <div className="flex items-center">
            <p className="font-semibold">{props.title}</p>
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
          <p className="flex text-[14px] text-gray-400">
            Floor:{" "}
            <p className="font-semibold pl-1">{`${props.price} ${props.currency}`}</p>
          </p>
        </div>
      </div>
      <div>
        <p className="font-semibold">{`${props.volume} ${props.currency}`}</p>
      </div>
    </div>
  );
};

export default CollectionCard;
