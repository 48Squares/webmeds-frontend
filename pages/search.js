import React from "react";
import Router from "next/router";

class Search extends React.Component {

    render() {
        const oldSearches = [
            'Cider', 'Face Wash', 'Baby Oil', 'Honey'
        ];

        return (
            <div>
                <div className="px-2 py-2 bg-white">
                    <div className="flex bg-white h-10 items-center rounded-sm space-x-2">
                        <div onClick={() => Router.back()}>
                            <svg className="w-6 h-6 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>
                        </div>

                        <input
                            className="flex-grow h-full py-4 text-gray-600 text-sm hover:outline-none focus:outline-none"
                            type="search"
                            placeholder="Search Product, Brand and More"/>

                        <svg className="text-gray-500 w-6 h-6 ml-2 inline-block" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"/>
                        </svg>
                    </div>
                </div>

                <div className="bg-gray-100 w-full h-screen">
                    <div className="p-2">
                        {oldSearches.map((tag, index) => (
                                <button type="button" className="text-sm bg-white text-gray-700 p-1 mx-2 rounded shadow"
                                        key={index}>
                                    {tag}
                                </button>
                            )
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;