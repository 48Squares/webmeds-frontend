import React from "react";
import Header from "../components/Header";

export default function Discount() {
    return (
        <div className="bg-indigo-50">
            <Header title={'Discount For You'}/>

            <p className="text-center px-3 py-2  text-gray-700 text-sm flex justify-center items-center">
                This page renders product which are currently providing
                discount.
            </p>
        </div>
    );
}