import React from 'react';
import './FoodDisplay.css';
import { food_list } from '../../assets/assets';
import { FoodItem } from '../FoodItem/FoodItem';

export default function FoodDisplay() {
  return (
    <div className='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return <FoodItem 
          key={index}
          id={item._id}
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          />
        })}
      </div>
    </div>
  )
}
