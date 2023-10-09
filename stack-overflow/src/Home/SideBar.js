import React from 'react'
import { BiWorld } from 'react-icons/bi';
import './SideBar.css'
const SideBar = () => {
  return (
    <div className='sidebar-container'>
        <p className='s-links'>Home</p>
        <div className="ques-container"><BiWorld/>
        <span className='s-links'>Question</span></div>
        <p className='s-links'>Tags</p>
        <p className='s-links'>Users</p>
       
    </div>
  )
}

export default SideBar