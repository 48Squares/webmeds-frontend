import Link from 'next/link'
import React from "react";
export default function payments() {

    return (
        <div>
            <div className="flex  bg-blue-400 h-8 ">
                <a href="#">   <svg className="text-white h-4 w-4 mt-2 mx-4" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg></a>
                <span className="px-3 py-1  text-white  ">Payments</span>
            </div>
            <div className="h-20 bg-red-300 flex ">
                <div className="py-1 px-10 ">
                    <div className="h-10 w-10  mt-3 inline-block  flex justify-center rounded-full border-2 bg-gray-400">
                        <span className="mt-1 inline-block">1</span>
                    </div>
                    <span>Address</span>
                </div>
                <hr className="h-2 w-32 mt-8 pr-8 bg-blue-900" />
                <div className="py-1 px-4 ">
                    <div className="h-10 w-10  mt-3 inline-block  flex justify-center rounded-full border-2 bg-gray-400">
                        <span className="mt-1 inline-block">1</span>
                    </div>
                    <span className="mr-4">Order Summary</span>
                </div>
            </div>
            <div className="h-32 bg-gray-100 mt-3 ">
                <div className="flex">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mx-2 mt-5 text-green-900" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div>
                        <p className="mt-4 text-xs">&#8377; 20 off on first prepaid transcation using UPI payments.  minimum value &#8377;750 </p>
                    </div>
                    <div>
                        <p className="mt-4 mr-4">T&C</p>
                    </div>
                </div>
                <hr className=" r= mt-4 bg-white" />
                <Link href="/">
                    <a>
                        <p className="mx-28 mt-4 text-blue-600">View All Offres</p>
                    </a>
                </Link>
            </div>
            <div className="bg-gray-100 mt-2 h-auto">

                <p className="text-sm mx-4 pt-6 ">All Other Options</p>
                <div className="flex">
                    <input type="radio" className="mx-4 h-6 w-6 mt-4" />
                    <p className="text-xl mt-2">UPI</p>
                    <div className="flex-grow px-4">
                        <img src={"/paytmlogo.png"} className="h-6 w-8 float-right" />
                    </div>
                </div>
                <hr className=" mt-6" />

                <div className="flex mt-4">
                    <input type="radio" className="mx-4 h-6 w-6 mt-4" />
                    <p className="text-xl mt-2">Wallets</p>
                    <div className="flex-grow px-4">
                        <img src={"/paytmlogo.png"} className="h-6 w-8 float-right" />
                    </div>
                </div>
                <hr className=" mt-6" />
                <div className="flex mt-4">
                    <input type="radio" className="mx-4 h-6 w-6 mt-4" />
                    <p className="text-xl mt-2">Credit/Debit/ATM Card</p>
                </div>

                <hr className=" mt-6" />
                <div className="flex mt-4">
                    <input type="radio" className="mx-4 h-6 w-6 mt-4" />
                    <p className="text-xl mt-2">Net Banking</p>
                </div>
                <hr className=" mt-6" />

                <div className="flex mt-4">
                    <input type="radio" className="mx-4 h-6 w-6 mt-4" />
                    <p className="text-xl mt-2">Cash on Delivery</p>
                </div>
                <p className="text-xs mx-14">Safety Tip:Avoid cash or card at delivery.Use any method above to pay now.</p>
                <hr className=" mt-6" />

                <div className="flex justify-between ">
                    <div className="flex mt-4">
                        <input type="radio" className="mx-4 h-6 w-6 mt-4" />
                        <p className="text-xl mt-2">EMI(Easy Installments)</p>

                    </div>
                    <span className="mt-6 ml-8 ">Unavailable</span>
                    <div className="relative">
                        <div className="h-5 w-5 bg-gray-700 rounded-full  mr-6 mt-7 "></div>
                        <p className="absolute top-0 left-0  mt-6 ml-2 h-1  text-white">?</p>
                    </div>
                </div>
                <hr className=" mt-6" />
            </div>
            <div className="h-16 bg-gray-100 mt-3  ">
                <div className="flex ">
                    <p className="text-4xl mx-4 mt-2">+</p>
                    <p className="text-xl mx-4 mt-4">Git Card</p>
                </div>
            </div>


            <div className="h-auto bg-gray-100 mt-4" >
                <p className="pt-3 mx-4 uppercase">Price Details</p>
                <hr className="mt-4" />

                <div className="flex justify-between">
                    <p className="mx-3">Price (1 items)</p>
                    <p className="mr-3">&#8377;896</p>
                </div>

                <div className="flex justify-between mt-2">
                    <p className="mx-3">Delivery Charges</p>
                    <p className="mr-3">Free</p>
                </div>
                <hr className="mt-4" />

                <div className="flex justify-between mt-2">
                    <p className="mx-3">Amount payable</p>
                    <p className="mr-3">&#8377;896</p>
                </div>
                <hr className="mt-4" />

            </div>
        </div>

    );


}