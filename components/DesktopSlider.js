import React from "react";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

export default function DesktopSlider() {
  const sliders = [
    "/slider/1.png",
    "/slider/1.png",
    "/slider/1.png",
    "/slider/1.png",
  ];

  return (
    <div className="bg-white py-2 mt-2 shadow">
      <div className="w-full h-48">
        <Swiper autoplay={true} pagination={{ clickable: true }}>
          {sliders.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
