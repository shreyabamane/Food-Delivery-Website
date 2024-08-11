import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { CiSearch } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";

export function Navbar() {

  const [menu, setMenu] = useState("menu");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="logo" className='logo' />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
        <li onClick={()=>setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</li>
        <li onClick={()=>setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
      </ul>

      <div className="navbar-right">
        <CiSearch size={25} />

        <div className="navbar-search-icon">
          <FaShoppingBasket size={25} className='image' />
          <div className="dot"></div>
        </div>

        <button>sign in</button>
      </div>
    </div>
  )
}
