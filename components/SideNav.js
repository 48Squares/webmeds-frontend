import Link from 'next/link';

function SideNav(props) {
    return (
        <div className="fixed left-0 top-0 w-3/4 h-screen bg-white z-20">
            <button className="fixed inset-0 w-screen h-screen z-10 bg-opacity-60 bg-gray-900"
                onClick={props.callback} />

            <div className="bg-regal-blue z-20 relative">
                <div className="flex justify-between px-2 py-4">
                    <div className="">
                        <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>

                    <div className="">
                        <span className="text-sm font-medium">Login &amp; Register</span>
                    </div>

                    <div className="">
                        <svg className="text-white w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="px-2 py-2 relative z-20 bg-white h-screen">
                <div className="flex items-center space-x-2 my-2">
                    <Link href="/categories">
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                            </svg>

                            <span className="text-black text-sm font-medium">All Categories</span>
                        </div>
                    </Link>
                </div>

                <Link href="/my-offer">
                    <div className="flex items-center space-x-2 my-2">
                        <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>

                        <span className="text-black text-sm font-medium">Offers</span>
                    </div>
                </Link>

                <hr className="my-2" />

                <Link href="/myorder">
                    <div className="flex items-center space-x-2 my-2">
                        <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path fill="#fff" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                        </svg>

                        <span className="text-black text-sm font-medium">My Orders</span>
                    </div>
                </Link>

                <Link href="/my-coupon">
                    <div className="flex items-center space-x-2 my-2">
                        <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                        </svg>

                        <span className="text-black text-sm font-medium">My Coupons</span>
                    </div>
                </Link>

                <Link href="/cart">
                    <div className="flex items-center space-x-2 my-2">
                        <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>

                        <span className="text-black text-sm font-medium">My Cart</span>
                    </div>
                </Link>

                <Link href="/my-wishlist">
                    <div className="flex items-center space-x-2 my-2">
                        <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span className="text-black text-sm font-medium">My Wishlist</span>
                    </div>
                </Link>

                <div className="flex items-center space-x-2 my-2">
                    <Link href='/Profile'>
                        <div className="flex items-center space-x-2">
                            <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span className="text-black text-sm font-medium">My Account</span>
                        </div>
                    </Link>
                </div>

                <Link href="/notification">
                    <div className="flex items-center space-x-2 my-2">
                        <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                        <span className="text-black text-sm font-medium">My Notification</span>
                    </div>
                </Link>
                <hr className="my-2" />

                <Link href="/help-center">
                    <div className="flex items-center space-x-2 my-2">
                        <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>

                        <span className="text-black text-sm font-medium">Help Center</span>
                    </div>
                </Link>

                <div>
                    <Link href="/legals">
                        <div className="flex items-center space-x-2 my-2">
                            <svg className="w-6 h-6 text-regal-blue" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>

                            <span className="text-black text-sm font-medium">Legal</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideNav;