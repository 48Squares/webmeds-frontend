import React from "react";
import Product from "../../components/Product";

export default class CategorySlug extends React.Component {
    componentWillMount() {
        fetch('http://mgmt.webmeds.in/api/products', {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(result => result.json())
            .then(json => this.setState({products: json.data}))
            .catch(error => {
                console.log(error);
            })
    }

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    render() {
        return (
            <div className="px-4 py-2 bg-indigo-50">
                <div className="flex justify-evenly">
                    {this.state.products.map((product, index) =>
                        <Product product={product} key={index}/>
                    )}
                </div>
            </div>
        )
    }
}