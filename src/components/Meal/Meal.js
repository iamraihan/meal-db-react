import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css'

const Meal = ({ meal, cartHandler }) => {
    const { strMealThumb, strMeal, strCategory } = meal
    return (
        <div className='card'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{strCategory}</p>
            <button onClick={() => cartHandler(meal)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Meal;