import React from "react";

class Header extends React.Component {

    render() {
        return (
            <div className="bg-regal-blue">
                <div className="flex justify-center py-4">
                    <a href="/" type="button" className="ml-2 mr-3 focus:outline-none inline-block">
                        <svg className="w-6 h-6 text-white block" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                        </svg>
                    </a>

                    <div className="text-white flex-grow">{this.props.title}</div>
                </div>
            </div>
        );
    }
}

export default Header;