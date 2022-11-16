import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Card from "./Card.js";
import Lightborn from "../assets/lightborn.png";
import DynamicSlices from "../assets/dynamic-slices.png";
import Igba from "../assets/igba.png";
import Silks from "../assets/silks.png";
import Yokai from "../assets/yokai-kingdom.png";

const nfts = [
  {
    title: "LIGHTBORN AVATARS",
    price: "Floor 0.06 ETH",
    img: Lightborn,
  },
  {
    title: "Yokai Kingdom Genesis",
    price: "Floor 0.03 ETH",
    img: Yokai,
  },
  {
    title: "Art Flow by iGBA",
    price: "Floor 0.12 ETH",
    img: Igba,
  },
  {
    title: "Silks Thoroughbred Racehorses",
    price: "Floor 0.3 ETH",
    img: Silks,
  },
  {
    title: "Dynamic Slices by pxlq",
    price: "Floor 4.59 ETH",
    img: DynamicSlices,
  },
];

const Explore = () => {
  return (
    <div className="flex flex-col justify-center items-stretch mx-6 lg:mx-12 mt-5">
      <div>
        <p className="font-bold text-[32px] text-center">
          Explore, collect, and sell NFTs
        </p>
      </div>
      <div>
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
            600: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 15,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {nfts.map((card, index) => (
            <SwiperSlide key={card.title} virtualIndex={index}>
              <Card
                title={card.title}
                price={card.price}
                img={card.img}
                key={card.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Explore;
