import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { CiSearch } from "react-icons/ci";
import { FaShoppingBasket, FaUser } from "react-icons/fa";

export function Navbar() {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className='logo' />
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-App</li>
        <li>Contact</li>
      </ul>

      <div className="navbar-right">
        <CiSearch size={25} />

        <div className="navbar-search-icon">
          <FaShoppingBasket size={25} />
        </div>

        <div className="navbar-profile">
          <FaUser size={25} />
        </div>
      </div>
    </div>
  )
}
