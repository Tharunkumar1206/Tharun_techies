import React from "react";
import "./Footer.css";
import assets from "../../assets/assests";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-card">
            <img src={assets.logo} alt="Graft3D Logo" className="logo" /> {/* Replace with your logo */}
            <p>
              Graft3D is a healthcare solution provider helping hospitals with disruptive & unique technologies
            </p>
            <div className="social-icons">
              <FaInstagram />
              <FaFacebookF />
              <FaLinkedinIn />
              <FaYoutube />
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3>Products</h3>
          <ul>
            <li>3D Printed Products</li>
            <li>3D Tech Products</li>
            <li>3D Packages</li>
            <li>3D Services</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Shop</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          {/* <h3>Contact us</h3>
          <div className="icon">

           <span> <FaEnvelope/><p>sales@graft3d.com</p></span> 
            <span><FaPhone/><p> 98404 78347</p></span>
            <span><FaLocationPin/><p> 4/261, 1st Floor, Rajas Towers, Medavakkam Main Road, Kovilambakkam, Chennai – 600129, Tamil Nadu, India.</p></span>
          </div> */}
          <h3>Contact us</h3>
          <div className="icon">
            <p><MdEmail size={25}  /></p> <p className="desc">Sales@graft3d.com</p>
          </div>
          <div className="icon">
            <p><IoCall size={25}/></p> <p className="desc">98404 78347</p>
          </div>
          <div className="icon location">
            <p><MdLocationPin  size={30} /></p> <p className="desc">4/261, 1st Floor, Rajas Towers, Medavakkam Main Road, Kovilambakkam, Chennai – 600129, Tamil Nadu, India.</p>
          </div>


        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2023. All Rights Reserved. Graft3D Health Care Solutions Pvt. Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
