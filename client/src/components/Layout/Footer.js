import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='row'>
        <div className="col">
          <h3>SHOP WAVE <div className='underline'><span></span></div></h3>
          <p>Convenient. Diverse. Secure.

  Shop our ecommerce marketplace for a seamless online experience. Explore a wide range of high-quality products, from trendy fashion apparel to state-of-the-art electronics. Enjoy competitive prices, regular promotions, and secure payment options.</p>
        </div>
        <div className="col">
          <h3>Office <div className='underline'><span></span></div></h3>
          <p>RangBahadur Road</p>
          <p>Electricity Office, New Godown</p>
          <p>Gaya-823001, Bihar, India</p>
          <p className='email-id'>rohanbaranwal2709@gmail.com</p>
          <h4>+91 - 9352412858</h4>
        </div>
        <div className="col">
          <h3>Links <div className='underline'><span></span></div></h3>
          <Link className='raw' to="/about">About Us</Link><br /><br />
          <Link className='raw' to="/contact">Contacts</Link><br /><br />
          <Link className='raw' to="/policy">Privacy Policy</Link>
        </div>
        <div className="col">
          <h3>Newsletter <div className='underline'><span></span></div></h3>
          <form>
          <i className="far fa-envelope"></i>
          <input type="email" placeholder='Enter your email id' required/>
          <button type='submit'>
            <i className="fas fa-arrow-right"></i>
          </button>
          </form>
          <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-whatsapp"></i>
          <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        </div>

        <hr/>
        
        <p className="copy"><span>Shop Wave</span> &copy; All Right Reserved</p>

        {/* <h4 className='text-center'> */}
            {/* All Right Reserved &copy; Rohan Baranwal</h4>
            <p className="text-center mt-3">
              <Link to="/about">About</Link>|
              <Link to="/contact">Contact</Link>|
              <Link to="/policy">Privacy Policy</Link>
            </p> */}
    </div>
  )
}

export default Footer