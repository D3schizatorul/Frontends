import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import gasFees from "../assets/what-are-gas-fees.png";
import howToBuy from "../assets/how-to-buy-nft.png";
import howToCreate from "../assets/how-to-create-nft.png";
import cryptoWallet from "../assets/what-is-crypto-wallet.png";
import mintng from "../assets/what-is-minting.png";
import whatNFT from "../assets/what-is-nft.png";
import whoOpensea from "../assets/who-is-opensea.png";
import WhatCard from "./WhatCard.js";

const whatIs = [
  {
    title: "What is a crypto wallet?",
    banner: cryptoWallet,
  },
  {
    title: "What is an NFT?",
    banner: whatNFT,
  },
  {
    title: "What are blockchain gas fees?",
    banner: gasFees,
  },
  {
    title: "How to buy an NFT",
    banner: howToBuy,
  },
  {
    title: "How to create an NFT on OpenSea",
    banner: howToCreate,
  },
  {
    title: "What is minting?",
    banner: mintng,
  },
  {
    title: "Who is OpenSea?",
    banner: whoOpensea,
  },
];

const WhatSection = () => {
  return (
    <div className="flex flex-col justify-center mx-6 lg:mx-12 mb-4">
      <div className="flex justify-between">
        <div>
          <p className="font-semibold text-[22px] lg:text-[26px]">NFT 101</p>
          <p className="text-gray-400">Get comfortable with the basics.</p>
        </div>
        <div className="flex items-center">
          <button className="h-[36px] lg:h-[48px] w-[110px] lg:w-[145px] hover:shadow-md border-[2px] rounded-[0.7rem] font-medium">
            Learn More
          </button>
        </div>
      </div>
      <div className="mt-6">
        <Swiper
          className="h-full w-full"
          autoplay={{
            delay: 4000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          navigation
          scrollbar={{ draggable: true }}
        >
          {whatIs.map((what, index) => (
            <SwiperSlide key={what.title} virtualIndex={index}>
              <WhatCard
                image={what.image}
                title={what.title}
                banner={what.banner}
                verified={what.verified}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default WhatSection;
