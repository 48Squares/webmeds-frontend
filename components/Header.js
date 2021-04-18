import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Header({title}) {
    return (
        <div className="bg-regal-blue">
            <div className="flex justify-center py-4 px-1">
                <Link href="/" className="ml-2 mr-3 focus:outline-none inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd"
                              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                              clipRule="evenodd"/>
                    </svg>
                </Link>

                <div className="text-white flex-grow ml-2">{title}</div>
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
