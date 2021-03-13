import React from "react";
import Swiper from "swiper";
import SwiperCore, {Autoplay, EffectFade, Pagination} from 'swiper/core';
import 'swiper/swiper-bundle.css';

export default class DesktopSlider extends React.Component {
    render() {
        const sliders = [
            '/slider/1.png',
            '/slider/1.png',
            '/slider/1.png',
            '/slider/1.png',
        ];

        return (
            <section className="swiper-container h-80 px-2 hidden lg:block">
                <div className="swiper-wrapper">
                    {sliders.map((url, index) => (
                            <div className="swiper-slide relative" key={index}>
                                <img className="absolute inset-0 object-cover object-center w-full h-full" src={url}
                                     alt=""/>
                            </div>
                        )
                    )}
                </div>

                <div className="swiper-pagination"/>
            </section>
        );
    }

    componentDidMount() {
        SwiperCore.use([Pagination, Autoplay, EffectFade]);

        let pagination = {
            el: '.swiper-pagination',
            clickable: true,
        };

        new Swiper('.swiper-container', {
            loop: true,
            speed: 1500,
            direction: 'horizontal',
            effect: 'slide',
            fadeEffect: {
                crossFade: true
            },
            pagination
        });
    }
}

