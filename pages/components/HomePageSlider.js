import SwiperCore, {Pagination, Autoplay, EffectFade} from 'swiper/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import React from "react";

class HomePageSlider extends React.Component {
    render() {
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <img
                            src="https://res.cloudinary.com/sq48/image/upload/v1614252105/k7ci0lw6pkxwbk8g7ce2_oparvb.png"
                            alt=""/>
                    </div>

                    <div className="swiper-slide">
                        <img
                            src="https://res.cloudinary.com/sq48/image/upload/v1614252152/tykxpebdxxpxitlmlnjl_kskhh0.jpg"
                            alt=""/>
                    </div>

                    <div className="swiper-slide">
                        <img
                            src="https://res.cloudinary.com/sq48/image/upload/v1614255027/consult-doctors_wovgpj.jpg"
                            alt=""/>
                    </div>
                </div>

                <div className="swiper-pagination"/>
            </div>
        );
    }

    componentDidMount() {
        SwiperCore.use([Pagination, Autoplay, EffectFade]);

        new Swiper('.swiper-container', {
            loop: true,
            speed: 1500,
            direction: 'horizontal',
            autoplay: {
                delay: 2000,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }
}

export default HomePageSlider;