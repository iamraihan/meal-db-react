import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css'

const Meal = ({ meal }) => {
    const { strMealThumb, strMeal, strCategory } = meal
    console.log(meal);
    return (
        <div className='card'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{strCategory}</p>
            <button>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Meal;