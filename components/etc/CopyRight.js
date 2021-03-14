import React from 'react';

export default function CopyRight() {
    return (
        <div className="bg-white flex justify-center">
            <p className="text-sm py-2 text-gray-400">
                Webmeds &copy; {new Date().getFullYear()}
            </p>
        </div>
    )
}