import React from "react";
import Header from "../../components/Header";

export default function Cart() {
    return (
        <div>
            <Header title={'My Cart'}/>

            <div className="">
                <div className="">
                    <img className="sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 h-72 mx-auto"
                         src="https://res.cloudinary.com/sq48/image/upload/v1614773825/empty-cart_ihmi6a.gif"
                         alt=""/>

                    <div className="flex flex-col justify-center items-center">
                        <h3 className="text-xl font-normal text-gray-800 mt-4 leading-none">Missing cart items?</h3>

                        <p className="text-sm text-gray-500 mt-4">
                            Login to see items you added previously
                        </p>

                        <button
                            className="mt-4 shadow bg-regal-blue px-12 py-3 text-sm font-semibold uppercase text-white rounded-sm focus:outline-none hover:bg-indigo-800">Login
                        </button>

                        <a href="/" className="mt-4 text-sm text-regal-blue">Continue Shopping</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
