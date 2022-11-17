import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import CardNotable from "./CardNotable.js";
import clementine from "../assets/clementine.png";
import clementineBanner from "../assets/clementineBanner.png";
import talkingDead from "../assets/talkingDead.png";
import talkingDeadBanner from "../assets/talkingDeadBanner.png";
import kurt from "../assets/kurt.webp";
import kurtBanner from "../assets/kurtBanner.png";
import broadside from "../assets/broadside.png";
import broadsideBanner from "../assets/broadsideBanner.png";

const notables = [
  {
    title: "Talking Dead",
    image: talkingDead,
    banner: talkingDeadBanner,
    verified: "true",
  },
  {
    title: "Clementine Nightmare",
    image: clementine,
    banner: clementineBanner,
    verified: "true",
  },
  {
    title: "Kurt the Roadie",
    image: kurt,
    banner: kurtBanner,
    verified: "true",
  },
  {
    title: "Broadside",
    image: broadside,
    banner: broadsideBanner,
    verified: "true",
  },
];

const Notables = () => {
  return (
    <div className="flex flex-col justify-center mx-6 lg:mx-12 pt-5">
      <div>
        <p className="font-semibold text-[22px] lg:text-[26px]">
          Notable collections
        </p>
      </div>
      <div className="mt-8">
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
          {notables.map((notable, index) => (
            <SwiperSlide key={notable.title} virtualIndex={index}>
              <CardNotable
                image={notable.image}
                title={notable.title}
                banner={notable.banner}
                verified={notable.verified}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Notables;
