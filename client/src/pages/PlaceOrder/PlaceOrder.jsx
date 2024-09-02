import React from 'react';
import './PlaceOrder.css';

export function PlaceOrder() {
  return (
    <form className='place-order'>
      <div className="place-order-left">

         <p className="title">Delivery Information</p>

         <div className="multi-fields">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
         </div>

         <input type="email" placeholder='Email address' />
         <input type="text" placeholder='Streer' />

         <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
         </div>

         <div className="multi-fields">
            <input type="text" placeholder='Zip Code' />
            <input type="text" placeholder='Country' />
         </div>

         <input type="text" placeholder='Phone' />
      </div>

      <div className="place-order-right"></div>
    </form>
  )
}
