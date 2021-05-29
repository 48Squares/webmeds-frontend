import React from "react";
import Link from "next/link";
import Router from "next/router";
import ProductSlider from "../components/ProductSlider";

export default function Product({ product }) {
  return (
    <div className="bg-gray-50 bg-opacity-8">
      <div className="bg-regal-blue z-20">
        <div className="flex justify-between px-2 py-4">
          <div className="flex items-center space-x-2">
            <button onClick={() => Router.back()}>
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <svg
              className="text-white w-6 h-6 ml-2 inline-block"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            <Link href="/cart">
              <svg
                className="text-white w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </Link>

            <span className="cursor-pointer">
              <Link href="/login">
                <span className="text-white">Login</span>
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white h-48">
        <ProductSlider media={product.media} />
      </div>

      <div className="bg-white my-2">
        <div className="px-2 py-2">
          <p className="text-base leading-5">{product.title}</p>

          <div className="flex items-center space-x-1">
            <div className="flex items-center bg-green-600 py-1 px-2 rounded-sm space-x-1">
              <span className="inline-block text-white text-sm">
                {" "}
                {product.rating}
              </span>

              <svg
                className="w-3 h-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>

            <span className="text-xs text-gray-500">
              {product.rating_count} ratings
            </span>
          </div>

          <div>
            <div className="flex items-center space-x-1 mt-1 py-3">
              <div className="text-3xl">
                <span className="text-3xl">&#8377;</span>
                {product.price}
              </div>

              <span className="text-xs line-through text-gray-500">
                {product.original_price}
              </span>
              <span className="text-green-500 text-xs">
                {product.discount} off
              </span>
            </div>

            <div>
              <span>FREE Delivery</span>
            </div>
          </div>
        </div>
      </div>

      {/*Check pin code*/}
      <div className="my-1 bg-white">
        <div className="px-2 py-2 flex justify-between items-center">
          <div className="text-sm text-gray-700">Check Pin Code</div>

          <div className="space-x-1 flex">
            <input
              className="text-sm py-2 px-2 border rounded-sm border-gray-200 focus:outline-none focus:border-gray-400"
              type="text"
            />

            <button
              className="py-2 px-2 shadow-sm border border-gray-300 text-regal-blue rounded-sm text-sm focus:outline-none focus:border-gray-400"
              type="button"
            >
              Check
            </button>
          </div>
        </div>
      </div>
      {/*Check pin code*/}

      <div className="my-2 bg-white">
        <div className="px-2 py-2">
          <h1 className="text-md text-gray-800 mt-3">About The Product</h1>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
            laborum minus mollitia ut? Aut corporis inventore magni perferendis
            suscipit, voluptas. Deleniti iste maiores molestias officia
            repellendus. Cumque nesciunt nostrum velit?
          </p>
        </div>
      </div>

      <div className="flex">
        <button className="bg-white flex-grow py-3 px-2 text-sm  uppercase text-gray-900 border-b border-t">
          Add to Cart
        </button>

        <button className="flex-grow py-3 px-2 text-sm  uppercase text-white  bg-yellow-500 border-b border-t">
          Buy Now
        </button>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      product: {
        title:
          "Wildcraft HypaShield W95 Reusable Outdoor Protection Respirator Black Large Mask",
        price: "190",
        original_price: "200",
        discount: "5",
        rating: "3.5",
        rating_count: "335",
        media: [
          "https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/v1601232397/cropped/z5ppd1fjsees0h0sgkqh.png",
          "https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/v1601232375/cropped/qefs3rw7bxefxfunkcbl.png",
          "https://res.cloudinary.com/du8msdgbj/image/upload/l_watermark_346,w_120,h_120/a_ignore,w_120,h_120,c_fit,q_auto,f_auto/v1601232391/cropped/u7xplfmdyvhuaglezgno.png",
        ],
      },
    },
  };
}
