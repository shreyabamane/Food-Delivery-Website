import React from 'react';
import './FoodDisplay.css';
import { food_list } from '../../assets/assets';

export default function FoodDisplay() {
  return (
    <div className='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          
        })}
      </div>
    </div>
  )
}
