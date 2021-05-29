export default function Product(props) {
  return (
    <div className="bg-white rounded">
      <div className="flex">
        <div className="flex-none w-1/4">
          <img src={props.product.featuredImage} alt="" width="250" />
        </div>

        <div className="flex-1 w-full ml-4">
          <h1 className="text-md font-normal">{props.product.title}</h1>

          <div className="flex items-center space-x-1">
            <div className="flex items-center bg-green-600 py-1 px-1 rounded-sm space-x-1">
              <span className="inline-block text-white text-xs"> 4.1</span>

              <svg
                className="w-2 h-2 text-white"
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

            <span className="text-xs text-gray-500">100 ratings</span>
          </div>
          <div>
            <div className="flex items-center space-x-1 mt-1 py-3">
              <div className="text-md">
                <span className="text-md">&#8377;</span>
                {props.product.price}
              </div>

              <span className="text-xs line-through text-gray-500">
                {props.product.originalPrice}
              </span>
              <span className="text-green-500 text-xs">
                {props.product.discount}% off
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
