import React from 'react'
import './Header.css'
import { TfiViewListAlt } from 'react-icons/tfi';
import { BiSearchAlt } from 'react-icons/bi';
import img from '../Asserts/Images/Divum_Logo.svg'
const Header = () => {
  return (
    <div className='header-main'>   
        <hr className='header-hr' />
    <div className='header-container'>
        <div className="header-layer"><TfiViewListAlt className='layout-icon'/>
        <div className="head-img"><img src={img} alt=""  width={100} className='header-logo'/></div>
    </div>
  <div className='head-input-container'>  <input type="text" autoFocus className='header-search-input' placeholder='Search' />
  <BiSearchAlt className='search-icon'/></div>
   <div className='head-button-container'> <button className='header-Login-button'>Log in</button>
    <button className='header-signin-button'>Sign up</button></div>
    </div>
    </div>
  )
}

export default Header