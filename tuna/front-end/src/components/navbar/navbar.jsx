import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {

    const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.tuna} alt="" style={{ width: '220px', height: '40px' }} className='logo' />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("home")}className={menu === "home" ? "active" : ""}>home</li>
            <li onClick={()=>setMenu("products")}className={menu === "products" ? "active" : ""}>products</li>
            <li onClick={()=>setMenu("about")}className={menu === "about" ? "active" : ""}>about</li>
            <li onClick={()=>setMenu("contact")}className={menu === "contact" ? "active" : ""}>contact</li>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=''/>
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt=''/>
                <div className="dot"></div>
            </div>
            <button className='navbar-button'>
                sign in
            </button>
        </div>
    </div>
  )
}

export default Navbar
