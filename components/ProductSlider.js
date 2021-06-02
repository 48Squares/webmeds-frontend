import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

export default function ProductSlider({ media }) {
  return (
    <>
      <Swiper pagination={true} className="product-swiper">
        {media.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image} className="w-full h-full object-cover" alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
