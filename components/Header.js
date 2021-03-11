import React from "react";
import Head from "next/head";

export default function Header({title}) {
    return (
        <div className="bg-regal-blue">
            <div className="flex justify-center py-4">
                <button type="button" className="ml-2 mr-3 focus:outline-none inline-block">
                    <svg className="w-6 h-6 text-white block" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                    </svg>
                </button>

                <div className="text-white flex-grow">{title}</div>
            </div>

            <Head>
                <meta name="twitter:card" content="product"/>
                <meta name="twitter:site" content="@publisher_handle"/>
                <meta name="twitter:title" content="Page Title"/>
                <meta name="twitter:description" content="Page description less than 200 characters"/>
                <meta name="twitter:creator" content="@author_handle"/>
                <meta name="twitter:image" content="http://www.example.com/image.jpg"/>
                <meta name="twitter:data1" content="$3"/>
                <meta name="twitter:label1" content="Price"/>
                <meta name="twitter:data2" content="Black"/>
                <meta name="twitter:label2" content="Color"/>

                <title>Webmeds</title>

                <meta key="description"
                      content="Webmeds is multivendor medical platform allowing every medical vendor to sell medicine with peace of mind."/>
            </Head>
        </div>
    );
}

export async function getStaticProps() {
    return {
        title: this.props.title
    }
}
