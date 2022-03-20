import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
  <div className = "footer section__padding">
    <div className = "footer-btn">
      <p><a href='#home'>Return to Top of Page</a></p>
    </div>
    <div className ="footer-links">
      <div className ="footer-links_logo">
        <img src={logo} alt="logo" ></img>
        <p>1100 South Marietta Pkwy SE</p>
      </div>
      <div className ="footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact Us</p> 
        <p>What We Treat</p>
        <p>FAQ</p>     
      </div>
      <div className ="footer-links_div">
        <h4>Get in touch</h4>
        <p>1100 South Marietta Pkwy </p>
        <p>470-353-7879</p>   
        <p>telemedicine42@gmail.com</p> 
      </div> 
    </div>
    <div className = "footer-copyright">
      <p>Copyright tag</p>
    </div>
  </div>
  )
};

export default Footer;