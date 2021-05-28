export default function Product(props) {
    return (
        <div>
            <div className="flex">
                <div className="flex-none w-1/4">
                    <img src={props.product.featuredImage} alt="" width="250"/>
                </div>

                <div className="flex-1 w-full ml-4">
                    <h1 className="text-md font-normal">
                        {props.product.title}
                    </h1>

                    <h4> Rs .{props.product.price}</h4>
                </div>
            </div>
        </div>
    );
}

