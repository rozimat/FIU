
import * as React from "react";
import './Header.css';
import { FaUserAlt, FaSearch } from 'react-icons/fa';


const Header = ()=>{
  return (
    <div className="header">
      <div className="header_logo">
        <a className="header_logo-link" href="/"><h1>FIU</h1></a>
      </div>

      <div className="header_menu">
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Our Design</a>
      <a href="">Shop</a>
      <a href="">Contact us</a>
    
      </div>
      <div className="header_wrap">
        <a href="#"> <FaUserAlt className="icons"/> </a>
        <a href="#"> <FaSearch className="icons"/> </a>
      </div>
    </div>
  )
}

export default Header;