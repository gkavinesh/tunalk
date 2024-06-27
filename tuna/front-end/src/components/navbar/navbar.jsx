import React, { useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const Navbar = () => {

    const [menu,setMenu] = useState("home");
  return (
    <div className='navbar'>
        <img src={assets.tuna} alt=""className='logo' />
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")}className={menu === "home" ? "active" : ""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("products")}className={menu === "products" ? "active" : ""}>products</a>
            <a href='#about' onClick={()=>setMenu("about")}className={menu === "about" ? "active" : ""}>about</a>
            <a href='#footer' onClick={()=>setMenu("contact")}className={menu === "contact" ? "active" : ""}>contact</a>
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
