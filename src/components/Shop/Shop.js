import React, { useEffect, useState } from 'react'
import Meal from '../Meal/Meal';
import './Shop.css'

const Shop = () => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=a'
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div className='product'>
            <div className="product-container">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
            <div className="cart-container">
                Cart
            </div>
        </div>
    );
};

export default Shop