import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Header from "../Header";
import Product from "../Products/Product";

export default function Category() {
  const router = useRouter();
  const uri = router.query.uri;
  const [products, setProduct] = useState([]);
  const [pageHeader, setPageHeader] = useState("");

  useEffect(() => {
    fetch("http://mgmt.webmeds.in/api/products", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((result) => result.json())
      .then((json) => setProduct(json.data))
      .catch((error) => {
        console.log(error);
      });
    updatePageHeader();
  }, []);

  const updatePageHeader = function () {
    if (Array.isArray(uri)) {
      setPageHeader(uri[uri.length - 1].toUpperCase());
    } else {
      setPageHeader("");
    }
  };

  return (
    <div>
      <Header title={pageHeader} />
      <div className="p-2 bg-gray-50">
        <div className="">
          {products.map((product, index) => (
            <div className="mt-1" key={index}>
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
