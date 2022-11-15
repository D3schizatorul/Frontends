import React from "react";
import Image from "next/image";

const Card = (props) => {
  return (
    <div className="flex relative aspect-square w-full mt-6 mb-12 overflow-hidden rounded-[1rem]">
      <Image
        src={props.img}
        className="z-10 shadow-black hover:scale-110 object-cover duration-300 ease-out"
        alt={props.title}
      />
      <div className="absolute bottom-0 text-white z-20 p-4">
        <p className="font-semibold">{props.title}</p>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

export default Card;
