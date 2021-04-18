import React from "react";
import Header from "../components/Header";
import {Disclosure} from "@headlessui/react";

export default function HelpCenter() {
    return (
        <div className="bg-gray-100 h-screen">
            <Header title={'Help Center'}/>

            <div className="bg-white py-4 px-3 mb-4 text-center text-lg font-medium">
                What issue are you facing?
            </div>

            <div className="my-1">
                <Disclosure>
                    <Disclosure.Button className="bg-white py-2 px-3 flex w-full justify-between">
                        <p className="">
                            I want to track my order.
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="text-gray-500 py-2 px-3 bg-white">
                        Check order status and call the delivery agent.
                    </Disclosure.Panel>
                </Disclosure>
            </div>

            <div className="my-1">
                <Disclosure>
                    <Disclosure.Button className="bg-white py-2 px-3 flex w-full justify-between">
                        <p className="">
                            I want to manage my order.
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="bg-white text-gray-500 py-2 px-3">
                        Cancel ,change delivery date and address.
                    </Disclosure.Panel>
                </Disclosure></div>

            <div className="my-1">
                <Disclosure>
                    <Disclosure.Button className="bg-white py-2 px-3 flex w-full justify-between">
                        <p className="">
                            I want to help with return and refund.
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="bg-white text-gray-500 py-2 px-3">
                        Manage and track return.
                    </Disclosure.Panel>
                </Disclosure>
            </div>

            <div className="my-1">
                <Disclosure>
                    <Disclosure.Button className="bg-white py-2 px-3 flex w-full justify-between">
                        <p className="">
                            Browse help topic.
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="bg-white text-gray-500 py-2 px-3">
                        Topics.
                    </Disclosure.Panel>
                </Disclosure>
            </div>
        </div>
    );
}