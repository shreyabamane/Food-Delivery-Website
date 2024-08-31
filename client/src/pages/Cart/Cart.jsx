import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

export function Cart() {
  const { food_list, cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  return (
    <div className='cart'>
      <div className="cart-items">
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-item">
                <div className="cart-image">
                  <img src={item.image} alt="" />
                </div>
                <div className="cart-info">
                <div className='cart-item-counter'>
                    <IoMdRemoveCircle onClick={() => removeFromCart(item._id)} color='red' size={30} />
                    <p>{cartItems[item._id]}</p>
                    <IoMdAddCircle onClick={() => addToCart(item._id)} color='green' size={30} />
                  </div>
                  <p style={{ color: 'grey', fontSize: '16px' }}>{item.name}</p>
                  <p style={{ fontWeight: '500' }}>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <h3 className='item-total-price'>Total: <p>₹{item.price * cartItems[item._id]}</p></h3>

                </div>

              </div>
            )
          }
        })
        }
      </div>

      <div className="cart-right-side">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{0}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{20}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div> 
      </div>
    </div>
    
  )
}
