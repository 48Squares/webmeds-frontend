import React from "react";

import Link from 'next/link';
import SideNav from "./components/SideNav";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sideNav: false};
        this.toggleSideMenu = this.toggleSideMenu.bind(this);
        this.sideNavCallback = this.sideNavCallback.bind(this);
    }

    sideNavCallback() {
        this.setState({sideNav: false});
    }

    toggleSideMenu() {
        this.setState({
            sideNav: !this.state.sideNav
        });
    }

    render() {
        const circularProducts = [
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614252151/tagsnj1ea2m1ttnfjkiz_kd3otc.png',
                'title': 'Nature'
            },

            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614252136/rnub5ljunrm3jn5ddn6b_glz6no.png',
                'title': 'Nature'
            },
            {
                url: 'https://assets.myntassets.com/dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/retaillabs/2021/2/17/a3e2d8f7-820f-46ca-bd29-ff2cf90efc1e1613571062263-women.jpg',
                'title': 'Nature'
            },

            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614252134/qubet60eokwth4ki5btj_mrhfhm.png',
                'title': 'Nature'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614252113/mlausuirvoisjtgc0zep_z9pgpc.png',
                'title': 'Nature'
            },

        ];

        return (
            <div>
                <header className="bg-regal-blue text-white">
                    <div className="container mx-auto border-b-2 pb-2">
                        <nav className="flex justify-between relative">
                            {this.state.sideNav ? <SideNav callback={this.sideNavCallback}/> : null}

                            <div className="flex py-4 px-3 space-x-3 ">
                                <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor" onClick={this.toggleSideMenu}>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>

                                <div className="flex items-center text-white">
                                    <Link href='/'>WebMeds</Link>
                                </div>
                            </div>

                            <div className="flex px-3 py-4 space-x-4">
                                <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
                                        <Link href='/login'>Login</Link>
                                </span>
                            </div>
                        </nav>

                        <div className="px-2 ">
                            <Link href='/search'>
                                <div className="flex bg-white h-10 items-center rounded-sm space-x-2">
                                    <svg className="text-gray-500 w-6 h-6 ml-2 inline-block"
                                         xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                                    </svg>

                                    <input
                                        className="flex-grow h-full py-4 text-gray-600 text-sm hover:outline-none focus:outline-none"
                                        type="search"
                                        placeholder="Search Product, Brand and More"/>
                                </div>
                            </Link>
                        </div>
                    </div>
                </header>

                <section className="flex flex-nowrap space-x-4 overflow-x-auto py-4 scrollbar-none">
                    {circularProducts.map((product, index) =>
                        <img className="w-20 h-20 rounded-full" src={product.url} alt="" key={index}/>
                    )}
                </section>


                <section className="top-picks px-3">
                    <div className="py-2">
                        <h6 className="text-gray-600 text-sm font-medium">TOP PICS</h6>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative rounded-sm">
                            <img
                                src="https://res.cloudinary.com/sq48/image/upload/v1614252156/winter-care-combo-of-dr-morepen-cn-10-compressor-nebuliser-and-dr-morepen-vp-06-breathe-free-vaporizer_bgd0uu.jpg"
                                alt=""/>
                            <div
                                className="flex flex-col items-center justify-end absolute inset-0 text-white bg-opacity-30 bg-gray-600">
                                <span className="font-medium">Blood Test Under</span>

                                <div>
                                    <sup className="text-lg">&#8377;</sup>

                                    <span className="text-2xl text-medium">600</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-sm">
                            <img
                                src="https://res.cloudinary.com/sq48/image/upload/v1614252137/sahyog-wellness-2306-multi-function-non-contact-body-object-infra-red-thermometer_btulsr.jpg"
                                alt=""/>
                            <div
                                className="flex flex-col items-center justify-end absolute inset-0 text-white bg-opacity-30 bg-gray-600">
                                <span className="font-medium">Corona Under</span>

                                <div>
                                    <sup className="text-lg">&#8377;</sup>

                                    <span className="text-2xl text-medium">600</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-sm">
                            <img
                                src="https://res.cloudinary.com/sq48/image/upload/v1614252141/shfinri5hqat9oza5i7q_k2ezl1.png"
                                alt=""/>
                            <div
                                className="flex flex-col items-center justify-end absolute inset-0 text-white bg-opacity-30 bg-gray-600">
                                <span className="font-medium">Diabetics Under</span>

                                <div>
                                    <sup className="text-lg">&#8377;</sup>

                                    <span className="text-2xl text-medium">600</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-sm">
                            <img
                                src="https://res.cloudinary.com/sq48/image/upload/v1614251921/dr-morepen-bg-03-gluco-one-blood-glucose-monitoring-system0_aqmi9g.jpg"
                                alt=""/>
                            <div
                                className="flex flex-col items-center justify-end absolute inset-0 text-white bg-opacity-30 bg-gray-600">
                                <span className="font-medium">Sugar Test Under</span>

                                <div>
                                    <sup className="text-lg">&#8377;</sup>

                                    <span className="text-2xl text-medium">600</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 mt-2">
                        <img
                            className="rounded-sm w-full"
                            src="https://res.cloudinary.com/sq48/image/upload/v1614252069/drbqfde3icmxummenhay0_mc81mn.jpg"
                            alt=""/>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;