import React, {useState} from 'react';
import 'swiper/swiper-bundle.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import {Swiper, SwiperSlide} from 'swiper/react';
import Link from "next/link";
import SwiperCore, {Pagination} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);

export default function DiscountForYou(props) {
    const [products, setProducts] = useState(props.products);
    /**
     * Pagination formula: |totalSlides - slidersPerView| + 1
     * @returns {*}
     */
    return (
        <div className="bg-white py-2 mt-2 shadow">
            <div className="flex justify-between p-4 items-center">
                <div>
                    <h1 className="text-2xl font-medium text-gray-800 leading-none">Discount For You</h1>
                </div>

                <div>
                    <Link href="/discounts">
                        <a
                            className="px-6 py-3 bg-regal-blue text-sm text-white rounded-sm uppercase shadow-md">View
                            More
                        </a>
                    </Link>
                </div>
            </div>

            <hr/>

            <div className="w-full p-4">
                <Swiper
                    autoplay={true}
                    slidesPerView={3}
                    spaceBetween={10}
                    loop={true}
                    pagination={{clickable: true}}
                >
                    {products.map((product, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-48 ">
                                    <img
                                        className=" w-full h-full object-cover"
                                        src={product.image} alt=""/>
                                </div>
                            </SwiperSlide>
                        )
                    )}
                </Swiper>
            </div>
        </div>
    );
}