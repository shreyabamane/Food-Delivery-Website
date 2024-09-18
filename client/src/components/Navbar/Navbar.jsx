import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { CiSearch } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export function Navbar({ setShowLogin }) {

  const [menu, setMenu] = useState("menu");

  const { getTotalCartItems } = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
        <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <CiSearch color='#005B41' size={25} />

        <div className="navbar-search-icon">
          <Link to='/cart'> <SlBasket color='#005B41' size={25} className='image' /></Link>
          {getTotalCartItems() > 0 && (
            <div className="cart-counter">
              {getTotalCartItems()}
            </div>
          )}
        </div>

        <button onClick={() => setShowLogin(true)}>sign in</button>
      </div>
    </div>
  )
}
