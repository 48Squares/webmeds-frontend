import React from 'react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {A11y, Autoplay, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import Link from "next/link";

export default class DiscountForYou extends React.Component {
    /**
     * Pagination formula: |totalSlides - slidersPerView| + 1
     * @returns {*}
     */
    render() {
        const products = [
            '/products/1.jpg',
            '/products/2.jpg',
            '/products/3.jpg',
            '/products/4.jpg',
            '/products/5.jpg',
            '/products/6.jpg',
            '/products/7.jpg',
            '/products/8.jpg',
        ];

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
                        loop={true}
                        pagination={{clickable: true}}
                    >
                        {products.map((key, index) => (
                                <SwiperSlide key={index}>
                                    <div className="h-48 relative mr-1">
                                        <img
                                            className="absolute rounded inset w-full h-full object-cover"
                                            src={key} alt=""/>
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>
                </div>
            </div>
        )
    };

    componentDidMount() {
        SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);
    }
}