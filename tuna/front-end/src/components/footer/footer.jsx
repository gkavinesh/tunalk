import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img src={assets.tuna}alt="" style={{ width: '220px', height: '40px' }} className='logo' />
                <p>Tunalk brings you the finest selection of fresh seafood, sourced daily and delivered with care. Our commitment to quality ensures that every product, from succulent shrimp to delicate fish fillets, meets the highest standards of freshness and taste. Whether you're preparing a gourmet meal or hosting a casual gathering, trust Tunalk to provide the seafood excellence you deserve. Explore our diverse range and experience the difference in every bite.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon}alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>home</li>
                    <li>products</li>
                    <li>delivery</li>
                    <li>privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>075-999-9999</li>
                    <li>contact@tuna.com</li>
                    <li><a href="#">Get our Mobile App</a></li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 © Tuna.lk - All Rights Reserved | Designed by 12BK Pvt Ltd</p>
    </div>
    
    
  )
}

export default footer
