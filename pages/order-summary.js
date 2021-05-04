import React from "react";

export default function ordersummary() {
    return (
        <div className="bg-gray-200 h-screen">
            <div className="bg-white flex justify-between h-20 px-10">
                <div>
                    <div className="bg-gray-200 rounded-full h-8 w-8 flex justify-center mt-4 ml-3 border-2">
                        <span className="mt-1">1</span><br />
                    </div>
                    <span>Address</span>
                </div>
                <div>
                    <div className="bg-gray-200 rounded-full h-8 w-8 flex justify-center mt-4 ml-10 border-2">
                        <span className="mt-1">2</span><br />
                    </div>
                    <span>Order Summary</span>
                </div>
                <div>
                    <div className="bg-gray-200 rounded-full h-8 w-8 flex justify-center mt-4 ml-4 border-2">
                        <span className="mt-1">3</span><br />
                    </div>
                    <span>Payment</span>
                </div>
            </div>
            <div className="bg-white mt-3 py-2 pl-4 pr-10 h-56">
                <span><strong>Mukesh Kumar Gupta</strong></span><br />
                <span className="mt-3 inline-block">Mahamaya Polytechnic Dhanapur,Chandauli Road Dhanapur,Chandauli</span>
                <span>Chandauli-232105</span><br />
                <span className="mt-2 inline-block">8562976958</span><br />
                <div className="mr-4 flex justify-center mt-8">
                    <button className="bg-regal-blue inline-block w-80 rounded">Change or Add Address</button>
                </div>
            </div>
            <div className="bg-white mt-3 h-48 p-4 flex justify-between">
                <div>
                    <span><strong>Redmi Note 7s(Onaxy Black,64 GB)</strong></span><br />
                    <span className="text-gray-400">4GB RAM</span><br />
                    <span className="text-2xl  mt-4 inline-block">&#8377;12999</span><br />
                    <span className="text-yellow-500">  2 offer apply <li className="inline">       2 offer available</li></span><br />
                    <span className="inline-block mt-4">Delivery By sun 8th Apr |Delivery &#8377;40</span>
                </div>
                <div>
                    <img src={"redminote7s.jpeg"} className="h-30 w-16" />
                </div>
            </div>
            <div className="flex justify-between p-6 h-24">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-8  ml-10" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="inline-block mr-12 ml-6">Safe And Secure Payment,Easy returns. 100% Authentic products</span>
            </div>
            <div className="p-4 flex justify-between">
                <div>
                    <span className="text-2xl">&#8377;12999</span><br />
                    <a href="#" className="text-blue-400">View Price Details</a>
                </div>
                <button className="bg-regal-blue px-6">Countinue</button>
            </div>
        </div>
    );
}