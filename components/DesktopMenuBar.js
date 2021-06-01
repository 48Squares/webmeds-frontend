import React from "react";
import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

export default function DesktopMenuBar() {
  const images = [
    {
      label: "Personal Care",
      url: "https://res.cloudinary.com/webmeds/image/upload/v1621988929/personal_care_2_pgw60a.jpg",
    },
    {
      label: "Mom and Baby",
      url: "https://res.cloudinary.com/webmeds/image/upload/v1621988929/mom-baby_rk6lne.png",
    },
    {
      label: "Fitness",
      url: "https://res.cloudinary.com/webmeds/image/upload/v1621988929/fitness_e8i0hz.jpg",
    },
    {
      label: "Surgical",
      url: "https://res.cloudinary.com/webmeds/image/upload/v1621988930/surgical_wtq5yz.jpg",
    },
    {
      label: "Diabetes",
      url: "https://res.cloudinary.com/webmeds/image/upload/v1621988929/diabetes_cletrq.jpg",
    },
  ];

  return (
    <nav className="bg-white shadow-md mb-2">
      <header className="h-16 py-1">
        <Swiper slidesPerView={5} spaceBetween={4}>
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                className="rounded object-cover"
                src={image.url}
                alt={image.label}
                width="80"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </header>
    </nav>
  );
}
