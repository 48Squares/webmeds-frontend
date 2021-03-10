import React, {Component} from "react";
import Link from 'next/link';

class Products extends Component {
    constructor(props) {
        super(props);
        this.addToWishList = this.addToWishList.bind(this);
    }

    addToWishList() {
        console.log(this);

        alert('Added to your wish list');
    }

    render() {
        const categories = [
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492220/covid-essentials_n9ifrp.jpg',
                title: 'Covid Essentials',
                description: 'Medical purpose of this',
                price: '400',
                original_price: '600',
                discount: '40%'
            },

            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492481/diabetes_ml3tkd.jpg',
                title: 'Diabetes',
                description: 'Medical purpose of this',
                price: '340',
                original_price: '600',
                discount: '40%'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492658/eyewear_abud4i.jpg',
                title: 'Eyewear',
                description: 'Medical purpose of this',
                price: '400',
                original_price: '600',
                discount: '40%'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492790/ayush_b7vbi9.png',
                title: 'Ayush',
                description: 'Medical purpose of this',
                price: '400',
                original_price: '600',
                discount: '40%'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492882/fitness_lq8gfr.jpg',
                title: 'Fitness',
                description: 'Medical purpose of this',
                price: '400',
                original_price: '600',
                discount: '40%'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493007/personal-care_pmzdir.jpg',
                title: 'Personal Care',
                description: 'Medical purpose of this',
                price: '400',
                original_price: '600',
                discount: '40%'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493117/momy-baby_niuqbp.jpg',
                title: 'Mom-Baby',
                description: 'Medical purpose of this h  uug uyg uyg uyguy gyuuy ttyuih oiu   tu  yytf  g',
                price: '400',
                original_price: '600',
                discount: '40%'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493240/devices_luc1az.jpg',
                title: 'Devices',
                description: 'Medical purpose of this',
                price: '400',
                original_price: '600',
                discount: '40%'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493316/surgical_nfs7if.jpg',
                title: 'Surgical',
                description: 'Medical purpose of this',
                price: '400',
                original_price: '600',
                discount: '40%'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493451/treatment_jm1wpo.jpg',
                title: 'Treatment',
                description: 'Medical purpose of this',
                price: '400',
                original_price: '600',
                discount: '40%'
            }
        ];

        return (
            <div className="bg-regal-blue z-20">
                <div className="flex justify-between px-2 py-4">
                    <div className="flex items-center space-x-2">
                        <button>
                            <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                            </svg>
                        </button>

                        <span className="text-white">All Products</span>
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

                        <span className="cursor-pointer">
                            <Link className="text-white" href='/login'>Login</Link>
                        </span>
                    </div>
                </div>

                <div className="bg-white flex divide-x divide-gray-200">
                    <button type="button" className="flex flex-grow py-3 justify-center items-center">
                        <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"/>
                        </svg>

                        <span className="text-sm text-gray-600">Filter</span>
                    </button>


                    <button type="button" className="flex flex-grow py-3 justify-center items-center">
                        <svg className="w-4 h-4 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/>
                        </svg>

                        <span className="text-sm text-gray-600">Sort</span>
                    </button>
                </div>

                <div className="bg-white flex flex-wrap">
                    {categories.map((category, index) => (
                            <div className="flex flex-wrap w-1/2 border border-white flex-grow" key={index}>
                                <div className="w-full">
                                    <div className="h-64 relative">
                                        <img className="absolute inset-0 w-full h-full object-cover"
                                             src={category.url} alt={category.title}/>

                                        <button onClick={this.addToWishList}
                                                className="absolute top-2 right-2 box-content p-1 bg-white rounded-full hover:border hover:border-pink-500 focus:outline-none">
                                            <svg
                                                className="text-gray-400 h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="px-2 py-2">
                                        <Link to='/product'>
                                            <p className="text-sm text-black overflow-ellipsis"> {category.title}</p>
                                            <p className="text-xs text-gray-500 leading-none truncate"> {category.description}</p>
                                            <div className="flex items-center space-x-1 mt-1">
                                            <span className="text-lg">
                                                <span className="text-sm">&#8377;</span>
                                                {category.price}
                                            </span>

                                                <span
                                                    className="text-xs line-through text-gray-500">{category.original_price}</span>
                                                <span className="text-green-500 text-xs">{category.discount} off</span>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    }
}

export default Products;