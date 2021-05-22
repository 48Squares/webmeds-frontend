import React from 'react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {A11y, Autoplay, Navigation, Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

function PlaceholderShell() {
    return <div className="p-4 h-48 animate-pulse flex space-x-4">
        <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-100 w-48 h-full">&nbsp;
            </div>
            <span className="bg-gray-100 w-full h-8 mt-2">&nbsp;</span>
        </div>
    </div>;
}

export default class TrendingBrands extends React.Component {
    render() {

        const sliders = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        ];

        return (
            <div className="bg-white py-2 mt-2 shadow">
                <div className="flex justify-between p-4 items-center">
                    <div>
                        <h1 className="text-2xl font-medium text-gray-800 leading-none">
                            Trending Brands
                        </h1>
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
                        slidesPerView={6}
                        navigation
                        pagination={{clickable: true}}
                    >
                        {sliders.map((key, index) => (
                                <SwiperSlide key={index}>
                                    <PlaceholderShell/>
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