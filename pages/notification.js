import Link from 'next/link'
import React from "react";
export default function Home() {
    return (

        <div className="h-screen w-screen bg-gray-200 ">
            <div className="h-8 w-full bg-blue-700">
                <div className="flex">
                    <Link href="/">
                        <a>   <svg className="text-white h-4 w-4 mt-2 ml-2" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg></a>
                    </Link>
                    <span className="px-3 py-1  text-white">Notification</span>
                    <div className="flex-grow mt-2 mr-4">
                        <Link href="/">
                            <a>
                                <svg className="text-white h-4 w-4 float-right" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg></a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-36 w-48 m-auto mt-12">
                <img className="h-36 w-48" src={"https://images.unsplash.com/photo-1580907009323-2d2336cbf1e0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1534&q=80"}  alt=""/>
            </div>

            <div>
                <h2 align="center" className="text-black mt-4"><b>No Notification yet</b></h2>
                <p align="center" className="text-gray-900 leading-5">Sign in to view personalised  <br />notification and offrers</p>

            </div>


            <div className="flex  justify-center ">
                <button className="text-blue-800 bg-white p-2 mt-4 text-xl">Continue Shopping</button>
            </div>

        </div>
    );
}