import React from 'react'
import "./Navbar.css"
//import logo from "../../images/logo/580b57fcd9996e24bc43c529.png"
//import avathar from "../../images/avathar/download.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='logo' />
      <div className='signbutton'>SIGN IN</div>
      <img className='avathar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avathar' />
    </div>
  )
}
export default Navbar
