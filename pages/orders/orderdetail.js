import React from "react";

export default function orderdetail() {
    return (
        <div className="bg-gray-200 ">
            <div className="bg-white h-12 p-4 mt-2">
                <span className="text-gray-500">Webmeds Customer shared this order with you</span>
            </div>
            <div className="bg-white p-4 mt-3">
                <span className="text-gray-500">Order ID - OD116118342922416000</span>
            </div>
            <div className="bg-white h-48 border-t-2 flex">
                <div className="p-3">
                    <a href="#" className="text-2xl">Redmi note7s(Rubby Red,32gb)</a><br />
                    <span className="text-gray-400">Rubby Red</span><br />
                    <span className="text-gray-400 inline-block mt-4">Seller: SuperComNet</span><br />
                    <span className="text-2xl inline-block mt-3">&#8377; 10999</span><span className="text-green-500 ml-4">1 offer</span>
                </div>
                <div className="flex">
                    <a href="#"><img src={"/redminote7s.jpeg"} className="h-32 w-16 mt-6 mr-10" /></a>
                </div>
            </div>
            <div className="bg-white border-t-2 p-4 h-48">
                <span className="text-2xl">Oredered</span><br />
                <span className="text-gray-400">Fri, 09th apr,21</span><br />
                <span className="text-2xl inline-block mt-6">Delivered</span><br />
                <span className="text-gray-400">Mon, 12 apr,21</span><br />
                <span className="text-gray-400">Your Item has been Delivered</span>
            </div>
            <div className="bg-white mt-2 h-16 p-6">
                <span className="text-gray-400 ">Shopping Details</span>
            </div>
            <div className="bg-white border-t-2 h-48 p-4">
                <span className="text-2xl">Mukesh Kumar Gupta</span><br />
                <span className="inline-block mt-4">Chandauli Hospital ke Pass </span><br />
                <span>Sakaldiha Road Chandauli</span><br />
                <span>u p pin - 232104</span><br />
                <span>Phone Number : 8562976958,8177042526</span>
            </div>
            <div className="bg-white h-16 p-4 text-gray-400 mt-2">Price Details</div>
            <div className="bg-white h-64 border-t-2 p-3">
                <div className="flex justify-between mt-2">
                    <span>List Price</span>
                    <span><del>&#8377;11999</del></span>
                </div>
                <div className="flex justify-between mt-4">
                    <span>Selling Price</span>
                    <span>&#8377;11999</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span>Extra Discount</span>
                    <span>-&#8377;1000</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span>Spaical Price</span>
                    <span>&#8377;10999</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span>Shipping Fee</span>
                    <span>&#8377;40</span>
                </div>
                <div className="flex justify-between mt-4">
                    <span>Shipping Discount </span>
                    <span>&#8377;40</span>
                </div>
            </div>
            <div className="bg-white h-16 border-t-2 p-3">
                <div className="flex justify-between">
                    <span>Total Amount</span>
                    <span>&#8377;10999</span>
                </div>
            </div>
            <div className="bg-white mt-1 p-4 flex h-28 justify-between">
                <div>
                    <span className="text-green-600">1 offer:</span><br />
                    <span>Shop now to get Extra 10% <br />Off (Upto ₹100) on</span>
                </div>
                <div>
                    <a href="#" className="text-blue-400">know more</a>
                </div>
            </div>
            <div className="bg-white p-4 mt-1">
                <li>Cash On Delivery: ₹10999.0</li>
            </div>
        </div>
    );
}