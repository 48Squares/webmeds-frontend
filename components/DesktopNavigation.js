import React from "react";
import Link from "next/link";

export default class DesktopNavigation extends React.Component {
    render() {
        return (
            <nav className="hidden bg-regal-blue text-white desktop-meu py-2 sm:hidden md:block">
                <div className="sm:container flex mx-auto items-center justify-center space-x-8">
                    <div>
                        <h3 className="text-base">Webmeds</h3>
                    </div>

                    <div className="px-2 w-5/12">
                        <Link href={"/"}>
                            <div className="flex bg-white h-9 items-center rounded-sm space-x-2 px-3">
                                <input
                                    className="flex-grow h-full py-4 text-gray-700 text-sm hover:outline-none focus:outline-none placeholder-gray-600"
                                    type="search"
                                    placeholder="Search Product, Brand and More"/>

                                <svg className="text-gray-500 w-6 h-6 inline-block"
                                     xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>
                            </div>
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="">
                            <button type="button"
                                    className="inline-flex items-center justify-center w-full rounded-md py-2  font-medium focus:outline-none text-white"
                                    id="options-menu" aria-expanded="true" aria-haspopup="true">
                                My Account

                                <svg className="-mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"/>
                                </svg>
                            </button>
                        </div>

                        <div
                            className="origin-top-right absolute right-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10"
                            role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <div className="py-1" role="none">
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                   role="menuitem">My Profile</a>
                            </div>

                            <div className="py-1" role="none">
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                   role="menuitem">My Orders</a>
                            </div>

                            <div className="py-1" role="none">
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                   role="menuitem">My Cart</a>
                            </div>

                            <div className="py-1" role="none">
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                   role="menuitem">Coupons</a>
                            </div>

                            <div className="py-1" role="none">
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                   role="menuitem">Notification</a>
                            </div>

                            <div className="py-1" role="none">
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                   role="menuitem">Logout</a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-1">
                        <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                             fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                        </svg>

                        <span>Cart</span>
                    </div>
                </div>
            </nav>
        );
    }
}

