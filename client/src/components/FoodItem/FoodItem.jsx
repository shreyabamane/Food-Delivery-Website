import React from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';

export function FoodItem({id,name,price,description,image}) {
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
        <button>ADD</button>
        </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_stars} alt="" />
        </div>
        <div className="food-item-desc">{description}</div>
        <div className="food-item-price">₹{price}</div>
      </div>
    </div>
  )
}
