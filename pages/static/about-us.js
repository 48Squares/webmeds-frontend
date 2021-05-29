import React from "react";
import Header from '../../components/Header';
import Footer from "../../components/Footer";

export default function AboutUs() {
    return (
        <div>
            <Header title={'About Us'}/>

            <div className="px-4 py-4">
                <h1 className="text-lg text-gray-800">Webmeds</h1>

                <p className="text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores blanditiis,
                    consequuntur
                    debitis deleniti dolorem doloremque inventore minus nihil nobis obcaecati placeat porro quas
                    reprehenderit repudiandae sunt suscipit tenetur ut!

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, animi consectetur ducimus, esse et
                    eum
                    id ipsa laudantium maiores molestiae nihil nisi nulla perspiciatis repellat rerum temporibus
                    ullam
                    ut, voluptatem.
                </p>


                <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
                    aliquid cupiditate debitis
                    eos, explicabo, fugiat laudantium, modi nihil odio praesentium quisquam repellendus
                    reprehenderit repudiandae tempora veniam voluptatem voluptatum! Delectus, unde.</p>

                <p className="text-sm mt-2">Ab ad amet animi atque beatae consectetur, dolor doloribus est
                    exercitationem facilis harum
                    inventore iusto magnam necessitatibus nisi nostrum odit pariatur saepe sunt voluptas? Alias
                    corporis natus qui quis? Ut.</p>
            </div>

            <Footer/>
        </div>
    );
}
