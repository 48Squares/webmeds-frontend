import React from 'react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {A11y, Autoplay, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

export default class DiscountForYou extends React.Component {
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
                        <a href=""
                           className="px-6 py-3 bg-regal-blue text-sm text-white rounded-sm uppercase shadow-md">View
                            More</a>
                    </div>
                </div>

                <hr/>

                <div className="w-full p-4">
                    <Swiper
                        autoplay={true}
                        slidesPerView={3}
                        pagination={{clickable: true}}
                    >
                        {products.map((key, index) => (
                                <SwiperSlide key={index}>
                                    <div className="p-4 h-48 flex space-x-4 relative">
                                        <img
                                            className="absolute inset w-full h-full object-cover"
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