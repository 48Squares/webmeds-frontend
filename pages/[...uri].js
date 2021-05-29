import React, { useEffect, useState } from "react";
import Product from "../components/Products/Product";
import Header from "../components/Header";
import { useRouter } from "next/router";

export default function MainScreen() {
  const [products, setProduct] = useState([]);
  const router = useRouter();
  const [pageHeader, setPageHeader] = useState("");
  const uri = router.query.uri;

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
    setPageHeader(uri[uri.length - 1].toUpperCase());
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
