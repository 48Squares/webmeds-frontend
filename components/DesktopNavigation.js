import React from "react";
import Link from "next/link";
import MyAccount from "./DeskopMenu/MenuItem/MyAccount";

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

                    <MyAccount/>

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

