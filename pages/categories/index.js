import React from "react";

import Link from 'next/link';
class Categories extends React.Component {

    render() {
        const categories = [
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492220/covid-essentials_n9ifrp.jpg',
                title: 'Covid Essentials'
            },

            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492481/diabetes_ml3tkd.jpg',
                title: 'Diabetes'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492658/eyewear_abud4i.jpg',
                title: 'Eyewear'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492790/ayush_b7vbi9.png',
                title: 'Ayush'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492882/fitness_lq8gfr.jpg',
                title: 'Fitness'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493007/personal-care_pmzdir.jpg',
                title: 'Personal Care'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493117/momy-baby_niuqbp.jpg',
                title: 'Mom-Baby'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493240/devices_luc1az.jpg',
                title: 'Devices'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493316/surgical_nfs7if.jpg',
                title: 'Surgical'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493451/treatment_jm1wpo.jpg',
                title: 'Treatment'
            }
        ];

        return (
            <div className="bg-regal-blue z-20">
                <div className="flex justify-between px-2 py-4">
                    <div className="flex items-center space-x-2">
                        <button type="button" className="" >
                            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>
                        </button>

                        <span className="text-white">All Categories</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <svg className="text-white w-6 h-6 ml-2 inline-block"
                             xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>

                        <Link href='/cart'>
                            <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                            </svg>
                        </Link>

                        <span className="cursor-pointer"> <Link className="text-white" href='/login'>Login</Link> </span>
                    </div>
                </div>

                <div className="flex flex-wrap justify-between bg-white pt-6 px-4">
                    {categories.map((category, index) =>
                        <Link href='/products' key={index}>
                            <div className="flex flex-col items-center justify-center relative w-24 h-24 mb-10 flex-grow">
                                <img className="object-fill h-24 rounded-md overflow-hidden"
                                     src={category.url} alt=""/>

                                <span className="text-sm text-gray-600 text-center mt-2">{category.title}</span>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

export default Categories;