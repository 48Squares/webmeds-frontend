import React from 'react';
import Header from "../../components/Header";

export default function Legal() {
    return (
        <div>
            <Header title={"Legal Policies"}/>

            <div className="flex justify-between ml-2">
                <a href="termofuse" className="flex-grow">Term Of Use</a>
                <a href="termofuse">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="h-8 w-10  ">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
            <div className="flex justify-between mt-2 ml-2">
                <a href="privacypolicy" className="flex-grow">Privacy Policy</a>
                <a href="privacypolicy">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="h-8 w-10  ">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
            <div className="flex justify-between mt-2 ml-2">
                <a href="affiliatepolicy" className="flex-grow">Affiliate Policy</a>
                <a href="affiliatepolicy">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="h-8 w-10  ">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
            <div className="flex justify-between ml-2 mt-2">
                <a href="infringementpolicy" className="flex-grow">Infringement Policy</a>
                <a href="infringementpolicy">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="h-8 w-10  ">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
            <div className="flex justify-between ml-2 mt-2">
                <a href="license" className="flex-grow">License</a>
                <a href="license">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="h-8 w-10  ">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
            <div className="flex justify-between ml-2 mt-2">
                <a href="returnpolicy" className="flex-grow">Returns Policy</a>
                <a href="returnpolicy">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                         className="h-8 w-10  ">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
            <div className="flex mt-56 p-4 bg-gray-100  justify-around border-t-2">
                <hr/>
                <span>Original<br/>Products</span>
                <span>Cash on<br/>Delivery</span>
                <span>Free & Easy<br/>Returns</span>
                <span>100% Buyer<br/>Protection</span>
            </div>
            <div className="bg-gray-600">
                <span className="flex justify-center text-white">&copy; 2021-2022 webmeds.in</span>
            </div>
        </div>
    );
}