import React from "react";
import Head from "next/head";

export default function MetaHeader() {
    return (
        <>
            <Head>
                <meta name="twitter:card" content="product"/>
                <meta name="twitter:site" content="@publisher_handle"/>
                <meta name="twitter:title" content="Page Title"/>
                <meta name="twitter:description" content="Page description less than 200 characters"/>
                <meta name="twitter:creator" content="@webmeds1"/>
                <meta name="twitter:image" content="http://www.example.com/image.jpg"/>
                <meta name="twitter:data1" content="$3"/>
                <meta name="twitter:label1" content="Price"/>
                <meta name="twitter:data2" content="Black"/>
                <meta name="twitter:label2" content="Color"/>

                <title>Webmeds</title>
                <meta key="description"
                      content="Webmeds is multivendor medical platform allowing every medical vendor to sell medicine with peace of mind."/>
            </Head>
        </>
    );
}
