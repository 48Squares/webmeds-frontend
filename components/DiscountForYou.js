import React from 'react';
import 'swiper/swiper-bundle.css';
import SwiperCore, {Autoplay, EffectFade, Pagination} from 'swiper/core';
import Swiper from "swiper";

function PlaceholderShell() {
    return <div className="p-4 h-48 animate-pulse flex space-x-4">
        <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-100 w-48 h-full">&nbsp;
            </div>
            <span className="bg-gray-100 w-full h-8 mt-2">&nbsp;</span></div>
    </div>;
}

export default class DiscountForYou extends React.Component {
    render() {

        const sliders = [
            1, 2, 3, 4.5
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

                <div className="flex justify-even">
                    <section className="swiper-container h-80 px-2 hidden lg:block">
                        <div className="swiper-wrapper">
                            {sliders.map((key, index) => (
                                    <div className="swiper-slide" key={index}>
                                        <PlaceholderShell/>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="swiper-pagination"/>
                    </section>
                </div>
            </div>
        )
    };

    componentDidMount() {
        SwiperCore.use([Pagination, Autoplay, EffectFade]);

        let pagination = {
            el: '.swiper-pagination',
            clickable: true,
        };

        new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 6,
            speed: 1500,
            autoplay: {
                delay: 2000
            },
            direction: 'horizontal',
            effect: 'slide',
            fadeEffect: {
                crossFade: true
            },
            pagination
        });
    }
}