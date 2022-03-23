import React,{useState} from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import './navbar.css';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.png'

const Navbar = () => {
  
  return <div className='navbar'>
    <div className='navbar-links'>
      <div >
        <h3 className='navbar-links_logo'></h3>
        <img src={logo} alt="logo" width={40}></img>
      </div>
      <div className='navbar_links_container'>
        <p><a href='#home'> Home</a></p>

        
        <p><a href='/control'> Admin</a></p>
        <p><a href='#home'> </a></p>

        <ScrollIntoView selector="#what">
        <p><a href ='#whatWe'> What We Treat</a></p>
        </ScrollIntoView>  
        <p><a href='#possibility'> Help</a></p>
        <ScrollIntoView selector="#contactus">
        <p><a href='#contactus'>  Contact Us </a></p>
       </ScrollIntoView>
        <p><a href='#home'> </a></p> 


      </div>
      <div className='navbar-sign'>

        <p>

          Sign in
        </p>
        <button type="button"> Sign Up</button>
      </div>
      <div className='navbar-menu'>
        </div>

    </div>
  </div>;
};

export default Navbar
