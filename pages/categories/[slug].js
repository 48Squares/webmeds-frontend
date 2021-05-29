import React from "react";
import Product from "../../components/Product";
import Header from "../../components/Header";

export default class CategorySlug extends React.Component {
  componentWillMount() {
    fetch("http://mgmt.webmeds.in/api/products", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((result) => result.json())
      .then((json) => this.setState({ products: json.data }))
      .catch((error) => {
        console.log(error);
      });
  }

  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div>
        <Header title="Products" />
        <div className="p-2 bg-gray-50">
          <div className="">
            {this.state.products.map((product, index) => (
              <div className="mt-1" key={index}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
