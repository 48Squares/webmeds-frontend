import React from "react";

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
      <header className="px-3 py-1 flex justify-around">
        {images.map((img, index) => (
          <div className="flex flex-col justify-center" key={index}>
            <div>
              <img src={img.url} alt="" width="64px" className="rounded" />
            </div>

            <p className="text-sm text-gray-800 font-medium leading-none hidden md:block">
              {img.label}
            </p>
          </div>
        ))}
      </header>
    </nav>
  );
}
