import React, {Component} from "react";
import Link from 'next/link';

export default class Login extends Component {

    render() {
        return (
            <div className="bg-regal-blue">
                <div className=" w-screen px-4 py-4">
                    <div className="flex justify-start py-4">
                        <Link href="/">
                            <button className="inline-block mr-28 focus:outline-none"
                                    aria-label="Go back to previous page"
                            >
                                <svg className="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </Link>

                        <span className="text-white font-semibold">Webmeds</span>
                    </div>
                </div>

                <div className="bg-white w-full h-full rounded-t-lg">
                    <div className="px-6 py-4">
                        <p className="">Login to get started</p>
                    </div>

                    <div>
                        <form action="" className="">
                            <div className="px-4">
                                <input
                                className=" border border-gray-300 h-12 w-full px-4 rounded-md mt-2 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                name="phone" aria-label="User phone number"
                                placeholder="Phone number"
                            />
                            </div>

                            <div className="absolute bottom-4 left-0 flex w-full justify-center px-4">
                                <button
                                    className="bg-regal-blue px-4 py-3 focus:ring hover:ring rounded-sm text-white w-full focus:outline-none">
                                    Send OTP
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
