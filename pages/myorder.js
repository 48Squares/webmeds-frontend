import React from "react";
import Header from "../components/Header";
import Link from "next/link";

export default function MyOrder() {
    return (
        <div>
            <Header title={'My Orders'}/>

            <div className="flex px-3 items-center">
                <div className="flex border-2 flex-grow px-3 mr-10 h-10 justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>

                    <input type="text" placeholder="Search you order here" className="flex-grow border-none px-3"/>
                </div>

                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex justify-between" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path fillRule="evenodd"
                              d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                              clipRule="evenodd"/>
                    </svg>
                    <span>Filters</span>
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <img src={"/noorder.jpg"} className=" h-56 w-56" alt=""/>
            </div>

            <div className="flex justify-center">
                <p className="text-md text-gray-800">You have no orders. </p>
            </div>

            <div className="flex justify-center mt-5">
                <Link href="/">
                    <a className="bg-regal-blue text-white py-2 rounded px-4">Start Shopping</a>
                </Link>
            </div>
        </div>
    );
}