import React, {useState} from "react";
import {Transition} from '@headlessui/react';

export default function MyAccount() {
    const [isOpen, setIsOpen] = useState(false)

    return <div className="relative">
        <div className="">
            <button type="button"
                    onClick={() => setIsOpen(!isOpen)}
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

        <Transition
            show={isOpen}
        >
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
                       role="menuitem">Notifications</a>
                </div>

                <div className="py-1" role="none">
                    <a href="#"
                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                       role="menuitem">Logout</a>
                </div>
            </div>
        </Transition>
    </div>;
}