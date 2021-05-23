import React from "react";
import Link from 'next/link';
import Header from '../../components/Header';

export default function Categories() {

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
            <Header title={'All Categories'}/>

            <div className="flex flex-wrap justify-between bg-white pt-6 px-4">
                {categories.map((category, index) =>
                    <Link href='/products' key={index}>
                        <div className="flex flex-col items-center justify-center relative w-24 h-24 mb-10 flex-grow">
                            <img className="object-cover h-24 rounded-md overflow-hidden"
                                 src={category.url} alt=""/>

                            <span className="text-sm text-gray-600 text-center mt-2">{category.title}</span>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
