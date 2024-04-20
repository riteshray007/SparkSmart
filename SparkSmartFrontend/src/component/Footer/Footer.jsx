import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer' id='footer '>
      <div className="footer-content" id='contactus' >
        <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" /> */}
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className="footer-social-icons">
            <i className="bi bi-facebook"></i>                
            <i className="bi bi-twitter"></i>
            <i className="bi bi-linkedin"></i>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-0125-345-766</li>
                <li>contact@zomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Zomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
