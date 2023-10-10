import React from 'react'
import "./SignUp.css"
const Input = (props) => {
  const {
    placeholder,
    name,
    value,
    type,
    onChange
  }=props
  return (
    <div>
        <input 
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        type={type} className='input_container'/>
    </div>
  )
}

export default Input