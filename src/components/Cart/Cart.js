import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let name
    let image
    for (const product of cart) {
        name = product.strMeal
        image = product.strMealThumb

    }
    console.log(cart);
    return (
        <div className='cart'>
            {/* <h2>Summery</h2> */}
            <img src={image} alt="" />
            <h2>{name}</h2>

        </div>
    );
};

export default Cart;