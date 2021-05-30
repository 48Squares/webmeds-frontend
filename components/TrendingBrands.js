import React, { useState } from "react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination]);

export default function TrendingBrands() {
  const categories = [
    "https://res.cloudinary.com/sq48/image/upload/v1614492220/covid-essentials_n9ifrp.jpg",
    "https://res.cloudinary.com/sq48/image/upload/v1614492882/fitness_lq8gfr.jpg",
    "https://res.cloudinary.com/sq48/image/upload/v1614492481/diabetes_ml3tkd.jpg",
    "https://res.cloudinary.com/sq48/image/upload/v1614492658/eyewear_abud4i.jpg",
    "https://res.cloudinary.com/sq48/image/upload/v1614492790/ayush_b7vbi9.png",
  ];

  /**
   * Pagination formula: |totalSlides - slidersPerView| + 1
   * @returns {*}
   */
  return (
    <div className="bg-white py-2 mt-2 shadow">
      <div className="flex justify-between p-4 items-center">
        <div>
          <h1 className="text-xl font-medium text-gray-800 leading-none">
            Trending Brands
          </h1>
        </div>

        <div>
          <Link href="/discounts">
            <a className="px-6 py-3 bg-regal-blue text-sm text-white rounded-sm uppercase shadow-md">
              View More
            </a>
          </Link>
        </div>
      </div>

      <hr />

      <div className="w-full p-1 h-48">
        <Swiper
          autoplay={true}
          slidesPerView={3}
          spaceBetween={5}
          pagination={{ clickable: true }}
        >
          {categories.map((url, index) => (
            <SwiperSlide key={index}>
              <img src={url} alt="" width="184" height="150" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
