import React from 'react'
import { BiSearchAlt } from 'react-icons/bi';
import './SearchInput.css'
const SearchInput = () => {
  return (
    <div className='user-input-container'>  <input type="text" autoFocus className='user-search-input' placeholder='Search' />
    <BiSearchAlt className='user-search-icon'/></div>
  )
}

export default SearchInput