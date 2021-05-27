import {useEffect, useState} from "react";

export default function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(
            'http://mgmt.webmeds.in/api/products',
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.status >= 200 && response < 300) {
                    return response;
                } else {
                    console.log(response);
                    return new Error('Serve Error');
                }
            })
            .then(response => response.json())
            .then(json => setProducts(json.data.data))
            .catch(() => []);
    });

    return (
        <div className="px-4 py-2 bg-indigo-50">
            <div className="flex justify-evenly">
                {products.map((product, index) =>
                    <img src={product.featuredImage} alt="" key={index} width="150"/>
                )}
            </div>
        </div>
    )
}

