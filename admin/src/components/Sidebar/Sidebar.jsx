import React from 'react'
import './Sidebar.css'
import { IoAddCircleOutline } from "react-icons/io5";
import { CiViewList } from "react-icons/ci";
import { BsBagCheck } from "react-icons/bs";

export function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <div className="sidebar-option">
               <IoAddCircleOutline size={22} />
               <p>Add Items</p>
            </div>

            <div className="sidebar-option">
               <CiViewList size={22} />
               <p>List Items</p>
            </div>

            <div className="sidebar-option">
               <BsBagCheck size={22} />
               <p>Orders</p>
            </div>
        </div>
    </div>
  )
}
