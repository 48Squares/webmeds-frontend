export default function helpcenter() {
    return (
        <div className="bg-gray-200 h-screen">
            <div className="h-12 bg-white py-4 px-3">
                What issue are you facing?
                </div>
            <div className="flex justify-between px-3 py-4 bg-white">
                <a href="#">
                    <span>I want to trac my order</span><br />
                    <span className="text-sm text-gray-400"> Check order status and call the delivery ajent </span>
                </a>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <div className="flex justify-between px-3 py-4  bg-white border-t-2">
                <a href="#">
                    <span>I want to manage my order</span><br />
                    <span className="text-sm text-gray-400">Cancle ,chane delivery date and address </span>
                </a>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <div className="flex justify-between px-3 py-4  bg-white border-t-2">
                <a href="#">
                    <span>I want to help with return and refund</span><br />
                    <span className="text-sm text-gray-400">Manage and trac return</span>
                </a>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <div className="flex justify-between px-3 py-4  bg-white border-t-2">
                <a href="#">
                    <span>I want help with other issues</span><br />
                    <span className="text-sm text-gray-400">Offer,payment,Flipkart plus and all other issues</span>
                </a>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
            <div className="flex justify-between px-3 py-4  bg-white border-t-2">
                <a href="#">
                    <span>Brouse Help Topic </span><br />
                </a>
                <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </div>
        </div>
    );
}