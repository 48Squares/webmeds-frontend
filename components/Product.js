import Header from "./Header";

export default function Product(props) {
    return (
        <div>
            <div className="flex">
                <div className="flex-none w-1/4">
                    <img src={props.product.featuredImage} alt="" width="250"/>
                </div>

                <div className="flex-1 w-full">
                    {props.product.title}
                </div>
            </div>
        </div>
    );
}

