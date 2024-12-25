import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

export function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" width="50%" height="50px" />
          <p> Cravvings brings your favorite meals to your doorstep with just a few taps.
            Whether you're craving comfort food, quick snacks, or gourmet delights,
            we've got you covered with the best restaurants in town.
            Satisfy your cravings anytime, anywhere.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-123-456-7890</li>
            <li>contact@cravvings.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">Copyright 2024 &copy; Cravvings.com - All Right Reserved.</p>
    </div>
  )
}
