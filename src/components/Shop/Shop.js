import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Shop.css'

const Shop = () => {
    const [meals, setMeals] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    const cartHandler = (meal) => {
        setCart([...cart, meal])
        // console.log(cart, meal)
    }
    return (
        <div className='product'>
            <div className="product-container">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} cartHandler={cartHandler}></Meal>)
                }
            </div>
            <div className="cart-container">
                {
                    <Cart cart={cart} ></Cart>
                }
            </div>
        </div>
    );
};

export default Shop