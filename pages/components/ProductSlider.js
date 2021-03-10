import SwiperCore, {Pagination, Autoplay, EffectFade} from 'swiper/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import React from "react";

class ProductSlider extends React.Component {

    render() {
        return (
            <div className="swiper-container h-80">
                <div className="swiper-wrapper">
                    {this.props.media.map((url, index) => (
                            <div className="swiper-slide relative" key={index}>
                                <img className="absolute inset-0 object-cover object-center w-full h-full" src={url}
                                     alt=""/>
                            </div>
                        )
                    )}
                </div>

                <div className="swiper-pagination"/>
            </div>
        );
    }

    componentDidMount() {
        SwiperCore.use([Pagination, Autoplay, EffectFade]);

        let pagination = {
            el: '.swiper-pagination',
            clickable: true,
        };

        if (this.props.media.length === 1) {
            pagination.el = '.swiper-pagination-0';
        }

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

export default ProductSlider;