import React from "react";

class Footer extends React.Component {

    render() {
        return (
            <div className="flex justify-center p-3 bg-gray-200">
                <h2 className="text-xs text-gray-700">&copy; Webmeds {new Date().getFullYear()}</h2>
            </div>
        );
    }
}

export default Footer;