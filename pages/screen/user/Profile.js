import React from "react";
import Header from "/../components/Header";
import Link from "next/link";

/**
 * Show profile of user
 */
export default class Profile extends React.Component {

    render() {
        return (
            <div className="bg-white mb-8">
                <Header title={'My Account'}/>

                <div className="mb-8">

                    <div className="bg-regal-blue w-full">
                        <div className="py-4 flex justify-center">
                            <button className="mx-auto" type="button">
                                <svg
                                    className="p-2 mx-auto rounded-full border border-gray-300 text-white w-24 h-24"
                                    xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="px-2">
                        <form>
                            <div className="flex space-x-4">
                                <input
                                    className="shadow-sm border border-gray-300 h-12 w-full px-4 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    type="text"
                                    name="firstName"
                                    aria-label="Your first name"
                                    placeholder="First name"
                                />
                            </div>

                            <div className="flex space-x-4">
                                <input
                                    className="border border-gray-300 h-12 w-full px-4 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    type="text"
                                    name="lastName"
                                    aria-label="Your last name"
                                    placeholder="Last name"
                                />
                            </div>

                            <button className="text-regal-blue py-2 w-full text-center" type="submit">Submit</button>
                        </form>
                    </div>

                    <div className="px-2">
                        <div className="flex items-center space-x-2 border pr-2 mt-2 focus:border-indigo-300">
                            <input
                                className="h-12 w-full px-4 rounded-sm focus:outline-none"
                                type="number"
                                name="phone" aria-label="Your phone number"
                                placeholder="Phone number"
                            />

                            <button className="text-regal-blue text-sm">update</button>
                        </div>

                        <div className="flex items-center space-x-2 border pr-2 mt-2 focus:border-indigo-300">
                            <input
                                className="h-12 w-full px-4 rounded-sm focus:outline-none"
                                type="email"
                                name="email" aria-label="Your email address"
                                placeholder="Email address"
                            />

                            <button className="text-regal-blue text-sm">update</button>
                        </div>

                        <div className="mt-4">
                            <div className="py-1">
                                <Link href="/user/change_password"
                                      className="py-2 text-md text-gray-600">
                                    Change Password
                                </Link>
                            </div>

                            <div className="py-1">
                                <Link href="user/deactivate_account"
                                      className="py-2 text-md text-gray-600">
                                    Deactivate Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
