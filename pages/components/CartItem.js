import React from "react";

class CartItem extends React.Component {
    render() {
        return (
            <div className="bg-white">
                <div className="p-2">
                    <div className="flex">
                        <div className="w-2/3">
                            <p className="text-md text-gray-900 truncate overflow-hidden">
                                {this.props.product.title}
                            </p>

                            <span className="text-xs text-gray-600 mt-2">
                               Size {this.props.product.size}
                           </span>

                            <div className="flex items-center space-x-1 mt-2">
                                <div
                                    className="flex items-center bg-green-600 py-1 px-2 rounded-sm space-x-1">
                                    <span
                                        className="inline-block text-white text-sm"> {this.props.product.rating}</span>

                                    <svg className="w-3 h-3 text-white" xmlns="http://www.w3.org/2000/svg"
                                         fill="currentColor"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
                                    </svg>
                                </div>

                                <span className="text-xs text-gray-500">{this.props.product.rating_count} ratings</span>
                            </div>

                            <div>
                                <div className="flex items-center space-x-1 mt-1 py-3">
                                            <span className="text-3xl">
                                                <span className="text-3xl">&#8377;</span>
                                                {this.props.product.price}
                                            </span>

                                    <span
                                        className="text-xs line-through text-gray-500">{this.props.product.original_price}</span>
                                    <span className="text-green-500 text-xs">{this.props.product.discount} off</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex-grow">
                            <div className="relative">
                                <img className="w-20 object-cover object-center" src={this.props.product.url}
                                     alt=""/>
                            </div>

                            <div className="mt-4">
                                <div className="border border-gray-200 py-2 pl-1">
                                    <div className="flex items-center">
                                        <span className="text-sm text-gray-700">Qty: </span>

                                        <input className="w-8 flex-grow focus:outline-none text-sm px-1" value="1" type="text"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button className="border border-gray-300 px-4 py-2 text-sm text-gray-600 rounded-sm">Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartItem;