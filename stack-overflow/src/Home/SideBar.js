import React from 'react'
import { BiWorld } from 'react-icons/bi';
import './SideBar.css'
const SideBar = ({setSideBar}) => {
  const handelOnClick = (value) => {
   setSideBar({
    question : value === "question" ? true : false,
    tag : value === "tag" ? true : false,
    user: value === "user" ? true : false
   })
  }
  return (
    <div className='sidebar-container'>
        <p className='s-links'>Home</p>
        <div className="ques-container" onClick={() => handelOnClick("question")}><BiWorld/>
        <span className='s-links'>Question</span></div>
        <p className='s-links' onClick={() => handelOnClick("tag")}>Tags</p>
        <p className='s-links' onClick={() => handelOnClick("user")}>Users</p>
       
    </div>
  )
}

export default SideBar