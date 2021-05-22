import React from "react";


export default class DesktopMenuBar extends React.Component {

    render() {
        const image = '/menu/1.png';

        return (
            <nav className="bg-white shadow-md mb-2">
                <header className="px-3 py-1 flex justify-around">
                    <div className="flex flex-col justify-center">
                        <div>
                            <img src={image} alt="" width="64px"/>
                        </div>
                        
                        <p className="text-sm text-gray-800 font-medium leading-none">
                            Top Offers
                        </p>
                    </div>

                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="64px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-medium leading-none">
                            Top Offers
                        </p>
                    </div>

                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="64px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-medium leading-none">
                            Top Offers
                        </p>
                    </div>
                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="64px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-medium leading-none">
                            Top Offers
                        </p>
                    </div>

                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="64px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-medium leading-none">
                            Top Offers
                        </p>
                    </div>

                    <div className="flex flex-col justify-center ">
                        <div>
                            <img src={image} alt="" width="64px"/>
                        </div>

                        <p className="text-sm text-gray-800 font-medium leading-none">
                            Top Offers
                        </p>
                    </div>
                </header>
            </nav>
        );
    }
}

