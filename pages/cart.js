import React from "react";
import Header from "./components/Header";
import CartItem from "./components/CartItem";

class Cart extends React.Component {

    render() {
        const items = [
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614492220/covid-essentials_n9ifrp.jpg',
                title: 'Covid Essentials',
                description: 'Medical purpose of this',
                price: '400',
                original_price: '600',
                discount: '40%',
                size: "8, Pink",
                rating: "4.5",
                rating_count: '20'
            },
            {
                url: 'https://res.cloudinary.com/sq48/image/upload/v1614493117/momy-baby_niuqbp.jpg',
                title: 'Mom-Baby',
                description: 'Medical purpose of this h  uug uyg uyg uyguy gyuuy ttyuih oiu   tu  yytf  g',
                price: '400',
                original_price: '600',
                discount: '40%',
                size: "8, Pink",
                rating: "4.5",
                rating_count: '20'
            },
        ];

        return (
            <div className="bg-gray-100">
                <Header title={'My Cart'}/>

                <div className="py-2">
                    {items.map((item, index) => (
                        <div className="mb-2" key={index}>
                            <CartItem product={item}/>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Cart;