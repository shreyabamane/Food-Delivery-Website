import React from 'react'
import './Navbar.css'
import { CgProfile } from "react-icons/cg";
import { FaBell, FaCog } from "react-icons/fa"
import { assets } from '../../assets/assets';

export function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-logo">
                <img className='logo' src={assets.logo} alt="logo" />
                <span className="navbar-title">Admin Panel</span>
            </div>

            {/* <div className="navbar-links">
                <a href="/dashboard" className='nav-link'>Dashboard</a>
                <a href="" className='nav-link'>Users</a>
                <a href="" className='nav-link'>Settings</a>
                <a href="" className='nav-link'>Reports</a>
            </div> */}

            <div className="navbar-actions">
                <FaBell className='action-icon' title='Notifications' color='#005B41' />
                <FaCog className='action-icon' title='Settings' color='#005B41' />
                <CgProfile className='action-icon profile' title='Profile' color='#005B41'/>
            </div>

        </div>
    )
}

