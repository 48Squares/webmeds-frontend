import React from "react";
import SideNav from "./SideNav";
import Link from "next/link";

export default class MobileNavigation extends React.Component {
    render() {
        return (<nav className="bg-regal-blue text-white md:hidden mobile-menu">
                <div className="container mx-auto pb-2 ">
                    <nav className="flex justify-between relative">
                        {this.props.sideNav ? <SideNav callback={this.props.callback}/> : null}

                        <div className="flex py-4 px-3 space-x-3 ">
                            <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor" onClick={this.props.onClick}>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>

                            <div className="flex items-center text-white">
                                <Link href='/'>WebMeds</Link>
                            </div>
                        </div>

                        <div className="flex px-3 py-4 space-x-4 ">
                            <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                            <Link href={"/cart"}>
                                <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                                </svg>
                            </Link>

                            <span className="cursor-pointer">
                                        <Link href={"/login"}>Login</Link>
                                </span>
                        </div>
                    </nav>

                    <div className="px-2">
                        <Link href={"/search"}>
                            <div className="flex bg-white h-10 items-center rounded-sm space-x-2">
                                <svg className="text-gray-500 w-6 h-6 ml-2 inline-block"
                                     xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                </svg>

                                <input
                                    className="flex-grow h-full py-4 text-gray-600 text-sm hover:outline-none focus:outline-none"
                                    type="search"
                                    placeholder="Search Product, Brand and More"/>
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}