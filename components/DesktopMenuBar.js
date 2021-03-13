import React from "react";

export default class DesktopMenuBar extends React.Component {
    render() {
        const image = '/menu/1.png';

        return (
            <nav className="bg-white">
                <header className="px-3 py-2 flex justify-around">
                    <div className="flex flex-col justify-center">
                        <div>
                            <img src={image} alt="" width="80px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-semibold leading-none">
                            Top Offers
                        </p>
                    </div>

                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="80px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-semibold leading-none">
                            Top Offers
                        </p>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="80px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-semibold leading-none">
                            Top Offers
                        </p>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="80px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-semibold leading-none">
                            Top Offers
                        </p>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="80px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-semibold leading-none">
                            Top Offers
                        </p>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="80px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-semibold leading-none">
                            Top Offers
                        </p>
                    </div>
                </header>
            </nav>
        );
    }
}

