import React, { useState } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import { menu_list } from '../../assets/assets';

export function Header({setCategory}) {

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate(); // navigate betwwen pages

  const handleMenuClick = (menuName)=>{
    setCategory(menuName);
    setShowMenu(false); // hide menu after selection
    navigate('/');
  }

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order Your Favourite Food Here!</h2>
        <p>Are your taste buds craving a culinary adventure? Ready to indulge in some mouth-watering delights? You've come to the right place! At Craveful, we bring you a symphony of flavors that will tantalize your senses and leave you craving for more.</p>
        <button onClick= {()=> setShowMenu(prev => !prev)}>View Menu</button>
        {showMenu && (
        <div className="menu-container">
          <ul>
            {menu_list.map((item,index)=>(
              <li key={index} onClick={() => handleMenuClick(item.menu_name)}>{item.menu_name}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </div>
  )
}
