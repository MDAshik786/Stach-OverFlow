import React from 'react'
import { BiSolidLike } from 'react-icons/bi';
import { BiSolidDislike } from 'react-icons/bi';
const Voteing = () => {
  return (
    <div className='single-button-con'>
    <button className='but-1 s-but'><BiSolidLike className='tumps-icon'/></button>
    <span>0</span>
    <button className='but-2 s-but'><BiSolidDislike className='tumps-icon'/></button>
</div>
  )
}

export default Voteing