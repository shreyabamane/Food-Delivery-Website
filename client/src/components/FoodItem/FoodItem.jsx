import React, { useState } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

export function FoodItem({id,name,price,description,image}) {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
       {
        !itemCount
        ?  <button className='add' onClick={()=>setItemCount(prev=>prev+1)}>ADD</button>
        :<div className='food-item-counter'>
           <IoMdRemoveCircle onClick={() => setItemCount(prev => prev-1)} color='red' size={30} />
           <p>{itemCount}</p>
           <IoMdAddCircle onClick={() => setItemCount(prev => prev+1)} color='green' size={30} />
        </div>
       }
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
