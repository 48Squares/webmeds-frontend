import React from "react";
import Header from "../../../components/Header";

/**
 * Show form to create address for user.
 */
class Create extends React.Component {
    constructor(props) {
        super(props);
        this.createAddress = this.createAddress.bind(this);
    }

    createAddress(event) {
        event.preventDefault();

        fetch('/', {}).then(r => r.json())
            .then(r => console.log(r));
    }

    render() {
        return (
            <div className="bg-white mb-8">
                <Header title={'Add delivery address'}/>

                <div className="p-4 mb-8">
                    <form className="relative" onSubmit={this.createAddress}>
                        <input
                            className="border border-gray-300 h-12 w-full px-4 rounded-sm mt-2 border-1 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name="fullName" aria-label="Full Name"
                            placeholder="Full Name"
                        />

                        <input
                            className=" border border-gray-300 h-12 w-full px-4 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                            type="text"
                            name="phone" aria-label="Your phone number"
                            placeholder="Phone number"
                        />

                        <div className="flex space-x-4">
                            <input
                                className=" border border-gray-300 h-12 w-full px-4 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                name="phone" aria-label="Your pin code"
                                placeholder="Pin code"
                            />

                            <button
                                className="flex items-center space-x-2 border-gray-300 h-12 text-sm bg-regal-blue text-white w-full px-2 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="button"
                            >
                                <svg className="text-gray-300 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24"
                                     stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>

                                <span className="text-sm flex-grow">Use my location</span>
                            </button>
                        </div>

                        <div className="flex space-x-4">
                            <input
                                className="shadow-sm border border-gray-300 h-12 w-full px-4 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                name="state" aria-label="Your state"
                                placeholder="State"
                            />

                            <input
                                className="border border-gray-300 h-12 w-full px-4 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                name="city" aria-label="Your city"
                                placeholder="Your city"
                            />
                        </div>

                        <div className="flex space-x-2">
                            <input
                                className=" border border-gray-300 h-12 w-full px-4 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                name="house_no" aria-label="Your pin code"
                                placeholder="House or Building no."
                            />
                        </div>

                        <div className="flex space-x-2">
                            <input
                                className=" border border-gray-300 h-12 w-full px-4 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                name="local_address" aria-label="Your pin code"
                                placeholder="Road, area or colony"
                            />
                        </div>

                        <div className="flex space-x-2">
                            <input
                                className=" border border-gray-300 h-12 w-full px-4 rounded-sm mt-4 border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                type="text"
                                name="landmark" aria-label="Your pin code"
                                placeholder="Landmark or famous shop/mall"
                            />
                        </div>

                        <div className="space-x-2 mt-4">
                            <button type="button" className="px-3 py-1 bg-white text-sm rounded border shadow">Home
                            </button>

                            <button type="button" className="px-3 py-1 bg-white text-sm rounded border shadow">Office
                            </button>
                        </div>

                        <div className="relative mt-2 h-10">
                            <button
                                type="submit"
                                className="absolute top-2 left-0 w-full bg-red-500 px-4 py-4 focus:ring hover:ring rounded-sm text-white focus:outline-none text-sm uppercase">
                                Save Address
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Create;