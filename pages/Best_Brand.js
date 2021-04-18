import Link from 'next/link'
import React from "react";

export default function Best_Brand() {
    return (
        <div className="bg-blue-200 ">
            <div className="flex justify-between h-32">
                <p className="mt-12 mx-4 text-xl">
                    <strong>Best Brands</strong>
                </p>
                <button className="text-white h-12 w-24 bg-regal-blue rounded mt-12 mx-2">View All</button>
            </div>

            <div className="h-auto w-72 bg-white  m-auto">
                <div className="h-56 w-100  flex">
                    <div className="h-56 w-50% border-r  ">
                        <img src={"/earphone.jpg"} className="mt-4 h-36" alt=""/>
                        <spna className="mx-4">Roti Maker</spna>
                        <br/>
                        <Link href="/">
                            <a> <span className="text-green-400 mx-3">UP to 75% Off</span></a>
                        </Link>
                    </div>

                    <div className="h-56 w-50% ">
                        <img src={"/bag.jpg"} className="h-36  mt-4" alt=""/>

                        <a> <span className="mx-6">Sling Bags</span></a>
                        <br/>

                        <Link href="/">
                            <a>
                                <span className="text-green-400 mx-4">Mine 80% Off</span>
                            </a>
                        </Link>
                    </div>
                </div>

                <hr/>
                <div className="h-56 w-100  flex">
                    <div className="h-56 w-50% border-r  ">
                        <img src={"/earphone.jpg"} className="mt-4 h-36" alt={}/>
                        <spna className="mx-4">Roti Maker</spna>
                        <br/>
                        <Link href="/">
                            <a> <span className="text-green-400 mx-3">UP to 75% Off</span></a>
                        </Link>
                    </div>

                    <div className="h-56 w-50% ">
                        <img src={"/bag.jpg"} className="h-36  mt-4" alt={}/>
                        <span className="mx-6">Sling Bags</span><br/>
                        <Link href="/">
                            <a> <span className="text-green-400 mx-4">Mine 80% Off</span></a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}