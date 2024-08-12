import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { StoreContext } from '../../context/StoreContext';

export function FoodItem({id,name,price,description,image}) {

  // const [itemCount, setItemCount] = useState(0);

  const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt="" />
       {
        !cartItems[id]
        ?  <button className='add' onClick={()=> addToCart(id)}>ADD</button>
        :<div className='food-item-counter'>
           <IoMdRemoveCircle onClick={() => removeFromCart(id)} color='red' size={30} />
           <p>{cartItems[id]}</p>
           <IoMdAddCircle onClick={() => addToCart(id)} color='green' size={30} />
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
