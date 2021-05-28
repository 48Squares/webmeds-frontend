import React from "react";

export default class Product extends React.Component {
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
        return(
            <div className="px-4 py-2 bg-indigo-50">
                <div className="flex justify-evenly">
                    {this.state.products.map((product, index) =>
                        <img src= {product.featuredImage} alt="" key={index} width="150"/>)
                }
                </div>
            </div>
        )
    }
}

